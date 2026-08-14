import { Booking } from "../models/Booking";
import { NewBooking } from "../models/NewBooking";

export const createBookingKey = (booking: NewBooking | Booking) => {
  return `${booking.hotelId}-${booking.customerId}-${booking.checkInDate}-${booking.checkOutDate}`;
};
