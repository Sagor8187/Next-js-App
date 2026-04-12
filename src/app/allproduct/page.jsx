import Image from "next/image"
import Link from "next/link"


let loadData = async ()=>{
  const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/foods",{
    cache:'no-store'
  })
  const data = await res.json()

  return data
}


export default async function page() {
  const prodcutcall =await loadData()
  const product = prodcutcall.data
  

  return (
    <div> 
      <h1 className="text-center my-10 mx-auto text-green-500 font-bold text-4xl">Our Available Product </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      
      {product.map((item) => (
        <div 
          key={item.id} 
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden "
        >
          
          {/* Image */}
          <Image height={600} width={600}
            src={item.image_link} 
            alt={item.dish_name}
            className=" h-auto w-50 object-cover mx-auto"
          />

          {/* Content */}
          <div className="p-4 space-y-2">
            
            {/* Title */}
            <h2 className="text-lg font-bold text-gray-800">
              {item.dish_name}
            </h2>

            {/* Category */}
            <p className="text-sm text-gray-500">
              {item.category}
            </p>

            {/* Price */}
            <p className="text-green-600 font-semibold">
              ৳ {item.price}
            </p>

            {/* Rating */}
            <p className="text-yellow-500">
              ⭐ {item.rating}
            </p>

            {/* Button */}
            <Link href={`/allproduct/${item.id}`}>
            <button className="mt-3 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">
              View Details
            </button>
            </Link>
        

          </div>
        </div>
      ))}

    </div>
    </div>
  )
}
