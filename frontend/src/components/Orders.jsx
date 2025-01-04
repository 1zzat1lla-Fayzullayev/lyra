/* eslint-disable react/prop-types */
import OrderCard from "./OrderCard";

function Orders({handleOpenModal}) {
  return (
    <>
      <div className="mx-[20px] xl:mx-0">
        <div className="text-center py-[77px]">
          <p className="text-3xl md:text-6xl font-black">Tariflarimiz</p>
          <p className="font-[500] mt-[20px] text-[18px]">
            Lyra bilan orzuingizdagi veb-saytni yarating ✨
          </p>
        </div>
        <OrderCard handleOpenModal={handleOpenModal}/>
      </div>
    </>
  );
}

export default Orders;
