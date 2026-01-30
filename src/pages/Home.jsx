import services from "../data/services.json";
import ServiceCard from "../components/ServiceCard";

export default function Home() {
  return (
    <div className="page home">
      <h1>Welcome to Local Services</h1>
      <p>Your trusted platform for home services</p>

      <div className="services-list">
        {services.map((s) => (
          <ServiceCard key={s.id} service={s} />
        ))}
      </div>
    </div>
  );
}
