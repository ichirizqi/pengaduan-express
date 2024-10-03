import {BrowserRouter, Routes, Route} from "react-router-dom";
import PengaduanIndex from "./components/PengaduanIndex";
import PengaduanCreate from "./components/PengaduanCreate";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<PengaduanIndex/>}/>
          <Route path="/add" element={<PengaduanCreate/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
