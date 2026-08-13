import { customers } from "../data/customers";
import { seedCustomers } from "../lib/seedCustomers";
import { getBookings } from "../services/getBookings";
import { getCustomers } from "../services/getCustomers";
import { getHotels } from "../services/getHotels";

export const TestPage = async () => {
  await seedCustomers(customers);
  return (
    <section>
      <h1>Test fetch</h1>
    </section>
  );
};
