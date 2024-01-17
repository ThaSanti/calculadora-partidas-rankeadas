let matchesWins = 64;
let matchesDefeats = 32;
let nameHero = "Ioiô";
let rankHero = result(matchesWins, matchesDefeats);


function result(matchesWins, matchesDefeats){
    return matchesWins - matchesDefeats;
}

function levelRankHero(rankHero){
    if (rankHero <=10)
        return "Ferro" ;
    else if (rankHero >=11 && rankHero <=20)
        return "Bronze" ;
    else if (rankHero >=21 && rankHero <=50)
        return "Prata" ;
    else if (rankHero >=51 && rankHero <=80)
        return "Ouro" ;
    else if (rankHero >=81 && rankHero <= 90)
        return "Diamante" ;
    else if (rankHero >=91 && rankHero <= 100)
        return "Lendário" ;
    else
        return "Imortal" ;
    
}

    console.log("O Herói " + nameHero + " possui " + matchesWins + " vitórias e " + matchesDefeats + " derrotas");
    console.log("O Herói " + nameHero + " tem saldo de " + rankHero + " e está no nível de " + levelRankHero(rankHero));

