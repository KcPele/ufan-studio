const frames = [
  { id: "01", title: "Shape of Sound", type: "2D MOTION / IDENTITY", image: "/images/shape-of-sound.jpg", tone: "orange" },
  { id: "02", title: "After Hours", type: "TITLE SEQUENCE / 3D", image: "/images/after-hours.jpg", tone: "blue" },
  { id: "03", title: "The Good Kind", type: "CHARACTER / ILLUSTRATION", image: "/images/good-kind.jpg", tone: "cream" },
  { id: "04", title: "Drawn Together", type: "ART DIRECTION / FILM", image: "/images/hero-abstract.jpg", tone: "green" },
];

export default function Home() {
  return <main className="site-shell">
    <section className="experience">
      <nav className="topbar">
        <a href="#top" className="brand"><span className="brand-mark">✦</span> THE STUDIO</a>
        <div className="top-links"><a href="#gallery">Gallery</a><a href="#services">Capabilities</a><a href="#process">Process</a></div>
        <a href="#contact" className="contact-pill">Start a project <b>↗</b></a>
      </nav>

      <section id="top" className="hero-stage">
        <div className="stage-grid"></div><div className="stage-noise"></div>
        <div className="stage-meta left"><i></i> SHOWREEL / 2026<br /><span>ILLUSTRATION + MOTION</span></div>
        <div className="stage-meta right">24 FPS<br /><span>STUDIO EDITION</span></div>
        <div className="hero-image"><img src="/images/hero-abstract.jpg" alt="Abstract motion artwork" /><div className="image-vignette"></div></div>
        <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
        <div className="hero-copy"><p className="eyebrow"><span></span> An animation &amp; illustration practice</p><h1>ART<br />IN <em>MOTION.</em></h1><p className="hero-description">We draw worlds, shape characters and turn still ideas into frames with energy, texture and feeling.</p><div className="hero-actions"><a href="#gallery" className="primary-action">Explore the gallery <b>↓</b></a><button className="play-button" type="button" aria-label="Play showreel"><span>▶</span> Play showreel</button></div></div>
        <div className="frame-ticker"><span>NOW PLAYING</span><b>Shape of Sound — Motion identity exploration</b><i>01 / 04</i></div>
        <div className="hero-card"><img src="/images/shape-of-sound.jpg" alt="Featured animation artwork" /><div><p>FEATURED FRAME</p><h2>Shape<br />of Sound</h2><b>View project ↗</b></div></div>
      </section>

      <section id="gallery" className="gallery-section">
        <div className="section-label"><span>01 / 04</span><h2>THE GALLERY</h2><p>Selected frames, visual worlds and things in progress.</p></div>
        <div className="frame-grid">{frames.map((frame, index) => <article className={`frame-card ${frame.tone} ${index === 0 ? "featured" : ""}`} key={frame.id}><div className="frame-image"><img src={frame.image} alt={`${frame.title} animation art`}/><div className="frame-shade"></div><span>{frame.id}</span><small>● LIVE FRAME</small></div><div className="frame-info"><div><p>{frame.type}</p><h3>{frame.title}</h3></div><button aria-label={`Open ${frame.title}`}>↗</button></div></article>)}</div>
      </section>

      <section className="showcase">
        <div className="showcase-copy"><p className="eyebrow"><span></span> Not just a pretty frame</p><h2>EVERY DETAIL<br />HAS A <em>RHYTHM.</em></h2><p>From a loose pencil line to a polished loop, we build visual systems that feel human and stay memorable in motion.</p><a href="#contact">See how we collaborate <b>→</b></a></div>
        <div className="showcase-canvas"><img src="/images/studio-process.jpg" alt="Artist drawing a character" /><div className="canvas-grid"></div><div className="canvas-label top">CHARACTER STUDY / 07</div><div className="canvas-label bottom">PENCIL → COLOUR → MOTION</div><div className="play-disc">▶<small>PLAY</small></div></div>
      </section>

      <section id="services" className="capabilities"><div className="section-label"><span>02 / 04</span><h2>CAPABILITIES</h2><p>Built for brands, music, culture and stories that need a stronger visual signal.</p></div><div className="capability-list"><article><span>01</span><h3>Motion design</h3><p>Title sequences, loops, explainers and campaigns that know how to hold attention.</p><b>↗</b></article><article><span>02</span><h3>Illustration</h3><p>Original character work, editorial art and visual systems made to be recognised.</p><b>↗</b></article><article><span>03</span><h3>Art direction</h3><p>The visual language, world-building and creative north star behind an idea.</p><b>↗</b></article><article><span>04</span><h3>3D worlds</h3><p>Tactile objects, weird spaces and dimensional frames that invite another look.</p><b>↗</b></article></div></section>

      <section id="process" className="process"><div className="process-map"><div className="map-line"></div><div className="map-node n1"><b>01</b><span>SPARK</span></div><div className="map-node n2"><b>02</b><span>DRAW</span></div><div className="map-node n3"><b>03</b><span>MOVE</span></div><div className="map-node n4"><b>04</b><span>RELEASE</span></div></div><div className="process-copy"><p className="eyebrow"><span></span> The route from rough to remarkable</p><h2>IDEAS NEED<br />SOMEWHERE<br />TO <em>GO.</em></h2><p>We move from a first conversation through visual development, animation and a final delivery built for the places your audience already lives.</p></div></section>

      <section id="contact" className="contact-section"><p className="eyebrow"><span></span> Have a project in mind?</p><h2>LET’S MAKE<br />IT <em>MOVE.</em></h2><a href="mailto:hello@thestudio.example" className="email-link">hello@thestudio.example <b>↗</b></a><div className="footer"><span>© 2026 THE STUDIO</span><span>CONCEPT SITE — FICTIONAL SAMPLE PROJECTS</span><a href="#top">BACK TO TOP ↑</a></div></section>
    </section>
  </main>;
}
