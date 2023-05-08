import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchCountry from "./components/SearchCountry";
import Menu from "./components/Menu";
import AddBlog from "./components/BlogPost/AddBlog";
import BlogList from "./components/BlogPost/BlogList";
import LoginForm from "./components/user/LoginForm";
import Register from "./components/user/Register";
import Notification from "./components/notification/Notification";
import BlogDetails from "./components/BlogPost/BlogDetails";

const App = () => {
  return (
    <div>
      <Router>
        <Menu />
        <Notification />
        <Routes>
          <Route path="/search" element={<SearchCountry />} />
          <Route path="/" element={<BlogList />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="/blogs/create" element={<AddBlog />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
