"use client";
import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';

const CityTags = () => {
  const sceneRef = useRef(null);
  const engineRef = useRef(null);
  const renderRef = useRef(null);
  const runnerRef = useRef(null);
  
  const cities = [
    "LAUDERDALE-BY-THE-SEL", "WELLINGTON", "PEMBROKE PINES", "WORTH PALM BEACH",
    "COGNIT CRESK", "POUNDED BEACH", "BOTAL PALM BEACH", "MARGATE", "TANJOLIC",
    "NIPPTER", "ROYAL PALM BEACH", "OAKLAND PARK", "SUNRISE",
    "CORALLIGHTROUSE POINT SPRINGS", "ROPE A BATCH", "LUNDERNAL", "PLANTATION",
    "JOHN HOSSE POWN", "WESTON", "PALM BEACH GARDENS", "HIRAJAR", "CORAL SPRINGS",
    "WEST PALM BEACH", "PEMBROKE PINES", "SUNRISE", "OBLARY BEACH", "WILLINGLEBEACH"
  ];

  const getRandomColor = () => {
    return Math.random() < 0.5 ? '#FFFFFF' : '#F3C99D';
  };

  useEffect(() => {
    // Engine setup
    engineRef.current = Matter.Engine.create();
    const engine = engineRef.current;
    engine.gravity.y = 0.8; // Moderate gravity

    // Render setup
    renderRef.current = Matter.Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: 300,
        wireframes: false,
        background: '#2D2B2B',
        showSleeping: false
      }
    });
    const render = renderRef.current;

    // Runner setup
    runnerRef.current = Matter.Runner.create();
    const runner = runnerRef.current;
    Matter.Runner.run(runner, engine);
    Matter.Render.run(render);

    // World setup
    const world = engine.world;

    // Boundaries - make them slightly larger than visible area
    const wallOptions = { isStatic: true, render: { visible: false } };
    const ground = Matter.Bodies.rectangle(
      window.innerWidth / 2,
      310, // Just below the visible area
      window.innerWidth + 100,
      20,
      { ...wallOptions, friction: 0.1 }
    );

    const leftWall = Matter.Bodies.rectangle(
      -10, // Left of visible area
      250,
      20,
      300,
      wallOptions
    );

    const rightWall = Matter.Bodies.rectangle(
      window.innerWidth -5, // Right of visible area
      250,
      20,
      300,
      wallOptions
    );

    Matter.World.add(world, [ground, leftWall, rightWall]);

    // Create pill-shaped bodies
    const bodies = cities.map(city => {
      const width = city.length * 8 + 40; // Constrained width
      const height = 40;
      
      const body = Matter.Bodies.rectangle(
        Math.random() * (window.innerWidth - 200) + 100, // Random x within bounds
        Math.random() * 100 + 50, // Random y starting position
        width,
        height,
        {
          restitution: 0.3,
          friction: 0.3,
          frictionAir: 0.02,
          density: 0.001,
          angle: Math.random() * 0.2 - 0.1,
          render: {
            fillStyle: getRandomColor(),
            strokeStyle: '#ccc',
            lineWidth: 1,
            visible: true // Important: make sure this is true
          },
          chamfer: { radius: height / 2 } // Creates pill shape
        }
      );
      
      // Store custom properties
      body.label = city;
      body.width = width;
      body.height = height;
      body.render.visible = true; // Ensure visibility
      
      return body;
    });

    Matter.World.add(world, bodies);

    // Custom rendering for pill shapes
    const afterRender = () => {
      const context = render.context;
      context.font = 'normal 1rem Marlton';
      context.textAlign = 'center';
      context.textBaseline = 'middle';

      bodies.forEach(body => {
        const { position, angle, label, width, height } = body;
        const radius = height / 2;
        
        context.save();
        context.translate(position.x, position.y);
        context.rotate(angle);

        // Draw pill shape
        context.beginPath();
        // Left semicircle
        context.arc(-width/2 + radius, 0, radius, Math.PI/2, Math.PI*3/2);
        // Top line
        context.lineTo(width/2 - radius, -radius);
        // Right semicircle
        context.arc(width/2 - radius, 0, radius, Math.PI*3/2, Math.PI/2);
        // Bottom line
        context.lineTo(-width/2 + radius, radius);
        
        context.fillStyle = body.render.fillStyle;
        context.fill();
        context.strokeStyle = body.render.strokeStyle;
        context.lineWidth = body.render.lineWidth;
        context.stroke();

        // Draw text
        context.fillStyle = '#000000';
        context.fillText(label, 0, 0);
        
        context.restore();
      });
    };

    // Add the custom render callback
    Matter.Events.on(render, 'afterRender', afterRender);

    // Prevent bodies from sleeping
    Matter.Events.on(engine, 'beforeUpdate', () => {
      Matter.Composite.allBodies(world).forEach(body => {
        if (body.isSleeping) {
          Matter.Sleeping.set(body, false);
        }
      });
    });

    // Handle resize
    const handleResize = () => {
      render.options.width = window.innerWidth;
      render.options.height = 300;
      Matter.Render.setPixelRatio(render, window.devicePixelRatio);
      
      // Update boundaries
      Matter.Body.setPosition(ground, { x: window.innerWidth / 2, y: 310 });
      Matter.Body.setPosition(rightWall, { x: window.innerWidth + 50, y: 250 });
    };
    window.addEventListener('resize', handleResize);

    // Initial render
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      Matter.Events.off(render, 'afterRender', afterRender);
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      Matter.World.clear(world, false);
      Matter.Engine.clear(engine);
      if (render.canvas) {
        render.canvas.remove();
      }
    };
  }, []);

  return (
    <div className="flex justify-center w-full">
      <div ref={sceneRef} className="w-full" />
    </div>
  );
};

export default CityTags;