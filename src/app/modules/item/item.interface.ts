import { Types } from "mongoose";

export type TItemImage = {
  url: string;
  url2: string;
  url3: string;
  url4: string;
};
export type TContactDetails = {
  email: string;
  mobileNumber: string;
};

export type TItem = {
  title: string;
  itemImages: TItemImage;
  category: string;
  type: "LOST" | "FOUNDED";
  place: string;
  date: string;
  city: string;
  itemDetails: string;
  contactDetails: TContactDetails;
  createdBy: Types.ObjectId;
};
