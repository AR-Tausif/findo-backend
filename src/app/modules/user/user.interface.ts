type TUser = {
  email: string;
  mobileNumber: string;
  password: string;
  firstName: string;
  lastName: string;
  role: "USER" | "ADMIN";
  status: "ACTIVE" | "BLOCKED" | "DEACTIVATED" | "WARNING";
};
