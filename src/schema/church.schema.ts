import fileUpload, { FileArray } from "express-fileupload";
import { z } from "zod";

export const CreateChurchSchema = z.object({
  body: z.object({
    name: z
      .string()
      .nonempty(),
    address: z
      .string()
      .nonempty(),
    latitude: z
      .number(),
    length: z
      .number(), 
    pastorName: z
      .string()
      .nonempty(),
    email: z
      .string()
      .nonempty(),
    phone1: z
      .string(),
    phone2: z
      .string(),
    facebookPage: z
      .string(),
    instagramPage: z
      .string(),
    scheduleYouthWorship: z
      .string(),
    scheduleSabbathSchool: z
      .string(),
    scheduleWorshipPrayer: z
      .string(),
    province: z
      .string()
      .nonempty(),
    district: z
      .string()
      .nonempty(),
    image: z
    .string(),
  }),
});

export type CreateChurch = z.infer<typeof CreateChurchSchema>["body"];
