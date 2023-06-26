import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";

@modelOptions({
  schemaOptions: {
    versionKey: false,
    timestamps: true,
  },
})
class Church {
  @prop({ type: String, required: [true, 'El nombre es un campo requerido'] })
  name: string;

  @prop({ type: String, required: [true, 'La dirección es un campo requerido'] })
  address: string;

  @prop({ type: Number, required: [true, 'La latitud es un campo requerido'] })
  latitude: number;

  @prop({ type: Number, required: [true, 'La longitud es un campo requerido'] })
  long: number;

  @prop({ type: String, required: [true, 'El nombre del pastor es un campo requerido'] })
  pastorName: string;

  @prop({ type: String, required: [true, 'El correo es un campo requerido'], unique: true })
  email: string;

  @prop({ type: String })
  phone1: string;

  @prop({ type: String })
  phone2: string;

  @prop({ type: String })
  facebookPage: string;

  @prop({ type: String })
  instagramPage: string;

  @prop({ type: String })
  scheduleYouthWorship: string;

  @prop({ type: String })
  scheduleSabbathSchool: string;

  @prop({ type: String })
  scheduleWorshipPrayer: string;

  @prop({ type: String, required: [true, 'El departamento es un campo requerido'] })
  department: string;

  @prop({ type: String, required: [true, 'La provincia es un campo requerido'] })
  province: string;

  @prop({ type: String, required: [true, 'El distrito es un campo requerido'] })
  district: string;

  @prop({ type: String })
  image: string;
  
}

const ChurchsModel = getModelForClass(Church);
export default ChurchsModel;
