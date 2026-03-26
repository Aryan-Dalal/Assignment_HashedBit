import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import BookingForm from "./pages/BookingForm";
import Success from "./pages/Success";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/book" element={<BookingForm />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;