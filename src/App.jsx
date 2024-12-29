import { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Orders from "./components/Orders";
import Stats from "./components/Stats";
import OrderModal from "./components/OrderModal";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";

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
      <Navbar handleOpenModal={handleOpenModal} />
      <Header handleOpenModal={handleOpenModal} />
      <Stats />
      <Orders handleOpenModal={handleOpenModal} />
      <Footer />

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
