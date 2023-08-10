module.exports = function reverse (n) {
    let newName= '';
    let i= 0;
    let s = n.toString();
       if(n<0){
        s = s.slice(1,s.length)
        while(i<s.length){
            newName =`${s[i]}${newName}`;
            i++;
        }
        return (newName);
       } else{
        while(i<s.length){
            newName =`${s[i]}${newName}`;
            i++;
        }
        return (newName);
    }
}
