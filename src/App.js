import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <nav className="navbar">
        <h2>Felize Gratia Center</h2>
        <div>
          <a href="#program">Program</a>
          <a href="#galeri">Galeri</a>
          <a href="#donasi">Donasi</a>
          <a href="#relawan">Relawan</a>
        </div>
      </nav>

      <header className="hero">
        <h1>Melayani dengan Kasih & Anugerah</h1>
        <p>
          Yayasan Felize Gratia Center hadir untuk membawa dampak nyata
          melalui pelayanan sosial dan kasih Kristus.
        </p>
        <button>Gabung Sekarang</button>
      </header>

      <section id="program" className="section">
        <h2>Program Kami</h2>
        <div className="card-container">
          <div className="card">
            <h3>Pendidikan</h3>
            <p>Mendukung pendidikan anak-anak kurang mampu.</p>
          </div>
          <div className="card">
            <h3>Bakti Sosial</h3>
            <p>Melayani masyarakat dengan bantuan kemanusiaan.</p>
          </div>
          <div className="card">
            <h3>Pembinaan Rohani</h3>
            <p>Membangun iman dan karakter generasi muda.</p>
          </div>
        </div>
      </section>

      <section id="donasi" className="section dark">
        <h2>Dukung Pelayanan Kami</h2>
        <p>Transfer ke rekening:</p>
        <p><strong>BCA 8692757121 a.n. Yayasan Felize Gratia Center</strong></p>
        <button className="donate-btn">Donasi Sekarang</button>
      </section>

      <section id="relawan" className="section">
        <h2>Daftar Relawan</h2>
        <form className="form">
          <input type="text" placeholder="Nama Lengkap" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Alasan ingin bergabung"></textarea>
          <button type="submit">Kirim</button>
        </form>
      </section>

      <footer className="footer">
        <p>© 2026 Felize Gratia Center | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;