// "use client";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useState } from "react";

// export default function SignupForm() {
//    const router = useRouter();
//   const [form, setForm] = useState({ name: "", email: "", password: "" });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const res = await fetch("http://localhost:5000/api/auth/signup", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(form),
//     });

//     const data = await res.json();

//     if (res.ok) {
//       alert("Signup successful! ");
//      router.push("/Login");
//     } else {
//       alert(data.message || "Signup failed");
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg mt-10">
//       <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
//       <form className="space-y-5" onSubmit={handleSubmit}>
//         <div>
//           <label
//             htmlFor="name"
//             className="block mb-1 font-semibold text-gray-700"
//           >
//             Full Name
//           </label>
//           <input
//             onChange={handleChange}
//             type="text"
//             id="name"
//             name="name"
//             placeholder="Your full name"
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div>
//           <label
//             htmlFor="email"
//             className="block mb-1 font-semibold text-gray-700"
//           >
//             Email Address
//           </label>

//           <input
//             onChange={handleChange}
//             type="email"
//             id="email"
//             name="email"
//             placeholder="you@example.com"
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div>
//           <label
//             htmlFor="password"
//             className="block mb-1 font-semibold text-gray-700"
//           >
//             Password
//           </label>

//           <input
//             onChange={handleChange}
//             type="password"
//             id="password"
//             name="password"
//             placeholder="Create a password"
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div className="flex justify-center">
//           <h1>
//             Already have an account
//             <Link
//               href="/Login"
//               className="text-sm text-center ml-2 text-blue-900 underline"
//             >
//               Login
//             </Link>
//           </h1>
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-3 cursor-pointer rounded-md font-semibold hover:bg-blue-700 transition-colors"
//         >
//           Sign Up
//         </button>
//       </form>
//     </div>
//   );
// }

"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignupForm() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/signup`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      }
    );

    const data = await res.json();

    if (res.ok) {
      alert("Signup successful!");
      router.push("/Login");
    } else {
      alert(data.message || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-600 via-black to-gray-900 ">
      <div className="relative z-10 max-w-md w-full border-pink-600 border text-white p-8 rounded-xl shadow-xl backdrop-blur-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-pink-400">
          Create an Account
        </h2>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block mb-1 font-semibold text-pink-300"
            >
              Full Name
            </label>
            <input
              onChange={handleChange}
              type="text"
              id="name"
              name="name"
              placeholder="Your full name"
              className="w-full px-4 py-2 bg-black border border-pink-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-1 font-semibold text-pink-300"
            >
              Email Address
            </label>
            <input
              onChange={handleChange}
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 bg-black border border-pink-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-1 font-semibold text-pink-300"
            >
              Password
            </label>
            <input
              onChange={handleChange}
              type="password"
              id="password"
              name="password"
              placeholder="Create a password"
              className="w-full px-4 py-2 bg-black border border-pink-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div className="text-sm text-center text-pink-200">
            Already have an account?
            <Link
              href="/Login"
              className="ml-1 underline hover:text-pink-400 transition"
            >
              Login
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-pink-700 hover:bg-pink-800 transition-colors text-white py-3 rounded-md font-semibold shadow-lg"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
