import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const events = [
  {
    name: "Paper Presentation",
    time: "10:00 AM – 4:00 PM",
    venue: "ECE, 4th Floor, Admin Block",
    description: "Present your research work to a panel of experts."
  },
  {
    name: "Lunch Break",
    time: "1:00 PM – 2:00 PM",
    venue: "Cafeteria (Ground Floor)",
    description: "Enjoy a delicious lunch and networking opportunity."
  },
  {
    name: "Tech Quiz",
    time: "11:00 AM – 12:00 PM",
    venue: "ECE Seminar Hall",
    description: "Test your technical knowledge in a fun quiz format."
  },
  {
    name: "Project Expo",
    time: "2:30 PM – 4:00 PM",
    venue: "ECE Lab",
    description: "Showcase innovative student projects."
  },
  {
    name: "Coding Challenge",
    time: "12:00 PM – 1:00 PM",
    venue: "Computer Lab, 4th Floor",
    description: "Compete in a fast-paced coding contest."
  },
  {
    name: "Valedictory & Prize Distribution",
    time: "4:00 PM – 4:30 PM",
    venue: "ECE, 4th Floor, Admin Block",
    description: "Closing ceremony and prize distribution."
  }
]

export default function Events() {
  return (
    <>
      <Navbar />
      <main style={{padding:'2rem', maxWidth:'700px', margin:'auto'}}>
        <h1>Event List & Details</h1>
        {events.map((ev, idx) => (
          <div key={idx} style={{border:'1px solid #ccc', borderRadius:'8px', padding:'1rem', marginBottom:'1rem'}}>
            <h2>{ev.name}</h2>
            <p><strong>Time:</strong> {ev.time}</p>
            <p><strong>Venue:</strong> {ev.venue}</p>
            <p>{ev.description}</p>
          </div>
        ))}
      </main>
      <Footer />
    </>
  )
}