import Link from "next/link";

// SSR function (server-side fetch)
async function getReviews() {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments?_limit=6", {
    cache: "no-store",
  });

  return res.json();
}

export default async function ReviewPage() {
  const reviews = await getReviews();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl font-extrabold">
          Customer <span className="text-green-500">Reviews ⭐</span>
        </h1>

        <p className="text-gray-600 mt-3">
          Real feedback from our happy customers
        </p>
      </section>

      {/* REVIEWS GRID */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-6">

        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-2xl shadow hover:shadow-2xl transition p-5"
          >

            {/* NAME */}
            <h3 className="font-bold text-lg capitalize">
              {review.name}
            </h3>

            {/* EMAIL */}
            <p className="text-sm text-gray-500">
              {review.email}
            </p>

            {/* STARS */}
            <div className="text-yellow-500 mt-2">
              ⭐⭐⭐⭐⭐
            </div>

            {/* COMMENT */}
            <p className="text-gray-600 mt-3 text-sm">
              {review.body}
            </p>
          </div>
        ))}

      </section>

      {/* CTA */}
      <section className="text-center pb-16">
        <h2 className="text-3xl font-bold">
          Want to leave a review?
        </h2>

        <Link
          href="/review-form"
          className="inline-block mt-4 px-6 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition"
        >
          Write Review
        </Link>
      </section>

    </div>
  );
}