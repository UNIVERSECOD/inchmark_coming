import { useEffect, useState } from "react";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";

import Logo from "../assets/inchmark_logo_ph.png";
import BgPhoto from "../assets/inchmark_bg.png";

const ComingSoon: React.FC = () => {
 const [timeLeft, setTimeLeft] = useState(0);
const getEndOfMonth = () => {
  const now = new Date();
  return new Date(
    now.getFullYear(),
    now.getMonth(),
    31,
    23,
    59,
    59
  );
};

useEffect(() => {
  const targetDate = getEndOfMonth();

  const updateTimer = () => {
    const now = Date.now();
    const diff = Math.floor((targetDate.getTime() - now) / 1000);
    setTimeLeft(diff > 0 ? diff : 0);
  };

  updateTimer();
  const interval = setInterval(updateTimer, 1000);

  return () => clearInterval(interval);
}, []);

useEffect(() => {
  console.log("EFFECT START");
  return () => console.log("CLEANUP");
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
      <div className="absolute inset-0 bg-linear-to-l from-teal-950/60 via-slate-700/10 to-transparent" />

      {/* CONTENT */}
      <section className="relative z-10 min-h-screen flex items-center px-4 sm:px-6 lg:px-16">
        <div className="w-full max-w-350 mx-auto flex justify-center lg:justify-end">
          
          {/* CONTENT BLOCK */}
          <div
            className="
              text-white max-w-3xl
              p-6
              bg-teal-600/20 backdrop-blur-lg
              rounded-3xl
              text-center

              lg:bg-transparent
              
              lg:p-0
              lg:text-right
            "
          >
            {/* BRAND */}
            <div className="flex flex-col items-center lg:items-end mb-6">
              <img
                src={Logo}
                alt="Inchmark Logo"
                className="h-30 mb-4 opacity-95 transition hover:scale-105 lg:h-50"
              />

              <h1 className="text-5xl font-mono font-extrabold leading-tight lg:text-7xl">
                INCHMARK
              </h1>

              <span className="text-3xl font-body font-extrabold text-teal-900 mt-2 lg:text-5xl lg:text-teal-700">
                tezliklə xidmətinizdə
              </span>
            </div>

            {/* DESCRIPTION */}
            <p className="mt-4 font-body text-white/80 leading-relaxed text-lg text-center lg:mt-6 lg:text-xl lg:text-right">
              Təhlükəsizlik sistemləri və IT həllərini bir platformada
              birləşdirən Inchmark tezliklə istifadəyə veriləcək.
            </p>

            {/* COUNTDOWN */}
            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:mt-12 lg:justify-end">
              {[
                { label: "DAYS", value: days },
                { label: "HOURS", value: hours },
                { label: "MIN", value: minutes },
                { label: "SEC", value: seconds },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-black/40 backdrop-blur-lg rounded-2xl px-5 py-4 text-center hover:bg-black/60 transition"
                >
                  <div className="text-xl font-mono font-bold lg:text-4xl">
                    {item.value}
                  </div>
                  <div className="text-xs tracking-widest opacity-80">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            {/* SOCIALS */}
            <div className="flex gap-4 mt-8 justify-center lg:mt-10 lg:justify-end">
              <a
                href="https://instagram.com/inchmark_az"
                target="_blank"
                rel="noopener"
                title="Instagram"
                className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 hover:scale-110 transition lg:w-14 lg:h-14"
              >
                <FaInstagram className="w-3 h-3 lg:w-6 lg:h-6" />
              </a>

              <a
                href="https://www.linkedin.com/in/inchmark-az-158495389"
                target="_blank"
                rel="noopener"
                title="LinkedIn"
                className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 hover:scale-110 transition lg:w-14 lg:h-14"
              >
                <FaLinkedin className="w-3 h-3 lg:w-6 lg:h-6" />
              </a>

              <a
                href="https://wa.me/994992223303"
                target="_blank"
                rel="noopener"
                title="WhatsApp"
                className="w-9 h-9 rounded-full bg-green-500 flex items-center justify-center hover:bg-green-600 hover:scale-110 transition lg:w-14 lg:h-14"
              >
                <FaWhatsapp className="w-3 h-3 lg:w-6 lg:h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ComingSoon;
