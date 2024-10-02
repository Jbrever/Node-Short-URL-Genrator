const mongodb = require('mongoose');

async function connectionDB(url){
  await mongodb.connect(url);
  console.log('mongoDB connected');
};

module.exports = connectionDB;