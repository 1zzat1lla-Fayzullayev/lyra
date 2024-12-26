import OrderCard from "./OrderCard";

function Orders() {
  return (
    <>
      <div className="bg-[url('/order_bg.svg')] bg-cover bg-center h-full">
        <div className="text-center py-[77px]">
          <p className="text-5xl md:text-6xl text-neutral-950 font-black">
            <span className="text-neutral-50">Create</span> Your Dream Website
            with Lyra
          </p>
          <p className="text-neutral-800 mt-[20px]">
            Submit your order today and let us craft a unique website tailored
            to your business needs. With Lyra, your vision comes to life✨
          </p>
        </div>
        <OrderCard />
      </div>
    </>
  );
}

export default Orders;
