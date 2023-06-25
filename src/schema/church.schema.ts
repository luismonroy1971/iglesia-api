import fileUpload, { FileArray } from "express-fileupload";
import { z } from "zod";

export const CreateChurchSchema = z.object({
  body: z.object({
    name: z
      .string()
      .nonempty('El nombre es un campo requerido'),
    address: z
      .string()
      .nonempty('La dirección es un campo requerido'),
    latitude: z
      .number(),
    length: z
      .number(), 
    pastorName: z
      .string()
      .nonempty('El nombre del pastor es un campo requerido'),
    email: z
      .string()
      .nonempty('El correo de la iglesia es un campo requerido'),
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
      .nonempty('La provincia es un campo requerido'),
    district: z
      .string()
      .nonempty('El distrito es un campo requerido'),
    image: z
    .string(),
  }),
});

export type CreateChurch = z.infer<typeof CreateChurchSchema>["body"];
