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

export default function AppRouter({ bookings, setBookings }) {

  // Add new booking
  const addBooking = (newBooking) => {
    setBookings((prev) => [...prev, newBooking]);
  };

  // Cancel booking
  const cancelBooking = (id) => {
    setBookings((prev) =>
      prev.map((b) =>
        b.id === id ? { ...b, status: "Cancelled" } : b
      )
    );
  };

  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/services" element={<Services />} />

          <Route
            path="/services/:id"
            element={<ServiceDetails onBook={addBooking} />}
          />

          <Route
            path="/bookings"
            element={
              <Bookings
                bookings={bookings}
                onCancelBooking={cancelBooking}
              />
            }
          />

          <Route path="/book/:id" element={<BookService />} />
          <Route path="/providers" element={<Providers />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
