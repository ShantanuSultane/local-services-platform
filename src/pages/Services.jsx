import services from "../data/services.json";
import ServiceCard from "../components/ServiceCard";

export default function Services() {
  return (
    <div className="page services">
      <h1>Our Services</h1>

      <div className="services-list">
        {services.map((s) => (
          <ServiceCard key={s.id} service={s} />
        ))}
      </div>
    </div>
  );
}
