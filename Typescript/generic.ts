function identity<T>(arg: T):T{
    return arg
}

console.log(identity<string>("hii"));
let output2= identity<number>(1);

interface userss{
    username:string,
    name:string
}
function identity3<T>(arg: T[]):T{
    return arg[0]
}
let output3=identity3<userss>([{username:"username",name:"name"}])