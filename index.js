// Write your solution in this file!
const driver = {
    name: 'Sam',
    address: '11 Broadway'
}


function updateDriverWithKeyAndValue(obj, key, value) {
    const nextDriver = {...obj }
    nextDriver[key] = value;
    return nextDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

function deleteFromDriverByKey(obj, key) {
    const nextDriver = {...obj }
    delete nextDriver[key];
    return nextDriver;
}

function destructivelyDeleteFromDriverByKey(obj, key) {

    delete obj[key];
    return obj;
}