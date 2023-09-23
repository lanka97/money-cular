import express from "express";
import Sample from "../db/Schemas/sample.js";

const router = express.Router();

router.route("/").get((req, res) => {
    const sample = new Sample({
        name:"name",
        age: 4
    });
    sample.save()
    res.send("user");
})

export default router;