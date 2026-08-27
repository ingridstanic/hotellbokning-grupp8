import { NewCustomer } from "../models/NewCustomer";
import { createCustomer } from "../services/createCustomer";
import { getCustomers } from "../services/getCustomers";

export const seedCustomers = async (customers: NewCustomer[]) => {
  const { customers: customersFromDB } = await getCustomers();
  //Skapar SET lista med existerande emails
  const existingEmails = new Set(
    customersFromDB.map((cFromDB) => cFromDB.email),
  );

  //kollar om customers email redan finns i existing
  //om inte create
  for (const customer of customers) {
    if (!existingEmails.has(customer.email)) {
      const { customer: createdCustomers, error } =
        await createCustomer(customer);

      //loggar fel, kunden läggs EJ till i existing
      if (error) {
        console.error("Could not create customer: ", customer.email, error);
      } else {
        existingEmails.add(customer.email);
      }
    }
  }
};
