import React from 'react'

const Herosection = () => {

  return (
    <section className="bg-black py-12" style={{
        fontFamily:"cursive"
    }}>
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
        {/* Product Image */}
        <div className="flex-1">
          <img
            src="/hero.jpg"
            alt="Featured Product"
            className="w-full h-[400px] object-contain rounded-lg shadow-lg"
          />
        </div>

        {/* Product Info */}
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-4xl font-bold">Welcome to Clothes Mafia</h1>
          <p className="text-white">
            Discover our latest product with high-quality materials and unbeatable features. Perfect for your daily needs. Starting from .....
          </p>
          <p className="text-2xl font-semibold text-blue-600">$10</p>
          <button className="bg-white text-black px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Shop Now
          </button>
        </div>
      </div>
    </section>
)}

export default Herosection