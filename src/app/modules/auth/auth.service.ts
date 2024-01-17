import User from "../user/user.model";

const createUser = async (payload: TUser) => {
  const user = await User.create(payload);
  return user;
};
const loginUser = async (payload: { email: string; password: string }) => {
  const user = await User.findOne({ email: payload.email }).select("+password");
  console.log(user);
  if (!user) {
    throw new Error("User not found");
  }
  if (!(user.password == payload.password)) {
    throw new Error("password is not matching");
  }
  return user;
};

export const AuthService = {
  createUser,
  loginUser,
};
