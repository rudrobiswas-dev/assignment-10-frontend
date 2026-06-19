"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import AboutSection3D from "@/components/AboutSection3D";
import LocationSection from "@/components/LocationSection";

export default function Home() {
  const images = [
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1920&q=80",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);


  return (
    <>
      {/* Hero */}
      <section
        className="hero min-h-screen transition-all duration-1000"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay bg-black/75"></div>

        <div className="hero-content text-neutral-content w-full max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
            <div>
              <p className="uppercase tracking-[0.4em] text-error font-semibold mb-4">
                Forge Strength. Build Discipline.
              </p>

              <h1 className="text-5xl md:text-7xl font-black uppercase leading-tight">
                Forge Your
                <br />
                <span className="text-error">Strongest</span> Self
              </h1>

              <p className="mt-8 max-w-xl text-lg text-gray-300">
                Blacksmith Athletics helps athletes and fitness enthusiasts
                build strength, endurance, and confidence through elite
                coaching and world-class training.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">
                <Link href="/login" className="btn glitch-btn btn-lg">
                  Join Today
                </Link>

                <Link href="/about" className="btn btn-lg">
                  Learn More
                </Link>
              </div>
            </div>

            <div className="lg:justify-self-end">
              <div className="card bg-black/40 backdrop-blur-lg border border-white/10 shadow-2xl max-w-md">
                <div className="card-body">
                  <h2 className="text-3xl font-black uppercase">
                    Where Athletes
                    <br />
                    Are Forged
                  </h2>

                  <p className="text-gray-300 mt-3">
                    Personalized programs, certified coaches, and a supportive
                    community focused on helping you perform at your highest
                    level.
                  </p>

                  <button className="btn glitch-btn mt-6">
                    Personal Training
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-base-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase">
              Why Choose
              <span className="text-error">
                {" "}
                Blacksmith Athletics
              </span>
            </h2>

            <p className="mt-4 text-base-content/70 max-w-2xl mx-auto">
              Everything you need to achieve your fitness and athletic goals
              under one roof.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">Elite Coaching</h3>

                <p>
                  Expert trainers dedicated to helping you maximize results
                  safely and efficiently.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">Strength Training</h3>

                <p>
                  Professional equipment designed for powerlifting,
                  bodybuilding, and athletic performance.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">Nutrition Plans</h3>

                <p>
                  Personalized meal guidance to support fat loss, muscle gain,
                  and recovery.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">Community Support</h3>

                <p>
                  Train alongside motivated athletes and become part of a strong
                  fitness culture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Latest Blog */}
      <section className="py-24 bg-base-100">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-center mb-12">
            <div>
                <p className="uppercase text-error font-semibold tracking-widest">
                Blog
                </p>

                <h2 className="text-5xl font-black uppercase mt-2">
                Stay In The Loop
                </h2>
            </div>

            <Link href="/blog" className="btn btn-error">
                More Posts
            </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
                <div
                key={item}
                className="card bg-base-200 shadow-xl hover:shadow-2xl transition"
                >
                <figure>
                    <img
                    src={`https://picsum.photos/600/400?random=${item}`}
                    alt="blog"
                    className="h-64 w-full object-cover"
                    />
                </figure>

                <div className="card-body">
                    <p className="text-error text-xs uppercase">
                    October 17, 2024
                    </p>

                    <h3 className="font-black text-2xl uppercase">
                    Fitness Motivation Tips
                    </h3>

                    <button className="btn btn-error btn-sm w-fit mt-4">
                    Read More
                    </button>
                </div>
                </div>
            ))}
            </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection3D />

      {/* Location / Branch Section */}
      <LocationSection />


      {/* Big Membership Banner   */}
      <section className="bg-error py-8 overflow-hidden">
        <div className="whitespace-nowrap animate-marquee">
            <h2 className="text-white text-6xl md:text-8xl font-black uppercase">
            Become A Member • Train Hard • Build Strength • Become A Member •
            </h2>
        </div>
      </section>
    </>
  );
}

