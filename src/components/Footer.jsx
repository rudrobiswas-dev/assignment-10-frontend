import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-4 gap-12">

          {/* Logo */}
          <div>
            <h2 className="text-4xl font-black uppercase">
              black
              <span className="ml-1 rounded bg-red-500 px-2 py-1 text-xs">
                athletics
              </span>
            </h2>

            <p className="mt-6 text-gray-400">
              Transform your body and achieve your fitness goals with
              expert trainers and modern equipment.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button className="btn btn-outline btn-sm">
                Show On Map
              </button>

              <button className="btn btn-outline btn-sm">
                Call Us
              </button>

              <button className="btn btn-outline btn-sm">
                blacksmithathletics@gmail..com
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold uppercase mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/dashboard">Dashboard</Link></li>
              <li><Link href="/login">Login</Link></li>
              <li><Link href="/register">Register</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold uppercase mb-5">
              Contact
            </h3>

            <ul className="space-y-3 text-gray-400  uppercase ">
              <li>Dhaka, Bangladesh</li>
              <li>+880 1234-567890</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold uppercase mb-5">
              Social
            </h3>

            <ul className="space-y-3 text-gray-400 uppercase ">
              <li><Link href="#">Facebook</Link></li>
              <li><Link href="#">Instagram</Link></li>
              <li><Link href="#">YouTube</Link></li>
              <li><Link href="#">Twitter/X</Link></li>
            </ul>
          </div>

        </div>

        <div className="divider divider-neutral my-14" />

        <div className="flex flex-col md:flex-row justify-between text-sm text-gray-500">
          <p className="uppercase ">© 2026 black smith athletics. All Rights Reserved.</p>
          <p>POWER BY RUDRO</p>
        </div>
      </div>
    </footer>
  );
}