import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={styles.pageContainer}>
      
     
      <header style={styles.heroSection}>
        <div style={styles.heroOverlay}>
          <h1 style={styles.heroTitle}>Dev Connect Hub</h1>
          <p style={styles.heroSubtitle}>
            Bridging the gap between <strong>University Theory</strong> and <strong>Industry Reality</strong>.
          </p>
          
         
          <div style={styles.buttonGroup}>
            
           
            <a 
              href="http://bit.ly/4jm6nLu" 
              target="_blank" 
              rel="noreferrer" 
              style={styles.whatsappButton}
            >
              <span style={{marginRight: "8px", fontSize: "1.2rem"}}></span> Join on WhatsApp
            </a>

            
            <a 
              href="https://www.linkedin.com/groups/16080026" 
              target="_blank" 
              rel="noreferrer" 
              style={styles.linkedinButton}
            >
              <span style={{marginRight: "8px", fontSize: "1.2rem"}}>in</span> LinkedIn Group
            </a>

        
          </div>

        </div>
      </header>

      
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Why Dev Connect Hub?</h2>
        <div style={styles.grid}>
          
         
          <div style={styles.card}>
            <span style={styles.numberHeading}>01</span>
            <h3>Engineering, Not Just Coding</h3>
            <p>We don't just memorize syntax. We dissect React Fiber, Virtual DOM, and System Design to build true engineers.</p>
          </div>

         
          <div style={styles.card}>
            <span style={styles.numberHeading}>02</span>
            <h3>Real-World Projects</h3>
            <p>From Site Reliability Guardians to E-commerce Microservices. We build things that actually work.</p>
          </div>

         
          <div style={styles.card}>
            <span style={styles.numberHeading}>03</span>
            <h3>Mentorship First</h3>
            <p>A community where questions are encouraged, and debugging is done together.</p>
          </div>

        </div>
      </section>

      <section style={{...styles.section, background: "#f8f9fa"}}>
        <div style={styles.mentorContainer}>
          <div style={styles.mentorText}>
            <h2 style={styles.sectionTitle}>Meet the Mentor</h2>
            <h3 style={{color: "#2c3e50", marginTop: "-10px"}}>Afshan Qasim</h3>
            <p style={{fontWeight: "bold", color: "#555"}}>Full Stack Engineer & Community Lead</p>
            <p style={{lineHeight: "1.6", marginTop: "15px"}}>
              My goal is simple: I want to help students skip the 'tutorial hell' and start building professional software. 
              In our cohorts, we dive deep into the internals of React, Node.js, and Cloud Architecture.
            </p>
            <br />
            <a href="https://www.linkedin.com/in/afshan-qasim-998917300" target="_blank" rel="noreferrer" style={styles.link}>
              Connect on LinkedIn &rarr;
            </a>
          </div>
          <img src="/profile.jpeg" alt="Mentor" style={styles.mentorImage} />
        </div>
      </section>
      <footer style={styles.footer}>
        <p>&copy; 2025 Dev Connect Hub. All rights reserved.</p>
        <p style={{fontSize: "0.8rem", marginTop: "10px", opacity: 0.7}}>
          Verified Certificate Portal
        </p>
      </footer>
    </div>
  );
};
const styles = {
  pageContainer: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#333",
    lineHeight: "1.6",
  },
  heroSection: {
    background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
    color: "white",
    padding: "100px 20px",
    textAlign: "center",
  },
  heroTitle: {
    fontSize: "3.5rem",
    marginBottom: "10px",
    fontWeight: "800",
  },
  heroSubtitle: {
    fontSize: "1.2rem",
    maxWidth: "700px",
    margin: "0 auto 40px auto",
    opacity: "0.9",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    flexWrap: "wrap",
    alignItems: "center",
  },
  
  whatsappButton: {
    padding: "12px 25px",
    background: "#25D366", 
    color: "white",
    textDecoration: "none",
    borderRadius: "30px",
    fontWeight: "bold",
    boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
    transition: "transform 0.2s",
    display: "flex",
    alignItems: "center",
    border: "2px solid #25D366",
  },

  linkedinButton: {
    padding: "12px 25px",
    background: "#0077b5", 
    color: "white",
    textDecoration: "none",
    borderRadius: "30px",
    fontWeight: "bold",
    boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
    transition: "transform 0.2s",
    display: "flex",
    alignItems: "center",
    border: "2px solid #0077b5",
  },
 
  secondaryButton: {
    padding: "12px 25px",
    background: "transparent",
    border: "2px solid rgba(255,255,255,0.7)",
    color: "white",
    textDecoration: "none",
    borderRadius: "30px",
    fontWeight: "bold",
    transition: "background 0.2s",
  },
  section: {
    padding: "80px 20px",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  sectionTitle: {
    textAlign: "center",
    fontSize: "2.2rem",
    color: "#2c3e50",
    marginBottom: "50px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
  },
  card: {
    background: "white",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
    textAlign: "center",
    transition: "transform 0.3s",
    borderTop: "4px solid #2a5298",
  },
  numberHeading: {
    fontSize: "4rem",
    fontWeight: "900",
    marginBottom: "10px",
    display: "block",
    color: "rgba(42, 82, 152, 0.15)",
    lineHeight: "1",
  },
  mentorContainer: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    gap: "50px",
  },
  mentorText: {
    flex: "1",
    minWidth: "300px",
    textAlign: "left",
  },
  mentorImage: {
    width: "250px",
    height: "250px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "5px solid white",
    boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
  },
  link: {
    color: "#2980b9",
    fontWeight: "bold",
    textDecoration: "none",
  },
  footer: {
    background: "#2c3e50",
    color: "white",
    textAlign: "center",
    padding: "40px 20px",
  },
};

export default Home;