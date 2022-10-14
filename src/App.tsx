import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout/Layout";
import Homepage from "./Pages/Homepage/Homepage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="" element={<Homepage />} />
                    <Route path="message/*" element={<Homepage />} />
                    <Route path="keyMessage/*" element={<Homepage />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
