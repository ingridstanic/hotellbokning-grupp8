
import { NewBooking } from "../models/NewBooking";
import { createBooking } from "../services/createBooking";
import { getHotels } from "../services/getHotels"
// export const createBooking = async (form: FormData) => {
//   const guests = Number(form.get("guests"));
//   const customerId = form.get("customerId");
//   const checkInDate = form.get("checkInDate");
//   const checkOutDate = form.get("checkOutDate");

//   const { hotels } = await getHotels();

//   if (hotels.length === 0) {
//     throw new Error("No hotel found");
//   }

//   const hotelId = hotels[0].id;

//   const response = await fetch("https://aspcode.net/api/db/HotelAPI/bookings", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "X-API-Key": process.env.API_KEY!,
//     },
//     body: JSON.stringify({
//       checkInDate,
//       checkOutDate,
//       customerId,
//       guests,
//       hotelId,
//     }),
//   });

//   if (!response.ok) {
//     throw new Error("Could not create booking");
//   }

//   const data: Booking = await response.json();

//   return data;
// };

// export const registerBooking = async (form: FormData, hotelId: string) => {
 // const guests = Number(form.get("guests"));
 // const customerId = form.get("customerId") as string;
 // const checkInDate = form.get("checkInDate") as string;
 // const checkOutDate = form.get("checkOutDate") as string;

 // const newBooking: NewBooking = {
 //   guests,
 //   customerId,
 //   checkInDate,
 //   checkOutDate,
 //   hotelId,
 // };

 // const createdBooking = await createBooking(newBooking);
 // if (createdBooking.error) {
 //   throw new Error(createdBooking.error);
 // }

 // return createdBooking.booking;
//};
