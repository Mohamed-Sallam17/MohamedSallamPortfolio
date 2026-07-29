// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, MeshDistortMaterial } from '@react-three/drei';

// function AnimatedSphere() {
//   return (
//     <mesh scale={2.5}> {/* حجم الشكل */}
//       <sphereGeometry args={[1, 100, 100]} /> {/* عبارة عن كرة بنقاط كتيرة */}
      
//       {/* خامة متموجة وبتتحرك لوحدها */}
//       <MeshDistortMaterial
//         color="#0070f3" /* نفس لون كلمة Impact عندك */
//         attach="material"
//         distort={0.5} /* درجة التموج */
//         speed={2} /* سرعة الحركة */
//         roughness={0.2}
//       />
//     </mesh>
//   );
// }


function Hero() {
  return (
    <section className="hero-section h-dvh relative" data-aos="zoom-in">
      {/* <div className="canvas-container">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 4, 2]} intensity={1} />
          
          <AnimatedSphere />
          
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div> */}
      <div className="h-full container mx-auto p-4">
        <div className="h-full flex justify-center items-center flex-col text-center">
            <span className="uppercase text-sm lg:text-lg text-(--primary) mb-4">frontend & wordpress developer</span>
            <h2 className="text-5xl lg:text-6xl font-bold leading-[1.4]">
                Crafting Fast<br></br>Building <span className="text-(--primary)">Impact</span>
            </h2>
        </div>
      </div>
    </section>
  )
}

export default Hero
