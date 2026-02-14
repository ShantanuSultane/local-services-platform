import { BrowserRouter, Routes, Route } from "react-router-dom";
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

// ❗ FIX: receive all props correctly
export default function AppRouter({ bookings, addBooking, cancelBooking }) {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Services */}
          <Route path="/services" element={<Services />} />
          <Route
            path="/services/:id"
            element={<ServiceDetails onBook={addBooking} />}
          />

          {/* Book page */}
          <Route
            path="/book/:id"
            element={<BookService addBooking={addBooking} />}
          />

          {/* All bookings */}
          <Route
            path="/bookings"
            element={
              <Bookings
                bookings={bookings}
                onCancelBooking={cancelBooking}
              />
            }
          />

          {/* Users */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          {/* Providers */}
          {/* <Route path="/providers" element={<Providers />} /> */}

          <Route path="/providers" element={<Providers />} />


        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
