import Image from "next/image";

export default function Gallery() {
  const images = [
    { id: "1", src: "/images/img1.jpg" },
    { id: "2", src: "/images/img2.jpg" },
    { id: "3", src: "/images/img3.jpg" },
  ];

  return (
    <section
      id="gallery"
      className="py-10 bg-gradient-to-br from-green-50 to-gray-100"
    >
      <h2 className="text-3xl font-bold text-center mb-5 text-green-700">
        Gallery
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
        {images.map((item) => (
          <div
            key={item.id}
            className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <Image
              src={item.src}
              width={800}
              height={600}
              alt="Resort Image"
              className="object-cover w-full h-64 hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
