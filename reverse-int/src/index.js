function reverse (n){

    const arr = String(Math.abs(n)).split('').reverse();
    return (arr[0] !== '0') ? Number(arr.join('').slice(0)) : Number(arr.join(''));

}

console.log(reverse(0));