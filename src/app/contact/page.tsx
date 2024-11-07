import Header from '../components/Header';

export default function ContactPage() {
  return (
    <div>
      <Header />
      <main className="bg-gray-100 p-8">
        <h1 className="text-3xl font-bold text-gray-800">Contact Us</h1>
        <p className="mt-4 text-gray-700">We would love to hear from you. Please reach out with any questions or to schedule a consultation.</p>
        <form className="mt-8 space-y-4">
          <div>
            <label htmlFor="name" className="block font-medium text-gray-700">Name</label>
            <input type="text" id="name" className="mt-1 block w-full p-2 border border-gray-300 rounded" />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium text-gray-700">Email</label>
            <input type="email" id="email" className="mt-1 block w-full p-2 border border-gray-300 rounded" />
          </div>
          <div>
            <label htmlFor="message" className="block font-medium text-gray-700">Message</label>
            <textarea id="message" rows={4} className="mt-1 block w-full p-2 border border-gray-300 rounded"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Send</button>
        </form>
      </main>
    </div>
  );
}
