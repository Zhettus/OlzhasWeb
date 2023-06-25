import React from "react";

const Button = ({ styles }) => (

    <a href="#registration" class="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-700 rounded-[10px] outline-none ${styles}`}>Регистрация</a>
);

export default Button;
