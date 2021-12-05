const persons = [
  {
    Name: "Hasan Anamul",
    Age: 29,
  },
  {
    Name: "Poliya Akter",
    Age: 21,
  },
  {
    Name: "Tanbir Akon",
    Age: 14,
  },
  {
    Name: "Rafinul Akon Ridwan",
    Age: 9,
  },
];
persons.map((data) => {
  if (data.Age < 18) {
    alert(`
    Hi ${data.Name} your age is too less! you are still baby please wait more ${
      18 - data.Age
    } years.
    `);
  }
  if (data.Age >= 18 && data.Age <= 40) {
    alert(
      `Hi ${data.Name} Wellcome to our events! Your age is ${data.Age} and you are suitable for this events.`
    );
  }
});
