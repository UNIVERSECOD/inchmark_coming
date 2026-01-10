import { useEffect, useState } from "react";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";

import Logo from "../assets/Inchmark_logo.png";
import BgPhoto from "../assets/megaphone_bg.jpg";

const TOTAL_SECONDS = 20 * 24 * 60 * 60;

const ComingSoon: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(TOTAL_SECONDS);

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
    <main className="relative min-h-screen overflow-hidden">
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-left"
        style={{ backgroundImage: `url(${BgPhoto})` }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-l from-teal-950/60 via-teal-900/20 to-transparent" />

      {/* CONTENT */}
      <section className="relative z-10 min-h-screen flex items-center px-6 lg:px-16">
        <div className="w-full max-w-[1400px] mx-auto flex justify-end">
          
          {/* RIGHT CONTENT BLOCK */}
          <div className="text-white max-w-xl ">
            {/* LOGO */}
            <img
              src={Logo}
              alt="Inchmark"
              className="h-100 mb-10 opacity-95"
            />

            {/* TITLE */}
            <h1 className="text-5xl lg:text-8xl font-extrabold leading-tight text-right">
              INCHMARK
              <span className="block text-teal-300 mt-2">
                is coming
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-6 text-lg text-white/90 leading-relaxed text-right">
              Təhlükəsizlik sistemləri və IT həllərini bir platformada
              birləşdirən Inchmark çox yaxında istifadəyə veriləcək.
            </p>

            {/* COUNTDOWN */}
            <div className="mt-12 flex flex-wrap gap-4 justify-end">
              {[
                { label: "DAYS", value: days },
                { label: "HOURS", value: hours },
                { label: "MIN", value: minutes },
                { label: "SEC", value: seconds },
              ].map((item) => (
                <div
                  key={item.label}
                  className="
                    bg-black/40 backdrop-blur-lg
                    rounded-2xl px-6 py-4
                    text-center
                    hover:bg-black/60 transition
                  "
                >
                  <div className="text-7xl font-mono font-bold">
                    {item.value}
                  </div>
                  <div className="text-xs tracking-widest opacity-80">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            {/* SOCIALS */}
            <div className="flex gap-4 mt-10 justify-end">
              <a
                href="https://instagram.com/inchmark_az"
                target="_blank"
                rel="noreferrer"
                className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 hover:scale-110 transition"
              >
                <FaInstagram className="w-7 h-7" />
              </a>

              <a
                href="https://www.linkedin.com/company/inchmark-az"
                target="_blank"
                rel="noreferrer"
                className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 hover:scale-110 transition"
              >
                <FaLinkedin className="w-7 h-7" />
              </a>

              <a
                href="https://wa.me/994992223313"
                target="_blank"
                rel="noreferrer"
                className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center hover:bg-green-600 hover:scale-110 transition"
              >
                <FaWhatsapp className="w-7 h-7" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ComingSoon;
