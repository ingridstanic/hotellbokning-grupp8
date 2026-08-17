"use server";

import { createCustomer } from "../services/createCostumer";

export async function registerGuest(form: FormData) {
    const firstName = form.get("firstName") as string;
    const lastName = form.get("lastName") as string;
    const email = form.get("email") as string;

    const result = await createCustomer(
        firstName,
        lastName,
        email
    );
    if (result.error) {
        throw new Error(result.error);
    }
    return result.customer;
}
  