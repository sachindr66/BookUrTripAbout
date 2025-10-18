import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import MainLayout from "./layouts/MainLayout";
import SimpleLayout from "./layouts/SimpleLayout";
import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Flights from "./pages/products/Flights";
import Trains from "./pages/products/Trains";
import Hotels from "./pages/products/Hotels";
import Buses from "./pages/products/Buses";
import Cruises from "./pages/products/Cruises";
import Cabs from "./pages/products/Cabs";
import Careers from "./pages/Careers";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{

    const timer = setTimeout (()=>setIsLoading(false),2000)
    return ()=> clearInterval(timer)
  },[])

  const handleLoaderFinish = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <Loader onFinish={handleLoaderFinish} />;
  }

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/about"
          element={
            <SimpleLayout>
              <About />
            </SimpleLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <SimpleLayout>
              <Contact />
            </SimpleLayout>
          }
        />
        <Route
          path="/flights"
          element={
            <SimpleLayout>
              <Flights />
            </SimpleLayout>
          }
        />
        <Route
          path="/trains"
          element={
            <SimpleLayout>
              <Trains />
            </SimpleLayout>
          }
        />
        <Route
          path="/hotels"
          element={
            <SimpleLayout>
              <Hotels />
            </SimpleLayout>
          }
        />
        <Route
          path="/buses"
          element={
            <SimpleLayout>
              <Buses />
            </SimpleLayout>
          }
        />
        <Route
          path="/cruises"
          element={
            <SimpleLayout>
              <Cruises />
            </SimpleLayout>
          }
        />
        <Route
          path="/cabs"
          element={
            <SimpleLayout>
              <Cabs />
            </SimpleLayout>
          }
        />
        <Route
          path="/careers"
          element={
            <SimpleLayout>
              <Careers />
            </SimpleLayout>
          }
        />
      </Routes>
    </Router>
  );
}
