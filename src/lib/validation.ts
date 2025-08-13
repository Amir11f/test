import { z } from "zod";

export const loginSchema = z.object({
  phone: z
    .string()
    .regex(/^09\d{9}$/, "Phone must start with 09 and be 11 digits long"),
  userName: z.string(),
});
