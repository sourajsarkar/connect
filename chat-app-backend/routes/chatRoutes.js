const express = require("express");
const {
  accessChat,
  fetchChats,
  createGroupChats,
  renameGroup,
  addToGroup,
  removerFromGroup,
} = require("../controllers/chatControllers");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

// router.route("/").post(protect, accessChat);
router.route("/").post(protect, accessChat).get(protect, fetchChats);
router.route("/group").post(protect, createGroupChats);
router.route("/rename").put(protect, renameGroup);
router.route("/groupadd").put(protect, addToGroup);
router.route("/groupremove").put(protect, removerFromGroup);

module.exports = router;
