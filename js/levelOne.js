// ** clear All button functionality

const clearAll = () => localStorage.clear();

// ** Add an Item to localStorage

const addItemToLs = (key,value)=> localStorage.setItem(key,value);

// ** Add name to localStorage

const addName = ()=> addItemToLs('name','Sakib');

// ** Add age to ls

const addAge = ()=>{
    addItemToLs('age',23);
}

// ** Remove an Item from LS

const removeItemFromLs = (key)=>{
    localStorage.removeItem(key)
};

// ** remove name

const removeName = ()=> removeItemFromLs('name');

// ** remove age

const removeAge = ()=> removeItemFromLs('age');