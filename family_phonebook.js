const contactList = [
  {
    Name: "Hasan Anamul",
    PhoneNumber: +6587323710,
    Adress: "Sinapore",
    Relation: "Owner",
  },
  {
    Name: "Poliya Akter",
    PhoneNumber: "+880170719........",
    Adress: "Bangladesh",
    Relation: "Love",
  },
  {
    Name: "Tanbir Akon",
    PhoneNumber: "+8801741191776",
    Adress: "Bangladesh",
    Relation: "Brother",
  },
  {
    Name: "Jubayer Akon",
    PhoneNumber: "+8801709533126",
    Adress: "Bangladesh",
    Relation: "Brother",
  },
  {
    Name: "Shahin Akon",
    PhoneNumber: "+962373739782",
    Adress: "Italy",
    Relation: "Brother",
  },
  {
    Name: "Lotif Munshi",
    PhoneNumber: "+603662732867",
    Adress: "Malayshiya",
    Relation: "Mama",
  },
  {
    Name: "Tahmina",
    PhoneNumber: "+8801748602277",
    Adress: "Bangladesh",
    Relation: "Sister",
  },
  {
    Name: "Abdur Rahman",
    PhoneNumber: "+8801732148515",
    Adress: "Bangladesh",
    Relation: "Brother",
  },
];
contactList.map((data) => {
  console.log(`
  Name : ${data.Name}
  Phone Number : ${data.PhoneNumber}
  Adress : ${data.Adress}
  Relation : ${data.Relation}
    `);
});
