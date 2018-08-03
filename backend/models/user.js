const mongoose = require('mongoose');
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
      uppercase: true,
      required: [true, 'Please enter first name.'],
      trim: true,
      maxlength: 50
    },
    last: {
      type: String,
      uppercase: true,
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
    maxlength: [20, 'Please select username 20 characters or less.'],
  },
  password: {
    type: String,
    required: [true, 'Please enter password.'],
    trim: true,
    minlength: [4, 'Please select password 4 characters or more.'],
    maxlength: [100, 'Please select password 30 characters or less.'],
  },
  contact: {
    email: {
      type: String,
      required: [true, 'Please enter email.'],
      unique: true,
      lowercase: true,
      trim: true,
      validate: {
        validator: validateEmail,
        message: '{VALUE} is not a valid email'
      }
    },
    phone: {
      type: String,
      required: false,
      trim: true,
      validate: {
        validator: phone =>  /\d{3}-\d{3}-\d{4}/.test(phone),
        message: '{VALUE} is not a valid phone number.'
      },
      maxlength: 12
    },
    city: {
      type: String,
      uppercase: true,
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
  recipes: [{ type : Schema.Types.ObjectId, ref: 'Recipe' }],
  social: {
    followers: [{ type : Schema.Types.ObjectId, ref: 'User' }],
    following: [{ type : Schema.Types.ObjectId, ref: 'User' }],
    favorites: [{ type : Schema.Types.ObjectId, ref: 'Recipe' }]
  },
  image: {
    type: String,
    required: false,
    trim: true,
    maxlength: [1000, 'Please select a shorter image url (below 1000)'],
  },

  created: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

module.exports = User;