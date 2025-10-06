import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function Register() {
  const [form, setForm] = useState({name: '', email: '', college: ''})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setForm({...form, [e.target.name]: e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
    // Implement sending data to backend or Google Forms, etc.
  }

  return (
    <>
      <Navbar />
      <main style={{padding:'2rem', maxWidth:'400px', margin:'auto'}}>
        <h1>Register for Festronix</h1>
        {submitted ? (
          <p>Thank you for registering! We’ll be in touch soon.</p>
        ) : (
        <form onSubmit={handleSubmit}>
          <label>Name<br/>
            <input type="text" name="name" value={form.name} onChange={handleChange} required />
          </label><br/><br/>
          <label>Email<br/>
            <input type="email" name="email" value={form.email} onChange={handleChange} required />
          </label><br/><br/>
          <label>College<br/>
            <input type="text" name="college" value={form.college} onChange={handleChange} required />
          </label><br/><br/>
          <button type="submit" style={{padding:'0.5rem 1rem'}}>Submit</button>
        </form>
        )}
      </main>
      <Footer />
    </>
  )
}