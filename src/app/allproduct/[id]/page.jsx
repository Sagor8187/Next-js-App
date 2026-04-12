import Image from "next/image";
const productinfo =async (id)=>{
    let res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${id}`,{
      cache:"no-store"
    })
    let data = await res.json()

    return data
}
export default async function page({params}) {
    const {id} =await params
    let detail =await productinfo(id)
    
    const details = detail.data
 
  return (
    <div>
 <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-10">

      <div className="max-w-6xl mx-auto px-6">

        {/* HERO */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-green-600 to-emerald-400 text-transparent bg-clip-text">
            {details.dish_name}
          </h1>
          <p className="text-gray-500 mt-3">
            {details.category} • {details.cuisine}
          </p>
        </div>

        {/* MAIN SECTION */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* IMAGE CARD */}
          <div className="rounded-3xl overflow-hidden shadow-2xl group">
            <Image height={600} width={600}
              src={details.image_link}
              alt={details.dish_name}
              className="w-[400px] mx-auto h-[420px] object-cover group-hover:scale-105 transition duration-500"
            />
          </div>

          {/* INFO CARDS */}
          <div className="grid gap-4">

            {[
              { label: "⭐ Rating", value: details.rating },
              { label: "💰 Price", value: `৳ ${details.price}` },
              { label: "📍 Origin", value: details.origin_and_popularity }
            ].map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-white shadow-md hover:shadow-xl transition duration-300 border"
              >
                <p className="text-gray-500 text-sm">{item.label}</p>
                <p className="text-lg font-semibold mt-1">{item.value}</p>
              </div>
            ))}

          </div>
        </div>

        {/* GRID SECTIONS */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">

          {/* INGREDIENTS */}
          <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition">
            <h2 className="text-2xl font-bold mb-4">🥗 Ingredients</h2>

            <div className="flex flex-wrap gap-2">
              {details.main_ingredients.map((item, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm hover:bg-green-200 transition"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* ALTERNATIVE NAMES */}
          <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition">
            <h2 className="text-2xl font-bold mb-4">🍽 Alternative Names</h2>

            <ul className="space-y-2">
              {details.alternative_names.map((item, i) => (
                <li
                  key={i}
                  className="p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* NUTRITION */}
        <div className="mt-12 bg-white rounded-3xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-6">⚡ Nutrition</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(details.approximate_nutrition_per_serving).map(
              ([key, value], i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-gradient-to-br from-gray-50 to-white border hover:scale-105 transition"
                >
                  <p className="text-sm text-gray-500 capitalize">{key}</p>
                  <p className="font-bold text-lg">{value}</p>
                </div>
              )
            )}
          </div>
        </div>

        {/* STEPS */}
        <div className="mt-12 bg-white rounded-3xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-6">👨‍🍳 Cooking Steps</h2>

          <div className="space-y-4">
            {details.cooking_steps.map((step, i) => (
              <div
                key={i}
                className="flex gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition"
              >
                <div className="min-w-[35px] h-[35px] flex items-center justify-center bg-green-500 text-white rounded-full font-bold">
                  {i + 1}
                </div>
                <p className="text-gray-700">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* PRICE */}
        <div className="mt-12 bg-white rounded-3xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-6">💸 Price in Dhaka</h2>

          <div className="grid md:grid-cols-3 gap-4">
            {Object.entries(details.possible_price_in_dhaka).map(
              ([key, value], i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl border hover:bg-green-50 transition"
                >
                  <p className="font-semibold capitalize">{key}</p>
                  <p className="text-gray-600">{value}</p>
                </div>
              )
            )}
          </div>
        </div>

      </div>
    </div>
      
    </div>
  )
}
