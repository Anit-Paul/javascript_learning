function getIds(...id){ //rest operator
    sum=0
    for (let i=0;i<id.length;i++){
        sum+=id[i]
    }
    return sum
}

console.log(getIds(1,2,3,4,5,6,7,8,9,10));