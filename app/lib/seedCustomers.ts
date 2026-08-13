import { Customer } from "../models/Customer";
import { getCustomers } from "../services/getCustomers";

export const seedCustomers = async (customers: any[]) => {
  const customersFromDB = await getCustomers();

  const filteredCustomers = customersFromDB?.filter((c) =>
    c.email.endsWith("@villa.com"),
  );

  console.log(filteredCustomers);

  customers.forEach(async (customer) => {
    const alreadyExistingCustomer = filteredCustomers?.some(
      (filteredCustomer) => filteredCustomer.email === customer.email,
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
