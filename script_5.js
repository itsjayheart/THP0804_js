const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];
renteds = []
books.forEach(book => {
    console.log(book)
    renteds.push(book['rented'])
})
console.log(renteds)

console.log('tous les livres on été empaintés au moin une fois?')
if(renteds.sort()[0] > 0){
    console.log('Vrai')
}else{
    console.log('Faux')
}

best = renteds.sort()[renteds.length - 1]
worst = renteds.sort()[0]
books.forEach(book => {
    if(book['rented'] == best){
    console.log(`Best ranted book : `)
    console.log(book)
    }
})

books.forEach(book => {
    if(book['rented'] == worst){
    console.log(`worst ranted book : `)
    console.log(book)
    }
})

function findBook( id){
    let target
    books.forEach(book => {
        if(book['id'] == id){
        target = book
        }
    })
    return target
}

console.log("J'ai trouvé le live 873495")
console.log(findBook(873495))

console.log(typeof books)

function removeBook(targetBook){
    for(let i in books) {
        if(books[i] == targetBook){
            books.splice(i,1)
        }
    }
}

console.log("i will remove book with id 133712")
console.log(target = findBook(133712))
console.log(removeBook(target))
console.log("new book liste: ")
bookTitle = []
books.forEach( book => {
    console.log(book)
    bookTitle.push(book['title'])
})

bookTitle = bookTitle.sort()

function findBookTitle( title){
    let target
    books.forEach(book => {
        if(book['title'] == title){
        target = book
        }
    })
    return target
}

booksSorted = []

bookTitle.forEach( title => {
    booksSorted.push(findBookTitle(title))
})

console.log("Nouvell liste des livre triés par ordre alphabétique")

booksSorted.forEach( book => {
    console.log(book)
})


/*
    Est-ce que tous les livres ont été au moins empruntés une fois ?
    Quel est livre le plus emprunté ?
    Quel est le livre le moins emprunté ?
    Trouve le livre avec l'ID: 873495 ;
    Supprime le livre avec l'ID: 133712 ;
    Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).
*/