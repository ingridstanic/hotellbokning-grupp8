"use server";
import { revalidatePath } from "next/cache";
import { NewCustomer } from "../models/NewCustomer";
import { createCustomer } from "../services/createCustomer";
import { getCustomerByEmail } from "../services/getCustomers";

export async function registerGuest(form: FormData) {
  const firstName = form.get("firstName") as string;
  const lastName = form.get("lastName") as string;
  const email = form.get("email") as string;

  const { customer: existingCustomer } = await getCustomerByEmail(email);

  console.log(existingCustomer);

  if (existingCustomer) {
    throw new Error("Det finns redan en kund med denna email.");
  }

  const newCustomer: NewCustomer = {
    firstName,
    lastName,
    email,
  };

  await createCustomer(newCustomer);
  revalidatePath("/guests");
}
