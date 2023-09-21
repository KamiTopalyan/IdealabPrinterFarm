import { Router } from "express"
import { getPrintersStatus } from "../controllers/printer";
const router = Router();

router.get('/', getPrintersStatus);