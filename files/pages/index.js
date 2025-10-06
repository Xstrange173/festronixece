import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{padding: '2rem', textAlign: 'center'}}>
        <h1>Festronix 2025</h1>
        <h2>College Symposium</h2>
        <p>Date: October 18-20, 2025</p>
        <p>Location: XYZ College Auditorium</p>
        <p>
          Welcome to Festronix, the annual symposium at XYZ College, featuring workshops, competitions, talks, and more!
        </p>
        <a href="/register" style={{padding: '1rem', background: '#0070f3', color: '#fff', borderRadius: '6px', textDecoration: 'none'}}>Register Now</a>
      </main>
      <Footer />
    </>
  )
}