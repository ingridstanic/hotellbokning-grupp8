import { Customer } from "../models/Customer";
import { ApiResponse } from "../models/ApiResponse";

const apiUrl = `https://aspcode.net/api/db/HotelAPI/customers/`;
const apiKey = process.env.API_KEY!;

export const createCustomer = async (
    firstName: string,
    lastName: string,
    email: string,
) => {
    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-API-Key": apiKey,
            },
        body: JSON.stringify({
            firstName,
            lastName,
            email,
        }),
    });

    if (!response.ok) {
        throw new Error(`Error creating customer`);
    }

    const data: ApiResponse<Customer> = await response.json();
    return {
        customer: data.data,
        error: "",
    };
} catch (error) {
    console.error("Error creating customer:", error);
    return {
        customer: null,
        error: "Error creating customer",
    };
}
};

