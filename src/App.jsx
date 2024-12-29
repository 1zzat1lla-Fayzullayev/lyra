import { useState } from "react";
// import Header from "./components/Header";
import Navbar from "./components/Navbar";
// import Orders from "./components/Orders";
// import Stats from "./components/Stats";
import OrderModal from "./components/OrderModal";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./layout/Home";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ScrollTop from "./components/ScrollTop";

function App() {
  const [openOrderModal, setOpenOrderModal] = useState(false);

  const handleOpenModal = () => {
    setOpenOrderModal(true);
  };

  const handleCloseModal = () => {
    setOpenOrderModal(false);
  };
  return (
    <>
      <BrowserRouter>
        <Navbar handleOpenModal={handleOpenModal} />
        <ScrollTop />
        <Routes>
          <Route
            path="/"
            element={<Home handleOpenModal={handleOpenModal} />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>

      {openOrderModal && (
        <OrderModal
          handleCloseModal={handleCloseModal}
          openOrderModal={openOrderModal}
        />
      )}

      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
