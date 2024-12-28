/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

export function formatPhoneNumber(input) {
  const digitsOnly = input.replace(/\D/g, ""); // Remove all non-digit characters
  const formattedNumber = digitsOnly.startsWith("998")
    ? digitsOnly
    : "998" + digitsOnly.slice(0, 9);

  let result = "+" + formattedNumber.slice(0, 3); // +998
  if (formattedNumber.length > 3) {
    result += " (" + formattedNumber.slice(3, 5);
    if (formattedNumber.length > 5) {
      result += ") " + formattedNumber.slice(5, 8);
      if (formattedNumber.length > 8) {
        result += "-" + formattedNumber.slice(8, 10);
        if (formattedNumber.length > 10) {
          result += "-" + formattedNumber.slice(10, 12);
        }
      }
    }
  }
  return result;
}

export const phoneValidate =
  /^\+998 \((90|91|93|94|95|97|98|99|33|88|71)\) \d{3}-\d{2}-\d{2}$/;

function OrderModal({ handleCloseModal, openOrderModal }) {
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+998 ");
  const [telegramUsername, setTelegramUsername] = useState("");

  const TOKEN = "7639050553:AAFBHv65ZAng6ChiEJXKy9Lm5IO0SAR9MFo";
  const USER_ID = "6475396776";

  const encodeText = (text) => encodeURIComponent(text);

  const sendMessage = async (e) => {
    e.preventDefault();
    const text = `Ism: ${name}\nTelegram username: ${telegramUsername}\nTelefon raqam: ${phone}`;

    if (!name || !telegramUsername || !phoneValidate.test(phone)) {
      toast.error("Barcha maydonni to'ldiring va telefon raqamni to'g'ri kiriting!");
      return;
    }

    const usernameRegex = /^@/;
    if (!usernameRegex.test(telegramUsername)) {
      toast.error("Telegram username '@lyra_uz' ko'rinishda bo'lishi kerak!");
      return;
    }

    try {
      await axios.post(
        `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${USER_ID}&text=${encodeText(
          text
        )}`
      );
      toast.success("Muvaffaqiyatli! \nTez orada siz bilan bog'lanamiz");
    } catch (err) {
      console.error(err);
      toast.error("Xatolik yuz berdi!");
    } finally {
      setName("");
      setTelegramUsername("");
      setPhone("+998 ");
      handleCloseModal();
    }
  };

  const handlePhoneChange = (e) => {
    const input = e.target.value;
  
    const rawDigits = input.replace(/\D/g, "");
  
    if (rawDigits.length <= 3) {
      setPhone("+998 ");
      return;
    }
  
    setPhone(formatPhoneNumber(rawDigits));
  };
  

  return (
    <div
      className="fixed inset-0 top-0 right-0 bg-[#00000057] z-[9999] flex justify-center items-center"
      onClick={handleCloseModal}
      style={{ backdropFilter: "blur(10px)" }}
    >
      <div
        className="fixed max-w-[350px] px-[20px] w-full rounded-[10px] min-h-[300px] z-[99999] bg-[#ffffff] mx-auto flex justify-center transform scale-95 opacity-0 transition-all"
        onClick={stopPropagation}
        style={{
          animation: openOrderModal && "fadeIn 0.3s ease-out forwards",
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
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              className="w-full border border-slate-300 rounded-[5px] py-2 px-3"
              placeholder="Telegram username"
              required
              value={telegramUsername}
              onChange={(e) => setTelegramUsername(e.target.value)}
            />
            <input
              type="text"
              className="w-full border border-slate-300 rounded-[5px] py-2 px-3"
              placeholder="Telefon raqamingiz"
              required
              value={phone}
              onChange={handlePhoneChange}
            />
          </div>
          <button
            className="bg-black text-white w-full rounded-[5px] py-[10px] transition-all ease-in-out hover:scale-[1.02] mb-[20px]"
            onClick={sendMessage}
          >
            Yuborish
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderModal;
