"use server";
import { Booking } from "../models/Booking";
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
          "https://hotelapi-efatf0cfevcgb5gd.swedencentral-01.azurewebsites.net/booking/create",
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

export const limitBookings = async () => {};

export const seedBooking = async (formData: FormData) => {
  const guests = formData.get("guests");
  const customerId = formData.get("customerId");
  const checkInDate = formData.get("checkInDate");
  const checkOutDate = formData.get("checkOutDate");

  fetch("https://aspcode.net/api/db/HotelAPI/bookings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key":
        "jsonsrv_13315a4a470dd57817cb978cfe887090e4268517b1d4e84ca99223d51c1d32f8",
    },
    body: JSON.stringify({
      checkInDate: checkInDate,
      checkOutDate: checkOutDate,
      customerId: customerId,
      guests: guests,
      hotelId: 0,
      id: 0,
    }),
  })
    .then((r) => r.json())
    .then((data: Booking) => console.log(data));
};
