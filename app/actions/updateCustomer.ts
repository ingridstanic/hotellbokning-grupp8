"use server";

import { revalidatePath } from "next/cache";
import { updateCustomer } from "../services/updateCustomer";

export async function updateCustomerAction(
  customerId: string,
  firstName: string,
  lastName: string,
  email: string,
) {
  const result = await updateCustomer({
    id: customerId,
    firstName,
    lastName,
    email,
  });

  if (result.error) {
    throw new Error(result.error);
  }

  revalidatePath("/guests/[guestId]", "page");

  return result.customer;
}