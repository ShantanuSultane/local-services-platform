export default function Contact() {
    return (
      <div className="page contact">
        <h1>Contact Us</h1>
  
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" required></textarea>
          <button className="btn">Send</button>
        </form>
      </div>
    );
  }
  