
import { Client } from "pg";

const client = new Client({
   connectionString:"postgresql://postgres:athul@localhost:5432/postgres"
  // connectionString:
  //   "postgresql://neondb_owner:npg_FO2KVax9CbNs@ep-wild-frog-a5z294v3-pooler.us-east-2.aws.neon.tech/user?sslmode=require&channel_binding=require",
});



async function createusers() {
  try {
    await client.connect();
    const result = await client.query(`
        CREATE TABLE use (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

async function insertdata(username:string,email:string,password:string) {
  try {
    //   await client.connect();
    const query =
      "INSERT INTO users (username, email, password) VALUES ($1,$2,$3)";
    const values = [username, email, password];
    const insertion = await client.query(query, values);
    console.log(insertion);
  } catch (err) {
    console.log(err);
  }
}


createusers();

// insertdata("athul","athul@gmail.com","hfdgjchfjffj");

async function foreignkey() {
  try {
   await client.connect();
   
   const resp=await client.query(`CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);`);

const res= await client.query(`CREATE TABLE addresses (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    city VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL,
    street VARCHAR(255) NOT NULL,
    pincode VARCHAR(20),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);`);
  await insertdata("athul","athul@gmail.com","hfdgjchfjffj");
 

}
   catch (err) {
    console.log(err);
  }
}

// foreignkey();


////joinnnnnnnnnnnnnnnn
async function getUserDetailsWithAddress(userId: string) {
    const client = new Client({
        connectionString:"postgresql://neondb_owner:npg_FO2KVax9CbNs@ep-wild-frog-a5z294v3-pooler.us-east-2.aws.neon.tech/user?sslmode=require&channel_binding=require",
    }
        
    );

    try {
        await client.connect();
        const query = `
            SELECT u.id, u.username, u.email, a.city, a.country, a.street, a.pincode
            FROM users u
            JOIN addresses a ON u.id = a.user_id
            WHERE u.id = $1
        `;
        const result = await client.query(query, [userId]);

        if (result.rows.length > 0) {
            console.log('User and address found:', result.rows[0]);
            return result.rows[0];
        } else {
            console.log('No user or address found with the given ID.');
            return null;
        }
    } catch (err) {
        console.error('Error during fetching user and address:', err);
        throw err;
    } finally {
        await client.end();
    }
}
// getUserDetailsWithAddress("2");