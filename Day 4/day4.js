// Activity 1: For Loop

// Task1
let a=0;

for (let index = 0; index  <=10; index++) {
    console.log(index);
    
}

//Task 2
for (let num = 0; num <= 100; num=num+5) {
    
    console.log(num);
    
}


// Activity 2

// Task 3
// sum of 1 to n

let n=10;
for (let i = 1,sum=1; i < sum; i++) {

sum = sum +i;

console.log(sum);

}


//Task 4
// 10 to 1

for (let j = 10; j >=1 ; j--) {
    console.log(j);

    
}
// Activity 3
// Task5
let apple = 1;
do {let apple = 1;
    console.log(apple);
    apple++;

} while (apple > 10);

// Task 6
//factorial using do while loop
// fact=10*9*8*7*6*5*4*3*2*1

num=1;
fact=1;


do {
    fact=fact*num;
    num++;
if(num==10){
    console.log(fact);
}
} while (num<=10);
//Activity 4
// Task6
for (let i = 0; i < n; i++) {
    for (let k = 0; k < n; k++) {
        console.log(" * ");
    } console.log("\n");
   
    
}
// pattern
