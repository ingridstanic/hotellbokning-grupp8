import { NewBooking } from "../models/NewBooking";
import { getBookings } from "../services/getBookings";
import { createBookingKey } from "../Utils/createBookingKey";
import { createBooking } from "../services/createBooking";

import { getHotels } from "../services/getHotels";
import { getCustomers } from "../services/getCustomers";
import { BookingSeed } from "../data/bookings";

export const seedBookings = async (bookingSeeds: BookingSeed[]) => {
  const { hotels } = await getHotels();
  const { customers } = await getCustomers();
  const { bookings: bookingsFromDB } = await getBookings();
  const existingKeys = new Set(
    bookingsFromDB.map((bFromDB) => createBookingKey(bFromDB)),
  );

  for (const seed of bookingSeeds) {
    const hotel = hotels.find((h) => h.address === seed.hotelAddress);
    const customer = customers.find((c) => c.email === seed.customerEmail);

    if (!hotel || !customer) {
      console.error(
        `Could not find customer or hoteladress ${seed.hotelAddress}, ${seed.customerEmail}.`,
      );
      continue;
    }

    const booking: NewBooking = {
      hotelId: hotel.id,
      customerId: customer.id,
      checkInDate: seed.checkInDate,
      checkOutDate: seed.checkOutDate,
      guests: seed.guests,
    };
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
