const mongoose = require('mongoose');
const db = require('../models');
mongoose.Promise = global.Promise;

// This file empties the Users collection and inserts the user below

// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/brewerApp",
//   {
//     useMongoClient: true
//   }
// );

const userSeed = [
  {
    name: {
        first: "Nick",
        last: "Clear"
    },
    username: "nmclear",
    password: '',
    contact: {
        email: "nickclear22@gmail.com",
        phone: "231-409-0332",
        city: "Laguna Beach",
        state: "CA"
    },
    recipes: [],
    social: {
        followers:[],
        following:[],
        favorites: []
    },
    image: ''
  },
  {
    name: {
        first: "David",
        last: "Yeung"
    },
    username: "dyeung",
    password: '',
    contact: {
        email: "d@a.com",
        phone: "111-111-1111",
        city: "Fountain Valley",
        state: "CA"
    },
    recipes: [],
    social: {
        followers:[],
        following:[],
        favorites: []
    },
    image: ''
  },
  {
    name: {
        first: "Marco",
        last: "Saglietto"
    },
    username: "marcosag",
    password: '',
    contact: {
        email: "marco@sag.com",
        phone: "111-111-1111",
        city: "Huntington Beach",
        state: "CA"
    },
    recipes: [],
    social: {
        followers:[],
        following:[],
        favorites: []
    },
    image: ''
  },
  {
    name: {
        first: "Nirav",
        last: "Patel"
    },
    username: "niravpatel",
    password: '',
    contact: {
        email: "nirav@patel.com",
        phone: "111-111-1111",
        city: "Buena Park",
        state: "CA"
    },
    recipes: [],
    social: {
        followers:[],
        following:[],
        favorites: []
    },
    image: ''
  },
  {
    name: {
        first: "Doug",
        last: "Smith"
    },
    username: "dougiedougdoug",
    password: '',
    contact: {
        email: "doug@doug.com",
        phone: "111-111-1111",
        city: "Irvine",
        state: "CA"
    },
    recipes: [],
    social: {
        followers:[],
        following:[],
        favorites: []
    },
    image: ''
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.insertedIds.length + ' user records inserted!');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
