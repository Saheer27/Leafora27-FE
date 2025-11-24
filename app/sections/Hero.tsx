export default function Hero() {
  return (
    <section
      className="relative h-[90vh] flex items-center justify-center bg-cover bg-center text-white bg-gradient-to-br from-green-50 to-gray-100"
      style={{ backgroundImage: "url('/images/banner.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Leafora27 Resort</h1>
        <p className="text-lg mb-6">Reconnect with Nature. Relax. Refresh.</p>
        <a
          href="/booking"
          className="px-6 py-3 bg-green-700 hover:bg-green-800 rounded-lg text-white"
        >
          Book Now
        </a>
      </div>
    </section>
  );
}
