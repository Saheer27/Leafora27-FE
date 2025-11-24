import Image from "next/image";

export default function Services() {
  
  const list = [
    {
      label: "Accommodation",
      src: "/images/accomodation.png",
      description: "Cozy rooms with nature views.",
    },
    {
      label: "Adventure Activities",
      src: "/images/adventure.png",
      description: "Trekking, hiking & nature activities.",
    },
    {
      label: "Wellness & Spa",
      src: "/images/wellness.png",
      description: "Relaxing spa, yoga & meditation.",
    },
  ];

  return (
    <section
      id="services"
      className="bg-gradient-to-br from-green-50 to-gray-100 py-10"
    >
      <h2 className="text-3xl font-bold text-center mb-5 text-green-700">
        Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
        {list.map((item, index) => (
          <div
            key={index}
            className="text-center p-6 bg-white shadow-md hover:shadow-xl transition rounded-2xl"
          >
            <Image
              src={item.src}
              alt={item.label}
              width={250}
              height={100}
              className="mx-auto mb-4 rounded-lg"
            />
            <h1 className="text-xl font-bold mb-2 text-green-700">
              {item.label}
            </h1>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
