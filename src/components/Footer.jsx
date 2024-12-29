import Wrapper from "../layout/Wrapper";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="bg-black text-neutral-50 rounded-t-[20px]">
        <Wrapper>
          <div className="mx-[20px] xl:mx-0 py-[20px] border-b-[2px] border-b-[#2e2d2da8] flex md:items-center md:justify-between flex-col md:flex-row">
            <ul className="flex flex-col gap-4">
              <li>
                <a href="#" className="text-[20px] transition-all ease-in-out hover:text-[#ffffff83]">
                  Asosiy
                </a>
              </li>
              <li>
                <a href="#" className="text-[20px] transition-all ease-in-out hover:text-[#ffffff83]">
                  Biz Haqimizda
                </a>
              </li>
              <li>
                <a href="#" className="text-[20px] transition-all ease-in-out hover:text-[#ffffff83]">
                  Loyihalar
                </a>
              </li>
            </ul>
            <div className="pt-[20px]">
              <img src="/Lyra_org.png" className="max-w-[222px] sm:max-w-[333px] md:max-w-[444px]" />
            </div>
          </div>
          <div className="pt-[10px] text-center text-sm text-neutral-500">
            <p>Barcha huquqlar himoyalangan © {currentYear}</p>
          </div>
        </Wrapper>
      </div>
    </>
  );
}

export default Footer;
