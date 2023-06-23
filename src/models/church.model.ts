import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";

@modelOptions({
  schemaOptions: {
    versionKey: false,
    timestamps: true,
  },
})
class Church {
  @prop({ type: String, required: true })
  name: string;

  @prop({ type: String, required: true })
  address: string;

  @prop({ type: Number, required: true })
  latitude: number;

  @prop({ type: Number, required: true })
  length: number;

  @prop({ type: String, required: true })
  pastorName: string;

  @prop({ type: String, required: true, unique: true })
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

  @prop({ type: String, required: true })
  province: string;

  @prop({ type: String, required: true })
  district: string;

}

const ChurchsModel = getModelForClass(Church);
export default ChurchsModel;
