import Navbar from '../components/Navbar';
import '../styles/components.css'; // Import gaya komponen
import '../styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
