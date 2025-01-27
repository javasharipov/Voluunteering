import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center">
    <h1 class="text-9xl font-bold text-blue-600">404</h1>
    <p class="text-2xl font-medium text-gray-800 mt-4">Sahifa topilmadi!</p>
    <p class="text-gray-600 mt-2">Qidirayotgan sahifangiz mavjud emas yoki o'chirib tashlangan.</p>
    <Link to={"/"} class="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition">
      Bosh sahifaga qaytish
    </Link>
  </div>
  )
}

export default NotFound