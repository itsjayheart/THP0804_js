const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];

/*print each
entrepreneurs.forEach(entrepreneur => {
  console.log(entrepreneur)
})

print each firste name
entrepreneurs.forEach(entrepreneur => {
  console.log(entrepreneur['first'])
})*/
console.log("entrepreneurs des 70'")
function fromThe70(year){
  return year < 1980 && year > 1969
}
entrepreneursFrom70 = []
entrepreneurs.forEach(entrepreneur => {
  if(fromThe70(entrepreneur['year'])){
    entrepreneursFrom70.push(entrepreneur)
    console.log(entrepreneur)
  }
})
//entrepreneursFrom70.push(entrepreneurs)
console.log(entrepreneursFrom70)

console.log("Nom et prénom des entrepreneurs")
namesArray = []
entrepreneurs.forEach(entrepreneur => {
  names = entrepreneur['last'] +" "+ entrepreneur['first']
  console.log(names)
  namesArray.push(names)
})

console.log(namesArray)


entrepreneurs.forEach(entrepreneur => {
  year = entrepreneur['year']
  age = 2020 - year
  entrepreneur['age'] = age
  console.log(entrepreneur['age'])
})

namesArray.sort()

namesArray.forEach(names =>{
  console.log(names)
})

/*
  Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 ;
  Sors une array qui contient le prénom et le nom des entrepreneurs ;
  Quel âge aurait chaque inventeur aujourd'hui ?
  Trie les entrepreneurs par ordre alphabétique du nom de famille.
*/