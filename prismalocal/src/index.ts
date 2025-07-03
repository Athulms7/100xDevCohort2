import { PrismaClient } from "@prisma/client";
import { any } from "zod";

const prisma= new PrismaClient();

async function   createusers(username:string,password:string,firstname:string,lastname:string) {
   const res = await prisma.user.create({
        data:{// data to insert then use only data field
            email:username,
            password,
            firstname,lastname
        },select:{// data to get in response
            id:true,
            password:true
        },
    })
    console.log (res);
}

// createusers("athul","12345","athul","ms");


/////updatingg dataaa

interface UpdateParams {
    firstName: string;
    lastName: string;
}

async function updateUser(username: string, {
    firstName,
    lastName
}: UpdateParams) {
  const res = await prisma.user.update({
    where: { email:username },
    data: {
      firstname:firstName,
      lastname:lastName
    }
  });
  console.log(res);
}

updateUser("athul", {
    firstName: "athull",
    lastName: "singh"
});