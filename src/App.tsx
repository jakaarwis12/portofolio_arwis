import "./index.css";

const certificates = [
  {
    number: "01",
    title: "Best Officer",
    organization: "Indomaret",
    image: "https://lh3.googleusercontent.com/d/1iy57qluWRUY1h5yG3bwyzR9qS3pzu_5M=w1200",
    href: "https://drive.google.com/file/d/1iy57qluWRUY1h5yG3bwyzR9qS3pzu_5M/view?usp=drive_link",
  },
  {
    number: "02",
    title: "Best Officer",
    organization: "Indomaret",
    image: "https://lh3.googleusercontent.com/d/1LYk6KOYqPSiEn2mDZHFAMR9WhTuhXgmu=w1200",
    href: "https://drive.google.com/file/d/1LYk6KOYqPSiEn2mDZHFAMR9WhTuhXgmu/view?usp=drive_link",
  },
];

const skills = ["Node.js", "VB.NET", "MySQL", "Microsoft Office"];

export function App() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#beranda" aria-label="Joko Pitoyo, beranda">
          JP<span>.</span>
        </a>
        <nav aria-label="Navigasi utama">
          <a href="#tentang">Tentang</a>
          <a href="#keahlian">Keahlian</a>
          <a href="#penghargaan">Penghargaan</a>
        </nav>
        <a className="header-contact" href="https://wa.me/6287833072945" target="_blank" rel="noreferrer">
          <span className="contact-dot" /> Hubungi saya
        </a>
      </header>

      <section className="hero" id="beranda">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> PORTOFOLIO · 2027</p>
          <h1>Teknologi yang<br />bekerja <em>untuk manusia.</em></h1>
          <p className="hero-description">
            Saya Joko Pitoyo, profesional IT dengan pengalaman 10 tahun membangun,
            merawat, dan mendukung sistem operasional.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="https://wa.me/6287833072945" target="_blank" rel="noreferrer">
              <WhatsAppIcon /> Mari terhubung <span className="button-arrow" aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="#tentang">Kenali perjalanan saya <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-meta">
            <span><span className="status-dot" /> TERBUKA UNTUK PELUANG</span>
            <span>INDONESIA</span>
          </div>
        </div>
        <div className="hero-visual" aria-label="Foto profil Joko Pitoyo">
          <div className="portrait-frame">
            <img
              src="https://drive.google.com/thumbnail?id=0BzlEVluC5hvgYjQzV3dKakQybG8&sz=w1000&resourcekey=0-xEtmaEMBQpOv-JI3qTW0rA"
              alt="Foto profil Joko Pitoyo"
              onError={(event) => {
                event.currentTarget.style.display = "none";
                event.currentTarget.parentElement?.classList.add("portrait-fallback");
              }}
            />
            <span className="portrait-initials" aria-hidden="true">JP</span>
            <span className="portrait-caption">JOKO PITOYO<br />PROFESIONAL IT</span>
          </div>
          <div className="experience-stamp"><strong>10</strong><span>TAHUN<br />PENGALAMAN</span></div>
          <span className="visual-index">01 / 04</span>
        </div>
      </section>

      <section className="intro-strip" id="tentang">
        <p className="section-kicker">01 — PROFIL</p>
        <div className="intro-content">
          <h2>Profesional IT yang teliti.<br /><em>Tangguh dalam setiap tantangan.</em></h2>
          <p>
            Lulusan Sistem Informasi Universitas Terbuka dengan pengalaman 10 tahun
            sebagai staf IT office di lingkungan ritel. Terbiasa bekerja teliti,
            menjaga koordinasi, serta tetap fokus dan adaptif saat menghadapi tekanan
            maupun perubahan prioritas.
          </p>
          <div className="education-line"><span>PENDIDIKAN</span><strong>Sistem Informasi</strong><span>Universitas Terbuka · 2027</span></div>
        </div>
      </section>

      <section className="skills-section" id="keahlian">
        <div className="section-heading">
          <p className="section-kicker">02 — KOMPETENSI</p>
          <h2>Keahlian yang<br /><em>siap digunakan.</em></h2>
        </div>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div className="skill-row" key={skill}>
              <span className="skill-number">0{index + 1}</span>
              <h3>{skill}</h3>
              <span className="skill-arrow" aria-hidden="true">↗</span>
            </div>
          ))}
        </div>
      </section>

      <section className="career-section">
        <p className="section-kicker">03 — PENGALAMAN</p>
        <div className="career-content">
          <div className="career-years">10<span>TAHUN</span></div>
          <div className="career-detail">
            <p className="career-label">PENGALAMAN KERJA</p>
            <h2>Staf IT Office <span>·</span> Indomaret</h2>
            <p>Mendukung kebutuhan IT dari lingkungan kerja office, membantu tim menangani kendala, menjaga koordinasi, dan memastikan pekerjaan tetap berjalan dengan baik di bawah tekanan.</p>
          </div>
          <div className="career-period">PENGALAMAN<br />BERKELANJUTAN</div>
        </div>
      </section>

      <section className="awards-section" id="penghargaan">
        <div className="awards-heading">
          <div>
            <p className="section-kicker">04 — APRESIASI</p>
            <h2>Kerja baik<br /><em>layak dirayakan.</em></h2>
          </div>
          <p>Penghargaan Best Officer sebagai apresiasi atas dedikasi dan kontribusi dalam bekerja.</p>
        </div>
        <div className="certificate-list">
          {certificates.map((certificate) => (
            <a className="certificate-card" href={certificate.href} target="_blank" rel="noreferrer" key={certificate.number} aria-label={`Lihat sertifikat ${certificate.title} ${certificate.number}`}>
              <span className="certificate-preview">
                <img src={certificate.image} alt={`Pratinjau sertifikat ${certificate.title} ${certificate.number}`} loading="lazy" />
                <span className="preview-open">BUKA SERTIFIKAT <span aria-hidden="true">↗</span></span>
              </span>
              <span className="certificate-name"><strong>{certificate.title}</strong><small>{certificate.organization} <span>·</span> Penghargaan {certificate.number}</small></span>
            </a>
          ))}
        </div>
      </section>

      <footer className="footer" id="kontak">
        <p className="section-kicker">ADA YANG BISA SAYA BANTU?</p>
        <div className="footer-main">
          <h2>Mari mulai<br /><em>percakapan.</em></h2>
          <a className="footer-contact" href="https://wa.me/6287833072945" target="_blank" rel="noreferrer">
            <span className="whatsapp-mark"><WhatsAppIcon /></span>
            <span><small>WHATSAPP</small><strong>0878 3307 2945</strong></span>
          </a>
        </div>
        <div className="footer-bottom"><span>© 2027 JOKO PITOYO</span><a href="#beranda">KEMBALI KE ATAS ↑</a><span>DIBUAT DENGAN TUJUAN</span></div>
      </footer>
    </main>
  );
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" fill="currentColor">
      <path d="M16.03 3.2a12.65 12.65 0 0 0-10.8 19.24L3.55 28.8l6.52-1.7A12.66 12.66 0 1 0 16.03 3.2Zm0 23.06c-1.92 0-3.8-.52-5.44-1.52l-.39-.23-3.86 1.01 1.03-3.76-.25-.4a10.36 10.36 0 1 1 8.91 4.9Zm5.69-7.76c-.31-.16-1.82-.9-2.1-1-.28-.1-.49-.16-.7.16-.2.31-.8 1-1 1.2-.18.21-.36.24-.67.08-.31-.16-1.3-.48-2.48-1.52-.92-.82-1.54-1.82-1.72-2.13-.18-.31-.02-.48.14-.64.14-.14.31-.36.46-.54.16-.18.21-.31.31-.52.1-.2.05-.38-.03-.54-.08-.15-.7-1.67-.96-2.28-.25-.6-.51-.52-.7-.53h-.6c-.2 0-.54.08-.82.39-.28.31-1.08 1.05-1.08 2.56 0 1.51 1.1 2.97 1.25 3.18.15.2 2.16 3.3 5.23 4.63.73.32 1.3.51 1.74.66.73.23 1.4.2 1.93.12.59-.09 1.82-.75 2.08-1.49.26-.74.26-1.36.18-1.49-.08-.13-.28-.2-.59-.36Z" />
    </svg>
  );
}

export default App;
