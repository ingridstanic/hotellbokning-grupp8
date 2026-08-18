import { Customer } from "./Customer";

export type NewCustomer = Omit<Customer, "id">;
