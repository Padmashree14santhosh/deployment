// For the given JSON iterate over all for loops (for, for in, for of, forEach)

var obj = [
    { person: "Name 1", age: "2", company: "GUVI" },
    { person: "Name 2", age: "5", company: "GUVI geek" },
    { person: "Name 3", age: "8", company: "GUVI geek network" },
  ];

for(let i=0;i<obj.length;i++)
{
    console.log(obj[i].person);
    console.log(obj[i].age);
    console.log(obj[i].company);
}

for(let key in obj){
    console.log(obj[key]);
}

for(let num of obj){
    console.log(num);
}

obj.forEach(function()
{
    console.table(obj)
});


