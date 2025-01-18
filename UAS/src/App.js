import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Menggunakan Routes dan bukan Switch
import Card from './components/Card';
import Container from './components/Container';
import Input from './components/Input';
import Navbar from './components/Navbar'; // Impor Navbar

// Halaman Home
const Home = ({ setData }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [motor, setMotor] = useState('');

  const handleAddData = () => {
    const newData = { name, age, motor };
    setData(newData); // Mengirim data ke Navbar dan About, bukan di sini
    setName('');
    setAge('');
    setMotor('');
  };

  return (
    <Container>
      <h1>Organisasi Motor</h1>
      <Card 
        title="Selamat Datang di Organisasi Motor"
        content="Silakan masukkan data anggota untuk bergabung dengan komunitas motor."
      />
      
      <h3>Tambah Anggota Baru</h3>
      <Input 
        type="text" 
        placeholder="Nama Anggota" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <Input 
        type="number" 
        placeholder="Usia" 
        value={age} 
        onChange={(e) => setAge(e.target.value)} 
      />
      <Input 
        type="text" 
        placeholder="Motor yang Digunakan" 
        value={motor} 
        onChange={(e) => setMotor(e.target.value)} 
      />
      <button onClick={handleAddData}>Tambah Anggota</button>
    </Container>
  );
};

// Halaman About
const About = ({ data }) => (
  <Container>
    <h2>About</h2>
    <p>Ini adalah halaman tentang Organisasi Motor, yang berfokus pada komunitas motor dan kegiatan-kegiatannya.</p>
    <h3>Anggota yang Telah Terdaftar</h3>
    {data.length > 0 ? (
      <ul>
        {data.map((member, index) => (
          <li key={index}>{member.name} - {member.motor} ({member.age} tahun)</li>
        ))}
      </ul>
    ) : (
      <p>Belum ada anggota yang terdaftar.</p>
    )}
  </Container>
);

const App = () => {
  const [data, setData] = useState([]); // State untuk menyimpan data anggota

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home setData={setData} />} /> {/* Kirim setData ke Home */}
        <Route path="/about" element={<About data={data} />} /> {/* Kirim data ke About */}
        <Route path="/contact" element={<Container>Contact</Container>} />
      </Routes>
    </Router>
  );
};

export default App;
