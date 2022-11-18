import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {Header} from "./components/layout/Header";
import {Footer} from "./components/layout/Footer";
import {Popular} from "./pages/Popular";
import {TopRated} from "./pages/TopRated";

function App() {



    return (
        <div style={{backgroundColor: "#131516"}}>
            <Header/>

            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />}/>
                    <Route exact path="/popular" element={<Popular />}/>
                    <Route exact path="/toprated" element={<TopRated />}/>
                </Routes>
            </Router>
            <Footer/>
        </div>
    );
}

export default App;
