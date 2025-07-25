// routes/order.route.js
import express from "express";
import {
  createOrder,
  getAllOrders,
  getUserOrders,
  updateOrderStatus,
  deleteOrder
} from "../controller/order.controller.js";
import { verifyToken, isAdmin } from "../middleware/auth.middleware.js";

const router = express.Router();

// مستخدم عادي
router.post("/", verifyToken, createOrder);
router.get("/my-orders", verifyToken, getUserOrders);

// للمشرف فقط
router.get("/", verifyToken, isAdmin, getAllOrders);
router.put("/:id", verifyToken, isAdmin, updateOrderStatus);
router.delete("/:id", verifyToken, isAdmin, deleteOrder);

export default router;
