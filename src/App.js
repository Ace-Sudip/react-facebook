import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Facebook from "./Facebook";


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Facebook />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

    </div>
  );
}

export default App;
