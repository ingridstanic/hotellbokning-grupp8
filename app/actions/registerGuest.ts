"use server";
import { revalidatePath } from "next/cache";
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

  const { customer: existingCustomer } = await getCustomerByEmail(email);

  if (existingCustomer) {
    return true;
  }

  const newCustomer: NewCustomer = {
    firstName,
    lastName,
    email,
  };

  await createCustomer(newCustomer);
  revalidatePath("/guests");
  return false;
}
