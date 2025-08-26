# labkesdakabsukabumi.dpdns.org
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>My Institution – Home</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/styles.css" />
  <script defer src="/app.js"></script>
</head>
<body>
  <!-- Header / Nav -->
  <header class="site-header">
    <div class="container flex between center">
      <a class="brand" href="/"><img src="/assets/logo.svg" alt="Institution logo" /> <span>My Institution</span></a>
      <nav class="nav" id="nav">
        <a href="/about.html">About</a>
        <a href="/programs.html">Programs</a>
        <a href="/news.html">News</a>
        <a href="/contact.html" class="btn">Contact</a>
      </nav>
      <button class="nav-toggle" aria-label="Toggle navigation" aria-expanded="false" aria-controls="nav">☰</button>
    </div>
  </header>

  <!-- Hero -->
  <section class="hero">
    <div class="container grid-2">
      <div>
        <h1>Serving Community • Advancing Knowledge</h1>
        <p>Welcome to <strong>My Institution</strong> — where we inspire, educate, and empower through programs that create real-world impact.</p>
        <div class="actions">
          <a class="btn primary" href="/programs.html">Explore Programs</a>
          <a class="btn ghost" href="/about.html">Learn More</a>
        </div>
      </div>
      <div class="hero-card">
        <ul>
          <li><span>📅</span> Academic Calendar 2025 released</li>
          <li><span>🎓</span> Scholarship applications are open</li>
          <li><span>🏆</span> Excellence Award nominations due Sept 10</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Highlights -->
  <section class="section">
    <div class="container">
      <h2 class="section-title">Why Choose Us</h2>
      <div class="cards grid-3">
        <article class="card">
          <h3>Quality Education</h3>
          <p>Experienced faculty, modern curriculum, and hands-on learning across departments.</p>
          <a class="link" href="/about.html#mission">Our mission →</a>
        </article>
        <article class="card">
          <h3>Community Impact</h3>
          <p>Programs designed with local partners to address today’s most pressing challenges.</p>
          <a class="link" href="/programs.html">See programs →</a>
        </article>
        <article class="card">
          <h3>Inclusive Culture</h3>
          <p>We welcome learners from all backgrounds and support them to thrive.</p>
          <a class="link" href="/about.html#values">Our values →</a>
        </article>
      </div>
    </div>
  </section>

  <!-- CTA Banner -->
  <section class="cta">
    <div class="container flex between center wrap">
      <h3>Join our upcoming Open House</h3>
      <a class="btn primary" href="/contact.html#visit">Register Free</a>
    </div>
  </section>

  <!-- Footer -->
  <footer class="site-footer">
    <div class="container grid-3">
      <div>
        <a class="brand" href="/"><img src="/assets/logo.svg" alt="logo"/> <span>My Institution</span></a>
        <p>123 Learning Ave, Bandung, Indonesia</p>
        <p>+62 812-3456-7890</p>
      </div>
      <div>
        <h4>Quick Links</h4>
        <ul class="list">
          <li><a href="/about.html">About</a></li>
          <li><a href="/programs.html">Programs</a></li>
          <li><a href="/news.html">News</a></li>
          <li><a href="/contact.html">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4>Subscribe</h4>
        <form class="subscribe" id="subscribe">
          <input type="email" placeholder="you@example.com" required>
          <button class="btn">Subscribe</button>
          <small class="muted" id="sub-msg"></small>
        </form>
      </div>
    </div>
    <div class="container tiny muted">© <span id="year"></span> My Institution. All rights reserved.</div>
  </footer>
</body>
</html>
