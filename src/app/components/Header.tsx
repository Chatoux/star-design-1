import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-lg font-semibold">Star Design 1</div>
        <nav className="flex space-x-4">
          <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
          <Link href="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
