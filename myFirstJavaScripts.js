var hello = "hello world";
console.log("This is good for debugging " + hello);

var print3Ways = function() {
    alert("Hello!");   //alerting hello
    console.log("Hello!"); //printing hello
    document.write("<h1>Hello World!</h1>"); //actually writing hello world in the document
}
var a = [1,2,3,4,5];

var sumArray = function() {
    var total = 0;
    for(let i = 0;i<a.length;i++) {
        total+=a[i]
    }
    return total;
}

var findMin = function() {
    var min = a[0];
    for(let i = 0; i<a.length;i++){
        if(a[i] < min)
        min = a[i];
    }
    return min;
}
var findMax = function() {
    let max = 0;
    for(let i = 0; i<a.length;i++){
        if(a[i]>max)
        max = a[i];
    }
    return max;

}
var funWithArrays = function() {
    document.write(sumArray() +"<br>");
    document.write(findMin() +"<br>");
    document.write(findMax() +"<br>");

}

function plainOldFunction(a="default value") {
    console.log("Plain old function " + a);
}

var callback = function() {
    console.log("this is the callback function");
}

var firstFunction = function(callback_function=function() {console.log("default function");}) {
    callback_function();
}

var soManyFunctions = function() {
    plainOldFunction("parameter");
    plainOldFunction();
    firstFunction(callback);
    firstFunction();
    const obj = {name: "boomer",
                pet_type: "dog",
                cute:true};
    console.log("My dog object "+JSON.stringify(obj));
}