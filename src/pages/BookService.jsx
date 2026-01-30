import { useParams } from "react-router-dom";
import services from "../data/services.json";

export default function BookService() {
  const { id } = useParams();
  const service = services.find((s) => s.id === Number(id));

  return (
    <div className="page book">
      <h1>Book Service: {service?.title}</h1>

      <form className="book-form">
        <input type="text" placeholder="Your Name" required />
        <input type="text" placeholder="Phone Number" required />
        <textarea placeholder="Address" required></textarea>
        <button className="btn">Confirm Booking</button>
      </form>
    </div>
  );
}
