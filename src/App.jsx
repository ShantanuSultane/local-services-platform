import { useEffect, useState } from "react";
import AppRouter from "./router/AppRouter";
import "./styles/global.css";

export default function App() {
  const [bookings, setBookings] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(stored);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("bookings", JSON.stringify(bookings));
  }, [bookings]);

  return (
    <AppRouter 
      bookings={bookings} 
      setBookings={setBookings} 
    />
  );
}
