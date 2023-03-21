import "./styles/styles.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Homepage from "./pages/Hompage";
import NewSession from "./pages/NewSession";
import CheckIn from "./pages/CheckIn";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/nextSession" element={<NewSession />} />
          <Route path="/checkin" element={<CheckIn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
