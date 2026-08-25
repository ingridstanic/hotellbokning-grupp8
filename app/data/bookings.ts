import { NewBooking } from "../models/NewBooking";

export type BookingSeed = {
  hotelAddress: string;
  customerEmail: string;
  checkInDate: string;
  checkOutDate: string;
  guests: number;
};

export const bookings: BookingSeed[] = [
  {
    hotelAddress: "Villavilavägen 23, 123 33 Stockholm",
    customerEmail: "hans.solberg@villa.com",
    checkInDate: "2027-08-14",
    checkOutDate: "2027-08-17",
    guests: 2,
  },
  {
    hotelAddress: "Villavilavägen 23, 123 33 Stockholm",
    customerEmail: "cal.kester@villa.com",
    checkInDate: "2026-10-14",
    checkOutDate: "2026-10-20",
    guests: 1,
  },
  {
    hotelAddress: "Villavilavägen 23, 123 33 Stockholm",
    customerEmail: "johnny.silver@villa.com",
    checkInDate: "2026-10-18",
    checkOutDate: "2026-10-20",
    guests: 3,
  },
  {
    hotelAddress: "Villavilavägen 23, 123 33 Stockholm",
    customerEmail: "sadie.adler@villa.com",
    checkInDate: "2026-10-18",
    checkOutDate: "2026-11-02",
    guests: 2,
  },
  {
    hotelAddress: "Villavilavägen 23, 123 33 Stockholm",
    customerEmail: "panam.palmer@villa.com",
    checkInDate: "2026-12-20",
    checkOutDate: "2026-12-26",
    guests: 1,
  },
];
