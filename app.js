const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();
const fs = require("fs");
const path = require("path");

const port = process.env.PORT || 3000;

const Excel = require("exceljs");

let excelFilePath = path.resolve(__dirname, "public", "file.xlsx");

// CREATION OF EXCEL FILE

let workbook = new Excel.Workbook(); //creation of new workbook
const readFileFunc = async () => {
  await workbook.xlsx.readFile(excelFilePath, (err) => {
    console.log(err);
  }); //reading file
};
readFileFunc();

app.use(express.static("public"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", function (req, res) {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.post("/", function (req, res) {
  const enrolment = req.body.enrolment;
  const causelName = req.body.causelName;
  const fullName = req.body.fullName;
  const localName = req.body.localName;
  const dateOfBirth = req.body.dateOfBirth;
  const gender = req.body.gender;
  const address = req.body.address;
  const addresslLang = req.body.addresslLang;
  const email = req.body.email;
  const mNumber = req.body.mNumber;
  const wNumber = req.body.wNumber;
  const pNumber = req.body.pNumber;
  const fax = req.body.fax;
  const officeAddress = req.body.officeAddress;
  const pinCode = req.body.pinCode;
  const district = req.body.district;
  const taluka = req.body.taluka;
  const officelAddress = req.body.officelAddress;
  const type = req.body.type;
  const bcireg = req.body.bcireg;

  let fileName = "profarma_of_" + causelName + ".xlsx";
  let filePath = path.resolve(__dirname, "public", "temp", fileName);

  //promise for deleting file from server
  const deleteFilePro = (filePath) => {
    return new Promise((resolve, reject) => {
      fs.unlink(filePath, (err) => {
        if (err) reject("file not found");
        resolve("file is succesfully deleted");
      });
    });
  };
  //promise for downloading file
  const downloadFilePro = (filePath) => {
    return new Promise((resolve, reject) => {
      res.download(filePath, (err) => {
        if (err) reject("file not found");
        resolve("file is succesfully downloaded");
      });
    });
  };

  let data = [
    [
      "",
      enrolment,
      causelName,
      fullName,
      localName,
      dateOfBirth,
      gender,
      address,
      addresslLang,
    ],
    [
      email,
      mNumber,
      wNumber,
      pNumber,
      fax,
      officeAddress,
      pinCode,
      district,
      taluka,
    ],
    [officelAddress, type, bcireg],
  ];
  // starting of main function
  const mainFunc = async () => {
    try {
      let worksheet = workbook.getWorksheet(1);
      for (let i = 5, k = 0; i < 14; i += 4, k++) {
        let row = worksheet.getRow(i);
        for (let j = 1; j <= data[k].length; j++) {
          row.getCell(j).value = data[k][j - 1];
        }
        row.commit();
      }
      await workbook.xlsx.writeFile(filePath);
      // res.attachment(filePath);
      await downloadFilePro(filePath);

      await deleteFilePro(filePath);
    } catch (err) {
      console.log(err);
    }
  };
  //end of main function

  //calling of main function
  mainFunc();
});

app.listen(port, function () {
  console.log("Server is running on port 3000.");
});
