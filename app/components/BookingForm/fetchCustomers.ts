"use server";

import { getCustomers } from "@/app/services/getCustomers";

export async function fetchCustomers() {
  const result = await getCustomers();

  return result.customers;
}
