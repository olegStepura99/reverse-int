module.exports = function reverse (n) {
        n = String(n);
    let newN ='';
    for(let i =n.length; i > 0; i--){
        newN+=n[i-1];
    }
    return parseInt(newN);
}
