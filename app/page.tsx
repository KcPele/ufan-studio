const projects = [
  { number: "01", title: "Shape of Sound", type: "Identity / Motion", className: "ember", note: "A new language for a culture in motion." },
  { number: "02", title: "After Hours", type: "Campaign / Film", className: "cobalt", note: "Night work for people who make the city move." },
  { number: "03", title: "The Good Kind", type: "Packaging / Digital", className: "moss", note: "A bright system for a considered everyday ritual." },
  { number: "04", title: "Futures, Softly", type: "Art Direction / 3D", className: "coral", note: "An optimistic world, built one tactile detail at a time." },
];

const services = [
  ["01", "Brand worlds", "Identity systems that give ambitious ideas a visual language people can remember."],
  ["02", "Campaigns", "Creative direction and visual storytelling built to travel across culture, screens and spaces."],
  ["03", "Motion + film", "Moving image, title design and artful content that earns a second look."],
  ["04", "Digital experiences", "Thoughtful web experiences that make the right first impression — then make it easy to act."],
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
        <div className="hero-kicker"><span></span> Independent creative practice</div>
        <h1>Make it<br /><em>matter.</em></h1>
        <div className="hero-bottom">
          <p>We build distinct identities, campaigns and digital experiences for people with something worth saying.</p>
          <a className="circle-link" href="#work"><span>See selected<br />work</span><b>↓</b></a>
        </div>
        <div className="hero-art" aria-label="Abstract studio artwork"><div className="orb orb-a"></div><div className="orb orb-b"></div><div className="orb orb-c"></div><div className="art-label">STUDIO<br />EDITION<br />2026</div></div>
      </section>

      <section id="work" className="work shell">
        <div className="section-heading"><p>Selected work</p><span>( 2022 — 2026 )</span></div>
        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.number} className={`project ${project.className}`}>
              <div className="project-image"><span className="project-number">{project.number}</span><div className="project-mark">{project.number === "01" ? "✦" : project.number === "02" ? "AH" : project.number === "03" ? "G" : "∞"}</div></div>
              <div className="project-meta"><div><h2>{project.title}</h2><p>{project.type}</p></div><a href="#contact" aria-label={`Discuss a project like ${project.title}`}>↗</a></div>
              <p className="project-note">{project.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="studio" className="manifesto">
        <div className="shell manifesto-grid">
          <p className="eyebrow">The studio</p>
          <div><h2>Good work has a pulse.</h2><p className="large-copy">We are a small, independent studio for brands and people who care how their work lands in the world. We bring strategy, instinct and craft into the same room.</p><a className="text-link" href="#contact">Meet the studio <b>→</b></a></div>
        </div>
      </section>

      <section id="services" className="services shell">
        <div className="section-heading"><p>What we do</p><span>( No borrowed formulas )</span></div>
        <div className="service-list">{services.map(([number, title, description]) => <article key={number}><span>{number}</span><h2>{title}</h2><p>{description}</p><b>↗</b></article>)}</div>
      </section>

      <section className="principle shell">
        <p className="eyebrow">How we work</p>
        <div className="principle-copy"><p>We listen closely. We make the useful thing beautiful. We keep going until the work has a reason to exist.</p><div className="principle-steps"><span>Discover</span><span>Define</span><span>Make</span><span>Refine</span></div></div>
      </section>

      <section className="people shell">
        <div className="people-art"><div className="face one"></div><div className="face two"></div><p>Real people,<br />clear point of view.</p></div>
        <div className="people-copy"><p className="eyebrow">The people behind it</p><h2>Small by design.<br />Serious about craft.</h2><p>We work with a close network of directors, designers, writers, animators and makers — assembled around what the work needs.</p><a className="text-link" href="#contact">Get to know us <b>→</b></a></div>
      </section>

      <section id="contact" className="contact">
        <div className="shell"><p className="eyebrow">Have a project in mind?</p><h2>Let’s make<br />something <em>felt.</em></h2><a className="contact-link" href="mailto:hello@thestudio.example">hello@thestudio.example <b>↗</b></a><div className="footer-line"><span>© 2026 THE STUDIO</span><span>INSTAGRAM &nbsp; LINKEDIN &nbsp; YOUTUBE</span><a href="#top">Back to top ↑</a></div></div>
      </section>
    </main>
  );
}
