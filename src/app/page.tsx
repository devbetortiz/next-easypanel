const expertise = [
  ["01", "Produtos web", "Interfaces responsivas e bem estruturadas com React, Next.js, TypeScript e Tailwind CSS."],
  ["02", "APIs e integrações", "APIs REST, autenticação, webhooks e bancos de dados conectando as partes certas do produto."],
  ["03", "Automação", "Fluxos com n8n e IA para reduzir tarefas manuais e tornar operações mais eficientes."],
];

const skills = ["React", "Next.js", "TypeScript", "Node.js", "Supabase", "PostgreSQL", "MongoDB", "Docker", "n8n", "Git / GitHub"];

export default function Home() {
  return (
    <main>
      <section className="hero" id="inicio">
        <nav className="nav" aria-label="Navegação principal">
          <a className="brand" href="#inicio">ALBERTO<span>_</span></a>
          <div className="nav-links"><a href="#projetos">Projetos</a><a href="#experiencia">Experiência</a><a href="#stack">Stack</a><a href="#contato">Contato</a></div>
          <a className="status" href="#contato"><i />Disponível remoto</a>
        </nav>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">DESENVOLVEDOR FULL STACK</p>
            <h1>Software útil,<br /><em>do conceito ao deploy.</em></h1>
            <p className="lead">Sou Alberto Cabral, desenvolvedor focado em aplicações web, integrações e automações que tornam produtos digitais mais claros, rápidos e preparados para evoluir.</p>
            <div className="actions"><a className="button button-primary" href="#projetos">Conhecer projetos <span>↘</span></a><a className="button button-quiet" href="mailto:devbetortiz@gmail.com">Vamos conversar</a></div>
          </div>
          <aside className="profile-card" aria-label="Perfil profissional"><div className="card-top"><span className="orbit" /><span>FULL STACK / BR</span></div><div className="profile-mark">AC</div><div className="card-bottom"><strong>Campo Grande, MS</strong><span>100% remoto · PJ</span></div></aside>
        </div>
        <div className="ticker" aria-label="Tecnologias principais"><span>Next.js</span><b>✦</b><span>React</span><b>✦</b><span>Node.js</span><b>✦</b><span>APIs REST</span><b>✦</b><span>Automação n8n</span></div>
      </section>
      <section className="intro-section" id="sobre">
        <div className="section-label">// O QUE EU FAÇO</div>
        <div className="intro-layout"><h2>Construo experiências digitais que resolvem problemas de verdade.</h2><p>Da interface à integração: transformo requisitos em aplicações web funcionais, com atenção a código, documentação e evolução contínua.</p></div>
        <div className="expertise-grid">{expertise.map(([number, title, description]) => <article className="expertise-card" key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
      </section>
      <section className="projects" id="projetos">
        <div className="section-heading"><div><div className="section-label">// PROJETOS EM DESTAQUE</div><h2>Trabalho prático, com tecnologia aplicada.</h2></div><p>Dois projetos que demonstram como conecto produto, interface e integrações.</p></div>
        <div className="project-grid">
          <article className="project-card featured"><div className="visual visual-barber"><div className="visual-nav"><i /><i /><i /></div><span>VISUAL</span><b>barbearia</b><small>CURSOS · MEMBROS · PAGAMENTOS</small><div className="visual-line" /></div><div className="project-content"><p className="project-index">01 / SaaS EDUCACIONAL</p><h3>Visual Barbearia</h3><p>Aplicação full stack para cursos de barbearia, com autenticação via Google, streaming e módulo financeiro.</p><ul><li>Next.js</li><li>Supabase</li><li>Stripe</li><li>Bunny.net</li></ul><a href="https://www.visualbarbearia.com.br" target="_blank" rel="noreferrer">Visitar projeto <span>↗</span></a></div></article>
          <article className="project-card"><div className="visual visual-law"><span>LAW<br />PARTNER</span><div className="law-chip">LP</div><small>CONSULTORIA JURÍDICA</small></div><div className="project-content"><p className="project-index">02 / LANDING PAGE</p><h3>Law Partner</h3><p>Single page institucional construída em Next.js, incluindo formulário de contato com envio de e-mail.</p><ul><li>Next.js</li><li>Formulário</li><li>E-mail</li></ul><a href="https://www.lawpartner.com.br" target="_blank" rel="noreferrer">Visitar projeto <span>↗</span></a></div></article>
        </div>
      </section>
      <section className="experience" id="experiencia"><div className="section-label">// EXPERIÊNCIA</div><div className="experience-layout"><h2>Base técnica construída em entregas reais.</h2><article className="role-card"><div className="role-period">09.2022 — 05.2023</div><div><p className="role-company">PSG / INOVVATTI</p><h3>Developer JavaScript Full Stack <span>Júnior</span></h3><p>Desenvolvimento e manutenção de aplicações web com foco em performance e experiência do usuário.</p><div className="role-notes"><span>React + Material UI</span><span>Redux</span><span>APIs REST</span><span>Socket.io</span><span>MongoDB</span><span>CI/CD</span></div></div></article></div></section>
      <section className="stack" id="stack"><div className="stack-head"><div className="section-label">// FERRAMENTAS</div><h2>Stack com que trabalho.</h2></div><div className="skill-grid">{skills.map((skill, index) => <div key={skill}><span>0{index + 1}</span>{skill}</div>)}</div><div className="education"><div><span>FORMAÇÃO</span><strong>Desenvolvimento Web Full Stack</strong><p>Pós-graduação · 2024</p></div><div><span>FORMAÇÃO</span><strong>DevOps</strong><p>Pós-graduação · 2024</p></div><div><span>EM EVOLUÇÃO</span><strong>Automação com n8n</strong><p>Bootcamp Santander / DIO · 2025</p></div></div></section>
      <section className="contact" id="contato"><p className="section-label">// PRÓXIMO PASSO</p><h2>Tem uma ideia<br />para colocar no ar?</h2><p>Vamos conversar sobre seu produto, uma integração ou uma automação que pode simplificar sua operação.</p><a href="mailto:devbetortiz@gmail.com">devbetortiz@gmail.com <span>↗</span></a></section>
      <footer><strong>ALBERTO<span>_</span></strong><p>Desenvolvedor Full Stack · Campo Grande, MS</p><div><a href="https://github.com/devbetortiz" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/alberto-cabral-ortiz-de-medeiros-26662011b" target="_blank" rel="noreferrer">LinkedIn</a></div></footer>
    </main>
  );
}
