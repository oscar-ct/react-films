import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {OMDbProvider} from "./components/context/OMDbContext";
import Home from "./components/pages/Home";
import Navbar from "./components/layout/Navbar";

function App() {
    return (
        <>
            <OMDbProvider>
                <Router>
                    <Navbar/>
                    <main className="container mx-auto px-3 pb-12">
                        <div className="flex flex-col justify-between h-screen bg-accent-content/10">
                            <Routes>
                                <Route path="/" element={<Home/>}/>
                            </Routes>
                        </div>
                    </main>
                </Router>
            </OMDbProvider>
        </>
    );
}

export default App;
