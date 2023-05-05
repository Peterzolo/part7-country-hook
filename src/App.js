import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchCountry from "./components/SearchCountry";
import Menu from "./components/Menu";
import AddBlog from "./components/BlogPost/AddBlog";
import BlogList from "./components/BlogPost/BlogList";

const App = () => {
  return (
    <div>
      <Router>
        <Menu />
        <Routes>
          <Route path="/search" element={<SearchCountry />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blogs/create" element={<AddBlog />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
