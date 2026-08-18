import { Hotel } from "./Hotel";

export type NewHotel = Omit<Hotel, "id">;
