// ribbon.js - Vanilla JS Ribbon Component with Tailwind

/**
 * Creates a ribbon element with subtle angled edges
 * @param {Object} options - Configuration options
 * @param {string} options.text - Text to display in the ribbon
 * @param {string} options.color - Background color class (Tailwind)
 * @param {string} options.textColor - Text color class (Tailwind)
 * @param {string} options.className - Additional CSS classes
 * @returns {HTMLElement} - The created ribbon element
 */
function createRibbon(options = {}) {
  const {
    text = "Ribbon",
    color = "bg-gray-900", // Default black color
    textColor = "text-white",
    className = "",
  } = options;

  // Create main container
  const container = document.createElement("div");
  container.className = `relative inline-block ${className}`;

  // Create styles for the ribbon
  const styleElement = document.createElement("style");
  styleElement.textContent = `
    @property --ribbon-angle {
      syntax: '<angle>';
      initial-value: 4deg;
      inherits: true;
    }
    
    @property --ribbon-radius {
      syntax: '<length>';
      initial-value: 0.3em;
      inherits: true;
    }
    
    @property --ribbon-depth {
      syntax: '<length>';
      initial-value: 0.3em;
      inherits: true;
    }
    
    .ribbon-element {
      position: relative;
      white-space: nowrap;
      padding: 0 0.5em;
      margin: calc(0.5 * 1.75rem + var(--ribbon-radius)) calc(1.2 * 1.75rem + var(--ribbon-depth));
      line-height: 1.75;
    }
    
    .ribbon-element::before,
    .ribbon-element::after {
      content: "";
      position: absolute;
      width: calc(1 * 1.75rem + var(--ribbon-depth));
      height: calc(1.5 * 1.75rem + var(--ribbon-radius));
      border-style: solid;
    }
    
    .ribbon-element::before {
      left: 99%;
      bottom: 0;
      border-width: 0 1.75rem 1.75rem 0;
      border-radius: 0 0 999px 0;
      clip-path: polygon(
        calc(999px * cos(var(--ribbon-angle))) calc(100% - 1.75rem - var(--ribbon-depth) + 999px * sin(var(--ribbon-angle))),
        999px 0,
        100% 0,
        calc(50% + var(--ribbon-depth)/2) var(--ribbon-radius),
        var(--ribbon-depth) 0,
        0 0, 
        0 calc(100% - 1.75rem - var(--ribbon-depth))
      );
      transform-origin: 0 calc(100% - 1.75rem - var(--ribbon-depth));
      transform: rotate(calc(90deg - var(--ribbon-angle)));
    }
    
    .ribbon-element::after {
      right: 99%;
      top: 0;
      border-width: 1.75rem 0 0 1.75rem;
      border-radius: 999px 0 0 0;
      clip-path: polygon(
        calc(100% - 999px * cos(var(--ribbon-angle))) calc(1.75rem + var(--ribbon-depth) - 999px * sin(var(--ribbon-angle))),
        -999px 100%,
        0 100%,
        calc(50% - var(--ribbon-depth)/2) calc(100% - var(--ribbon-radius)),
        calc(100% - var(--ribbon-depth)) 100%,
        100% 100%, 
        100% calc(1.75rem + var(--ribbon-depth))
      );
      transform-origin: 100% calc(1.75rem + var(--ribbon-depth));
      transform: rotate(calc(90deg - var(--ribbon-angle)));
    }
  `;

  document.head.appendChild(styleElement);

  // Create ribbon element
  const ribbon = document.createElement("div");
  ribbon.className = `ribbon-element ${color} ${textColor} text-xl font-bold`;
  ribbon.textContent = text;

  // Add the ribbon to the container
  container.appendChild(ribbon);

  // Set the border color to match the background color
  const backgroundColor = getComputedStyle(ribbon).backgroundColor;

  // Apply the same background color to the pseudo-elements
  const additionalStyles = document.createElement("style");
  additionalStyles.textContent = `
    .ribbon-element::before,
    .ribbon-element::after {
      border-color: ${backgroundColor};
      background-color: ${backgroundColor};
    }
  `;
  document.head.appendChild(additionalStyles);

  return container;
}

/**
 * Insert a ribbon into a DOM element
 * @param {string|HTMLElement} target - Target element or selector
 * @param {Object} options - Ribbon options
 */
function insertRibbon(target, options = {}) {
  const targetElement =
    typeof target === "string" ? document.querySelector(target) : target;

  if (!targetElement) {
    console.error("Target element not found");
    return;
  }

  const ribbon = createRibbon(options);
  targetElement.appendChild(ribbon);

  return ribbon;
}

// Example usage:
insertRibbon("#ribbon-container", { text: "SUNSRISE", color: "bg-gray-900" });
