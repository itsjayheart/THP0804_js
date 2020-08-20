function respond(input){
    if(input.endsWith("?")){
        console.log('Ouais Ouais...')
    }else if(input == input.toUpperCase() && input){
        console.log("Pwa, calme-toi...")
    }else if(input.toLowerCase().includes("fortnite")){
        console.log("on s' fait une partie soum-soum ?")
    }else if(input == false){
        console.log("t'es en PLS ?")
    }else{
        console.log("balek.")
    }
}
console.log(respond(prompt("Entrez en caumunication avec le bot")))
/*
    Si on lui pose une question (= la phrase finie par "?"), le bot répond "Ouais Ouais..." ;
    Si on lui hurle trop dessus (= la phrase est 100% en majuscules), le bot répond "Pwa, calme-toi..." ;
    Si la phrase que tu prononces contient le mot "Fortnite", le bot répond "on s' fait une partie soum-soum ?" ;
    Si on lui envoie un message vide, le bot répond "t'es en PLS ?" ;
    Pour tout autre phrase que tu lui envoies, le bot répond "balek." ;
*/