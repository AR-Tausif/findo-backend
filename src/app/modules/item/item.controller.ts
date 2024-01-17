import { RequestHandler } from "express";
import { ItemService } from "./item.service";

const createItem: RequestHandler = async (req, res) => {
  try {
    const payloadItem = req.body;
    const result = await ItemService.createItem(payloadItem);

    res.status(200).json({
      success: true,
      message: "Item created successfully",
      result,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      success: false,
      message: "Oppss,cannot add item. Please try again.",
      error: error,
    });
  }
};
const getAllItem: RequestHandler = async (req, res) => {
  try {
    const result = await ItemService.getAllItem();

    res.status(200).json({
      success: true,
      message: "Items are retrieved successfully",
      result,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      success: false,
      message: "Oppss,cannot are retrieved items. Please try again.",
      error: error,
    });
  }
};
const getItemById: RequestHandler = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await ItemService.getItemById(id);

    res.status(200).json({
      success: true,
      message: "Item is retrieved successfully",
      result,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      success: false,
      message: "Oppss,cannot is retrieved item. Please try again.",
      error: error,
    });
  }
};

export const ItemController = {
  createItem,
  getAllItem,
  getItemById,
};
