import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import servicesData from "../data/services.json";
import "../styles/components/Services.css";
import { Link } from "react-router-dom";

export default function Services() {
  // Read URL search params
  const location = useLocation();
  const queryParam = new URLSearchParams(location.search).get("search") || "";

  const [services, setServices] = useState([]);
  const [filtered, setFiltered] = useState([]);

  // filters
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(5000);
  const [rating, setRating] = useState(0);

  // Load services and apply search query from URL
  useEffect(() => {
    setServices(servicesData);
    setFiltered(servicesData);

    if (queryParam) {
      setSearch(queryParam); // inject search term inside state
    }
  }, [queryParam]);

  // filter logic
  useEffect(() => {
    let temp = [...services];

    // search filter
    if (search.trim() !== "") {
      temp = temp.filter((s) =>
        s.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    // category filter
    if (category !== "All") {
      temp = temp.filter((s) => s.category === category);
    }

    // price filter
    temp = temp.filter((s) => s.price >= minPrice && s.price <= maxPrice);

    // rating filter
    if (rating > 0) {
      temp = temp.filter((s) => s.rating >= rating);
    }

    // sorting
    if (sort === "low-high") temp.sort((a, b) => a.price - b.price);
    if (sort === "high-low") temp.sort((a, b) => b.price - a.price);
    if (sort === "rating") temp.sort((a, b) => b.rating - a.rating);

    setFiltered(temp);
  }, [search, category, minPrice, maxPrice, rating, sort, services]);
  return (
    <div className="services-page">
      <h1 className="page-title1">Our Professional Services</h1>
      <p className="page-subtitle">
        High-quality trusted professionals...!
      </p>

      {/* filters section */}
      <div className="filters-box">
        <input
          type="text"
          className="search-input"
          placeholder="Search services..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>All</option>
          <option>Home Cleaning</option>
          <option>Electrician</option>
          <option>Plumber</option>
          <option>AC Repair</option>
          <option>Salon</option>
          <option>Painting</option>
          <option>Carpenter</option>
        </select>

        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">Sort By</option>
          <option value="low-high">Price: Low → High</option>
          <option value="high-low">Price: High → Low</option>
          <option value="rating">Top Rated</option>
        </select>

      
        <div className="rating-filter">
          <label>Rating</label>
          <select value={rating} onChange={(e) => setRating(e.target.value)}>
            <option value="0">All Ratings</option>
            <option value="4">⭐ 4+ Stars</option>
            <option value="4.5">⭐ 4.5+ Stars</option>
          </select>
        </div>
      </div>

      {/* service cards */}
      <div className="services-grid">
        {filtered.length === 0 ? (
          <p className="no-results">No services found.</p>
        ) : (
          filtered.map((service) => (
            <div className="service-card" key={service.id}>
              <img src={service.image} alt={service.title} />

              <div className="service-info">
                <h3>{service.title}</h3>

                <div className="rating">
                  ⭐ {service.rating}  
                  <span className="reviews">{service.reviews}</span>
                </div>

                <p className="desc">{service.shortDesc}</p>

                <div className="price-box">
                  <p className="price">₹{service.price}</p>
                  <small className="offer">{service.offer}% OFF</small>
                </div>

                <div className="card-buttons">
                  <Link to={`/services/${service.id}`} className="details-btn">
                    View Details
                  </Link>

                  <Link to={`/book/${service.id}`} className="book-btn">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
