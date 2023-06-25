import styles from "../style";
import { arrowUp } from "../assets";
import { navLinks } from "../constants";



const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-700 p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient"></span>
        </p>
        <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
      </div>
      
      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <button className="text-gradient"><a href="#registration">Регистрация</a></button>
      </p>
    </div>
  </div>
);

export default GetStarted;
