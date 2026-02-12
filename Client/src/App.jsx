import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Result from './pages/Result'
import Buycredit from './pages/Buycredit'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




export default function App() {
  return (
     <div>
    <ToastContainer/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/result" element={<Result />} />
      <Route path="/buy" element={<Buycredit />} />

    </Routes>
   </div>
  )
}
