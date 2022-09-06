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

// ** Store the userInfo as key-> userInfo:{'firstName':'Jhon','lastName':'Doe'}-> value

// ** get the userInfo object like string if existed

const getUserInfo = ()=>{
    const userInfo = localStorage.getItem('user');
    const userObject = JSON.parse(userInfo);

    let userInfoObject = {};

    userObject && (userInfoObject = userObject);

    return userInfoObject;
};

// ** Set the key value as userInfo

const userInfoHandler = ()=>{
    // ** get the prior user info
    const user = getUserInfo();

    user['firstName'] = document.getElementById('first-name').value
    user['lastName'] = document.getElementById('last-name').value

    const {firstName,lastName} = user;

    displayUser(firstName,lastName)

    const userStringyfied = JSON.stringify(user)

    localStorage.setItem('user',userStringyfied)
};

// userInfoHandler();

// ** display user 

const displayUser = (firstName,lastName)=>{
    document.getElementById('display-user').innerText = `${firstName} ${lastName}`
}

// ** Display user from localStorage

const displayUserInfo = ()=>{
    const getUser = getUserInfo();
    // console.log(getUser)
    const {firstName,lastName} = getUser;

    document.getElementById('display-user').innerText = `${firstName ? firstName : "N/A"} ${lastName ? lastName : "N/A"}`

};

displayUserInfo()