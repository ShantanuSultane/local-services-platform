import { useParams, Link } from "react-router-dom";
import services from "../data/services.json";
import "../styles/components/ServiceDetails.css";

export default function ServiceDetails() {
  const { id } = useParams();
  const service = services.find((s) => s.id === parseInt(id));

  if (!service) {
    return <h2 className="not-found">Service not found</h2>;
  }

  return (
    <div className="details-page">

      {/* TOP BANNER */}
      <div className="banner">
        <img src={service?.image} alt={service?.title} />
        <div className="banner-text">
          <h1>{service?.title}</h1>
          <p>{service?.shortDesc}</p>
        </div>
      </div>

      <div className="details-container">

        {/* LEFT SECTION */}
        <div className="left-section">

          {/* PROFESSIONAL INFO */}
          <div className="card">
            <h2>Your Professional</h2>

            <div className="pro-box">
              <img src={service?.proImage} alt="Professional" />

              <div>
                <h3>
                  {service?.proName}{" "}
                  <span className="verified">✔ Verified</span>
                </h3>
                <p>{service?.experience} years experience</p>
                <p className="pro-rating">⭐ {service?.rating}</p>
              </div>
            </div>
          </div>

          {/* SERVICE INFO */}
          <div className="card">
            <h2>Service Details</h2>

            <ul className="info-list">
              <li><b>Estimated Time:</b> {service?.timeRequired} hrs</li>
              <li><b>Arrival In:</b> {service?.arrivalTime} minutes</li>
              <li><b>Contact:</b> {service?.contact}</li>
              <li><b>Service Location:</b> {service?.address}</li>
            </ul>
          </div>

          {/* OVERVIEW */}
          <div className="card">
            <h2>Overview</h2>
            <p>{service?.fullDesc}</p>
          </div>

          {/* WHAT'S INCLUDED */}
          <div className="card">
            <h2>What’s Included</h2>
            <ul>
              {service?.includes?.map((i, idx) => (
                <li key={idx}>✔ {i}</li>
              ))}
            </ul>
          </div>

          {/* WHAT'S EXCLUDED */}
          <div className="card">
            <h2>What’s Not Included</h2>
            <ul>
              {service?.excludes?.map((i, idx) => (
                <li key={idx} className="exclude">✘ {i}</li>
              ))}
            </ul>
          </div>

          {/* PREPARATION BEFORE SERVICE */}
          <div className="card">
            <h2>Before You Book</h2>
            <ul>
              {service?.preparation?.map((i, idx) => (
                <li key={idx}>• {i}</li>
              ))}
            </ul>
          </div>

          {/* CANCELLATION POLICY */}
          <div className="card">
            <h2>Cancellation Policy</h2>
            <p>{service?.cancellationPolicy}</p>
          </div>

          {/* SAFETY INFO */}
          <div className="card">
            <h2>Safety & Hygiene</h2>
            <ul>
              {service?.safety?.map((i, idx) => (
                <li key={idx}>• {i}</li>
              ))}
            </ul>
          </div>

          {/* GALLERY */}
          <div className="card">
            <h2>Service Gallery</h2>
            <div className="gallery">
              {service?.gallery?.map((img, idx) => (
                <img key={idx} src={img} alt="Gallery" />
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="card">
            <h2>FAQs</h2>
            {service?.faq?.map((f, idx) => (
              <details key={idx} className="faq-item">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>

          {/* REVIEWS */}
          <div className="card">
            <h2>Customer Reviews</h2>

            {service?.reviewsData?.map((r, idx) => (
              <div key={idx} className="review-box">
                <h4>{r.user}</h4>
                <p className="review-stars">⭐ {r.stars}</p>
                <p>{r.comment}</p>
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT BOOKING SIDEBAR */}
        <div className="right-section">

          <div className="sticky-box">
            <h2>{service?.title}</h2>

            {/* PRICE SECTION */}
            <div className="price-section">
              <span className="price">₹{service?.price}</span>
              <span className="offer">{service?.offer}% OFF</span>
            </div>

            {/* Price Calculation */}
            <div className="price-breakup">
              <p>Base Price: ₹{service?.price}</p>
              <p>Taxes: ₹{Math.round(service?.price * 0.18)}</p>
              <p>
                Total:{" "}
                <b>
                  ₹{service?.price + Math.round(service?.price * 0.18)}
                </b>
              </p>
            </div>

            {/* BOOK BUTTON */}
            <button className="book-now">
              <Link to={`/book/${service?.id}`}>Book This Service</Link>
            </button>

            {/* Rating Summary */}
            <div className="rating-summary">
              ⭐ {service?.rating} • {service?.reviews} Reviews
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
