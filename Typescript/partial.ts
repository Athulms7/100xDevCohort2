interface User{
    id:string,
    age:number,
    email:string,
    address:string,
}
type usserprops =Pick<User ,'id'|'age'|'email'>//PICK
type paartialyselectiom =Partial<User >// it will not  complain if partial?? PARTIAL

function hello(usserprops:usserprops){

}

interface config{
    api:string
}

const config:Readonly<config>={//readonly allow to make it strict and non changable
    api:"vfvdkfvhkhvdjjvdbvbvkd"
}

