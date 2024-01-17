import { Router } from "express";
import { UserRoute } from "../modules/user/user.routes";

const router = Router();

const modulerPatternRoutes = [
  {
    path: "/users",
    route: UserRoute,
  },
];

modulerPatternRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
