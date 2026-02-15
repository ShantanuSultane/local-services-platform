import { useEffect, useState } from "react";
import AppRouter from "./router/AppRouter";
import "./styles/global.css";

export default function App() {

  // LOAD from localStorage on initial render
  const [bookings, setBookings] = useState(() => {
    const stored = localStorage.getItem("bookings");
    return stored ? JSON.parse(stored) : [];
  });

  // ONLY load JSON **if no localStorage exists**
  useEffect(() => {
    const stored = localStorage.getItem("bookings");

    if (!stored) {
      import("./data/Bookings.json").then((data) => {
        localStorage.setItem("bookings", JSON.stringify(data.default));
        setBookings(data.default);
      });
    }
  }, []);

  // SAVE BOOKINGS to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("bookings", JSON.stringify(bookings));
  }, [bookings]);

  // ADD BOOKING
  const addBooking = (booking) => {
    setBookings((prev) => [...prev, booking]);
  };

  // CANCEL BOOKING
  const cancelBooking = (id) => {
    setBookings((prev) =>
      prev.map((b) =>
        b.id === id ? { ...b, status: "Cancelled" } : b
      )
    );
  };

  return (
    <AppRouter
      bookings={bookings}
      addBooking={addBooking}
      cancelBooking={cancelBooking}
    />
  );
}
