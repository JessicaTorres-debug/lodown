'use strict';

// YOU KNOW WHAT TO DO //

/**
 * identity: Designed to accept any value and return that value unchanged
 * 
 * @param {Any Data Type} value: The value that is to be returned, unchanged.
 * 
 * @return {Any Data Type}: The exact value passed to the function
 * 
 * Usage:
 * 
 *      const numExp = 6;
 *      identity(numExp) //--> 6
**/

function identity (value) {
    return value;
}

module.exports.identity = identity;





/**
 * typeOf: Designed to accept a value of any data type and return the type name as a string
 * 
 * @param {Any Data Type} value: A value of any data type
 * 
 * @return {String}: The name of the data type, returned in string form
 * 
 * Usage:
 *      
 *      const whatAmI = "Test this sentence."
 *      typeOf(whatAmI); //--> "string"
 * 
 *      const agent = [0, 0, 7];
 *      typeOf(agent); //--> "array"
**/

function typeOf (value) {
    
    if(typeof value === "object" && value !== null && Array.isArray(value) === false && value instanceof Date === false){
         return "object";
     }else if(Array.isArray(value)){
         return "array";
     }else if(typeof value === "string"){
         return "string";
     }else if(value === undefined){
         return "undefined";
     }else if(typeof value ==="number"){
         return "number";
     }else if(typeof value === "boolean"){
         return "boolean";
     }else if(value === null){
         return "null";
     }else if(typeof value === "function"){
         return "function";
     }else if(value instanceof Date){
         return "date";
     }  
}

module.exports.typeOf = typeOf;



/**
 * first: Designed to accept an -array- and a -number- value, and return the first
 *        (however many is specified by the -number- value) element(s) of the array.
 * 
 * @param {Array} array: The array whose first element(s) will be returned
 * @param {Number} number: The number value that will determine how many array
 *                         elements will be returned.
 * 
 * @return {Array}: The array to be returned, either empty, holding the first
 *                  element of -array-, or holding the first -number- of elements
 *                  of the -array- (depending on the arguments passed to the
 *                  function (see Edge Cases)).
 * 
 * Edge Cases:
 * If the first argument passed is not an array OR the second argument passed is
 *    negative, the function returns an empty array.
 * If the second argument passed is not a number OR there is no second argument
 *    passed, the function returns only the first element of the -array-
 * If the second argument passed is greater than the total number of elements in
 *    the -array-, the function returns the entirety of the -array-.
 * 
 * Usage:
 *      const stop = ["In", "The", "Name", "Of", "Love"];
 *      first(stop, 2); //--> ["In", "The"]
 * 
 *      const doesThis = ["Bus", "Stop", "At", "82nd", "Street"];
 *      first(1, 2); //--> []
 * 
 *      const dontCha = ["stop"];
 *      first(dontCha); //--> ["stop"]
 * 
 *      const alrightStop = ["Hammer", "Time"];
 *      first(alrightStop, 3); //--> ["Hammer", "Time"]
 * 
 **/
function first(array, number){
    
    if(!Array.isArray(array)){
        return [];
    }else if(typeof number !== 'number' || number === undefined){
        return array[0];
        
         }else{
                if(number < 0){
                 return [];
        }
        if(number > array.length){
            number = array.length;
        }
        let answer = [];
        
        for(let i = 0; i < number; i++){
            
            answer.push(array[i]);
        }
        return answer;
    }
}

module.exports.first = first;




/**
 * last: Designed to accept an -array- and a -number- value, and return the last
 *        (however many is specified by the -number- value) element(s) of the array.
 * 
 * @param {Array} array: The array whose last element(s) will be returned
 * @param {Number} number: The number value that will determine how many array
 *                         elements will be returned.
 * 
 * @return {Array}: The array to be returned, either empty, holding the last
 *                  element of -array-, or holding the last -number- of elements
 *                  of the -array- (depending on the arguments passed to the
 *                  function (see Edge Cases)).
 * 
 * Edge Cases:
 * If the first argument passed is not an array OR the second argument passed is
 *    negative, the function returns an empty array.
 * If the second argument passed is not a number OR there is no second argument
 *    passed, the function returns only the last element of the -array-
 * If the second argument passed is greater than the total number of elements in
 *    the -array-, the function returns the entirety of the -array-.
 * 
 * Usage:
 *      const she = ["Keeps", "On", "Comin'"];
 *      last(she, 2); //--> ["On", "Comin'"]
 * 
 *      const youKeep = ["On", "Moving"];
 *      last(1, 6); //--> []
 * 
 *      const keepThe = ["Customer", "Satisfied"];
 *      last(keepThe); //--> ["Customer"];
 * 
 *      const keepOn = ["Chooglin'"];
 *      last(keepOn, 4); //--> {"Chooglin'"]
 * 
 **/
 
 function last(array, number){
    
    if(!Array.isArray(array)){
        return [];
            }else if(number === undefined || typeof number !== 'number'){
                return array[array.length - 1];
        
                    }else{
                        if(number < 0){
                        return [];
            }
            if(number > array.length){
            return array;
            }
                var answer = [];
        
                for(let i = number - 1; i < array.length; i++){
                 answer.push(array[i]);
        }
        return answer;
    }
}
 
 module.exports.last = last;
 
 
 
 /**
  * indexOf: Designed to accept an -array- with elements of any data type and
  *          a -value- of any data type, and return the index number at which the
  *          -value- can first be found in the -array-.
  * 
  * @param {Array} array: The -array- to be searched through for the -value-
  * @param {Any Data Type} value: The -value- to be searched for in the -array-
  * 
  * @return {Number}: The number of the (first) index that the -value- can be 
  *                   found at in the -array-. (OR -1, if the -value- does not
  *                   exist inside the -array-.)
  * 
  * Edge Cases:
  * If the second argument passed (-value-) is not present in the -array-, the
  *    function returns a number value of -1.
  * If the second argument passed (-value-) is present in the -array- more than
  *    once, the function returns the index of the first occurence of the -value-.
  * 
  * Usage:
  *      const cry = ["Me", "A", "River"];
  *      indexOf(cry, "Cry"); //--> -1
  * 
  *      const bigGirls = ["Don't", "Cry"];
  *      indexOf(bigGirls, "Cry"); //--> 1
  * 
  *      const wanna = ["Cry", "Cry", "Darlin'"];
  *      indexOf(wanna, "Cry"); //--> 0
  * 
  **/
  
function indexOf(array, value){
    
    for(let i = 0; i < array.length; i++){
        if(array[i] === value){
           
            return i;
        }
    }
    return -1;
}

  module.exports.indexOf = indexOf;
 
 
 
 /**
  * contains: Designed to accept an -array- and a -value-, and return a boolean
  *           value reflecting whether that -value- exists anywhere inside that
  *           -array-.
  * 
  * @param {Array} array: The -array- to be searched through for the -value-
  * @param {Any Data Type} value: The -value- to be searched for inside the -array-
  * 
  * @return {Boolean}: The boolean value returned will be true if the -value- is
  *                    found anywhere inside of the -array-. The boolean value
  *                    returned will be false if the -value- is not found.
  * 
  * Edge Cases:
  * If the -array- value is not strictly equal to the -value-, the function returns
  *    false.
  * If the no second argument (-value-) is given OR the -array- is empty, the function
  *    returns false.
  * 
  * Usage:
  *      const youGive = ["Love", "A", "Bad", "Name"];
  *      contains(youGive, "Bad"); //--> true
  * 
  *      const badCompany = [];
  *      contains(badCompany, "Bad"); //--> false
  * 
  *      const bad = ["To", "The", "Bone"];
  *      contains(bad); //--> false
  * 
  **/
  
  function contains (array, value){
   
    if(!value){
        return false;
    }
    var count = 0;
    each(array, function(element, index, array){
        ((element === value) ? true : count++);
    });
    
    return (count === array.length) ? false : true;
}

 
 module.exports.contains = contains;
 
 
 
/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;



/**
 * unique: Designed to accept an -array- and return a new array with all the
 *         -array-'s elements, with the exception of all duplicate elements removed.
 * 
 * @param {Array} array: The -array- whose elements will be copied to the new array
 *                       (duplicates eliminated).
 * 
 * @return {Array}: The new version of -array- with the duplicate values removed.
 * 
 * Usage:
 *      const baby = ["Bye", "Bye", "Bye"];
 *      unique(baby); //--> ["Bye"]
 **/
 
 function unique(array){
    
    var newarray = [];
    
    each(array, function(element, index, array){
        let position = indexOf(array, element);
        
        if(position === index){
            newarray.push(element);
        }
    });
    
    return newarray;
}
 
module.exports.unique = unique;



/**
 * filter: Designed to accept an -array-, and a function (that resolves to a boolean)
 *         to be applied to each element of the -array-. Filter will return a new
 *         array that holds only the elements of -array- that "passed the test
 *         (resolved to true) after the -func- was called on them.
 * 
 * @param {Array} array: The -array- that will have the -func- passed on all of
 *                       its elements, the "tested true" values filtered out. 
 * @param {Function} func: The function that will be passed on all of the -array-
 *                         elements, "testing" them.
 * 
 * @return {Array}: The new array with the elements of -array- for which -func-
 *                  returned true.
 * 
 * Edge Cases:
 * If the -func- passed as the second argument is not a function that returns a 
 *    boolean value, the function returns an empty array.
 * 
 * Usage:
 *       const twoCool = [4, "Skewl"];
 *       filter(twoCool, element => element === 4); //--> [4]
 *       filter(twoCool, element => element === ""); //--> ["SKewl"]
 * 
 **/
 
 function filter(array, func) {
     
    let newArray = [];
    
    each(array, function(element, index, array) {
        if(func(element, index, array) === true) {
                
                newArray.push(element);
            }
    });
    
    return newArray;
}

 module.exports.filter = filter;




/**
 * reject: Designed to accept an -array-, and a function (that resolves to a boolean)
 *         to be applied to each element of the -array-. Filter will return a new
 *         array that holds only the elements of -array- that "failed the test"
 *         (resolved to false) after the -func- was called on them.
 * 
 * @param {Array} array: The -array- that will have the -func- passed on all of
 *                       its elements, the "tested false" values filtered out. 
 * @param {Function} func: The function that will be passed on all of the -array-
 *                         elements, "testing" them.
 * 
 * @return {Array}: The new array with the elements of -array- for which -func-
 *                  returned false.
 * 
 * Edge Cases:
 * If the -func- passed as the second argument is not a function that returns a 
 *    boolean value, the function (Filter) returns an empty array.
 * 
 * Usage:
 *       const twoCool = [4, "Skewl"];
 *       filter(twoCool, element => element === 4); //--> ["Skewl"]
 *       filter(twoCool, element => element === ""); //--> [4]
 * 
 * 
 **/

function reject (array, func) {
    
    var rejResult =  filter(array, function(element, index, collection){ 
    
    return !func(element, index, collection);
 });
 
 return rejResult;
}

module.exports.reject = reject;



/**
 * partition: Designed to accept an -array-, and a function (that resolves to a boolean)
 *            to be applied to each element of the -array-. Partition will return a new
 *            array that holds two subArrays: the first, holding the elements of -array- that 
 *            "passed the test (resolved to true) after the -func- was called on them. 
 *            The second holding only the elements of -array- that "failed the test"
 *            (resolved to false) after the -func- was called on them.
 * 
 * @param {Array} array: The -array- that will have the -func- passed on all of
 *                       its elements, the "tested true" and tested false" values 
 *                       filtered out, into two subArrays.
 * @param {Function} func: The function that will be passed on all of the -array- elements,
 *                         "testing" them.
 * 
 * @return {Array}: The new array that will house the two subArrays; one holding the elements
 *                  for which -func- returned true, one holding the elements for which -func-
 *                  returned false.
 * 
 * Usage:
 *      const twoCool = [4, "Skewl"];
 *       filter(twoCool, element => element === 4); //--> [[4], ["Skewl"]]
 * 
 **/

function partition (array, func) {
    
    var partAnsw = [[], []];
    

 each(array, function(element, index, array){
        if(func(element, index, array)){
            partAnsw[0].push(element);
        }else{
            partAnsw[1].push(element);
        }
    });
    
    return partAnsw;
}

module.exports.partition = partition;

 

/**
 * map: Designed to accept a -collection- and a function, and call the function
 *      on each element of the -collection-. Map will return a new array that holds the
 *      result element(s) of the function called on each element of the originl -collection-.
 * 
 * @param {Array or Object} collection: The -collection-, array or object, that will have
 *                                      the -func- passed on each of its elements/properties.
 * @param {Function} func: The function that will be called on each of the elements/properties
 *                         inside of the -collection-. (If the -collection- is an array, the
 *                         -func- is called with the params of (element, index, -collection-), if
 *                         the -collection- is an object, the -func- is called with the params of
 *                         (value, key, -collection-).)
 *                          
 * @return {Array}: The new array returned, made up of the result elements from the -func- called
 *                  on each of the original -collection-'s elements/properties.
 * 
 * Usage:
 *      const rip = ["Here", "Lies", "Jessica"];
 *      map(rip, string => string.toUpperCase()); //["HERE", "LIES", "JESSICA"]
 * 
 **/

function map (collection, func) {
    
    var mapAnsw = [];
    
    each(collection, function(element, index, array) {
        
        mapAnsw.push(func(element, index, collection));
    });
    
    return mapAnsw;
    
}

module.exports.map = map;




/**
 * pluck: Designed to accept an array of objects and a "property name", and search
 *        through the -objArray- to locate the -property-. If Pluck finds the 
 *        -property- then the values stored at that key are pushed into the new array.
 * 
 * @param {Array} objArray: The array of objects that will be searched for the -property-
 * @param {String} property: The string representing the name of a key to be searched for 
 *                           in the -objArray-.
 * 
 * @return {Array}: The new array containing the values found at -property- inside the -objArray-
 * 
 * Usage:
 *      const its = [{threeAM : "I"}, {must : "Be Lonely"}];
 *      pluck(its, "must"); //--> ["Be Lonely"]
 * 
 **/

function pluck (objArray, property) {
    
    return map(objArray, function(element, index, collection) {
        
        return element[property];
    });
    
}

module.exports.pluck = pluck;



/**
 * every: Designed to accept a -collection- and a function, and use that function
 *        to test each element/property in the -collection-. Every returns a boolean
 *        value, dependent upon whether all elements/properties pass the -func- test
 *        (true), or if any single element/property fails the -func- test (false).
 * 
 * @param {Array or Object} collection: The array or object of elements/properties
 *                                      being tested.
 * @param {Function} func: The function being called on every element/property of
 *                      -collection-, that will test and resolve to a boolean value.
 * 
 * @return {Boolean}: The function returns a value of true if every element/property
 *                    passes the -func-'s test. Returns a value of false if even a
 *                    single value does not.
 * 
 * Usage:
 *      const gMapRoute = ["right", "right", "left", "right"];
 *      every(gMapRoute, item => item === "right"); //--> false
 * 
 *      const wMapRoute = ["right", "right", "right"];
 *      every(wMapRoute, item => item === "right"); //--> true
 * 
 **/

function every (collection, test){
    let arr = [];
    if(!test){
        return contains(filter(collection, Boolean), true);
    }
    each(collection, function (e, i, collection){
        arr.push(test(e, i, collection));
    });
    return !contains(arr, false);
}

module.exports.every = every;





/**
 * some: Designed to accept a -collection- and a function, and use that function
 *       to test each element/property in the -collection-. Some returns a boolean
 *       value, dependent upon whether at least one element/property passes the
 *       -func- test (true), or if all elements/properties fail the -func- test
 *       (false).
 * 
 * @param {Array or Object} collection: The array or object of elements/properties
 *                                      being tested.
 * @param {Function} func: The function being called on every element/property of
 *                         -collection-, that will test and resolve to a boolean
 *                         value.
 * 
 * @return {Boolean}: The function returns a value of true if any element/property
 *                    passes the -func-'s test. Returns a value of false if all
 *                    the values do not.
 * 
 * Usage:
 *      const gMapRoute = ["right", "right", "left", "right"];
 *      every(gMapRoute, item => item === "left"); //--> true
 * 
 *      const wMapRoute = ["right", "right", "right"];
 *      every(wMapRoute, item => item === "left"); //--> false
 * 
 **/

 function some(collection, test){
     let arr = [];
    if(!test){
        return contains(filter(collection, Boolean), true);
    }
    each(collection, function (e, i, collection){
        arr.push(test(e, i, collection));
    });
    return contains(arr, true);
}


module.exports.some = some;




/**
 * reduce: Designed to accept an -array-, a function to pass on each element inside
 *         of the -array-, and a -seed- (optionally) to act as a starting point.
 *         The value of -seed- is what is returned at the end. Reduce is meant
 *         to file down the -array- to a single value.
 * 
 * @param {Array} array: The array whose elements the -func- will be called on
 * @param {Function} func: The function called on each element of the -array-
 * @param {Any Data Type} seed: The optional starting point, that can be any data
 *                              type, and acts as the storage for the updated (on
 *                              each iteration) value as the function is called
 *                              on each element.
 * 
 * @return {Any Data Type}: The return of reduce should be a single value, the
 *                          -seed- (any data type), and will hold the value of
 *                          every result of the -func- called on the elements 
 *                          of -array-. (Returned on the final -func- call).
 * 
 * Edge Cases:
 * If there is no third argument passed (-seed-), the first element of the
 *    -array- is used as the -seed- starting point.
 * 
 * Usage:
 *      const sleepCountDown = [5, 4, 3, 2, 1];
 *      reduce(sleepCountDown, (sum, value) => sum + value, 0); //--> 15
 *                          
 *         
 * 
 **/

function reduce(array, func, seed) {
    
    var accumulator;
    
    if (seed === undefined) {
        accumulator = array [0];
        let arrayNew = array.slice(1);
        
        each(arrayNew, function(element, index) {
            accumulator = func(accumulator, element, index +1);
        });
        }else{
            accumulator = seed;
            each(array, function(element, index) {
                accumulator = func(accumulator, element, index);
            });
        }
        return accumulator;
    }

module.exports.reduce = reduce;







/**
 * extend: Designed to accept any number of objects and return the first object
 *         argument with the properties & values of the following object arguments
 *         added (in the same order as their objects occur as arguments).
 * 
 * @param {Object} obj: The object(s) to be combined into one (the first) object
 *                      to be returned.
 * 
 * @return {Object}: The object to be returned, holding the properties of either
 *                   the only -obj- to be passed, or the first -obj-'s properties
 *                   in addition to the accumulation of the properties of every
 *                   subsequent -obj- passed after the first.
 * 
 * Usage:
 *      const closingTime = {turnThe : "Lights Up Over Every Boy & Every Girl",
                             oneLast : "Call For Alcohol", };
 *      const youDont = {haveTo : "Go Home",
 *                       butYou : "Cant Stay Here", };
 * 
 *      extend(closingTime, youDont); 
 *                   //-->  {turnThe : "Lights Up Over Every Boy & Every Girl",
 *                           oneLast : "Call For Alcohol",
 *                           haveTo : "Go Home",
 *                           butYou : "Cant Stay Here", };  <--//
 *
 **/

function extend (obj) {
    
    each(Array.from(arguments), function(element, index, array) {
        
        Object.assign(obj, element);
        
    });
   
    return obj;
    
}

module.exports.extend = extend;