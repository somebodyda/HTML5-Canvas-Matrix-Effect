const fs = require("fs");

// Read the contents of the file (assuming it's named 'characteristics.txt')
const content = fs.readFileSync("characteristics.txt", "utf8");

// Split the content by spaces and map it to the desired format
const formattedCharacteristics = content
  .split(/\s+/)
  .map((char) => `"${char}"`);

// Join the formatted characteristics with spaces
const formattedContent = formattedCharacteristics.join(",");

// Write the formatted content to a new file named 'separated.txt'
fs.writeFile("separated.txt", formattedContent, (err) => {
  if (err) {
    console.error("Error writing to separated.txt:", err);
  } else {
    console.log("Formatted characteristics saved to separated.txt");
  }
});
