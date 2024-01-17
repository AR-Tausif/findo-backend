import { Schema, model } from "mongoose";
import { TCategory } from "./category.interface";

const CreateCategorySchema = new Schema<TCategory>({
  name: {
    type: String,
    unique: true,
    required: [true, "Category name is required"],
  },
});

const Category = model("Category", CreateCategorySchema);
export default Category;
