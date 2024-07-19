//Task1
function apple(num){
    if(num%2==0){
        console.log("Number is even");
    }
    else{console.log("NUmber is oddd");}
}



function sqrt(number){
    console.log(number**2);
}

//Task3
function maxof2(num1,num2){
    if(num1>num2){
        console.log("num1 is greater");

    }
    else if(num1==num2){
        console.log("numbers are equal");
    }
    else{
        console.log("Number1 is lesser");
    }

}


function concat(str1,str2) {
    console.log(str1+" "+str2);    
}



const add = (a, b) => a + b;

const containsChar = (str, char) => str.includes(char);