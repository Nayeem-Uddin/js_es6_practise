//amra jodi kono object theke kono specific othoba kisu property nite cai shei name e taile amra destructuring kore khub shohoje nie nite pari


const girlfriendInfo = {
    name: 'sadia',
    age:25,
    address:'norshingdi',
    phone:'01711',
    sistersName:'srabonti'
}
const {phone,sistersName} = girlfriendInfo;
console.log(phone,sistersName);


//eta complexObject er khettre o hoite pare
const info = {
    name:'kanchi',
    details:{
        department:'FNS',
        experience:'1 years'
    }
}

const {department} = info.details;
console.log(department); 


//eta array er khettre hoite pare
const friendsName = ['bappy','farhad','labib','rakhi','shammah'];
const [chakrikoraBondhu] = friendsName;
console.log(chakrikoraBondhu);
