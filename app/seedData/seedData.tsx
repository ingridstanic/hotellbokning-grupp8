import { customers } from "../data/customers";
import { hotel } from "../data/hotel";
import { seedCustomers } from "../lib/seedCustomers";
import { seedHotel } from "../lib/seedHotel";

export const SeedData = async () => {
  await seedCustomers(customers);
  await seedHotel(hotel);
  return null;
};
