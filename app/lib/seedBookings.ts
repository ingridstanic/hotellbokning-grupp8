import { NewBooking } from "../models/NewBooking";
import { getBookings } from "../services/getBookings";
import { createBookingKey } from "../Utils/createBookingKey";
import { createBooking } from "../services/createBooking";

export const seedBookings = async (bookings: NewBooking[]) => {
  const { bookings: bookingsFromDB } = await getBookings();
  const existingKeys = new Set(
    bookingsFromDB.map((bFromDB) => createBookingKey(bFromDB)),
  );

  for (const booking of bookings) {
    const newBookingkey = createBookingKey(booking);
    if (!existingKeys.has(newBookingkey)) {
      const { booking: createdBooking, error } = await createBooking(booking);

      if (error) {
        console.error("Could not create booking", error);
      } else {
        existingKeys.add(newBookingkey);
      }
    }
  }
};
