const express = require("express");
const router = express.Router();
const multer = require("multer");
const TableSchema = require("../models/course/table.model");
const mongoose = require('mongoose');
const Table = mongoose.model("Table", TableSchema);
var mammoth = require("mammoth");
const { Tabletojson: tabletojson } = require("tabletojson");
const fs = require("fs");
("use strict");

router.get("/", (req, res) => res.send("Use Postman"));

//Upload file path
const FILE_PATH = "./uploads";

//Storage
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Uploads is the Upload_folder_name
    cb(null, FILE_PATH);
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + ".docx");
  },
});

//Configure multer
const upload = multer({
  storage: storage,
  limits: {
    files: 1, // allow up to 5 files per request,
  },
  fileFilter: (req, file, cb) => {
    // allow doc only
    if (!file.originalname.match(/\.(doc|docx)$/)) {
      return cb(new Error("Only doc are allowed."), false);
    }
    cb(null, true);
  },
});

//Upload single file
router.post("/upload/table", upload.single("table"), async (req, res) => {
  console.log("hi");
  try {
    console.log("here is backend");
    console.log(req.file);
    const table = req.file;
    if (!table) {
      res.status(400).send({
        status: false,
        data: "No file is selected.",
      });
    } else {
      mammoth
      .convertToHtml({ path: "./uploads/table.docx" })
      .then(function (result) {
        const html = result.value; // The generated HTML
        const converted = tabletojson.convert(html, {
          useFirstRowForHeadings: true,
        });
        var reswe = converted[0];
        fs.writeFile("data/table.json", JSON.stringify(reswe), function (err) {
          if (err) throw err;
          const table = new Table({
            lessons: require("../data/table.json")
          });
          table.save(err, doc => {
            if (err) console.log(err.message);
            else res.send(doc);
          })
        });
      }).catch(err => console.log(err.message));
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
