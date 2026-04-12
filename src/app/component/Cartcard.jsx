"use client";

import Image from "next/image";
import { useContext } from "react";
import { Mycontext } from "../context/Cartcontext";


export default function Cartcard() {
  const { cart } = useContext(Mycontext);

  return (
    <div className="max-w-4xl mx-auto p-5 space-y-4">

      <h1 className="text-2xl font-bold">My Cart 🛒</h1>

      {/* EMPTY STATE */}
      {cart?.length === 0 ? (
        <p className="text-gray-500">Cart is empty</p>
      ) : (
        cart?.map((item) => (
          <div
            key={item?.id}
            className="flex gap-4 border rounded-xl p-4 shadow-sm bg-white"
          >

            {/* IMAGE */}
            <div className="relative w-24 h-24 rounded-lg overflow-hidden">
              <Image
                src={item?.image_link}
                alt={item?.dish_name || "food"}
                fill
                className="object-cover"
              />
            </div>

            {/* INFO */}
            <div className="flex-1">

              <h2 className="text-lg font-semibold text-gray-800">
                {item?.dish_name}
              </h2>

              <p className="text-sm text-gray-500">
                {item?.category} • {item?.cuisine}
              </p>

              {/* PRICE + RATING */}
              <div className="flex justify-between mt-2">
                <p className="text-green-600 font-bold">
                  ৳ {item?.price}
                </p>

                <p className="text-yellow-500">
                  ⭐ {item?.rating}/5
                </p>
              </div>

              {/* NUTRITION (optional safe access) */}
              <p className="text-xs text-gray-400 mt-1">
                Calories: {item?.approximate_nutrition_per_serving?.calories}
              </p>

            </div>

          </div>
        ))
      )}

    </div>
  );
}