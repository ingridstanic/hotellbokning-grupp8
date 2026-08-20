const apiUrl = `https://aspcode.net/api/db/HotelAPI/bookings/`;
const apiKey = process.env.HOTEL_API_KEY!;

export const deleteBooking = async (id: string) => {
  try {
    const response = await fetch(`${apiUrl}${id}`, {
      method: "DELETE",
      headers: {
        "X-API-Key": apiKey,
      },
    });

    if (!response.ok) {
      throw new Error(`Could not delete booking ${response.status}`);
    }

    return {
      success: true,
      error: "",
    };
  } catch (error) {
    console.error("Could not delete booking", error);
    return {
      success: false,
      error: "Could not delete booking. Try again.",
    };
  }
};
