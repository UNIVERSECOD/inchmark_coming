import { useEffect, useState } from "react";
import "../styles/coming-soon.css";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

const TOTAL_SECONDS = 20 * 24 * 60 * 60;

const ComingSoon: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<number>(TOTAL_SECONDS);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev <= 1 ? TOTAL_SECONDS : prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const days = Math.floor(timeLeft / 86400);
  const hours = Math.floor((timeLeft % 86400) / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <main className="page">
      <section className="card">
        {/* Logo */}
        <div className="logo-placeholder">LOGO</div>

        {/* Illustration */}
        <div className="image-placeholder">BUILDING / VISUAL</div>

        <h1>Coming Soon</h1>
        <p className="subtitle">
          Inchmark platforması hazırlaşdırılır.  
          Yaxın zamanda xidmətinizdə olacaq.
        </p>

        <div className="countdown">
          <div><span>{days}</span><small>Days</small></div>
          <div><span>{hours}</span><small>Hours</small></div>
          <div><span>{minutes}</span><small>Minutes</small></div>
          <div><span>{seconds}</span><small>Seconds</small></div>
        </div>

        <div className="contacts">
          <div><FaPhoneAlt /> +994 99 222 33 03</div>
          <div><FaPhoneAlt /> +994 99 222 33 13</div>
          <div><FaEnvelope /> info@inchmark.az</div>
          <div><FaGlobe /> www.inchmark.az</div>
          <div className="whatsapp">
            <FaWhatsapp />
            <a href="https://wa.me/994992223313" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
        </div>

        <div className="socials">
          <a href="https://instagram.com/inchmark_az" target="_blank"><FaInstagram /></a>
          <a href="https://www.linkedin.com/company/inchmark-az" target="_blank"><FaLinkedin /></a>
        </div>
      </section>
    </main>
  );
};

export default ComingSoon;
