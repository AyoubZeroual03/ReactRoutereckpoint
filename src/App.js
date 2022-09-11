import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";
import Home from "./pages"
import AboutPage from "./pages/about";
import { Users } from "./components/layouts/admin/users";
import { Post } from "./components/layouts/admin/posts";
import {AdminLayout} from "./components/layouts/admin/index"
import { NotFoundPage } from "./pages/errors/404";



function App() {
  return (
    <Router>
      <Routes>
        
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} /> 
        <Route path="/admin" element={<AdminLayout />} > 
        <Route path="users" element={<Users/>} />
        <Route path="posts" element={ <Post />} />
        <Route />
        </Route>
        <Route path="*" element={<NotFoundPage/>}></Route>

      </Routes>
    </Router>
  );
}

export default App;
