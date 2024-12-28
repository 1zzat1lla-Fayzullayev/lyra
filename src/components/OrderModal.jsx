/* eslint-disable react/prop-types */

function OrderModal({ handleCloseModal, openOrderModal }) {
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div
        className="fixed inset-0 top-0 right-0 bg-[#000000c9] z-[9999] flex justify-center items-center"
        onClick={handleCloseModal}
      >
        <div
          className="fixed max-w-[350px] px-[20px] w-full rounded-[10px] min-h-[300px] z-[99999] bg-white mx-auto flex justify-center transform scale-95 opacity-0 transition-all duration-300"
          onClick={stopPropagation}
          style={{
            animation: openOrderModal
              ? "fadeIn 0.3s ease-out forwards"
              : "fadeOut 0.3s ease-in forwards",
          }}
        >
          <img
            src="/close.svg"
            className="absolute right-2 w-[25px] top-2 cursor-pointer transition-all ease-in-out hover:rotate-[90deg]"
            onClick={handleCloseModal}
          />
          <div className="flex flex-col items-center">
            <h2 className="font-[700] text-[20px] mt-[5px]">
              Buyurtma berish uchun
            </h2>
            <div className="flex flex-col gap-3 justify-center items-center my-auto">
              <input
                type="text"
                className="w-full border border-slate-300 rounded-[5px] py-2 px-3"
                placeholder="Ismingiz"
              />
              <input
                type="text"
                className="w-full border border-slate-300 rounded-[5px] py-2 px-3"
                placeholder="Telegram username"
              />
              <input
                type="number"
                className="w-full border border-slate-300 rounded-[5px] py-2 px-3"
                placeholder="Nomeringiz"
              />
            </div>
            <button className="bg-black text-white w-full rounded-[5px] py-[10px] transition-all ease-in-out hover:scale-[1.02] mb-[20px]">
              Yuborish
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderModal;
