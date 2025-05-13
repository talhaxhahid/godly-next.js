"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const GodlyContext = createContext();

export function AppWrapper({ children }) {
  const pathname = usePathname();
  const [city, setCity] = useState("SOUTH FLORIDA");
  const [service, setService] = useState(null);

  useEffect(() => {
    // Extract city from URL path
    if (pathname) {
      const pathSegments = pathname.split("/");
      // The city is expected to be the first segment after the leading slash
      if (pathSegments.length > 1 && pathSegments[1]) {
        const cityFromUrl = pathSegments[1].replace(/-/g, " ").toUpperCase();
        setCity(cityFromUrl);
      }
    }
  }, [pathname]);

  return (
    <GodlyContext.Provider value={{ city, setCity, service, setService }}>
      {children}
    </GodlyContext.Provider>
  );
}

export function useGodlyContext() {
  return useContext(GodlyContext);
}
