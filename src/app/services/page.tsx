import Header from '../components/Header';

export default function ServicesPage() {
  return (
    <div>
      <Header />
      <main className="bg-gray-100 p-8">
        <h1 className="text-3xl font-bold text-gray-800">Our Services</h1>
        <ul className="list-disc mt-4 ml-6">
          <li className="text-gray-700">Residential Design</li>
          <li className="text-gray-700">Commercial Design</li>
          <li className="text-gray-700">Space Planning</li>
          <li className="text-gray-700">Consultation Services</li>
        </ul>
        <Image src="/services-image.jpg" alt="Sample Design Work" width={600} height={400} className="mt-8 rounded" />
      </main>
    </div>
  );
}
