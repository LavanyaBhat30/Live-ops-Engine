const mongoose = require('mongoose')

// const uri = process.env.database_url
const uri ='mongodb+srv://Lavanya:Lavanya@atlascluster.opi9msc.mongodb.net/?retryWrites=true&w=majority'

mongoose.set('strictQuery', true)

// function getConection() {
//     mongoose.set('strictQuery', true)
//     mongoose.connect(uri, (err) => {
//         if (err) {
//             console.log('connection to database is failed');
//         } else {
//             console.log('connected to database successfully');
//         }
//     });
// }
//  module.exports = getConection();
mongoose.connect(uri).then(() => {
    console.log('connected to database successfully');
})
