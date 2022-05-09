import Navbar from "./Components/js/Navbar";
import Carousel from "./Components/js/Carousel";
import Icon from "./Components/js/Icon";
import Subscribe from "./Components/js/Subscribe";
import Mot from "./Components/js/Mot";
import Plans from "./Components/js/Plans";
import Contact from "./Components/js/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Icon />
      <Subscribe />
      <Mot />
      <Plans />
      <Contact />
    </div>
  );
}

export default App;
