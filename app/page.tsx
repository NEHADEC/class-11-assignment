
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-950 to-blue-800 text-white flex flex-col items-center justify-center p-6">
      {/* Header Section */}
      <h1 className="text-5xl font-extrabold mb-4 animate-bounce text-center text-blue-100">
        Welcome to Neha's World 🌟
      </h1>
      <p className="text-lg font-medium mb-6 text-center text-blue-200">
        Explore the beauty of design and functionality created by <span className="font-bold">Neha Bilal</span>.  
      </p>

      {/* Call-to-Action Section */}
      <Link
        href="/fetch-posts"
        className="px-8 py-4 bg-white text-blue-800 font-bold text-lg rounded-full shadow-lg hover:bg-gray-100 transition transform hover:scale-110"
      >
        View Posts 📄
      </Link>

      {/* Footer Section */}
      <footer className="absolute bottom-4 text-center text-sm font-light">
        <p>Designed with ❤️ by <span className="font-semibold">Neha Bilal</span></p>
        <p className="text-xs mt-1">Frontend Developer Extraordinaire</p>
      </footer>
    </main>
  );
}
