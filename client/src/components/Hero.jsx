import styles from "../style";
import { discount, olzhas } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          {/*<img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Скидка первым покупателям{" "}
  </p>*/}
        </div>

        <div >
          <h1 className="flex-1 font-poppins font-semibold ss:text-[45px] text-[40px] text-white ss:leading-[100.8px] leading-[75px]">
          Откройте безлимитное количество<br className="sm:block hidden" />{" "}
            <span className="text-gradient">знаний</span>{" "} посетив вебинары, и узнайте ответы
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
          </div>
        </div>
        

        <h1 className="font-poppins font-semibold ss:text-[45px] text-[40px] text-white ss:leading-[100.8px] leading-[75px] w-full">
        на эти вопросы:
        </h1>
        <p className={`${styles.paragraph} max-w-[660px] mt-4`}>
        Как улучшить качество своей жизни?
        Обеспечить комфортное, безбедное будущее себе и своим близким при помощи инвестиций?
        Уделяя при этом не более 1 часа в неделю?
        </p>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={olzhas} alt="billing" className="w-[100%] h-[100%]  rounded-full" />

        {/* gradient start 
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
