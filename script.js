// // question:1
var a = [1,2,3,4,5,6,7,8]

a.forEach(function(value){
    console.log("hello,"+value)
})



// //question:2

var a = [1,2,3,4,5,6,7,8,9];

a.forEach(function(value){
    if(value>2){
        console.log(value)
    }
})

// //question:3

var c = [1,2,3,4,5,6]
var sum=0;

c.forEach(function(value){
      sum = sum+value;
    
      
})

console.log(sum)

// //question:4

var d = [1,2,3,4,"string vlaue",5,6,10,"sheriyans",34]
var sum=0;


d.forEach(function(value){
    if(typeof value !== "string"){
        sum =sum+value;
    }
})
console.log(sum);


// //question:5(Asynchronous function)

console.log(1);
console.log(2);
console.log(3);
console.log(4);
setTimeout(function(){
    console.log(5)
},1000);
console.log(7);


// //qestion:6
// //array questions basics to advanced

function checkArray(inp){
    return Array.isArray(inp)
};

console.log(checkArray("hritik"));
console.log(checkArray("[34434]"));
console.log(checkArray([355,54,646,64,64,64]));


// //2nd method to check array is or not

function check(input){
    return input instanceof Array;
}
console.log(check([3423432,432,324234,]));
console.log(check("[3423432,432,324234,]"));



// //question-7


function cloneArray(value){
    var a = [...value];
    return a;
}
console.log(cloneArray([1,23,4,5,5]));


//question -8

function newvalue(inp ,get=1){
    var cloned = [];
    for(var i=0;i<get;i++){
        cloned.push(inp[i])
0    }
    return cloned;
} 

console.log(newvalue([1,2,3,4,5,6]));


//question-9


function jointvalue(inp){
    return inp.join("+");
}
console.log(jointvalue(["ravi","raushan","sheriyans" ,"kabadfm","kaka"]))


//question-10

// what is high order function

//question-11

//map :-map is using  for each array elements to perform some specific thing then we use map function.

var Array =[12,34,44,3234,234,432,42342,324]

var ans = Array.map(function(value){
    return "javascript codee"
})
console.log(ans)



//question-12

var arr =["hello","sheriyans","sahil","gautam","arav","lovebabbar"]

var lengtharr =arr.map(function(value){
    if(value.length===5){
        return `<p>${value}</p>`
    }
    else{
        return `<span>${value}</span>`
    }
})

console.log(lengtharr);


//question-13

var arrayy= [
           {name:"riya",age:24},
           {name:"mishra ji",age:45},
           {name:"shruti",age:19}
]

var namme=arrayy.map(function(val){
      return val.name
});

console.log(namme);


//filter:-filter is just like map structure it is used to filter and return the value.

//question :-14

var arr =[1,2,3,4,5,6,7,8]

var ansss = arr.filter(function(valuee){
    if(valuee % 2===0){
        return true;
    }
    else{
        return false;

    }
})

console.log(ansss);

//question:-15

var mr= ["arvind","shreya","singh","anushka","mst"];

var mrrr= mr.filter(function(val){
        return !val.includes("a");
})

console.log(mrrr)



 