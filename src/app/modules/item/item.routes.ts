import { Router } from "express";
import { ItemController } from "./item.controller";

const router = Router();

router.post("/create-item", ItemController.createItem);
router.get("/", ItemController.getAllItem);
router.get("/:id", ItemController.getItemById);
export const ItemRoute = router;
