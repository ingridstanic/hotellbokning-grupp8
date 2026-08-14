import { NewCustomer } from "../models/NewCustomer";
import { getCustomers } from "../services/getCustomers";

export const seedCustomers = async (customers: NewCustomer[]) => {
  const customersFromDB = await getCustomers();

  customers.forEach(async (customer) => {
    const alreadyExistingCustomer = customersFromDB?.some(
      (cFromDB) => cFromDB.email === customer.email,
    );

    console.log(customer.email, alreadyExistingCustomer);
    if (!alreadyExistingCustomer) {
      try {
        const response = await fetch(
          "https://hotelapi-efatf0cfevcgb5gd.swedencentral-01.azurewebsites.net/customer/create",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              firstName: customer.firstName,
              lastName: customer.lastName,
              email: customer.email,
            }),
          },
        );

        if (response.ok) {
          console.log("Customers added to database.");
        } else {
          console.log("POST failed", response.status);
        }
      } catch (error) {
        console.error("Could not create customers.");
      }
    }
  });
};
