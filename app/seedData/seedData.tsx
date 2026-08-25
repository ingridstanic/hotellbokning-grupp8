import { bookings } from "../data/bookings";
import { customers } from "../data/customers";
import { hotel } from "../data/hotel";
import { seedBookings } from "../lib/seedBookings";
import { seedCustomers } from "../lib/seedCustomers";
import { seedHotel } from "../lib/seedHotel";

export const SeedData = async () => {
  await seedCustomers(customers);
  await seedHotel(hotel);
  // await seedBookings(bookings);
  return null;
};
