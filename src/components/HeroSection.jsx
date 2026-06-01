import "./HeroSection.css";
import graphics from "../assets/graphics.png";
import Image from "../assets/Image.png";

function Hero() {
  return (
    <>
      <header className="head">
        <img src={graphics} alt="logo" />
      </header>

      <section className="section1">
        <div className="herotext">
          <h1>Explore Our Solar System Through Data</h1>
          <p>
            Understand the planet not just by name, but by mesurable facts. From
            size and mass to gravity and density, this page breaks down the
            solar system in clear, data-driven way.
          </p>
          <div className="herobtn">
            <a className="explorebtn" href="#section5">
              Explore the data
            </a>
            <a className="contactbtn" href="#section4">
              Contact Us
            </a>
          </div>
        </div>
        <div className="heroimage">
          <img src={Image} alt="Hero Image" />
        </div>
      </section>
    </>
  );
}

export default Hero;
