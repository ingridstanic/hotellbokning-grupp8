import { NewCustomer } from "../models/NewCustomer";
import { createCustomer } from "../services/createCustomer";

export async function submitGuest(form: FormData) {
  await registerGuest(form);
}

export async function registerGuest(form: FormData) {
  const firstName = form.get("firstName") as string;
  const lastName = form.get("lastName") as string;
  const email = form.get("email") as string;

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
