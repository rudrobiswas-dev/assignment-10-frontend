// import "./globals.css";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// import { Bruno_Ace_SC } from "next/font/google";

// const bruno = Bruno_Ace_SC({
//   subsets: ["latin"],
//   weight: "400",
// });


// export const metadata = {
//   title: "Blacksmith Athletics",
//   description: "Forge Strength. Build Discipline.",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className="min-h-screen flex flex-col ">
//         <Navbar isLoggedIn={false} />

//         <main className="flex-1">
//           {children}
//         </main>

//         <Footer />
//       </body>
//     </html>
//   );
// }


import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Bruno_Ace_SC } from "next/font/google";

const bruno = Bruno_Ace_SC({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Blacksmith Athletics",
  description: "Forge Strength. Build Discipline.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en " data-theme="light">
      <body className={bruno.className}>
        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}