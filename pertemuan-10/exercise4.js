let people = ["Greg", "Mary", "Devon", "James"];

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

people.forEach(function(person) {
    console.log(person);
});

people.shift();

people.pop();

people.unshift("Matt");

people.push("Kyra");

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Mary") {
        break;
    }
}

let copyPeople = people.slice(2);
console.log(copyPeople);
people = ["Matt", "Mary", "Devon", "Kyra"];
people.splice(2, 1, "Elizabeth", "Artie");
console.log(people);

let withBob = people.concat("Bob");
console.log(withBob);


let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

programming.languages.push("Go");

programming["difficulty"] = 7;

delete programming.jokes;

programming.isFun = true;

let updatedLanguages = programming.languages.map((language, index) => {
    return {index} - {language};
});
console.log(updatedLanguages);