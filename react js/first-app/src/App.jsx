// import './App.css'
import Navbar from './components/Navbar'
import Footer from "./components/Footer";
import Card from './components/Card';

function App() {
  return (
    <>
      <Navbar/>
      <main className='title'>
        <h1>This is different cards</h1>
      </main>
      <div className="cards">
        <Card title="card 1" description="this is paragraph"/>
        <Card title="card 2" description="this is paragraph"/>
        <Card title="card 3" description="this is paragraph"/>
        <Card title="card 4" description="this is paragraph"/>
      </div>
      <Footer/>
    </>
  )
}

export default App
