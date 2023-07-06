const {server, app} = require('./src/app.js');
const { conn } = require('./src/db.js');
const {PORT} = process.env 

conn.sync({ force: true }).then(() => {
  
  app.listen(PORT, () => {

    console.log(`%s listening at ${PORT}`);
  });
}).catch((error)=>console.log(error));