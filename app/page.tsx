const projects = [
  { number: "01", title: "Shape of Sound", client: "Loud / audio culture", type: "Brand world / 2D motion", image: "/images/shape-of-sound.jpg", note: "A visual identity that turns the feeling of a song into a living, looping language." },
  { number: "02", title: "After Hours", client: "NOCTURNE / nightlife", type: "Campaign / film titles", image: "/images/after-hours.jpg", note: "A nocturnal campaign system made for posters, previews, playlists and the big screen." },
  { number: "03", title: "The Good Kind", client: "KIND / everyday ritual", type: "Illustration / packaging", image: "/images/good-kind.jpg", note: "A warm cast of characters and tactile objects for an everyday brand with a little soul." },
  { number: "04", title: "Drawn Together", client: "FRAME / short film", type: "Character / 3D direction", image: "/images/hero-abstract.jpg", note: "A playful world where hand-drawn marks, colour and motion have room to breathe." },
];

const services = [
  ["01", "Illustration", "Characters, editorial images and visual worlds with a point of view."],
  ["02", "2D + 3D motion", "Titles, explainer films, loops and campaign motion that make an idea move."],
  ["03", "Art direction", "The visual north star for campaigns, music, culture and new products."],
  ["04", "Brand worlds", "A flexible identity system that feels alive across every touchpoint."],
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell">
        <a href="#top" className="wordmark" aria-label="The Studio home">THE<br />STUDIO<span>®</span></a>
        <div className="nav-links"><a href="#work">Work</a><a href="#studio">Studio</a><a href="#services">Services</a></div>
        <a className="nav-cta" href="#contact">Start a project <i>↗</i></a>
      </nav>

      <section id="top" className="hero shell">
        <div className="hero-kicker"><span></span> Animation, illustration &amp; visual worlds</div>
        <h1>Make it<br /><em>move.</em></h1>
        <div className="hero-bottom"><p>We turn good ideas into vivid characters, memorable frames and animated worlds people want to stay with.</p><a className="circle-link" href="#work"><span>See selected<br />work</span><b>↓</b></a></div>
        <div className="hero-art"><img src="/images/hero-abstract.jpg" alt="Abstract 3D shapes in a bold colour palette" /><div className="hero-overlay"></div><div className="art-label">REEL / 01<br />MOTION + DRAWING<br />2026</div></div>
      </section>

      <section id="work" className="work shell">
        <div className="section-heading"><p>Selected work</p><span>( Concept projects / visual direction )</span></div>
        <div className="project-grid">{projects.map((project) => (
          <article key={project.number} className="project">
            <div className="project-image"><img src={project.image} alt={`${project.title} concept project artwork`} /><span className="project-number">{project.number}</span><span className="project-tag">Concept</span></div>
            <div className="project-meta"><div><h2>{project.title}</h2><p>{project.client} — {project.type}</p></div><a href="#contact" aria-label={`Discuss a project like ${project.title}`}>↗</a></div>
            <p className="project-note">{project.note}</p>
          </article>
        ))}</div>
      </section>

      <section id="studio" className="manifesto"><div className="shell manifesto-grid"><p className="eyebrow">The studio</p><div><h2>Give ideas<br />a heartbeat.</h2><p className="large-copy">THE STUDIO is a visual playground for ambitious brands, artists and good people. We mix the human wobble of drawing with the possibility of motion, making work that feels considered — never overworked.</p><a className="text-link" href="#contact">Meet the studio <b>→</b></a></div></div></section>

      <section id="services" className="services shell"><div className="section-heading"><p>What we do</p><span>( Made to be felt, not just seen )</span></div><div className="service-list">{services.map(([number, title, description]) => <article key={number}><span>{number}</span><h2>{title}</h2><p>{description}</p><b>↗</b></article>)}</div></section>

      <section className="principle shell"><p className="eyebrow">How we work</p><div className="principle-copy"><p>We find the spark. We draw it out. We give it rhythm. Then we make sure it can live everywhere it needs to.</p><div className="principle-steps"><span>Discover</span><span>Visualise</span><span>Animate</span><span>Refine</span></div></div></section>

      <section className="people shell"><div className="people-art"><img src="/images/studio-process.jpg" alt="An illustrator drawing a character on paper" /><div className="people-caption">A drawing starts the conversation.<br />Motion keeps it going.</div></div><div className="people-copy"><p className="eyebrow">The people behind it</p><h2>Drawn by hand.<br />Built together.</h2><p>We bring together illustrators, animators, directors, designers and sound-makers around each brief. Small teams, clear thinking, no unnecessary layers.</p><a className="text-link" href="#contact">Get to know us <b>→</b></a></div></section>

      <section className="reel shell"><div className="reel-copy"><p className="eyebrow">The moving bit</p><h2>Frames worth<br />stopping for.</h2><p>A space for film stills, process clips, looping experiments, YouTube work and the weird little things that become the best ideas.</p><a className="text-link" href="#contact">See the showreel <b>→</b></a></div><div className="reel-frame"><img src="/images/good-kind.jpg" alt="Colourful illustration concept for a motion reel" /><span>PLAY REEL <b>▶</b></span></div></section>

      <section id="contact" className="contact"><div className="shell"><p className="eyebrow">Have a project in mind?</p><h2>Let’s make<br />something <em>felt.</em></h2><a className="contact-link" href="mailto:hello@thestudio.example">hello@thestudio.example <b>↗</b></a><p className="concept-note">This is a visual concept using fictional projects and temporary licensed placeholder imagery. Replace with the studio’s real work before launch.</p><div className="footer-line"><span>© 2026 THE STUDIO</span><span>INSTAGRAM &nbsp; LINKEDIN &nbsp; YOUTUBE</span><a href="#top">Back to top ↑</a></div></div></section>
    </main>
  );
}
