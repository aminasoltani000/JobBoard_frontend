import {  Routes, Route } from "react-router-dom";
import AdminRoute from './components/Adminroute';
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Navbar from './components/Navbar';
import Candidature from "./pages/Candidatures";
import  AdminDashboard  from "./pages/Admindashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from './pages/NotFound';
import './App.css'
import "@fontsource/caveat";


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/candidature" element={<Candidature />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={
              <AdminRoute>
                    <AdminDashboard />
             </AdminRoute>
      } />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </>
  );
};

export default App;
