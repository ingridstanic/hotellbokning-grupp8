import { Booking } from "./Booking";

export type NewBooking = Omit<Booking, "id" | "hotelName" | "customerName">;
