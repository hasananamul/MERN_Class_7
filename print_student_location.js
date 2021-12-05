const students = [
  {
    Roll: 1,
    Name: "Hasan",
    Location: "Madaripur",
    Class: 9,
  },
  {
    Roll: 2,
    Name: "Poliya",
    Location: "Mirpur",
    Class: 10,
  },
  {
    Roll: 3,
    Name: "Tanbir",
    Location: "Uttora",
    Class: 7,
  },
  {
    Roll: 4,
    Name: "Jubayer",
    Location: "Madaripur",
    Class: 9,
  },
  {
    Roll: 5,
    Name: "Akash",
    Location: "Madaripur",
    Class: 9,
  },
  {
    Roll: 6,
    Name: "Baash",
    Location: "Uttora",
    Class: 4,
  },
  {
    Roll: 7,
    Name: "Nodi",
    Location: "Dhaka",
    Class: 3,
  },
  {
    Roll: 8,
    Name: "Khal",
    Location: "Mirpur",
    Class: 9,
  },
  {
    Roll: 9,
    Name: "Bil",
    Location: "Komilla",
    Class: 8,
  },
  {
    Roll: 10,
    Name: "Sagor",
    Location: "Pabna",
    Class: 6,
  },
  {
    Roll: 11,
    Name: "Azad",
    Location: "Tangail",
    Class: 11,
  },
  {
    Roll: 12,
    Name: "Mamon",
    Location: "Mirpur",
    Class: 9,
  },
  {
    Roll: 13,
    Name: "Nupur",
    Location: "Gazipur",
    Class: 5,
  },
  {
    Roll: 14,
    Name: "Rayefa",
    Location: "Dhaka",
    Class: 3,
  },
  {
    Roll: 15,
    Name: "Rohima",
    Location: "Mirpur",
    Class: 2,
  },
  {
    Roll: 16,
    Name: "Tahmina",
    Location: "Madaripur",
    Class: 10,
  },
  {
    Roll: 17,
    Name: "Rohman",
    Location: "Dhaka",
    Class: 1,
  },
  {
    Roll: 18,
    Name: "Billal",
    Location: "Uttora",
    Class: 2,
  },
  {
    Roll: 19,
    Name: "Akhy Akter",
    Location: "Madaripur",
    Class: 9,
  },
  {
    Roll: 20,
    Name: "Zara Islam",
    Location: "Mirpur",
    Class: 6,
  },
  {
    Roll: 21,
    Name: "Zahin Akon",
    Location: "Mirpur",
    Class: 5,
  },
  {
    Roll: 22,
    Name: "Rafin akon",
    Location: "Uttora",
    Class: 4,
  },
  {
    Roll: 23,
    Name: "Rubel Khan",
    Location: "Momensing",
    Class: 10,
  },
  {
    Roll: 24,
    Name: "Mizan Khan",
    Location: "Komilla",
    Class: 1,
  },
  {
    Roll: 25,
    Name: "Kalam",
    Location: "Dhaka",
    Class: 9,
  },
  {
    Roll: 26,
    Name: "Hasan Akon",
    Location: "Mirpur",
    Class: 12,
  },
  {
    Roll: 27,
    Name: "Pat",
    Location: "Madaripur",
    Class: 11,
  },
  {
    Roll: 28,
    Name: "Alu",
    Location: "Mirpur",
    Class: 2,
  },
  {
    Roll: 29,
    Name: "Potol",
    Location: "Madaripur",
    Class: 3,
  },
  {
    Roll: 30,
    Name: "Lau",
    Location: "Rajshai",
    Class: 4,
  },
  {
    Roll: 31,
    Name: "Kumra",
    Location: "Uttora",
    Class: 4,
  },
  {
    Roll: 32,
    Name: "Piyaz",
    Location: "Mirpur",
    Class: 4,
  },
  {
    Roll: 33,
    Name: "Khazur",
    Location: "Madaripur",
    Class: 5,
  },
  {
    Roll: 34,
    Name: "Zakir Fokir",
    Location: "Malaysia",
    Class: 2,
  },
  {
    Roll: 35,
    Name: "Tuhin",
    Location: "Mirpur",
    Class: 6,
  },
  {
    Roll: 36,
    Name: "Hasan Akon",
    Location: "Mirpur",
    Class: 12,
  },
  {
    Roll: 37,
    Name: "Pat",
    Location: "Madaripur",
    Class: 11,
  },
  {
    Roll: 38,
    Name: "Alu",
    Location: "Mirpur",
    Class: 2,
  },
  {
    Roll: 39,
    Name: "Potol",
    Location: "Madaripur",
    Class: 3,
  },
  {
    Roll: 40,
    Name: "Lau",
    Location: "Rajshai",
    Class: 4,
  },
  {
    Roll: 41,
    Name: "Kumra",
    Location: "Uttora",
    Class: 4,
  },
  {
    Roll: 42,
    Name: "Piyaz",
    Location: "Mirpur",
    Class: 4,
  },
  {
    Roll: 43,
    Name: "Khazur",
    Location: "Madaripur",
    Class: 5,
  },
  {
    Roll: 44,
    Name: "Zakir Fokir",
    Location: "Malaysia",
    Class: 2,
  },
  {
    Roll: 45,
    Name: "Zakir Fokir",
    Location: "Malaysia",
    Class: 2,
  },
  {
    Roll: 46,
    Name: "Tuhin",
    Location: "Mirpur",
    Class: 6,
  },
  {
    Roll: 47,
    Name: "Piyaz",
    Location: "Mirpur",
    Class: 4,
  },
  {
    Roll: 48,
    Name: "Khazur",
    Location: "Madaripur",
    Class: 5,
  },
  {
    Roll: 49,
    Name: "Zakir Fokir",
    Location: "Malaysia",
    Class: 2,
  },
  {
    Roll: 50,
    Name: "Tuhin",
    Location: "Mirpur",
    Class: 6,
  },
];
totalCount = 0;
count = 0;
students.map((data) => {
  totalCount = totalCount + 1;
  if (data.Location == "Mirpur" || data.Location == "Uttora") {
    count = count + 1;
    console.log(`
    Roll : ${data.Roll}
    Name : ${data.Name}
    Location : ${data.Location}
    Class : ${data.Class}

      `);
  }
});
console.log(`
    Total students from Uttora and Mirpur : ${count}
    Total student : ${totalCount}
`);
