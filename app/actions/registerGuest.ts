import { NewCustomer } from "../models/NewCustomer";
import { createCustomer } from "../services/createCustomer";
import { getCustomerByEmail } from "../services/getCustomers";

export async function submitGuest(form: FormData) {
  await registerGuest(form);
}

export async function registerGuest(form: FormData) {
  const firstName = form.get("firstName") as string;
  const lastName = form.get("lastName") as string;
  const email = form.get("email") as string;

  const { customer: existingCusomter } = await getCustomerByEmail(email);

  if (existingCusomter) {
    return {
      customer: null,
      error: "Det finns redan en kund med denna e-mail.",
    };
  }

  const newCustomer: NewCustomer = {
    firstName,
    lastName,
    email,
  };

  const result = await createCustomer(newCustomer);
  if (result.error) {
    throw new Error(result.error);
  }
  return result.customer;
}
