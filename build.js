const fs = require('fs');
const path = require('path');

// Read templates
const header = fs.readFileSync('templates/header.html', 'utf8');
const footer = fs.readFileSync('templates/footer.html', 'utf8');

// Page definitions
const pages = [
  {
    filename: 'about.html',
    title: 'About',
    headerTitle: 'About',
    description: 'About Rajana Rama Satya Sai Durga Prasad - MS Research candidate at IIT Delhi',
    content: `
    <section class="section">
      <div class="container">
        <div class="about-header">
          <img src="assets/profile.svg" alt="Profile" class="profile-photo-large">
          <div>
            <h2>About</h2>
            <p><strong>MS(Research) Candidate</strong>, Integrated Electronics & Circuits — Department of Electrical Engineering, IIT Delhi.</p>
          </div>
        </div>
        <p>I am currently pursuing M.S. (Research) at IIT Delhi with a focus on semiconductor fabrication, terahertz devices, and quantum devices. My work combines cleanroom processing, electromagnetic simulation, and device characterization to build components for emerging THz and quantum systems.</p>
        <p>Previously, I worked as an Assistant Systems Engineer at Tata Consultancy Services in information security and completed a B.Tech in Electrical and Electronics Engineering from SASTRA.</p>
      </div>
    </section>
    `
  },
  {
    filename: 'research.html',
    title: 'Research',
    headerTitle: 'Research',
    description: 'Research interests and current projects',
    content: `
    <section class="section">
      <div class="container">
        <h2>Research Interests</h2>
        <p>Semiconductor Fabrication, Terahertz Devices, Semiconductor-based Quantum Devices, Quantum Computing, 2D Material Devices.</p>

        <h3>Current MS (Research) Project</h3>
        <p><strong>Log-Periodic Antenna for THz Applications</strong> (2024–Present) — Design, EM simulation, and fabrication of planar log-periodic antennas for terahertz frequency applications. Work includes cleanroom processing, antenna characterization, and optimizing radiation efficiency at THz bands for communication and sensing applications.</p>
        <p class="meta">Skills: Antenna Design, HFSS, Semiconductor Fabrication, THz Devices.</p>
      </div>
    </section>
    `
  },
  {
    filename: 'experience.html',
    title: 'Experience',
    headerTitle: 'Experience',
    description: 'Work experience and teaching assistantships',
    content: `
    <section class="section">
      <div class="container">
        <h2>Work Experience</h2>
        <ul class="timeline">
          <li>
            <h4>Assistant Systems Engineer — Tata Consultancy Services</h4>
            <p>Information Security (July 2021 – October 2022)</p>
          </li>
          <li>
            <h4>M.S (Research) — IIT Delhi</h4>
            <p>Integrated Electronics and Circuits (July 2024 – Present) — Supervisor: Prof. Santanu Manna</p>
          </li>
        </ul>

        <h3>Teaching Assistantships</h3>
        <p>Introduction to Electrical Engineering (ELL101), Introduction to Electrical Engineering Lab (ELP101), Quantum Electronics (ELL745), Digital Electronics (ELL201), and ELL1401 during 2024–2026 at IIT Delhi.</p>
      </div>
    </section>
    `
  },
  {
    filename: 'projects.html',
    title: 'Projects',
    headerTitle: 'Projects',
    description: 'Selected academic and research projects',
    content: `
    <section class="section">
      <div class="container">
        <h2>Selected Projects</h2>
        <article class="project">
          <h4>Log-Periodic Antenna for THz Applications (2024–Present)</h4>
          <p>Design, EM simulation, fabrication of planar log-periodic antennas for terahertz bands. Cleanroom processing and antenna characterization.</p>
        </article>

        <article class="project">
          <h4>Router 1x3 RTL Design and Verification (2023)</h4>
          <p>Full RTL design in Verilog/SystemVerilog; verified with FPGA flows and simulation tools.</p>
        </article>

        <article class="project">
          <h4>AHB-APB Bridge Protocol Verification (2023)</h4>
          <p>Developed UVM-based testbench for AMBA protocol compliance; constrained-random verification and coverage-driven testing.</p>
        </article>

        <article class="project">
          <h4>Quantum Random Number Generation and Image Processing (2021)</h4>
          <p>Quantum circuits for RNG and quantum-assisted image processing (Qiskit, Python).</p>
        </article>
      </div>
    </section>
    `
  },
  {
    filename: 'education.html',
    title: 'Education',
    headerTitle: 'Education',
    description: 'Academic qualifications and background',
    content: `
    <section class="section">
      <div class="container">
        <h2>Education</h2>
        <ul class="education-list">
          <li>
            <strong>M.S. (Research)</strong> — Integrated Electronics and Circuits, IIT Delhi (July 2024 - Present)
            <p>CGPA: 8.6/10.0</p>
          </li>
          <li>
            <strong>B.Tech.</strong> — Electrical and Electronics Engineering, SASTRA (2017-2021)
            <p>CGPA: 8.225/10.0</p>
          </li>
        </ul>
        <h3>Other Qualifications</h3>
        <p>Intermediate — Aditya Junior College (Percentage: 98.0)</p>
        <p>High School — Bhashyam High School (CGPA: 9.8/10.0)</p>
      </div>
    </section>
    `
  },
  {
    filename: 'contact.html',
    title: 'Contact',
    headerTitle: 'Contact',
    description: 'Get in touch for collaborations and opportunities',
    content: `
    <section class="section contact-section">
      <div class="container">
        <h2>Get in touch</h2>
        <p>For collaborations, research inquiries, or opportunities, please reach out:</p>
        <ul>
          <li>Email: <a href="mailto:rajanasatyasai@gmail.com">rajanasatyasai@gmail.com</a></li>
          <li>Phone: +91 84650 80929</li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/rajanasatyasai/">rajanasatyasai</a></li>
        </ul>

        <h3>Reference</h3>
        <p>Prof. Santanu Manna, Department of Electrical Engineering, IIT Delhi. Email: <a href="mailto:mannasan@ee.iitd.ac.in">mannasan@ee.iitd.ac.in</a></p>
      </div>
    </section>
    `
  }
];

// Build pages
pages.forEach(page => {
  let html = header
    .replace('{{TITLE}}', page.title)
    .replace('{{HEADER_TITLE}}', page.headerTitle)
    .replace('{{DESCRIPTION}}', page.description);
  
  html += page.content;
  html += footer;
  
  fs.writeFileSync(page.filename, html, 'utf8');
  console.log(`✓ Built ${page.filename}`);
});

console.log('\n✨ Build complete! All pages generated from templates.');
