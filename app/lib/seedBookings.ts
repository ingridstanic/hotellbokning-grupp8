"use server";
import { NewBooking } from "../models/NewBooking";
import { getBookings } from "../services/getBookings";
import { createBookingKey } from "../Utils/createBookingKey";

export const seedBookings = async (bookings: NewBooking[]) => {
  const bookingsFromDB = await getBookings();

  //går igenom varje booking
  //skapar key
  //går igenom varje bookning från DB, skapar key jämnför key från DB med key från lista med data
  for (const booking of bookings) {
    const newBookingkey = createBookingKey(booking);
    const alreadyExistingBooking = bookingsFromDB?.some(
      (bFromDB) => createBookingKey(bFromDB) === newBookingkey,
    );

    //om inte key, CREATE
    if (!alreadyExistingBooking) {
      try {
        const response = await fetch(
          "https://aspcode.net/api/db/HotelAPI/bookings",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              hotelId: booking.hotelId,
              customerId: booking.customerId,
              checkInDate: booking.checkInDate,
              checkOutDate: booking.checkOutDate,
              guests: booking.guests,
            }),
          },
        );
        console.log(newBookingkey, alreadyExistingBooking);

        if (response.ok) {
          console.log("Bookings added to database.");
        } else {
          console.log("POST failed", response.status);
        }
      } catch (error) {
        console.error("could not create bookings.");
      }
    }
  }
};
