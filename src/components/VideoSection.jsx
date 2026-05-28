function VideoSection() {
  return (
    <section className="video-section">
      <div className="video-container">
        <div className="video-box">
          <video
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src="https://www.pexels.com/download/video/4702442/"
              type="video/mp4"
            />
            Your browser does not support video.
          </video>
        </div>

        <div className="video-text">
          <h2>How Planetary Data Helps<br/>Us Understand Space</h2>

          <p>
            How Planetary Data Helps Us Understand Space
            Planetary science goes beyond images. 
            Comparing mass, diameter, gravity, and density, 
            we gain insight into how planets form, behave, 
            and interact within the solar system.
          </p>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;