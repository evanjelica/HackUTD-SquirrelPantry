import logo from './logo.svg';
import './App.css';
import Navbar from './front/Components/Navbar';
import Welcome from './front/Components/Welcome';
import Tabs from './front/Components/Tabs';
import Footer from './front/Components/Footer';


function App() {
  return (
    <div>
      <Navbar/>
      <Welcome/>
      <Tabs/>
      <Footer/>

    </div>
  );
}

export default App;
