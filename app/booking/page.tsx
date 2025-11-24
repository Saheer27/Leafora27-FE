"use client";

import { useEffect, useState } from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { useForm } from "react-hook-form";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Booking() {
  const [roomCount, setRoomCount] = useState(0);
  const [msgStatus, setMsgStatus] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      contact: "",
      checkInDate: "",
      checkOutDate: "",
      personCount: 0,
      roomCount: 0,
      roomType: "",
    },
  });

  const watchPersonCount = watch("personCount");
  const watchCheckIn = watch("checkInDate");

  const getTodaysDate = () => new Date().toISOString().split("T")[0];

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (result.success) {
        setMsgStatus("Booking successful!");
        reset();
      }
    } catch (err) {
      setMsgStatus("Something went wrong!");
    }
  };

  useEffect(() => {
    const roomsNeeded = Math.ceil((watchPersonCount || 0) / 4);
    setRoomCount(roomsNeeded);
    setValue("roomCount", roomsNeeded, { shouldValidate: true });
  }, [watchPersonCount, setValue]);

  useEffect(() => {
    if (!msgStatus) return;
    const timer = setTimeout(() => {
      setMsgStatus("");
    }, 3000);

    return () => clearTimeout(timer);
  }, [msgStatus]);

  return (
    <>
      <Header />
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-50 to-gray-100 p-6">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-4xl bg-white shadow-2xl rounded-2xl p-10 space-y-10 border border-gray-100 mt-20"
        >
          <h2 className="text-3xl font-extrabold text-green-700 text-center">
            Booking Form
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* LEFT COLUMN */}
            <div className="space-y-6">
              <div className="flex flex-col space-y-1">
                <label className="font-semibold text-gray-700">Full Name</label>
                <Input
                  type="text"
                  placeholder="Enter full name"
                  className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-400"
                  {...register("fullName", {
                    required: "Full Name is required",
                    minLength: {
                      value: 3,
                      message: "Name must be at least 3 characters",
                    },
                    maxLength: {
                      value: 50,
                      message: "Name cannot exceed 50 characters",
                    },
                    pattern: {
                      value: /^[A-Za-z\s]+$/,
                      message: "Name should not contain numbers or special characters",
                    },
                  })}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col space-y-1">
                <label className="font-semibold text-gray-700">Email</label>
                <Input
                  type="email"
                  placeholder="Enter email"
                  className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-400"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              <div className="flex flex-col space-y-1">
                <label className="font-semibold text-gray-700">
                  Mobile Number
                </label>
                <Input
                  type="tel"
                  placeholder="Enter mobile number"
                  className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-400"
                  {...register("contact", {
                    required: "Mobile number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Enter 10-digit mobile number",
                    },
                  })}
                />
                {errors.contact && (
                  <p className="text-red-500 text-sm">
                    {errors.contact.message}
                  </p>
                )}
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-6">
              <div className="flex flex-col space-y-1">
                <label className="font-semibold text-gray-700">
                  Check-In Date
                </label>
                <Input
                  type="date"
                  min={getTodaysDate()}
                  className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-400"
                  {...register("checkInDate", {
                    required: "Check-in date is required",
                    onChange: (e) => {
                      const newCheckIn = e.target.value;
                      if (
                        watch("checkOutDate") &&
                        new Date(watch("checkOutDate")) < new Date(newCheckIn)
                      ) {
                        setValue("checkOutDate", "", { shouldValidate: true });
                      }
                    },
                  })}
                />
                {errors.checkInDate && (
                  <p className="text-red-500 text-sm">
                    {errors.checkInDate.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col space-y-1">
                <label className="font-semibold text-gray-700">
                  Check-Out Date
                </label>
                <Input
                  type="date"
                  min={watchCheckIn || getTodaysDate()}
                  className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-400"
                  {...register("checkOutDate", {
                    required: "Check-out date is required",
                    validate: (value) =>
                      new Date(value) >= new Date(watchCheckIn || "") ||
                      "Check-out cannot be before check-in",
                  })}
                />
                {errors.checkOutDate && (
                  <p className="text-red-500 text-sm">
                    {errors.checkOutDate.message}
                  </p>
                )}
              </div>

              <div className="space-y-1">
                <p className="font-semibold text-gray-700">Room Type</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {["Deluxe", "Suite", "Standard"].map((type) => (
                    <label key={type} className="cursor-pointer">
                      <Input
                        type="radio"
                        value={type}
                        {...register("roomType", {
                          required: "Please select a room type",
                        })}
                        className="hidden peer"
                      />
                      <div className="border rounded-xl p-3 text-center peer-checked:bg-green-600 peer-checked:text-white transition-all font-medium text-gray-700 shadow-sm">
                        {type}
                      </div>
                    </label>
                  ))}
                </div>
                {errors.roomType && (
                  <p className="text-red-500 text-sm">
                    {errors.roomType.message}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <label className="font-semibold text-gray-700">
              Number of Guests
            </label>
            <div className="flex flex-col sm:flex-row justify-between items-center bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-inner space-y-4 sm:space-y-0">
              <div className="flex items-center gap-6">
                <Button
                  type="button"
                  onClick={() =>
                    setValue("personCount", Math.max(watchPersonCount - 1, 0), {
                      shouldValidate: true,
                    })
                  }
                  className="w-10 h-10 rounded-full bg-gray-300 text-lg font-bold hover:bg-gray-400 transition"
                >
                  -
                </Button>
                <p className="font-extrabold text-3xl text-gray-800">
                  {watchPersonCount || 0}
                </p>
                <Button
                  type="button"
                  onClick={() =>
                    setValue("personCount", (watchPersonCount || 0) + 1, {
                      shouldValidate: true,
                    })
                  }
                  className="w-10 h-10 rounded-full bg-green-500 text-white text-lg font-bold hover:bg-green-600 transition"
                >
                  +
                </Button>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-700 font-medium">
                  Rooms Needed:{" "}
                  <span className="font-bold text-green-600">{roomCount}</span>
                </p>
                <p className="text-xs text-gray-500">(Max 4 guests per room)</p>
              </div>
            </div>
            <Input
              type="hidden"
              {...register("personCount", {
                required: "Please select number of guests",
                min: { value: 1, message: "At least 1 guest required" },
                max: { value: 100, message: "Maximum 100 guests allowed" },
              })}
            />
            {errors.personCount && (
              <p className="text-red-500 text-sm">
                {errors.personCount.message}
              </p>
            )}
          </div>
          {msgStatus && <h1 className="font-bold text-xl">{msgStatus}</h1>}
          <div className="flex items-center mb-4 space-x-4">
            <Button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-green-700 transition"
            >
              Submit
            </Button>
            <Button
              type="reset"
              onClick={() => reset()}
              className="bg-gray-400 w-48 text-white rounded-lg py-3 hover:bg-gray-500 transition duration-300"
            >
              Clear
            </Button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
