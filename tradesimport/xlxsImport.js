const XLSX = require("xlsx");

// Specify the path to your .xlsx file
const filePath =
  "D:/Node-Code/tradesimport/Export Trade History-2024-02-14 23_08_41.xlsx";

// Read the workbook
const workbook = XLSX.readFile(filePath);

// Get the first sheet name and log it (optional)
const firstSheetName = workbook.SheetNames[0];
console.log("First sheet name:", firstSheetName);

// Convert the first sheet to JSON
const worksheet = workbook.Sheets[firstSheetName];
const jsonData = XLSX.utils.sheet_to_json(worksheet);

// Log the JSON data
console.log(jsonData);
