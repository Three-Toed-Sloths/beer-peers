const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const STATES = [ 'AK', 'AL', 'AR', 'AS', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'GU', 'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VI', 'VT', 'WA', 'WI', 'WV', 'WY'];

const validateEmail = email => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const userSchema = new Schema({
  name: {
    first: {
      type: String,
      required: [true, 'Please enter first name.'],
      trim: true,
      maxlength: 50
    },
    last: {
      type: String,
      required: [true, 'Please enter last name.'],
      trim: true,
      maxlength: 50
    }
  },
  username: {
    type: String,
    required: [true, 'Please enter username.'],
    unique: true,
    lowercase: true,
    trim: true,
    minlength: [4, 'Please select username 4 characters or more.'],
    minlength: [20, 'Please select username 20 characters or less.'],
    validate: {
      validator: (v, cb) => {
        User.find({username: v}, (err,docs) => {
           cb(docs.length == 0);
        });
      },
      message: 'Username already exists!'
    }
  },
  contact: {
    email: {
      type: String,
      required: [true, 'Please enter email.'],
      unique: true,
      lowercase: true,
      trim: true,
      validate: [
        [validateEmail, '{VALUE} is not a valid email/'],
        {
          validator: (v, cb) => {
            User.find({email: v}, (err,docs) => {
              cb(docs.length == 0);
            });
          }, message: 'Email already exists!'
        }
      ] 
    },
    phone: {
      type: String,
      required: false,
      trim: true,
      validate: {
        validator: v =>  /\d{3}-\d{3}-\d{4}/.test(v),
        message: '{VALUE} is not a valid phone number.'
      },
      maxlength: 12
    },
    city: {
      type: String,
      required: [true, 'Please enter city.'],
      trim: true,
      maxlength: 50
    },
    state: {
      type: String,
      required: [true, 'Please enter state.'],
      trim: true,
      enum: STATES,
      maxlength: 2
    }
  },
  recipes: [{ type : ObjectId, ref: 'Recipe' }],
  social: {
    followers: [{ type : ObjectId, ref: 'User' }],
    following: [{ type : ObjectId, ref: 'User' }],
    favorites: [{ type : ObjectId, ref: 'Recipe' }]
  },

  created: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

module.exports = User;

