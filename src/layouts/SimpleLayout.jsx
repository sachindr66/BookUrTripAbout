import Headre from "../components/Headre";
import Footer from "../components/Footer";

export default function SimpleLayout({ children }) {
  return (
    <div>
      <Headre />
      <main style={{ marginTop: "70px" }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
