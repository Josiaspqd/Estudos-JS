const user = [
    {
        name:'josias',
        age:31,
        email:'josiascrip7@gmail.com',
        sal:1599,
        Married:true
    },
    {
        name:'Cicera',
        age:30,
        email:'cica12@gmail.com',
        sal:1200,
        Married:true
    },
    {
        name:'artur',
        age:15,
        email:'artur133@gmail.com',
        sal:500,
        Married:false
    },
    {
        name:'Catia',
        age:55,
        email:'cartiacortes11@gmail.com',
        sal:3000,
        Married:true
    }
];

const newUsers = user.filter((value,index,array)=>{
    return value.age >= 18
})

console.log(newUsers)



















