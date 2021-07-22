import './App.css';
import Header from "./components/a1-Header/Header";
import Main from "./components/a3-Main/Main";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";
import Contacts from "./components/z0-Сontacts/Сontacts";
import Footer from "./components/z1-Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
