const devs = [
  {
    ID: 1,
    name: "Hasan",
    Skill: "MERN stack",
    Sallery: 9000,
  },
  {
    ID: 2,
    name: "Poliya",
    Skill: "Wordpress",
    Sallery: 6000,
  },
  {
    ID: 3,
    name: "Rafin",
    Skill: "Laravel",
    Sallery: 5000,
  },
  {
    ID: 4,
    name: "Tanbir",
    Skill: "Go-lang",
    Sallery: 7000,
  },
  {
    ID: 5,
    name: "Jubayer",
    Skill: "Wordpress",
    Sallery: 7000,
  },
];
for (let i = 0; i < devs.length; i++) {
  console.log(`
    ID : ${devs[i].ID}
    Name : ${devs[i].name}
    Skill : ${devs[i].Skill}
    Sallery : ${devs[i].Sallery}
    `);
}

//loop with forEahch loop
let total = 0;
devs.forEach((data) => {
  if (data.Skill == "Wordpress") {
    total = total + data.Sallery;
    console.log(`
    Find specefic developer
    ==============================
    Wordpress developer...........
    ID : ${data.ID}
    Name : ${data.name}
    Skill : ${data.Skill}
    Sallery : ${data.Sallery}
      `);
  }
});
console.log("Total Wordpress developer sallery " + total);
// //Loop with map

// devs.map(function (data) {
//   devs.data;
//   console.log(data.name);
// });
// //Loop with forOf

// for (data of devs) {
//   console.log(data.Sallery);
// }
// //Loop with for in

// for (deta in devs) {
//   console.log(devs[deta].ID);
// }
