let arr = [
  { gender: "male", name: "devin" },
  { gender: "famale", name: "lea" },
  { gender: "male", name: "lulu" },
];

const filtered = arr.filter(function (item) {
  if (item.gender === "famale") {
    return item;
  }
});

console.log(filtered);
