import logo from "../assets/logo.png";
import img from "../assets/planet_img.png";
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
        src={logo}
        alt="Solar System Logo" 
      />
    </div>
        <div className="hero-text">
          <h1>Explore Our Solar System Through Data</h1>

          <p>
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
            src={img}
            alt="Planet Earth"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;