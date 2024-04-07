import './App.scss'
import { About } from './components/About/About';
import { Contacts } from './components/Contacts/Contacts';
import { Footer } from './components/Footer/Footer';
import { Header } from "./components/Header/Header";
import { MainTasks } from './components/MainTasks/MainTasks';
import OurProjects from './components/OurProjects/OurProjects';
import { Project } from './components/Project/Project';

function App() {
  return (
    <div className="App">
     <Header />
     <div className="content">
      <Project />
      <About />
      <MainTasks />
      <OurProjects />
      <Contacts />
     </div>
     <Footer />
    </div>
  );
}

export default App;
