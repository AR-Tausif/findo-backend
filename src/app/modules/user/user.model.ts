import { Schema, model } from "mongoose";

const CreateUserSchema = new Schema<TUser>({
  email: { type: String, unique: true, select: 0, required: true },
  mobileNumber: { type: String, required: true },
  password: { type: String, select: 0, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  role: {
    type: String,
    enum: ["USER", "ADMIN"],
    default: "USER",
  },
  status: {
    type: String,
    enum: ["ACTIVE", "BLOCKED", "DEACTIVATED", "WARNING"],
    default: "ACTIVE",
  },
});

// Mongoose model
const User = model<TUser>("User", CreateUserSchema);
export default User;
