/* eslint-disable react/no-unescaped-entities */
import { FuzzyOverlay } from "../components/Header";
import Wrapper from "../layout/Wrapper";

function AboutPage() {
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="bg-neutral-950 text-neutral-50 h-screen flex flex-col justify-center items-center p-6 text-center">
          <h1 className="text-center text-3xl md:text-6xl font-black text-neutral-50">Biz haqimizda</h1>

          <FuzzyOverlay />
        </div>
      </div>
      <Wrapper>
        <div className="py-[50px] mx-[20px] xl:mx-0">
          <p className="text-lg mb-6">
            <span className="font-[600]">Lyra</span> kompaniyasi mijozlarimiz
            uchun yuqori sifatli xizmatlar va innovatsion yechimlar yaratishga
            intiladi. Bizning asosiy maqsadimiz – zamonaviy texnologiyalar
            yordamida biznesingizni rivojlantirishga ko'maklashish.
          </p>
          <p className="text-lg mb-6">
            Biz 10+ yillik tajribaga ega bo'lgan jamoamiz bilan sizga eng yaxshi
            xizmatlarni taqdim etamiz. Mijozlarimizning ishonchi va
            muvaffaqiyati bizning yutuqlarimizdir.
          </p>
          <h2 className="text-2xl font-semibold mb-4">
            Nima uchun bizni tanlaysiz?
          </h2>
          <ul className="text-lg mb-6 list-decimal list-inside">
            <li className="md:ml-4">Professional va tajribali jamoa</li>
            <li className="md:ml-4">Innovatsion va samarali yechimlar</li>
            <li className="md:ml-4">
              Mijozlar ehtiyojlarini ustuvorlik bilan qondirish
            </li>
          </ul>
        </div>
      </Wrapper>
    </>
  );
}

export default AboutPage;
