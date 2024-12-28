import OrderCard from "./OrderCard";

function Orders() {
  return (
    <>
      <div className="">
        <div className="text-center py-[77px]">
          <p className="text-3xl md:text-6xl font-black">Tariflarimiz</p>
          <p className="font-[500] mt-[20px]">
            Lyra bilan orzuingizdagi veb-saytni yarating ✨
          </p>
        </div>
        <OrderCard />
      </div>
    </>
  );
}

export default Orders;
