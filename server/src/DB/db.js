const {MongoClient}=require('mongodb');
const uri='mongodb+srv://admin:<senha>@cluster0.9ouyy.mongodb.net/testeee?retryWrites=true&w=majority';
let chachedDB=null
async function conn(){
    if(chachedDB)
        return chachedDB

    const mongo=await MongoClient.connect(uri,{useUnifiedTopology:true})
    const db=mongo.db('loginData')
    chachedDB=db
    return db
}
module.exports=conn