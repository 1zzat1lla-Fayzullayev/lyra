/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { orderData } from "../data/orderCardData";

const OrderCard = () => {
  return (
    <section className="py-10">
      <div className="mx-auto flex items-center flex-wrap justify-center gap-[30px] w-fit">
        <Card />
      </div>
    </section>
  );
};

const Card = () => {
  return (
    <>
      {orderData.map((order) => (
        <div
          key={order.level}
          className="max-w-[370px] min-h-[600px] flex flex-col items-start bg-white p-6 border-[1px] border-slate-300 rounded-xl shadow-md"
        >
          <span className="font-[700] text-[25px]">{order.level}</span>
          <p className="mt-[10px] text-[16px] text-slate-600">{order.info}</p>
          <span className="mt-[15px] text-[55px] font-[700] text-indigo-600">
            ${order.price}
          </span>
          <div className="flex flex-col gap-[10px] mt-4 flex-grow">
            <div className="flex items-center gap-[10px]">
              <img src="/check.svg" alt="check icon" /> <span>{order.list1}</span>
            </div>
            <div className="flex items-center gap-[10px]">
              <img src="/check.svg" alt="check icon" /> <span>{order.list2}</span>
            </div>
            <div className="flex items-center gap-[10px]">
              <img src="/check.svg" alt="check icon" /> <span>{order.list3}</span>
            </div>
            <div className="flex items-center gap-[10px]">
              <img src="/check.svg" alt="check icon" /> <span>{order.list4}</span>
            </div>
            <div className="flex items-center gap-[10px]">
              <img src="/check.svg" alt="check icon" /> <span>{order.list5}</span>
            </div>
          </div>
          <button className="bg-black text-white w-full rounded-[5px] py-[10px] mt-auto transition-all ease-in-out hover:scale-[1.02]">
            Tanlash
          </button>
        </div>
      ))}
    </>
  );
};

export default OrderCard;
