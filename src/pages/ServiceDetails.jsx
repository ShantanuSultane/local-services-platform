import { useParams, Link } from "react-router-dom";
import services from "../data/services.json";

export default function ServiceDetails() {
  const { id } = useParams();
  const service = services.find((s) => s.id === Number(id));

  if (!service) return <h2>Service Not Found</h2>;

  return (
    <div className="page service-details">
      <h1>{service.title}</h1>
      <img src={service.image} alt={service.title} />

      <p>{service.fullDesc}</p>

      <h3>Price: ₹{service.price}</h3>

      <Link className="btn" to={`/book/${service.id}`}>
        Book Now
      </Link>
    </div>
  );
}
