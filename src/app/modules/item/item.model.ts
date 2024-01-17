import { Schema, model } from "mongoose";
import { TItem } from "./item.interface";

const ItemImageSchema = new Schema({
  url: { type: String },
  url2: { type: String },
  url3: { type: String },
  url4: { type: String },
});

const ContactDetailsSchema = new Schema({
  email: { type: String },
  mobileNumber: { type: String, required: true },
});

const createItemSchema = new Schema<TItem>(
  {
    title: { type: String, required: true },
    itemImages: { type: ItemImageSchema },
    category: { type: String, required: true },
    type: { type: String, enum: ["LOST", "FOUNDED"], required: true },
    place: { type: String },
    date: { type: String, required: true },
    city: { type: String },
    itemDetails: { type: String, required: true },
    contactDetails: { type: ContactDetailsSchema, required: true },
    createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

const Item = model("Item", createItemSchema);
export default Item;
