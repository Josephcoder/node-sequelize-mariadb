import { Router } from "express";
import users from "../controller/users"
const router = Router();

router.post("/users", users.createUser)

router.get("/users", users.allUsers)

export { router as users };
