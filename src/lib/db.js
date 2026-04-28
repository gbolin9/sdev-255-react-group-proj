// const mongoose = require('mongoose')
// const dns = require('node:dns');
// dns.setServers(['8.8.8.8', '8.8.4.4']); 

// mongoose.connect('mongodb+srv://sdevgroupproject:Passwordsdev255@cluster0.v9j06oo.mongodb.net/?appName=Cluster0').then
// (()=>console.log("connected"));

// module.exports = mongoose

import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://sdevgroupproject:<Passwordsdev255>@cluster0.v9j06oo.mongodb.net/?appName=Cluster0';

if (!MONGODB_URI) {
  throw new Error("Please define MONGODB_URI in .env");
}

export async function connectDB(){
  try{
    await mongoose.connect(MONGODB_URI,{
      useNewUrlParser: true,
      useInifiedTopology: true,
    });

  }
  catch(err){
    process.exit(1);
  }

  };
module.exports = connectDB;
