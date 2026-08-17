import { bookings } from "../data/bookings";
import { customers } from "../data/customers";
import { hotel } from "../data/hotel";
import { seedBookings } from "../lib/seedBookings";
import { seedCustomers } from "../lib/seedCustomers";
import { seedHotel } from "../lib/seedHotel";
import { getBookings } from "../services/getBookings";
import { getCustomerByEmail, getCustomers } from "../services/getCustomers";
import { getHotels } from "../services/getHotels";

export const SeedData = async () => {
  // await seedCustomers(customers);
  // await seedHotel(hotel);
  // await seedBookings(bookings);
  await getBookings();
  await getCustomers();
  await getCustomerByEmail("Kalle@mail.com");
  await getHotels();
  return null;
};
