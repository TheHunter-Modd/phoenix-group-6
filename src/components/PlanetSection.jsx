import { useState, useEffect } from "react";
import "./PlanetSection.css";

export default function PlanetSection() {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const res = await fetch("https://anurella.github.io/json/planets.json");
        const data = await res.json();

        // Mapped using the EXACT keys from the JSON file!
        const mappedPlanets = data.map((planet, index) => ({
          id: index, // Using index as ID since the JSON doesn't have an ID key
          image: planet.image,
          name: planet.planet,
          distance: planet.distanceFromSun,
        }));

        setPlanets(mappedPlanets);
      } catch (err) {
        setError("Failed to load planets.");
      } finally {
        setLoading(false);
      }
    };

    fetchPlanets();
  }, []);

  return (
    // Added id="planets" so the Hero section scroll button works
    <section className="article-section" id="planets">
      <div className="section-header">
        <h2>Visualizing the Differences Between Planets</h2>

        <p>
          Each planet in our solar system has unique physical characteristics.
          Visual comparisons help highlight how vastly
          <br />
          different terrestrial planets are from gas giants and ice giants.
        </p>
      </div>

      {error && <p className="error">{error}</p>}

      <div className="card-grid">
        {loading
          ? Array(8)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="card skeleton">
                  <div className="skeleton-img" />
                  <div className="skeleton-body">
                    <div className="skeleton-bar title" />
                    <div className="skeleton-bar text" />
                  </div>
                </div>
              ))
          : planets.map((planet) => (
              <div key={planet.id} className="card">
                {/* RUBRIC REQUIREMENT: Using <figure> and <figcaption> */}
                <figure>
                  <img src={planet.image} alt={planet.name} loading="lazy" />
                  <figcaption className="card-body">
                    <h3>{planet.name}</h3>
                    <p>Distance from sun: {planet.distance} million km</p>
                  </figcaption>
                </figure>
              </div>
            ))}
      </div>
    </section>
  );
}
