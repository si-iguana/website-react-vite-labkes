import React from "react";
import { useState } from "react";
import { MotionConfig, motion } from "framer-motion";
import { Search, Phone, MapPin, ChevronRight, ShieldCheck, Building2, FlaskConical, Droplets, TestTube2, Stethoscope, HeartPulse, Calendar, FileText, Smartphone, ArrowRight, Instagram, Facebook, Youtube, MessageCircle, Mail, Globe2, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function App() {
  return (
    <motion.div
      className="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-500 to-blue-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl font-bold text-white">Labkes Template 🚀</h1>
    </motion.div>
  )
}

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
            <div className="h-10 w-10 rounded-2xl bg-emerald-600 text-white grid place-content-center font-bold">LJ</div>
            <div>
              <div className="font-extrabold leading-tight">Labkes Prov.</div>
              <div className="text-xs text-gray-500 leading-tight -mt-0.5">Jawa Barat (Template)</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#layanan" className="hover:text-emerald-700">Layanan</a>
            <a href="#jadwal" className="hover:text-emerald-700">Pendaftaran</a>
            <a href="#informasi" className="hover:text-emerald-700">Informasi</a>
            <a href="#kontak" className="hover:text-emerald-700">Kontak</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="#ceklist" className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm font-semibold hover:bg-gray-50">
              <Smartphone className="h-4 w-4" /> Ceklist App
            </a>
            <a href="#jadwal" className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-3 py-2 text-sm font-semibold text-white hover:bg-emerald-700">
              <Calendar className="h-4 w-4" /> Daftar
            </a>
          </div>
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
              <a href="#ceklist" className="rounded-xl px-3 py-2 hover:bg-gray-50">Ceklist App</a>
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
            Template website modern mirip labkesjabar.com untuk instansi/UPTD laboratorium kesehatan. 
            Siap pakai dengan pendaftaran online, katalog layanan, berita, dan informasi kontak.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#jadwal" className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-700">
              <Calendar className="h-4 w-4" /> Daftar Pemeriksaan
            </a>
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
          <Card className="p-5">
            <div className="rounded-xl border bg-white p-4">
              <div className="mb-3 font-semibold">Cari Pemeriksaan</div>
              <div className="flex gap-2">
                <input className="flex-1 rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600" placeholder="contoh: Hematologi Lengkap, Kadar Hb, Air Bersih" />
                <button className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-white font-semibold hover:bg-emerald-700">
                  <Search className="h-4 w-4"/> Cari
                </button>
              </div>
              <div className="mt-3 text-xs text-gray-500">Populer: Hematologi Lengkap, Kimia Klinik, Urinalisa, Mikrobiologi Air</div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {[
                { icon: Droplets, name: "Hematologi"},
                { icon: TestTube2, name: "Kimia Klinik"},
                { icon: FlaskConical, name: "Mikrobiologi"},
                { icon: Building2, name: "Air & Lingkungan"},
              ].map((s, idx) => (
                <div key={idx} className="flex items-center gap-3 rounded-xl border p-3">
                  <s.icon className="h-5 w-5 text-emerald-700"/>
                  <div className="text-sm font-medium">{s.name}</div>
                </div>
              ))}
            </div>
            <a href="#layanan" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-emerald-700">
              Selengkapnya <ArrowRight className="h-4 w-4"/>
            </a>
          </Card>
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

// --- Jadwal / Pendaftaran ---
const Jadwal = () => (
  <Section id="jadwal" eyebrow="Pendaftaran" title="Daftar Pemeriksaan" subtitle="Isi formulir singkat, tim kami akan menghubungi untuk konfirmasi jadwal.">
    <Card className="p-6">
      <form className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className="text-sm font-medium">Jenis Pemeriksaan</label>
          <input required className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="Contoh: Hematologi Lengkap" />
        </div>
        <div>
          <label className="text-sm font-medium">Nama Lengkap</label>
          <input required className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="Nama sesuai KTP" />
        </div>
        <div>
          <label className="text-sm font-medium">No. WhatsApp</label>
          <input required type="tel" className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="08xxxxxxx" />
        </div>
        <div className="sm:col-span-2">
          <label className="text-sm font-medium">Catatan</label>
          <textarea className="mt-1 w-full rounded-xl border px-3 py-2" rows={3} placeholder="Keluhan/rujukan/dll" />
        </div>
        <div className="sm:col-span-2 flex flex-wrap items-center gap-3">
          <button type="button" className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-white font-semibold hover:bg-emerald-700">
            <Calendar className="h-4 w-4"/> Kirim Pendaftaran
          </button>
          <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border px-5 py-3 font-semibold hover:bg-gray-50">
            <MessageCircle className="h-4 w-4"/> Chat via WhatsApp
          </a>
        </div>
        <p className="text-xs text-gray-500 sm:col-span-2">Dengan menekan tombol, Anda menyetujui Kebijakan Privasi & Syarat Layanan.</p>
      </form>
    </Card>
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

// --- Ceklist App Promo ---
const CeklistApp = () => (
  <Section id="ceklist" eyebrow="Aplikasi" title="Ceklist Labkes" subtitle="Daftar, pantau antrian, dan unduh hasil pemeriksaan langsung dari ponsel.">
    <Card className="p-6">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="text-sm text-gray-600">Tersedia di</div>
          <div className="mt-3 flex items-center gap-3">
            <a href="#" className="rounded-xl border px-4 py-2 inline-flex items-center gap-2"><Smartphone className="h-4 w-4"/> App Store</a>
            <a href="#" className="rounded-xl border px-4 py-2 inline-flex items-center gap-2"><Smartphone className="h-4 w-4"/> Google Play</a>
          </div>
          <ul className="mt-6 space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2"><ShieldCheck className="h-4 w-4 mt-0.5"/> Hasil terenkripsi, aman & rahasia</li>
            <li className="flex items-start gap-2"><Calendar className="h-4 w-4 mt-0.5"/> Pilih tanggal & cabang yang diinginkan</li>
            <li className="flex items-start gap-2"><FileText className="h-4 w-4 mt-0.5"/> Konsultasi jika belum punya rujukan</li>
          </ul>
        </div>
        <div className="relative">
          <img alt="mockup" className="rounded-2xl border w-full" src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop"/>
        </div>
      </div>
    </Card>
  </Section>
);

// --- Kontak ---
const Kontak = () => (
  <Section id="kontak" eyebrow="Kontak" title="Hubungi Kami" subtitle="Alamat, hotline, dan kanal pengaduan (WBS).">
    <div className="grid md:grid-cols-2 gap-6">
      <Card className="p-6">
        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-3"><MapPin className="h-5 w-5 text-emerald-700"/><div>
            <div className="font-semibold">Kantor Pusat</div>
            <div className="text-gray-600">Jl. Sederhana No.3–5, Pasteur, Sukajadi, Kota Bandung, Jawa Barat</div>
          </div></div>
          <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-emerald-700"/><div>Hotline: (022) 4212800</div></div>
          <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-emerald-700"/><div>email@contoh.go.id</div></div>
          <div className="flex items-center gap-3"><Globe2 className="h-5 w-5 text-emerald-700"/><a href="#" className="underline">WBS – Whistleblowing System</a></div>
        </div>
        <div className="mt-5 flex items-center gap-3">
          <a aria-label="Instagram" href="#" className="rounded-full border p-2 hover:bg-gray-50"><Instagram className="h-5 w-5"/></a>
          <a aria-label="Facebook" href="#" className="rounded-full border p-2 hover:bg-gray-50"><Facebook className="h-5 w-5"/></a>
          <a aria-label="YouTube" href="#" className="rounded-full border p-2 hover:bg-gray-50"><Youtube className="h-5 w-5"/></a>
        </div>
      </Card>
      <Card className="p-2 overflow-hidden">
        <iframe title="Map" className="w-full h-80 rounded-2xl" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=Pasteur%20Bandung&output=embed"></iframe>
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
          <div className="font-extrabold">Labkes Prov. (Template)</div>
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
        <div>© {new Date().getFullYear()} Labkes Prov. (Template). All rights reserved.</div>
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
        <Jadwal />
        <CeklistApp />
        <Informasi />
        <Kontak />
        <Footer />
      </div>
    </MotionConfig>
  );
}
