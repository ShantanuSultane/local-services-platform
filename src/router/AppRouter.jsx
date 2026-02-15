import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import ServiceDetails from "../pages/ServiceDetails";
import About from "../pages/About";
import Contact from "../pages/Contact";
import BookService from "../pages/BookService";
import Providers from "../pages/Providers";
import Bookings from "../pages/Bookings";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPass";
import ResetPassword from "../pages/ResetPass";

export default function AppRouter({ bookings, addBooking, cancelBooking }) {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/services" element={<Services />} />
          <Route
            path="/services/:id"
            element={<ServiceDetails onBook={addBooking} />}
          />

          <Route
            path="/book/:id"
            element={<BookService addBooking={addBooking} />}
          />

          <Route path="/providers" element={<Providers />} />
          
          <Route
  path="/bookings"
  element={
    <ProtectedRoute>
      <Bookings bookings={bookings} onCancelBooking={cancelBooking} />
    </ProtectedRoute>
  }
/>


          {/* AUTH ROUTES */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />

        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
