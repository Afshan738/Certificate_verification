import React from "react";
import { Routes, Route } from "react-router-dom";
import VerifyCertificate from "./pages/VerifyCertificate";
import Home from "./pages/home";  

const App = () => {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/verify/:id" element={<VerifyCertificate />} />

      
      <Route path="/" element={
        <div style={{textAlign: 'center', marginTop: '50px'}}>
          <h1>My Academy Certificate Portal</h1>
          <p>Add /verify/PMLS-001 to the URL to test.</p>
        </div>
      } />
    </Routes>
  );
};

export default App;