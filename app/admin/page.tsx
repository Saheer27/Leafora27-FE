"use client";

import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
export default function Admin() {
  const adminHeaderList = [
    "Name",
    "Email",
    "Check-In",
    "Check-Out",
    "Persons",
    "Rooms",
    "Room Type",
  ];
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBookings = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookings`);
      const result = await response.json();
      if (result.success && result.booking) {
        // Sort by _id descending (latest first)
        const sorted = result.booking.sort((a: any, b: any) =>
          b._id.localeCompare(a._id)
        );
        setBookings(sorted);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchBookings();
  }, []);
  return (
    <>
      <Header />
      {bookings && <></>}
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-gray-100 p-6">
        <h2 className="text-3xl font-extrabold text-green-700 text-center mb-3 mt-20">
          Admin – Bookings List
        </h2>
        {loading && (
          <p className="text-center text-lg text-gray-600 mt-10">Loading...</p>
        )}

        {!loading && bookings.length === 0 && (
          <p className="text-center text-lg text-gray-600 mt-10">
            No bookings found
          </p>
        )}

        {!loading && bookings.length > 0 && (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden border border-gray-300">
              <thead className="bg-gray-800 text-white">
                <tr>
                  {adminHeaderList.map((item, index) => (
                    <th key={index} className="py-5 px-4 text-left">
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {bookings.map((item: any) => (
                  <tr
                    key={item._id}
                    className="odd:bg-gray-50 even:bg-gray-100 hover:bg-gray-300 transition"
                  >
                    <td className="py-3 px-4 text-black text-left">
                      {item.fullName}
                    </td>
                    <td className="py-3 px-4 text-black text-left">
                      {item.email}
                    </td>
                    <td className="py-3 px-4  text-black text-left">
                      {item.checkInDate?.slice(0, 10)}
                    </td>
                    <td className="py-3 px-4 text-black text-left">
                      {item.checkOutDate?.slice(0, 10)}
                    </td>
                    <td className="py-3 px-4  text-black text-left">
                      {item.personCount}
                    </td>
                    <td className="py-3 px-4 text-black text-left">
                      {item.roomCount}
                    </td>
                    <td className="py-3 px-4 text-black text-left">
                      {item.roomType}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
