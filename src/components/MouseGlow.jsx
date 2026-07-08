// src/components/MouseGlow.jsx
import { useEffect, useState } from "react";

function MouseGlow() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 }); // بدأنا بسالب عشان ما يظهرش فجأة أول ما الصفحة تفتح

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: e.clientX - 300,
        y: e.clientY - 300,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 w-[600px] h-[600px] rounded-full opacity-15 mix-blend-screen blur-[100px] transition-transform duration-75 ease-out z-0"
      style={{
        background: "radial-gradient(rgba(29,78,216,0.5) 0%, rgba(0,0,0,0) 80%)",
        transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
      }}
    />
  );
}
export default MouseGlow