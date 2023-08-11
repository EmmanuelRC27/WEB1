var gunter = {
  name: "Gunter",
  origin: "Adventure Time",
  canFly: false,
  sayHello: function () {
    console.log("QUACK!!!");
  },
};

var ramon = {
  name: "Ramón",
  origin: "Happy Feet",
  canFly: true,
  sayHello: function () {
    console.log("Estoy encantado de conocerle.");
  },
};

var fred = {
  name: "Fred",
  origin: "Sitting Ducks",
  canFly: false,
  sayHello: function () {
    console.log("Hi there!");
  },
};

var penguins = [gunter, ramon, fred];

for (var i = 0; i < penguins.length; i++) {
  console.log(penguins[i].name);
}

console.log(penguins.length);

for (var i = 0; i < penguins.length; i++) {
  penguins[i].numberOfFeet = Math.floor(Math.random() * 5) + 1;
}

for (var i = 0; i < penguins.length; i++) {
  if (penguins[i].canFly) {
    console.log(penguins[i].name + " ¡puede volar!");
  }
}

var moreThanTwoFeetPenguins = [];
for (var i = 0; i < penguins.length; i++) {
  if (penguins[i].numberOfFeet > 2) {
    moreThanTwoFeetPenguins.push(penguins[i]);
  }
}
console.log(moreThanTwoFeetPenguins);

for (var i = 0; i < penguins.length; i++) {
  penguins[i].favoriteFoods = ["fish", "krill", "squid"];
}

for (var i = 0; i < penguins.length; i++) {
  console.log(penguins[i].favoriteFoods[1]);
}

for (var i = 0; i < penguins.length; i++) {
  penguins[i].favoriteFoods[penguins[i].favoriteFoods.length - 1] =
    "pineapples";
}

for (var i = 0; i < penguins.length; i++) {
  for (var j = 0; j < penguins[i].favoriteFoods.length; j++) {
    console.log(penguins[i].favoriteFoods[j]);
  }
}
