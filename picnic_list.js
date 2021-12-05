const picnicPerson = [
  {
    Name: "Poliya Akter",
    FatherName: "Ahmad Ali",
    Adress: "Diyapara,madaripur",
    Taka: 3000,
  },
  {
    Name: "Tanbir Akon",
    FatherName: "Nuruzzaman Akon",
    Adress: "Trivagdi,madaripur",
    Taka: 4000,
  },
  {
    Name: "Jubayer Akon",
    FatherName: "Jalal Akon",
    Adress: "Trivagdi,madaripur",
    Taka: 5000,
  },
  {
    Name: "Shahin Akon",
    FatherName: "Nuru Akon",
    Adress: "Trivagdi,madaripur",
    Taka: 6000,
  },
  {
    Name: "Danial Munshi",
    FatherName: "Abdus Sattar Munshi",
    Adress: "Rajdhordi,madaripur",
    Taka: 8000,
  },
  {
    Name: "Rana Khan",
    FatherName: "Esken Khan",
    Adress: "Trivagdi,madaripur",
    Taka: 4000,
  },
  {
    Name: "Omor Farukh",
    FatherName: "Rokhon Bepari",
    Adress: "Trivagdi,madaripur",
    Taka: 2000,
  },
  {
    Name: "Ujjal Kazi",
    FatherName: "Idhu Kazi",
    Adress: "Trivagdi,madaripur",
    Taka: 7000,
  },
];
total = 0;
picnicPerson.forEach((data) => {
  total = data.Taka + total;
  console.log(`
    Name : ${data.Name}
    Father Name : ${data.FatherName}
    Adress : ${data.Adress}
    Ammount : ${data.Taka}
    
    `);
});
console.log(`
Total Recived Taka : ${total}
`);
