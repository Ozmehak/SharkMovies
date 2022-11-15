import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";

function App() {
    return (
        <>
            <Header/>

            <Router>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    {/*<Route exact path="/popular" element={<Popular/>}/>
                    <Route exact path="/toprated" element={<Toprated/>}/>*/}


                </Routes>
            </Router>
            <Footer/>
        </>
    );
}

export default App;
