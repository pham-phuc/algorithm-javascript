let file = require("fs");

function templateString(filePath, params, outputFile) {
  let readFile = file.readFileSync("template.html", "utf8");

  for (let key in params) {
    let regex = new RegExp(`{{${key}}}`, "g");
    readFile = readFile.replace(regex, params[key]);
  }
  file.writeFileSync(outputFile, readFile, "utf8");
  console.log(`File đã được tạo: ${outputFile}`);
}

//templateString("template.txt", { name: "Jonny" }, "output.txt");
// templateString(
//   "template.html",
//   {
//     title: "Search of skill",
//     pageTitle: "Home page",
//     content:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, consectetur",
//   },
//   "output.html"
// );
