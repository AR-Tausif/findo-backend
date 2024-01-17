import { TItem } from "./item.interface";
import Item from "./item.model";

const createItem = async (payload: TItem) => {
  const item = await Item.create(payload);
  return item;
};
const getAllItem = async () => {
  const items = await Item.find().populate("createdBy");
  return items;
};
const getItemById = async (id: string) => {
  const item = await Item.findById(id).populate("createdBy");
  return item;
};

export const ItemService = {
  createItem,
  getAllItem,
  getItemById,
};
