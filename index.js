'use strict';

// YOU KNOW WHAT TO DO //

/**
 * identity: Designed to accept any value and return it unchanged
 * 
 * @param {Any Data Type} value: The value which to return unchanged
 * 
**/

function identity (value) {
    return value;
};

module.exports.identity = identity;





/**
 * typeOf: Designed to 
 * 
 * @param {
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
 * first:
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
 * last:
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
  * indexOf:
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
  * contains:
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
 * unique:
 * 
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
 * filter:
 **/
 
 function filter (array, func) {
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
 * reject:
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
 * partition:
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
 * map:
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
 * pluck:
 * 
 **/

function pluck (objArray, property) {
    
    return map(objArray, function(element, index, collection) {
        
        return element[property];
    });
    
}

module.exports.pluck = pluck;



/**
 * every:
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
 * some:
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
 * reduce:
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
 * extend:
 * 
 **/

function extend (obj) {
    
    each(Array.from(arguments), function(element, index, array) {
        
        Object.assign(obj, element);
        
    });
   
    return obj;
    
}

module.exports.extend = extend;