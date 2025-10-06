import Link from 'next/link'

export default function Navbar() {
  return (
    <nav style={{display:'flex', gap:'2rem', padding:'1rem', background:'#eee', justifyContent:'center'}}>
      <Link href="/">Home</Link>
      <Link href="/register">Register</Link>
      <Link href="/events">Events</Link>
      <Link href="/schedule">Schedule</Link>
      <Link href="/location">Location</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  )
}