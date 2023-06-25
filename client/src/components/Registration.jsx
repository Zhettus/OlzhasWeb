import React, { useState } from 'react';


function SignUpForm() {

  return (
    <section id="registration">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Регистрация на вебинар
            </h1>
            <form action="https://getform.io/f/e48cadde-ee2a-444c-b4a5-554118687a95" method="POST" encType="multipart/form-data" className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ваше Имя</label>
                <input type="text" name="name" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Введите свое имя" required/>
              </div>
              <div>
                <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="text" name="number" id="number" placeholder="Введите ваш номер телефона" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>
              <button type="submit" className="w-full bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800   bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-700">Зарегистрироваться</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUpForm;
