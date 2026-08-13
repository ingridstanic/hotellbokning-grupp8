import { Customer } from "../models/Customer";

export const getCustomers = async () => {
  const apiUrl =
    "https://hotelapi-efatf0cfevcgb5gd.swedencentral-01.azurewebsites.net/customers";

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      console.error("Could not get data.");
    }

    const data: Customer[] = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Could not fetch data. ", error);
  }
};

export const getCustomerById = async (id: number) => {
  const apiUrl = `https://hotelapi-efatf0cfevcgb5gd.swedencentral-01.azurewebsites.net/customer/`;

  try {
    const response = await fetch(
      `https://hotelapi-efatf0cfevcgb5gd.swedencentral-01.azurewebsites.net/customer/${id}`,
    );
  } catch (error) {
    console.error("Could not fetch customer.");
  }
};
