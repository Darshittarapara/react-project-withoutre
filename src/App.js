
import Header from './Header';
import './App.css';
import Form from './Bookingform/Form';
import Destination from './Destination/Destination';
import ParentPackeges from './Packeges/ParentPackeges';
import Gallary from './Gallary/Gallary';
import Contact from './Contactus/Contact';

function App() {

  return (
    <div className="App" >
      <Header />
      <Form />
      <Destination />
      <ParentPackeges />
      <Gallary />
      <Contact />
    </div>
  );
}

export default App;
