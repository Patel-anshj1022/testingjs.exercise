function score(score){
    if (score >= 90) {
        return "what an amazing score!did you cheat?are you for real?";

    } else if (score >= 70 && (score <=89)) {
        return "that's a great score,you really know your stuff.";

    } else if (score >= 40 && (score <=69)) {
        return "you did a passable job,not bad!";

    } else if (score >=20 && (score <=39)) {
        return "you know somethings,but it,s a pretty bad score.";
        
    } else if (score >=0 && (score <=19)) {
        return "that,s a terrible score - total fail!";

    } else {invalid}
}

console.log(score(95))