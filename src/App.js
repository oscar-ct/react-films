import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {OMDbProvider} from "./components/context/omdb/OMDbContext";
import Home from "./components/pages/Home";
import Navbar from "./components/layout/Navbar";
import {GlitchProvider} from "./components/context/glitch/GlitchContext";
import SearchPage from "./components/pages/SearchPage";
import Footer from "./components/layout/Footer";


function App() {
    return (
        <>
            <GlitchProvider>
                <OMDbProvider>
                    <Router>
                        <Navbar/>
                        <main className="mx-5 px-3 pb-12 bg-black">
                            {/*<div className="flex flex-col justify-between h-screen bg-slate-700">*/}
                                <Routes>
                                    <Route path="/" element={<Home/>}/>
                                    <Route path="/search/:text" element={<SearchPage/>}/>
                                </Routes>
                            {/*</div>*/}
                        </main>
                        <Footer/>
                    </Router>
                </OMDbProvider>
            </GlitchProvider>
        </>
    );
}

export default App;
