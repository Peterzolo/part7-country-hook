import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CountryDetail from "./components/CountryDetail";
import SearchCountry from "./components/SearchCountry";
import Menu from "./components/Menu";

const App = () => {
  return (
    <div>
      <Router>
        <Menu />
        <Routes>
          <Route path="/search" element={<SearchCountry />} />
          {/* <Route path="/:id" element={<CountryDetail />} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
