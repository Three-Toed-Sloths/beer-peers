const mongoose = require("mongoose");
const db = require("../models");
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
    }
  },
  {
    name: {
        first: "David",
        last: "Yeung"
    },
    username: "dyeung",
    contact: {
        email: "d@a.com",
        phone: "111-111-1111",
        city: "Westminster",
        state: "CA"
    },
    recipes: [],
    social: {
        followers:[],
        following:[],
        favorites: []
    }
  },
  {
    name: {
        first: "Marco",
        last: "Saglietto"
    },
    username: "marcosag",
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
    }
  },
  {
    name: {
        first: "Nirav",
        last: "Patel"
    },
    username: "niravpatel",
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
    }
  },
  {
    name: {
        first: "Doug",
        last: "Smith"
    },
    username: "dougiedougdoug",
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
    }
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
