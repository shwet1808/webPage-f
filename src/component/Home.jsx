import React, { useState } from "react";

const Home = () => {
  // State for sidebar visibility and selected exam
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedExam, setSelectedExam] = useState("");

  // Data about the exams
  const examsData = {
    NIMCET: "NIMCET is an entrance exam for MCA programs in NITs.",
    JEE: "JEE is an entrance exam for undergraduate engineering programs.",
    GATE: "GATE is a postgraduate exam for engineering and science graduates.",
    CAT: "CAT is a management entrance exam for MBA programs in India.",
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", height: "100vh", display: "flex" }}>
      {/* Sidebar */}
      {isSidebarOpen && (
        <aside
          style={{
            width: "250px",
            backgroundColor: "#1a1a2e",
            color: "white",
            display: "flex",
            flexDirection: "column",
            padding: "20px",
            boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
            transition: "all 0.3s ease",
          }}
        >
          <button
            onClick={() => setIsSidebarOpen(false)}
            style={{
              backgroundColor: "#34495e",
              color: "white",
              border: "none",
              padding: "5px",
              borderRadius: "5px",
              marginBottom: "20px",
              cursor: "pointer",
            }}
          >
            Close Sidebar
          </button>
          <h2 style={{ marginBottom: "20px", textAlign: "center" }}>Exams</h2>
          <nav>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {Object.keys(examsData).map((exam) => (
                <li key={exam} style={{ marginBottom: "10px" }}>
                  <button
                    onClick={() => setSelectedExam(exam)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "white",
                      textAlign: "left",
                      cursor: "pointer",
                      padding: "10px",
                      borderRadius: "5px",
                      display: "block",
                      width: "100%",
                    }}
                  >
                    {exam}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      )}

      {/* Main Content */}
      <main
  style={{
    flex: 1,
    padding: "20px",
    backgroundColor: "#f0f8ff",
    overflowY: "auto",
    transition: "margin-left 0.3s ease",
  }}
>
  {!isSidebarOpen && (
    <button
      onClick={() => setIsSidebarOpen(true)}
      style={{
        backgroundColor: "#34495e",
        color: "white",
        border: "none",
        padding: "10px",
        borderRadius: "5px",
        marginBottom: "20px",
        cursor: "pointer",
      }}
    >
      Open Sidebar
    </button>
  )}
  <section
    style={{
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)",
    }}
  >
    <header
      style={{
        marginBottom: "20px",
        textAlign: "center",
        padding: "10px 15px",
        backgroundColor: "#e3f2fd",
        borderRadius: "8px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1 style={{ color: "#01579b" }}>
        {selectedExam || "Welcome to Exam Prep Hub"}
      </h1>
      <p style={{ fontSize: "1.2rem", color: "#555" }}>
        Your one-stop solution for exam preparation and resources!
      </p>
    </header>

    {selectedExam ? (
      <div style={{ textAlign: "center" }}>
        <img
          src={`/${selectedExam.toLowerCase()}-banner.jpg`}
          alt={`${selectedExam} exam`}
          style={{
            width: "100%",
            maxHeight: "300px",
            objectFit: "cover",
            borderRadius: "8px",
            marginBottom: "20px",
          }}
        />
        <h2 style={{ color: "#0288d1" }}>About {selectedExam}</h2>
        <p style={{ fontSize: "1.1rem", color: "#444" }}>{examsData[selectedExam]}</p>
      </div>
    ) : (
      <div>
        <h2 style={{ color: "#0288d1", marginBottom: "15px" }}>
          Explore Everything You Need
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {/* Card 1 */}
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
            }}
          >
            <img
              src="https://eduadvice.in/media/uploads/blog/NIMCET.jpg"
              alt="NIMCET preparation"
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div style={{ padding: "15px" }}>
              <h3 style={{ color: "#01579b" }}>NIMCET Preparation</h3>
              <p style={{ fontSize: "0.9rem", color: "#555" }}>
                Access curated study materials, mock tests, and previous year
                papers to ace your NIMCET exam.
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
            }}
          >
            <img
              src="https://www.shelaracademy.com/wp-content/uploads/2020/04/iit-jee-2.jpg"
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div style={{ padding: "15px" }}>
              <h3 style={{ color: "#01579b" }}>JEE Resources</h3>
              <p style={{ fontSize: "0.9rem", color: "#555" }}>
                Comprehensive resources for cracking JEE Main & Advanced with
                expert tips and tricks.
              </p>
            </div>
          </div>
          {/* Card 3 */}
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
            }}
          >
            <img
              src="https://iirfranking.com/exams/wp-content/uploads/2021/09/GATE-2048x1153.jpg"
              alt="GATE preparation"
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div style={{ padding: "15px" }}>
              <h3 style={{ color: "#01579b" }}>GATE Insights</h3>
              <p style={{ fontSize: "0.9rem", color: "#555" }}>
                Everything you need for GATE success: study plans, mock tests,
                and technical resources.
              </p>
            </div>
          </div>
        </div>
        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
            fontSize: "1.1rem",
            color: "#555",
          }}
        >
          Start your journey now by selecting an exam from the sidebar!
        </p>
      </div>
    )}
  </section>
</main>

    </div>
  );
};

export default Home;
