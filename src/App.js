import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {OMDbProvider} from "./components/context/OMDbContext";
import Home from "./components/pages/Home";

function App() {
    return (
        <>
            <OMDbProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                    </Routes>
                </Router>
            </OMDbProvider>
        </>
    );
}

export default App;
