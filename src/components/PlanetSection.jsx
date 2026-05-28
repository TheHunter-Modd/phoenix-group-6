import { useState, useEffect } from "react";
import "./PlanetSection.css";

export default function PlanetSection() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const [photosRes, postsRes] = await Promise.all([
          fetch("https://anurella.github.io/json/planets.json"),
          fetch("https://anurella.github.io/json/planets.json"),
        ]);

        const photos = await photosRes.json();
        const posts = await postsRes.json();

        const combined = photos.map((photo, i) => ({
          id: photo.id,
          image: photo.thumbnailUrl,
          alt: photo.title,
          title: posts[i].title,
          description: posts[i].body,
        }));

        setCards(combined);
      } catch (err) {
        setError("Failed to load articles.");
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  return (
    <section className="article-section">
      {/* Existing header content */}
      <div className="section-header">
        <h2>Visualizing the Differences Between Planets</h2>

        <p>
          Each planet in our solar system has unique physical characteristics.
          visual comparisons help highlight how vasty
          <br />
          different terrestrial planet are from gas gaints and ice giants.
        </p>
      </div>

      {/* Cards appended below */}
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
          : cards.map((card) => (
              <div key={card.id} className="card">
                <img src={card.image} alt={card.alt} loading="lazy" />
                <div className="card-body">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </div>
            ))}
      </div>
    </section>
  );
}
