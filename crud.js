//create
db.users.insertOne({
    name:"subas",
    age:21,
    email:"subas@gmail.com",
    address:"kathmandu"
})

//read
db.users.find().pretty()

//update        
db.users.updateOne(
    {name:"subas"},
    {$set:{age:22}}
)

//delete
db.users.deleteOne({name:"subas"})      
