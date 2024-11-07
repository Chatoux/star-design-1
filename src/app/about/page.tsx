import Header from '../components/Header';

export default function AboutPage() {
  return (
    <div>
      <Header />
      <main className="bg-gray-100 p-8">
        <h1 className="text-3xl font-bold text-gray-800">About Us</h1>
        <p className="mt-4 text-gray-700">Star Design 1 is committed to providing top-notch interior design services that combine aesthetics and functionality to create your dream spaces.</p>
        <Image src="/about-image.jpg" alt="Interior Design Sample" width={600} height={400} className="mt-8 rounded" />
      </main>
    </div>
  );
}
