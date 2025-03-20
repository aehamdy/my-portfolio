import { useEffect } from "react";

const useSVGAnimation = () => {
  useEffect(() => {
    const lights = document.querySelectorAll(".light");
    const speeds = Array.from(
      { length: lights.length },
      () => Math.random() * 5 + 2
    );

    const moveLights = () => {
      lights.forEach((light, index) => {
        const speed = speeds[index];
        const currentY = parseFloat(light.getAttribute("data-y")) || 0;
        const newY = (currentY + speed) % 1080;
        light.setAttribute("transform", `translate(0, ${newY})`);
        light.setAttribute("data-y", newY);
      });
    };

    const intervalId = setInterval(moveLights, 50);
    return () => clearInterval(intervalId);
  }, []);
};

export default useSVGAnimation;
