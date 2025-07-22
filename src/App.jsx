import React from 'react';
import NotFound from './pages/NotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import AddBlog from './pages/AddBlog';

function App() {
  return (
    <Router>
      <Routes>
          {/* Home page (default route) */}
          <Route index element={<Home />} />
          
          {/* Login page */}
          <Route path="login" element={<Login />} />
          
          {/* Add new blog page */}
          <Route path="add-blog" element={<AddBlog />} />
          
          <Route path="*" element={<NotFound />} />

      </Routes>
    </Router>
  );
}

export default App;