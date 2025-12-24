import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { students } from "../data/student";

const VerifyCertificate = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundStudent = students.find((s) => s.id === id);
    setStudent(foundStudent);
    setLoading(false);
  }, [id]);

  if (loading) return <h2>Verifying...</h2>;

  if (!student) {
    return (
      <div style={styles.container}>
        <div style={styles.header}>
            <Link to="/" style={styles.brandLink}>← Back to Home</Link>
        </div>
        <h1 style={{ color: "red", fontSize: "3rem" }}>❌</h1>
        <h2>Invalid Certificate ID</h2>
        <p>The ID <strong>{id}</strong> was not found.</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      
      {/* --- UPDATED HEADER (Navigation) --- */}
      <div style={styles.navBar}>
        <div style={styles.issuerInfo}>
            <span style={{fontSize: "0.8rem", color: "#777", display:"block", marginBottom:"4px"}}>
                Certificate Issued by:
            </span>
            <Link to="/" style={styles.brandLink}>
                <span style={{fontSize: "1.4rem", fontWeight: "bold", color: "#2c3e50"}}>
                    Dev Connect Hub
                </span>
                {/* Visual Cue: The "Visit" Badge */}
                <span style={styles.visitBadge}>
                    Visit Official Site ↗
                </span>
            </Link>
        </div>
      </div>

      <hr style={{margin: "20px 0", border: "0", borderTop: "1px solid #eee"}}/>

      {/* 1. The Green Checkmark */}
      <div style={styles.successIcon}>✓</div>
      
      {/* 2. The Text Details */}
      <h1 style={styles.heading}>Certificate Verified</h1>
      <p style={styles.subtext}>
        This certificate was officially issued to <strong>{student.name}</strong>.
      </p>

      <div style={styles.detailsCard}>
        <p><strong>Course:</strong> {student.course}</p>
        <p><strong>Issue Date:</strong> {student.issueDate}</p>
        <p><strong>Credential ID:</strong> {student.id}</p>
      </div>

      {/* 3. The Image */}
      <div style={styles.imageContainer}>
        <img 
          src={student.certificateUrl} 
          alt={`Certificate for ${student.name}`} 
          style={styles.image} 
        />
      </div>
      
      {/* 4. Footer CTA */}
      <div style={{marginTop: "40px", marginBottom: "20px"}}>
         <p style={{marginBottom: "10px", color: "#666"}}>Want to verify the source?</p>
         <Link to="/" style={styles.buttonLink}>Go to Dev Connect Hub Home</Link>
      </div>

    </div>
  );
};

// --- STYLES ---
const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto", 
    textAlign: "center",
    fontFamily: "'Segoe UI', sans-serif",
    padding: "20px",
    minHeight: "100vh",
    background: "#fff",
  },
  // NEW NAVBAR STYLES
  navBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: "10px",
    textAlign: "left"
  },
  issuerInfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  brandLink: {
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    cursor: "pointer",
  },
  visitBadge: {
    fontSize: "0.8rem",
    backgroundColor: "#eef2ff",
    color: "#4f46e5",
    padding: "4px 8px",
    borderRadius: "12px",
    fontWeight: "600",
    border: "1px solid #c7d2fe",
  },
  buttonLink: {
    display: "inline-block",
    padding: "12px 25px",
    backgroundColor: "#2c3e50",
    color: "white",
    textDecoration: "none",
    borderRadius: "30px",
    fontWeight: "bold",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    transition: "transform 0.2s",
  },
  successIcon: {
    fontSize: "4rem",
    color: "#27ae60",
    marginBottom: "10px",
  },
  heading: {
    color: "#2c3e50",
    marginBottom: "10px",
  },
  subtext: {
    fontSize: "1.1rem",
    color: "#7f8c8d",
    marginBottom: "30px",
  },
  detailsCard: {
    background: "#f9f9f9",
    padding: "20px",
    borderRadius: "10px",
    border: "1px solid #eee",
    marginBottom: "30px",
    textAlign: "left",
    display: "inline-block",
    width: "100%",
    boxSizing: "border-box" 
  },
  imageContainer: {
    border: "5px solid #2c3e50",
    borderRadius: "5px",
    overflow: "hidden",
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
  },
  image: {
    width: "100%",
    display: "block",
  }
};

export default VerifyCertificate;