var mammoth = require("mammoth");
const { Tabletojson: tabletojson } = require("tabletojson");
const fs = require("fs");
("use strict");
//Convert into JSON
const convert_table = () => {
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
        console.log("Lesson Saved!");
      });
      var messages = result.messages; // Any messages, such as warnings during conversion
    })
    .done();
};

module.exports = {
  table: convert_table
};
