import { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Orders from "./components/Orders";
import Stats from "./components/Stats";
import OrderModal from "./components/OrderModal";

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
      <Header handleOpenModal={handleOpenModal}/>
      <Stats />
      <Orders />

      {openOrderModal && <OrderModal handleCloseModal={handleCloseModal} openOrderModal={openOrderModal} />}
    </>
  );
}

export default App;
