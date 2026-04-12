import Link from "next/link";
import Image from "next/image"
export default function Home() {
  return (
     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 items-center gap-10">

        <div>
          <h1 className="text-5xl font-extrabold leading-tight">
            Delicious Food <br />
            <span className="text-green-500">Delivered Fast 🍽️</span>
          </h1>

          <p className="text-gray-600 mt-4">
            Discover healthy, tasty and premium meals from around the world.
            Order your favorite dishes in seconds.
          </p>

          <div className="flex gap-4 mt-6">
            <Link
              href="/foods"
              className="px-6 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition"
            >
              Explore Foods
            </Link>

            <Link
              href="/about"
              className="px-6 py-3 border rounded-xl hover:bg-gray-200 transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* HERO IMAGE */}
        <div className="relative w-full h-[500px]">
          <Image
            
            src="https://res.cloudinary.com/dj493l0jy/image/upload/v1773919153/foods/00dda1e9-bb86-42d3-98f5-8336c6a3dcc1.png"
            alt="Food Hero"
            fill
            className="object-cover h-100 w-100  rounded-3xl shadow-2xl"
          />
        </div>
      </section>

      {/* CATEGORY SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold mb-6">🔥 Popular Categories</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          {["Breakfast", "Lunch", "Dinner", "Healthy", "Fast Food", "Dessert", "Drinks", "Snacks"].map(
            (item, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-2xl shadow hover:shadow-xl transition cursor-pointer text-center font-semibold"
              >
                {item}
              </div>
            )
          )}

        </div>
      </section>

      {/* FEATURED SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold mb-6">⭐ Featured Foods</h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white rounded-2xl shadow hover:shadow-2xl transition overflow-hidden"
            >

              <div className="relative h-[340px] w-full">
                <Image
                  src="https://res.cloudinary.com/dj493l0jy/image/upload/v1773919153/foods/00dda1e9-bb86-42d3-98f5-8336c6a3dcc1.png"
                  alt="food"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4">
                <h3 className="font-bold text-lg">Grilled Chicken Bowl</h3>
                <p className="text-gray-500 text-sm mt-1">
                  Healthy • High Protein
                </p>

                <div className="flex justify-between items-center mt-4">
                  <p className="font-bold text-green-600">৳ 350</p>

                  <Link
                    href="/foods/food_002"
                    className="px-3 py-1 bg-green-500 text-white rounded-lg text-sm"
                  >
                    View
                  </Link>
                </div>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">

        <h2 className="text-4xl font-bold">
          Ready to order your favorite food?
        </h2>

        <p className="text-gray-600 mt-3">
          Fast delivery • Fresh ingredients • Best quality
        </p>

        <Link
          href="/foods"
          className="inline-block mt-6 px-8 py-4 bg-black text-white rounded-2xl hover:bg-gray-800 transition"
        >
          Start Ordering 🚀
        </Link>

      </section>

    </div>
  );
}
