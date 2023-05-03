// GOdMjEZWABEhYLzZ;

const express = require("express");
const ctrl = require("../../controlers/contact");
const router = express.Router();
router.get("/", ctrl.getAll);

router.get("/:id", ctrl.getById);

router.post("/", ctrl.add);

router.delete("/:id", ctrl.deleteContact);

router.put("/:id", ctrl.updateById);

router.patch("/:id/favorite", ctrl.updateFavorite);

module.exports = router;
