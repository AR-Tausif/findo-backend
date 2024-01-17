import { Schema } from "mongoose";
import { TContactDetails, TItem, TItemImage } from "./item.interface";

const itemImagesSchema = new Schema<TItemImage>({
  url: String,
  url2: String,
  url3: String,
  url4: String,
});
const contactDetailsSchema = new Schema<TContactDetails>({
  email: String,
  mobileNumber: String,
});
const createItemSchema = new Schema<TItem>(
  {
    title: {
      type: String,
      required: [true, "Item title is required"],
    },
    itemImages: {
      type: itemImagesSchema,
    },
    category: {
      type: String,
      required: [true, "Item title is required"],
    },
    type: {
      type: String,
      required: [true, "Item title is required"],
    },
    place: {
      type: String,
    },
    date: {
      type: String,
      required: [true, "Item title is required"],
    },
    city: {
      type: String,
    },
    itemDetails: {
      type: String,
    },
    contactDetails: {
      type: contactDetailsSchema,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      required: [true, "User id required"],
    },
  },
  { timestamps: true }
);
