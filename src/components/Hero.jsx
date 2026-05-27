function Hero() {
  const scrollToPlanets = () => {
    const section = document.getElementById("planets");
    section?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToContact = () => {
    const section = document.getElementById("contact");
    section?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="logo">
      <img
        src="https://images.pexels.com/photos/20376399/pexels-photo-20376399.jpeg"
        alt="Solar System Logo" 
      /><h3>Phoenix Group-6</h3>
    </div>
        <div className="hero-text">
          <h1>Explore Our Solar System Through Data</h1>

          <p>
            Explore Our Solar System Through Data
            Understand the planets not just by name, but by measurable facts.
            From size and mass to gravity and density, 
            this page breaks down the solar system in a clear, 
            data-driven way.
          </p>

          <div className="hero-buttons">
            <button className="explore-btn" onClick={scrollToPlanets}>
              Explore the Data
            </button>

            <button
              className="contact-btn"
              onClick={scrollToContact}
            >
              Contact Us
            </button>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/cb/The_Blue_Marble_%28remastered%29.jpg"
            alt="Planet Earth"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;