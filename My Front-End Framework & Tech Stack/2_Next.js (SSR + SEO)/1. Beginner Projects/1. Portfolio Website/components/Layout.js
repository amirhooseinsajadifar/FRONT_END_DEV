import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div style={{ padding: "1rem", minHeight: "80vh" }}>
        {children}
      </div>
      <Footer />
    </>
  );
}
