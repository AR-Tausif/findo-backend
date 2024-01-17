import { Router } from "express";
import { UserRoute } from "../modules/user/user.routes";
import { AuthRoute } from "../modules/auth/auth.route";
import { ItemRoute } from "../modules/item/item.routes";

const router = Router();

const modulerPatternRoutes = [
  {
    path: "/auth",
    route: AuthRoute,
  },
  {
    path: "/users",
    route: UserRoute,
  },
  {
    path: "/items",
    route: ItemRoute,
  },
];

modulerPatternRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
