function Hero() {
  return (
    <section className="hero-section h-screen">
      <div className="h-full container mx-auto p-4">
        <div className="h-full flex justify-center items-center flex-col text-center text-(--heading-color)">
            <span className="uppercase text-sm lg:text-lg text-(--second-color)">frontend & wordpress developer</span>
            <h2 className="text-5xl lg:text-6xl font-bold leading-[1.4]">
                Crafting Fast<br></br>Building <span className="text-(--second-color)">Impact</span>
            </h2>
        </div>
      </div>
    </section>
  )
}

export default Hero
