                                   // Normal Function
//---------------------------------------------------------------------------------
function add( a, b)
{
    return a+b;
}
console.log(add(5, 5));

                                  // Function as variable
//----------------------------------------------------------------------------------
var add = function(a,b)
{
    return a+b;
}
console.log(add(3,2));

                                  // Fat arrow function
//------------------------------------------------------------------------------------
var add = (a, b)=>
    {
        return a+b;
    }
console.log(add(6,3));

                                 // Fat arrow  function in short cut
//------------------------------------------------------------------------------------
var add = (a, b) => {return a+b;}
console.log(add(2,3));

                                 // Fat arrow function in very short
//------------------------------------------------------------------------------------
var add = (a, b) => a+b;
console.log(add(3,1));

                                  // Function that run itself
//------------------------------------------------------------------------------------
(function(a,b){
    console.log("This is automatic function, we don't need to call.");
})();

                                   // CallBack Funtion
//-------------------------------------------------------------------------------------                          
function callback()
{
    console.log("You called a call-back function, using primary function.")
}

var primary =  function(a, b, callback)
{
    var result = a+b;
    console.log(`result is: `+ result);
    callback();
}
primary(5,3,callback);

                                // CallBack function in 2nd way
//--------------------------------------------------------------------------------------------
var primary =  function(a, b, callback)
{
    var result = a+b;
    console.log(`result is: `+ result);
    callback();
}
primary(5,3, ()=>{
    console.log(`This is the CallBack function, 2nd way.`);
});