// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const filtareing = numbers.filter(x => x > 4);
// console.log(filtareing);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > 4){
        break;
    }
    // console.log(numbers[i]);
}

// next continue

const num = [1, 2, 3, 4, -5, 6, -7, 8,]
for(let i = 0; i < num.length; i++){
    if(num[i] < 0){
        continue;
    }
    console.log(num[i]);
}