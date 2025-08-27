import React from "react";
import { useState } from "react";
import { MotionConfig, motion } from "framer-motion";
import { Search, Phone, MapPin, ChevronRight, ShieldCheck, Building2, FlaskConical, Droplets, TestTube2, Stethoscope, HeartPulse, Calendar, FileText, Smartphone, ArrowRight, Instagram, Facebook, Youtube, MessageCircle, Mail, Globe2, ArrowUpRight } from "lucide-react";

// --- Utility components ---
const Container = ({ children }) => (
  <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
);

const Section = ({ id, eyebrow, title, subtitle, children, className = "" }) => (
  <section id={id} className={`py-14 sm:py-18 lg:py-24 ${className}`}>
    <Container>
      {(eyebrow || title || subtitle) && (
        <div className="mb-10 sm:mb-12 lg:mb-14 text-center">
          {eyebrow && (
            <div className="inline-block rounded-full border px-3 py-1 text-xs font-semibold tracking-wide uppercase text-gray-700/80">
              {eyebrow}
            </div>
          )}
          {title && (
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-3 sm:mt-4 text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
          )}
        </div>
      )}
      {children}
    </Container>
  </section>
);

const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl border bg-white/70 backdrop-blur shadow-sm hover:shadow-md transition-shadow ${className}`}>{children}</div>
);

const Badge = ({ children }) => (
  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 ring-1 ring-emerald-200 px-2.5 py-1 text-xs font-medium text-emerald-700">
    <ShieldCheck className="h-3.5 w-3.5" /> {children}
  </span>
);

// --- Navbar ---
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
      <Container>
        <div className="flex items-center justify-between py-3">
          <a href="#home" className="flex items-center gap-3">
            <img 
              src="logo.png" 
              alt="Logo Labkes" 
              className="h-10 w-10 rounded-full object-cover"
            />
            <div>
              <div className="font-extrabold leading-tight">BLUD UPTD Klinik Kesehatan Daerah dan Laboratorium Kesehatan Daerah</div>
              <div className="text-xs text-gray-500 leading-tight -mt-0.5">Kabupaten Sukabumi Jawa Barat</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#layanan" className="hover:text-emerald-700">Layanan</a>
            <a href="#jadwal" className="hover:text-emerald-700">Pendaftaran</a>
            <a href="#informasi" className="hover:text-emerald-700">Informasi</a>
            <a href="#kontak" className="hover:text-emerald-700">Kontak</a>
          </nav>
          <button aria-label="Menu" onClick={() => setOpen(!open)} className="md:hidden rounded-xl border p-2">
            <ChevronRight className={`h-5 w-5 transition-transform ${open ? "rotate-90" : ""}`} />
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2 text-sm">
              <a href="#layanan" className="rounded-xl px-3 py-2 hover:bg-gray-50">Layanan</a>
              <a href="#jadwal" className="rounded-xl px-3 py-2 hover:bg-gray-50">Pendaftaran</a>
              <a href="#informasi" className="rounded-xl px-3 py-2 hover:bg-gray-50">Informasi</a>
              <a href="#kontak" className="rounded-xl px-3 py-2 hover:bg-gray-50">Kontak</a>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

// --- Hero ---
const Hero = () => (
  <section id="home" className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
    <Container>
      <div className="grid lg:grid-cols-2 gap-10 items-center py-14 sm:py-18 lg:py-24">
        <div>
          <Badge>Terakreditasi & Ramah Pelanggan</Badge>
          <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Layanan Laboratorium Kesehatan <span className="text-emerald-700">Cepat</span>, 
            <span className="text-emerald-700"> Akurat</span>, dan <span className="text-emerald-700">Terpercaya</span>
          </h1>
          <p className="mt-4 text-gray-600 max-w-xl">
            Selamat datang di BLUD UPTD Klinik Kesehatan Daerah dan Laboratorium Kesehatan Daerah Kabupaten Sukabumi 
            Pusat layanan laboratorium kesehatan yang mengedepankan kecepatan, akurasi, dan kepercayaan. 
            Kami hadir untuk memberikan pelayanan laboratorium yang modern dan profesional demi mendukung peningkatan kualitas kesehatan masyarakat
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#layanan" className="inline-flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold hover:bg-gray-50">
              <FlaskConical className="h-4 w-4" /> Lihat Layanan
            </a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4"/> Hasil Terlindungi</div>
            <div className="flex items-center gap-2"><Stethoscope className="h-4 w-4"/> Konsultasi</div>
            <div className="flex items-center gap-2"><HeartPulse className="h-4 w-4"/> MCU Perusahaan</div>
          </div>
        </div>
        <div>
        </div>
      </div>
    </Container>
  </section>
);

// --- Layanan Grid ---
const Layanan = () => (
  <Section id="layanan" eyebrow="Layanan" title="Jenis Pemeriksaan" subtitle="Daftar contoh layanan laboratorium. Ganti konten & tarif sesuai kebutuhan.">
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {icon: Droplets, title: "Hematologi Lengkap", desc: "Hb, Ht, Leukosit, Trombosit, LED, dll.", price: "Mulai Rp60.000"},
        {icon: TestTube2, title: "Kimia Klinik", desc: "Gula Darah, Kolesterol, Ureum, Kreatinin.", price: "Mulai Rp45.000"},
        {icon: FlaskConical, title: "Mikrobiologi", desc: "Uji kuman air/permukaan, antibiogram.", price: "Konsultasi"},
        {icon: Building2, title: "Kualitas Air Bersih", desc: "Fisik, kimia, mikrobiologi air bersih.", price: "Paket mulai Rp350.000"},
        {icon: Stethoscope, title: "MCU Karyawan", desc: "Paket MCU perusahaan & institusi.", price: "Hubungi Kami"},
        {icon: HeartPulse, title: "Imunologi", desc: "HBsAg, Anti-HBs, Widal, Dengue, dll.", price: "Mulai Rp80.000"},
      ].map((s, i) => (
        <Card key={i} className="p-5">
          <div className="flex items-start gap-4">
            <s.icon className="h-6 w-6 text-emerald-700"/>
            <div>
              <div className="font-semibold">{s.title}</div>
              <p className="mt-1 text-sm text-gray-600">{s.desc}</p>
              <div className="mt-2 text-sm font-semibold text-emerald-700">{s.price}</div>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <a href="#jadwal" className="text-sm font-medium text-emerald-700 hover:underline">Daftar</a>
            <a href="#kontak" className="inline-flex items-center gap-1 text-sm">Konsultasi <ArrowRight className="h-4 w-4"/></a>
          </div>
        </Card>
      ))}
    </div>
  </Section>
);


// --- Informasi / Berita ---
const Informasi = () => (
  <Section id="informasi" eyebrow="Informasi" title="Berita & Pengumuman" subtitle="Sisipkan update kegiatan, pengumuman jadwal pelayanan, dan edukasi kesehatan.">
    <div className="grid md:grid-cols-3 gap-6">
      {[1,2,3].map((i) => (
        <Card key={i} className="overflow-hidden">
          <img alt="thumb" src={`https://images.unsplash.com/photo-1584982828290-2e77f36f2a9d?q=80&w=1200&auto=format&fit=crop`} className="h-40 w-full object-cover"/>
          <div className="p-5">
            <div className="text-xs text-gray-500">Agustus 2025</div>
            <div className="mt-1 font-semibold">Judul Berita #{i}</div>
            <p className="mt-2 text-sm text-gray-600">Ringkasan singkat berita atau pengumuman. Klik untuk membaca lebih lanjut.</p>
            <a href="#" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-emerald-700">Baca selengkapnya <ArrowRight className="h-4 w-4"/></a>
          </div>
        </Card>
      ))}
    </div>
  </Section>
);

// --- Kontak ---
const Kontak = () => (
  <Section id="kontak" eyebrow="Kontak" title="Hubungi Kami" subtitle="Alamat, hotline, dan kanal pengaduan (WBS).">
    <div className="grid md:grid-cols-2 gap-6">
      <Card className="p-6">
        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-3"><MapPin className="h-5 w-5 text-emerald-700"/><div>
            <div className="font-semibold">Alamat Kantor</div>
            <div className="text-gray-600">Kompleks Alun-Alun, Cisaat, Kec. Cisaat, Kabupaten Sukabumi, Jawa Barat 43152</div>
          </div></div>
          <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-emerald-700"/><div>0857-1802-4486</div></div>
          <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-emerald-700"/><div>labkesdakabsukabumi@gmail.com</div></div>
        </div>
        <div className="mt-5 flex items-center gap-3">
          <a aria-label="Instagram" href="#" className="rounded-full border p-2 hover:bg-gray-50"><Instagram className="h-5 w-5"/></a>
          <a aria-label="Facebook" href="#" className="rounded-full border p-2 hover:bg-gray-50"><Facebook className="h-5 w-5"/></a>
          <a aria-label="YouTube" href="#" className="rounded-full border p-2 hover:bg-gray-50"><Youtube className="h-5 w-5"/></a>
        </div>
      </Card>
      <Card className="p-2 overflow-hidden">
        <iframe title="Map" className="w-full h-80 rounded-2xl" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8460938028!2d106.88819907499641!3d-6.9089994930904295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e683635da5468dd%3A0x70bc6198165f8863!2sLaboratorium%20Kesehatan%20Daerah%20Kab%20Sukabumi!5e0!3m2!1sen!2sid!4v1756179914006!5m2!1sen!2sid"></iframe>
      </Card>
    </div>
  </Section>
);

// --- Footer ---
const Footer = () => (
  <footer className="border-t bg-white">
    <Container>
      <div className="py-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
        <div>
          <div className="font-extrabold">BLUD UPTD Klinik Kesehatan Daerah dan Laboratorium Kesehatan Daerah Kabupaten Sukabumi</div>
          <p className="mt-2 text-gray-600">Pelayanan mengutamakan keselamatan, keramahan, kenyamanan, kepercayaan pelanggan & karyawan.</p>
        </div>
        <div>
          <div className="font-semibold">Tautan</div>
          <ul className="mt-2 space-y-1 text-gray-600">
            <li><a className="hover:underline" href="#layanan">Layanan</a></li>
            <li><a className="hover:underline" href="#jadwal">Pendaftaran</a></li>
            <li><a className="hover:underline" href="#informasi">Berita</a></li>
            <li><a className="hover:underline" href="#kontak">Kontak</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Dokumen</div>
          <ul className="mt-2 space-y-1 text-gray-600">
            <li><a className="hover:underline" href="#">Maklumat Pelayanan</a></li>
            <li><a className="hover:underline" href="#">Kebijakan Privasi</a></li>
            <li><a className="hover:underline" href="#">Syarat Layanan</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Jam Layanan</div>
          <ul className="mt-2 space-y-1 text-gray-600">
            <li>Senin–Jumat: 07.30 – 15.00</li>
            <li>Sabtu: 07.30 – 12.00</li>
            <li>Minggu/Libur: Tutup</li>
          </ul>
        </div>
      </div>
      <div className="border-t py-5 text-xs text-gray-500 flex flex-wrap items-center justify-between gap-3">
        <div>© {new Date().getFullYear()} BLUD UPTD Klinik Kesehatan Daerah dan Laboratorium Kesehatan Daerah Kabupaten Sukabumi. All rights reserved.</div>
        <a className="inline-flex items-center gap-1" href="#home">Kembali ke atas <ArrowUpRight className="h-3.5 w-3.5"/></a>
      </div>
    </Container>
  </footer>
);

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-white text-gray-900">
        <Navbar />
        <Hero />
        <Layanan />
        <Informasi />
        <Kontak />
        <Footer />
      </div>
    </MotionConfig>
  );
}
