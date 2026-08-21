"use server";

import { updateBooking } from "../services/updateBooking";
import { deleteBooking } from "../services/deleteBooking";
import { revalidatePath } from "next/cache";

export async function updateBookingAction(
    bookingId: string,
    checkInDate: string,
    checkOutDate: string,
    guests: number,
) {

const result = await updateBooking(
    checkInDate,
    checkOutDate,
    guests,
    bookingId,
  );

  if (result.error) {
    throw new Error(result.error);
  }

  revalidatePath("/guests/[guestId]", "page");  

  return result.booking;
}

export async function deleteBookingAction(bookingId: string) {
    const result = await deleteBooking(bookingId);

    if(!result.success) {
        throw new Error(result.error);
    }

    revalidatePath("/guests/[guestId]", "page"); 

    return result;
}