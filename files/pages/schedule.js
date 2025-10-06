import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const schedule = [
  { time: "10:00 AM", event: "Paper Presentation", venue: "ECE, 4th Floor" },
  { time: "11:00 AM", event: "Tech Quiz", venue: "ECE Seminar Hall" },
  { time: "12:00 PM", event: "Coding Challenge", venue: "Computer Lab" },
  { time: "1:00 PM", event: "Lunch Break", venue: "Cafeteria" },
  { time: "2:30 PM", event: "Project Expo", venue: "ECE Lab" },
  { time: "4:00 PM", event: "Valedictory & Prize Distribution", venue: "ECE, 4th Floor" },
]

export default function Schedule() {
  return (
    <>
      <Navbar />
      <main style={{padding:'2rem', maxWidth:'600px', margin:'auto'}}>
        <h1>Event Schedule</h1>
        <table style={{width:'100%', borderCollapse:'collapse'}}>
          <thead>
            <tr style={{background:'#eee'}}>
              <th>Time</th>
              <th>Event</th>
              <th>Venue</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((item, idx) => (
              <tr key={idx} style={{borderBottom:'1px solid #ccc'}}>
                <td>{item.time}</td>
                <td>{item.event}</td>
                <td>{item.venue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      <Footer />
    </>
  )
}