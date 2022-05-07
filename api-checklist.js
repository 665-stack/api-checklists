/*
1. object with property (string, boolean , number, object, array, method- which will return a property value)
2. template string. minimum 3 property will be dynamic (nested object property, array second element, another property)
3. 
*/
var keyName = 'palyer';
var object = {
    [keyName]: {
        name: 'abul',
        age: 12
    }
}
console.log(object)