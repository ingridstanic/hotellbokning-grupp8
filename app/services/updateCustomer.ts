import { ApiResponse } from "../models/ApiResponse";
import { Customer } from "../models/Customer";

const apiUrl = `https://aspcode.net/api/db/HotelAPI/customers/`;
const apiKey = process.env.HOTEL_API_KEY!;

export const updateCustomer = async (customer: Customer) => {
  try {
    const response = await fetch(`${apiUrl}${customer.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", "X-API-Key": apiKey },
      body: JSON.stringify(customer),
    });

    if (!response.ok) {
      throw new Error(`Could not update Customer${response.status}`);
    }

    return {
      error: "",
    };
  } catch (error) {
    console.error("Could not update customer.");
    return {
      error: "Could not update customer. Try again.",
    };
  }
};
