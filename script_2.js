const factorielle = (number) => {
    let x = number
    let y = x
    while(y !== 1) {
        y = y-1
        console.log(`${x}x${y}=${x*y}`)
        x = x*y
    }
    return x
}
input = prompt("De quel nombre veux-tu calculer la factorielle ?")

console.log(`Resultat ${factorielle(input)}`)
