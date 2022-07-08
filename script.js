function getAreaOfCircle(r){
    let area = 2* Math.PI *r *r;
    return(area);
}

function getCircumfrenceOfCircle(r){
    let circumfrence = 2* Math.PI * r;
    return(circumfrence);
}

function getAreaOfSquare(s){
    let areasquare = s *s;
    return(areasquare);
}

function getAreaOfTriangle(b, h){
    let areatriangle = .5* b * h;
    return(areatriangle);
}

console.log(getAreaOfCircle(5));
console.log(getCircumfrenceOfCircle(5));
console.log(getAreaOfSquare(3));
console.log(getAreaOfTriangle(3, 20));