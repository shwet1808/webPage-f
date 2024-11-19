// import React from "react";

// const LoginPage = () => {
//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//         backgroundColor: "#f4f4f9",
//         fontFamily: "'Arial', sans-serif",
//       }}
//     >
//       <div
//         style={{
//           width: "100%",
//           maxWidth: "400px",
//           padding: "20px",
//           backgroundColor: "white",
//           borderRadius: "10px",
//           boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
//         }}
//       >
//         <h2
//           style={{
//             textAlign: "center",
//             marginBottom: "20px",
//             fontSize: "1.8rem",
//             color: "#333",
//           }}
//         >
//           Login
//         </h2>

//         <form>
//           {/* Email Input */}
//           <div style={{ marginBottom: "15px" }}>
//             <label
//               htmlFor="email"
//               style={{
//                 display: "block",
//                 marginBottom: "5px",
//                 color: "#555",
//                 fontWeight: "bold",
//               }}
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               placeholder="Enter your email"
//               style={{
//                 width: "100%",
//                 padding: "10px",
//                 border: "1px solid #ccc",
//                 borderRadius: "5px",
//                 fontSize: "1rem",
//               }}
//             />
//           </div>

//           {/* Password Input */}
//           <div style={{ marginBottom: "15px" }}>
//             <label
//               htmlFor="password"
//               style={{
//                 display: "block",
//                 marginBottom: "5px",
//                 color: "#555",
//                 fontWeight: "bold",
//               }}
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               placeholder="Enter your password"
//               style={{
//                 width: "100%",
//                 padding: "10px",
//                 border: "1px solid #ccc",
//                 borderRadius: "5px",
//                 fontSize: "1rem",
//               }}
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             style={{
//               width: "100%",
//               padding: "12px",
//               backgroundColor: "#00bcd4",
//               color: "white",
//               border: "none",
//               borderRadius: "5px",
//               fontWeight: "bold",
//               fontSize: "1rem",
//               cursor: "pointer",
//               transition: "background-color 0.3s",
//             }}
//             onMouseOver={(e) => (e.target.style.backgroundColor = "#008c99")}
//             onMouseOut={(e) => (e.target.style.backgroundColor = "#00bcd4")}
//           >
//             Login
//           </button>
//         </form>

//         {/* Forgot Password and Signup Links */}
//         <div
//           style={{
//             marginTop: "15px",
//             textAlign: "center",
//             fontSize: "0.9rem",
//             color: "#555",
//           }}
//         >
//           <p>
//             Forgot your password?{" "}
//             <a
//               href="/reset-password"
//               style={{
//                 color: "#00bcd4",
//                 textDecoration: "none",
//               }}
//             >
//               Reset it here
//             </a>
//           </p>
//           <p>
//             Don't have an account?{" "}
//             <a
//               href="/signup"
//               style={{
//                 color: "#00bcd4",
//                 textDecoration: "none",
//               }}
//             >
//               Sign up now
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
