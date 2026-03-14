import React from "react";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "40px" }}>
      <h1 style={{ color: "#2c3e50" }}>
        Felize Gratia Center
      </h1>

      <p>
        Selamat datang di website resmi <strong>Felize Gratia Center</strong>.
      </p>

      <hr />

      <h2>Visi</h2>
      <p>
        Menjadi lembaga pelayanan yang membawa transformasi melalui kasih dan anugerah Tuhan.
      </p>

      <h2>Misi</h2>
      <ul>
        <li>Menyelenggarakan program sosial dan pendidikan.</li>
        <li>Memberdayakan masyarakat yang membutuhkan.</li>
        <li>Membangun karakter dan iman melalui pembinaan rohani.</li>
      </ul>

      <hr />

      <h2>Donasi</h2>
      <p>
        Rekening Donasi:<br />
        Bank BCA 8692757121<br />
        a.n. Yayasan Felize Gratia Center
      </p>

      <hr />

      <h2>Kontak</h2>
      <p>
        Email: info@felizegratiacenter.org<br />
        WhatsApp: 082221492718
      </p>

      <hr />

      <p style={{ fontSize: "14px", marginTop: "40px" }}>
        © {new Date().getFullYear()} Felize Gratia Center
      </p>
    </div>
  );
}

export default App;