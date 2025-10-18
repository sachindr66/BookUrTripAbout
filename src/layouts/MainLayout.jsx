import Footer from "../components/Footer";
import Header from "../components/Headre";
import HeroSlider from "../components/HeroSlider";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <div className="banner"
        style={{
          marginTop: "62px"
        }}>
        <HeroSlider />
      </div>
      <main style={{
        margin: "auto",
        width: "100%",
        }}>{children}</main>
      <Footer />
    </>
  );
}
