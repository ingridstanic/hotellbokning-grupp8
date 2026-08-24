"use server";
import { revalidatePath } from "next/cache";
import { NewCustomer } from "../models/NewCustomer";
import { createCustomer } from "../services/createCustomer";
import { getCustomerByEmail } from "../services/getCustomers";

export async function submitGuest(form: FormData) {
  await registerGuest(form);
}

export async function registerGuest(form: FormData) {
  console.log("registerGuest, anroppad");
  const firstName = form.get("firstName") as string;
  const lastName = form.get("lastName") as string;
  const email = form.get("email") as string;

  const { customer: existingCustomer } = await getCustomerByEmail(email);

  console.log(existingCustomer);

  if (existingCustomer) {
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

  revalidatePath("/guests");
  const result = await createCustomer(newCustomer);
  return result;
}
