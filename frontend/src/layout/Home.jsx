/* eslint-disable react/prop-types */
import Header from "../components/Header";
import Orders from "../components/Orders";
import Stats from "../components/Stats";

function Home({handleOpenModal}) {
  return (
    <>
      <Header handleOpenModal={handleOpenModal} />
      <Stats />
      <Orders handleOpenModal={handleOpenModal} />
    </>
  );
}

export default Home;
