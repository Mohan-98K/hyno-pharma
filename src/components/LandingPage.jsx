import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        fontFamily: "Poppins, sans-serif",
        overflowX: "hidden",
        color: "#2d3436",
      }}
    >
      {/* 🟢 NAVBAR */}
      <header
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          background: "white",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          zIndex: 100,
        }}
      >
        <nav
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "15px 20px",
          }}
        >
          <h2 style={{ color: "#00b894", fontWeight: "600" }}>HynoPharma</h2>
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <Link to="/" style={{ textDecoration: "none", color: "#2d3436" }}>
              Home
            </Link>
            <Link
              to="/products"
              style={{ textDecoration: "none", color: "#2d3436" }}
            >
              Medicines
            </Link>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "#2d3436" }}
            >
              About
            </Link>
            <Link
              to="/login"
              style={{
                background: "#00b894",
                color: "white",
                padding: "8px 18px",
                borderRadius: "6px",
                textDecoration: "none",
              }}
            >
              Login
            </Link>
          </div>
        </nav>
      </header>

      {/* 🟢 HERO SECTION */}
      <section
        style={{
          marginTop: "80px",
          position: "relative",
          height: "85vh",
          background:
            "url('https://images.unsplash.com/photo-1584367369483-4a3f4d1a3fd3?auto=format&fit=crop&w=1400&q=80') center/cover no-repeat",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.55)",
          }}
        ></div>
        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            maxWidth: "700px",
            padding: "0 20px",
          }}
        >
          <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
            Trusted Online Pharmacy at Your Fingertips
          </h1>
          <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
            Order medicines, book health tests, and consult doctors — all from
            the comfort of your home.
          </p>

          {/* Search bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              background: "#fff",
              borderRadius: "10px",
              overflow: "hidden",
              maxWidth: "500px",
              margin: "0 auto 25px",
            }}
          >
            <input
              type="text"
              placeholder="Search for medicines, health products..."
              style={{
                flex: 1,
                padding: "14px",
                border: "none",
                outline: "none",
                fontSize: "1rem",
              }}
            />
            <button
              style={{
                background: "#00b894",
                color: "white",
                border: "none",
                padding: "0 20px",
                cursor: "pointer",
                fontSize: "1.2rem",
              }}
            >
              🔍
            </button>
          </div>

          <Link to="/products">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: "#00b894",
                color: "#fff",
                border: "none",
                padding: "14px 36px",
                borderRadius: "8px",
                fontSize: "1rem",
                cursor: "pointer",
              }}
            >
              Shop Now
            </motion.button>
          </Link>
        </div>
      </section>

      {/* 🟢 SERVICES */}
      <section
        style={{
          background: "#fff",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "50px" }}>
          Why Choose HynoPharma?
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {[
            {
              icon: "🚚",
              title: "Super Fast Delivery",
              text: "Get medicines delivered within 2 hours in major cities.",
            },
            {
              icon: "💊",
              title: "Genuine Medicines",
              text: "100% verified and quality-checked pharmacy products.",
            },
            {
              icon: "🧾",
              title: "Easy Prescription Upload",
              text: "Upload your prescription and let our pharmacist assist you.",
            },
            {
              icon: "💬",
              title: "Doctor Consultation",
              text: "Chat with certified doctors anytime, anywhere.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              style={{
                background: "#f9f9f9",
                borderRadius: "12px",
                padding: "30px 20px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              }}
            >
              <div style={{ fontSize: "2.5rem" }}>{card.icon}</div>
              <h3 style={{ color: "#00b894", margin: "15px 0 10px" }}>
                {card.title}
              </h3>
              <p>{card.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🟢 POPULAR CATEGORIES */}
      <section
        style={{
          background: "#f7fdfc",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "40px" }}>
          Shop by Popular Categories
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "25px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {[
            "Pain Relief",
            "Diabetes Care",
            "Baby Care",
            "Skin Care",
            "Ayurvedic",
            "Supplements",
          ].map((category, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              style={{
                background: "#fff",
                borderRadius: "10px",
                padding: "25px",
                boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
                fontWeight: "500",
                color: "#2d3436",
              }}
            >
              {category}
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🟢 TRUST SECTION */}
      <section
        style={{
          background: "#fff",
          textAlign: "center",
          padding: "60px 20px",
        }}
      >
        <h2 style={{ marginBottom: "30px", fontSize: "2rem" }}>
          Trusted by 1 Million+ Customers
        </h2>
        <p style={{ fontSize: "1.1rem", maxWidth: "700px", margin: "0 auto" }}>
          We take pride in delivering health and happiness across India with
          authentic products, expert pharmacists, and reliable customer support.
        </p>
      </section>

      {/* 🟢 APP SECTION */}
      <section
        style={{
          background: "#00b894",
          color: "white",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <h2>Download Our Mobile App</h2>
        <p>Order medicines, consult doctors, and track deliveries instantly.</p>
        <div style={{ marginTop: "25px" }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Play Store"
            width="150"
          />
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="App Store"
            width="150"
            style={{ marginLeft: "10px" }}
          />
        </div>
      </section>

      {/* 🟢 FOOTER */}
      <footer
        style={{
          background: "#2d3436",
          color: "#fff",
          padding: "40px 20px",
          textAlign: "center",
        }}
      >
        <h3>HynoPharma</h3>
        <p>Your trusted partner for quality healthcare products.</p>
        <p style={{ marginTop: "10px", fontSize: "0.9rem", opacity: 0.8 }}>
          © 2025 HynoPharma. All Rights Reserved.
        </p>
      </footer>
    </motion.div>
  );
};

export default LandingPage;
