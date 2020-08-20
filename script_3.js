
input = prompt("Choisir un nombre d'étage pour la pyramide")
input = Number(input)
x = input
console.log('Voici votre pyramide avec ' + input + ' étages.')
counter = 1
while(x !== 0){
  z = 1
  log = ''
  while(z !== x){
    log = log + ' '
    z++
  }
  y = input - z + 1
  while(y !== 0){
    log = log + '#'
    y--
  }
  
  console.log('-|' + log + '|-' + counter)
  x--
  counter++
}
/*let g = ""
g = g + "#"
g = g + "#"
g = g + "#"
console.log(g)
g[0] = "5"
console.log(g[0])*/
