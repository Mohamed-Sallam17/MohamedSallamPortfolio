import SideRays from './Aurora';


function Hero() {
  return (
    <section className="hero-section h-dvh relative overflow-hidden" data-aos="zoom-in">
      <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
        <SideRays
          speed={2.5}
          rayColor1="#22C55E"
          rayColor2="#6B7280"
          intensity={2}
          spread={2}
          origin="top-right"
          tilt={0}
          saturation={1.5}
          blend={0.75}
          falloff={1.6}
          opacity={1}
        />
      </div>
      <div className="h-full container mx-auto p-4 relative z-10">
        <div className="h-full flex justify-center items-center flex-col text-center">
            <span className="uppercase text-sm lg:text-lg text-(--primary) mb-4">
              frontend & wordpress developer
            </span>
            <h2 className="text-5xl lg:text-6xl font-bold leading-[1.4]">
                Building Modern,<br />Web <span className="text-(--primary)">Experiences</span>
            </h2>
        </div>
      </div>
    </section>
  );
}

export default Hero;