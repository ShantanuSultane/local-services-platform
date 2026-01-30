import { Link } from "react-router-dom";
import "./ServiceCard.css";

export default function ServiceCard({ service }) {
  return (
    <div className="service-card">
      <img src={service.image} alt={service.title} />
      <h3>{service.title}</h3>
      <p>{service.shortDesc}</p>

      <Link className="btn" to={`/services/${service.id}`}>
        View Details
      </Link>
    </div>
  );
}
