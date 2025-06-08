const {MongoClient} = require("mongodb");

const url = 'mongodb+srv://surajss3696:Suraj3696@suraj-node-js-learning.hoshxwy.mongodb.net/';

const client = new MongoClient(url);

const dbName = 'HelloWorld';

async function main() {
    await client.connect();
    console.log("connected successfully to server");
    const db = client.db(dbName);
    const collection = db.collection('User');
    //console.log("Users => ",  collection)
    const dataUser = {
        firstName : "Shubham",
        lastName : "Salunkhe",
        city : "Kolhapur"
    }

    const savedData = await collection.insertOne(dataUser);
    console.log("saved data =>", savedData);

    
    const result = await collection.find({}).toArray();
    console.log("Users Data = >" , result);


    return "done"
}

main().then(console.log).catch(console.error).finally(()=> client.close())
