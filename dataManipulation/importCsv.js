const fs = require("fs");
const csvParser = require("csv-parser");
const dfd = require("danfojs");

async function csvToDataFrame(filePath) {
  const data = []; // Array to hold our data

  // Create a promise that resolves when we finish reading the file
  const promise = new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csvParser())
      .on("data", (row) => data.push(row))
      .on("end", () => {
        resolve(new dfd.DataFrame(data));
      })
      .on("error", reject);
  });

  return promise;
}

// Example usage
csvToDataFrame("1-23-24 tradelog.csv")
  .then((df) => {
    console.log(df.toString());
  })
  .catch((err) => {
    console.error("Error reading CSV file:", err);
  });
