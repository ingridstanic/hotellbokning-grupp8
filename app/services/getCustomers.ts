import { Customer } from "../models/Customer";
import { ApiResponse } from "../models/ApiResponse";

const apiUrl = `https://aspcode.net/api/db/HotelAPI/customers/`;
const apiUrlFilter = `https://aspcode.net/api/db/HotelAPI/customers?email=`;
const apiKey = process.env.HOTEL_API_KEY!;

export const getCustomers = async () => {
  try {
    const response = await fetch(apiUrl, {
      headers: {
        "X-API-Key": apiKey,
      },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Something went wrong, ${response.status}`);
    }

    const data: ApiResponse<Customer>[] = await response.json();
    const customers = data.map((row) => ({
      ...row.data,
      id: row.id,
    }));

    const villaCustomers = customers.filter((c) =>
      c.email?.endsWith("@villa.com"),
    );

    // console.log(villaCustomers);
    return {
      customers: villaCustomers,
      error: "",
    };
  } catch (error) {
    console.error("Could not fetch data. ", error);
    return {
      customers: [],
      error: "Could not load customer data, try again.",
    };
  }
};

export const getCustomerByEmail = async (email: string) => {
  try {
    const response = await fetch(
      `${apiUrlFilter}${encodeURIComponent(email)}`,
      {
        headers: { "X-API-Key": apiKey },
      },
    );

    if (!response.ok) {
      throw new Error(`Something went wrong, ${response.status}`);
    }

    const data: ApiResponse<Customer>[] = await response.json();

    const customers = data.map((row) => ({
      ...row.data,
      id: row.id,
    }));

    // console.log(customers);
    return {
      customer: customers[0],
      error: "",
    };
  } catch (error) {
    console.error("Could not fetch customer. ", error);
    return {
      customer: null,
      error: "Could not load customer, try again.",
    };
  }
};
