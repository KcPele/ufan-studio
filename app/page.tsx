"use client";

import { useState } from "react";

const frames = [
  { src: "/images/ufan/ufan-showreel-world.png", alt: "Illustrated night city animation frame", label: "SHOWREEL FRAME 01 · HYBRID ANIMATION", title: "Beyond the Rooftops" },
  { src: "/images/ufan/ufan-desert-story.png", alt: "Hand-drawn desert adventure animation frame", label: "SHOWREEL FRAME 02 · DRAWN ANIMATION", title: "Dust & Distance" },
  { src: "/images/ufan/ufan-moonmakers.png", alt: "Tactile character animation frame", label: "SHOWREEL FRAME 03 · TACTILE 3D", title: "Moonmakers" },
];

const projects = [
  { number: "01", title: "Beyond the Rooftops", kind: "HYBRID ANIMATION", image: frames[0], tags: ["Creative direction", "2D / 3D animation", "Character design"], description: "A cinematic world-building study where painted surfaces, paper architecture, and one determined character turn a quiet night into a visual journey." },
  { number: "02", title: "Dust & Distance", kind: "DRAWN ANIMATION", image: frames[1], tags: ["Story development", "Cel animation", "Background art"], description: "An expressive hand-drawn adventure built from bold silhouettes, ink-brush weather, and a limited palette designed to hold up in every frame." },
  { number: "03", title: "Moonmakers", kind: "TACTILE CHARACTER WORLD", image: frames[2], tags: ["Character design", "Tactile 3D", "Art direction"], description: "A warm character system imagined in clay, paper, fabric and wood — made to feel human before it ever says a word." },
];

export default function Home() {
  const [frame, setFrame] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = frames[frame];
  return <main>
    <header className="topnav"><div className="container nav-inner">
      <a className="logo" href="#top" aria-label="UFAN home">UFAN</a>
      <nav className="desktop-nav"><a href="#work">Work</a><a href="#capabilities">Capabilities</a><a href="#studio">Studio</a><a href="#media">Media</a><a href="#contact">Contact</a></nav>
      <div className="nav-actions"><a className="nav-cta" href="#contact">Start a project ↗</a><button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle menu"><span></span><span></span></button></div>
    </div>{menuOpen && <nav className="mobile-nav"><a href="#work" onClick={() => setMenuOpen(false)}>Work <b>↘</b></a><a href="#capabilities" onClick={() => setMenuOpen(false)}>Capabilities <b>↘</b></a><a href="#studio" onClick={() => setMenuOpen(false)}>Studio <b>↘</b></a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact <b>↘</b></a></nav>}</header>

    <section className="hero" id="top"><div className="reel-stage">
      <img className="reel-image" src={active.src} alt={active.alt}/><div className="reel-wash"></div>
      <div className="reel-copy"><p className="eyebrow">Animation · Illustration · Visual worlds</p><h1>We build worlds <em>worth watching.</em></h1><p className="lead hero-lead">UFAN turns ideas into characters, stories, films and visual systems that people want to spend time with.</p><div className="hero-actions"><a className="btn primary" href="#work">Explore selected work</a><a className="btn secondary" href="#contact">Tell us your idea</a></div></div>
      <button className="reel-play" aria-label="Advance showreel frame" onClick={() => setFrame((frame + 1) % frames.length)}>Play</button>
      <div className="reel-corner"><p>{active.label}</p><strong>{active.title}</strong></div><span className="scroll-cue">Scroll to enter the studio ↓</span>
      <div className="reel-progress">{frames.map((item, index) => <button key={item.title} aria-label={`Show ${item.title}`} className={frame === index ? "active" : ""} onClick={() => setFrame(index)} />)}</div>
    </div></section>

    <section className="studio-statement" id="studio"><div className="container statement-grid"><div><p className="eyebrow">UFAN / The studio</p><span className="meta">Independent · Collaborative · Built for ambitious ideas</span></div><div><h2>A creative studio for stories that need <em>shape, soul, and motion.</em></h2><div className="statement-notes"><p>We bring direction, design, drawing, animation and production together — so the original idea survives every stage.</p><p>We work with brands, founders, agencies and collaborators who want distinctive craft without unnecessary spectacle.</p></div></div></div></section>

    <section className="work" id="work"><div className="container"><div className="section-head"><div><p className="eyebrow">Selected work · Visual concept</p><h2>Three ways a story can move.</h2></div><p className="lead">A portfolio built to make the work the main event — large frames, clear disciplines and enough context to understand the thinking behind each world.</p></div><div className="project-list">{projects.map((project) => <article className="project" key={project.title}><div className="project-topline"><span className="meta">{project.number} / {project.kind}</span><h3>{project.title}</h3><span className="meta">Concept project</span></div><figure className="project-media"><img src={project.image.src} alt={project.image.alt}/><a className="project-link" href="#contact">View project ↗</a></figure><div className="project-detail"><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><p>{project.description}</p></div></article>)}</div></div></section>

    <section className="paper capabilities" id="capabilities"><div className="container capabilities-grid"><div className="capabilities-intro"><p className="eyebrow">What UFAN makes</p><h2>One studio. Many ways to bring an idea to life.</h2><p className="lead">Bring us in for one specialist piece or the full journey from concept to delivery.</p></div><div className="service-list">{[["01", "Creative & art direction", "Concepts, treatments, visual research, story worlds and a clear creative point of view."],["02", "Animation & motion", "2D, 3D, cel animation, motion identities, title sequences, explainers and social films."],["03", "Illustration & characters", "Character systems, key art, storyboards, editorial illustration, environments and image libraries."],["04", "Identity & campaigns", "Visual identities, launch worlds and campaign toolkits coherent across every format."],["05", "Film & production", "Direction, editing, compositing, sound collaboration, versioning and final delivery."]].map(([n,title,copy]) => <article className="service-row" key={n}><span className="meta">{n}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

    <section className="paper process"><div className="container"><div className="process-head"><div><p className="eyebrow">How we work</p><h2>Clear enough for clients. Flexible enough for creativity.</h2></div><p className="lead">Every stage has a purpose, a review moment and a shared decision — so surprises stay inside the work, not the schedule.</p></div><div className="process-track">{[["01 · Discover","Find the real brief","Audience, ambition, context, constraints and the feeling the work must create."],["02 · Define","Choose the territory","A focused concept, visual direction, production route and timeline."],["03 · Create","Build the world","Scripts, frames, characters, tests, storyboards and key scenes."],["04 · Refine","Make every beat count","Story, timing, movement, sound, detail and feedback resolved together."],["05 · Deliver","Finish for the real world","Master files, cut-downs, formats and everything required to publish."]].map(([n,title,copy]) => <article className="process-step" key={n}><span className="meta">{n}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

    <section className="media" id="media"><div className="container media-grid"><div><p className="eyebrow">UFAN channel</p><h2>The work beyond the portfolio.</h2><p className="lead">A home for showreels, process films, drawing sessions, experiments and the behind-the-scenes material that makes each project feel alive.</p></div><div className="media-list">{frames.map((item, index) => <button className="media-item" onClick={() => {setFrame(index); document.querySelector("#top")?.scrollIntoView({behavior:"smooth"})}} key={item.title}><img src={item.src} alt=""/><span><b>{item.title}</b><small>{index === 0 ? "Showreel / animation world" : index === 1 ? "From sketch to moving frame" : "Tactile characters / studio experiment"}</small></span><i>View ↗</i></button>)}</div></div></section>

    <section className="contact" id="contact"><div className="container"><p className="eyebrow">New projects · Partnerships · Collaborations</p><h2>Have a world in mind?</h2><p className="lead">Tell us what you are building, who it is for and where you want the idea to go.</p><a className="btn primary" href="mailto:hello@ufan.studio">Start a project</a><div className="contact-grid"><div><span className="meta">Email</span><span>hello@ufan.studio</span></div><div><span className="meta">Social</span><span>Instagram · YouTube · LinkedIn</span></div><div><span className="meta">Availability</span><span>Selected projects / 2026</span></div></div></div></section>
    <footer><div className="container foot-inner"><span>© 2026 UFAN</span><span>Concept artwork is placeholder work for theme review.</span></div></footer>
  </main>;
}
