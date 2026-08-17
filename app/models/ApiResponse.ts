import { Booking } from "./Booking";

export type ApiResponse<T> = {
  createdAt: string;
  data: T;
  database: string;
  id: string;
  resource: string;
  updatedAt: string;
};
