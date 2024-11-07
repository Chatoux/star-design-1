import Image from 'next/image';
import Header from './components/Header';

export default function HomePage() {
  return (
    <div>
      <Header />
      <main className="bg-gray-100 p-8">
        <section
          className="relative h-screen flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url('/hero-background.jpg')` }}
        >
          <div className="text-center bg-white bg-opacity-75 p-8 rounded">
            <h1 className="text-4xl font-bold text-gray-800">Welcome to Star Design 1</h1>
            <p className="text-lg mt-4">Creating beautiful living spaces with elegance and functionality.</p>
            <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Our Projects
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
