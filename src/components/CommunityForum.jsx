"use client";

import Link from "next/link";

export default function CommunityForum() {
  const posts = [
    {
      id: 1,
      image: "https://picsum.photos/600/400?random=1",
      date: "October 17, 2024",
      title: "Fitness Motivation Tips",
    },
    {
      id: 2,
      image: "https://picsum.photos/600/400?random=2",
      date: "October 17, 2024",
      title: "Strength Training Guide",
    },
    {
      id: 3,
      image: "https://picsum.photos/600/400?random=3",
      date: "October 17, 2024",
      title: "Nutrition For Athletes",
    },
  ];

  return (
    <section className="py-24 bg-base-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Community Forum Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-12">
          <div>
            <p className="uppercase text-error font-semibold tracking-widest">
              Community Forum
            </p>

            <h2 className="text-5xl font-black uppercase mt-2">
              Stay In The Loop
            </h2>
          </div>

          <Link href="/forum" className="btn btn-error">
            View Discussions
          </Link>
        </div>

        {/* Forum Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <figure>
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-64 w-full object-cover"
                />
              </figure>

              <div className="card-body">
                <p className="text-error text-xs uppercase">
                  {post.date}
                </p>

                <h3 className="font-black text-2xl uppercase">
                  {post.title}
                </h3>

                <button className="btn btn-error btn-sm w-fit mt-4">
                  Join Discussion
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}