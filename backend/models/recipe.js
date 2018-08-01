const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const beerStyles = ['Amber Ale', 'American IPA', 'American Imperial Stout', 'American Lager', 'American Wheat Ale', 'Barley Wine','Barrel-Aged Beer', 'Belgian Dubbel', 'Belgian Golden Strong Ale', 'Belgian Saison', 'Belgian Tripel', 'Belgian Witbier', 'Black Ale', 'Blonde Ale', 'Brown Ale', 'Brown Porter', 'California Common', 'Coffee Beer', 'Cream Ale', 'Double IPA', 'English IPA', 'Fruit Beer', 'German Pilsner', 'Hefeweizen', 'Irish Dry Stout', 'Milk Stout', 'New England IPA', 'Oatmeal Stout', 'Oktoberfest', 'Pale Ale', 'Scotch Ale', 'Session IPA', 'Sour Ale', 'Speciality Beer', 'Stout'];

const recipeSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50
  },
  brewer: { type : Schema.Types.ObjectId, ref: 'User' },
  style: {
    type: String,
    required: true,
    trim: true,
    enum: beerStyles,
    maxlength: 50
  },
  description: {
    type: String,
    required: true,
    trim: true,
    maxlength: 500
  },
  likes: {
    type: Number,
    required: true,
    trim: true,
    max: 100000
  },
  specs: {
    abv: {
      type: Number,
      required: true,
      trim: true,
      max: 50
    },
    ibu: {
      type: Number,
      required: true,
      trim: true,
      max: 200
    },
    og: {
      type: Number,
      required: true,
      trim: true,
      max: 4
    },
    fg: {
      type: Number,
      required: true,
      trim: true,
      max: 4
    },
    batch: {
      size: {
        type: Number,
        required: true,
        trim: true,
        max: 10000
      },
      units: {
        type: String,
        required: true,
        trim: true,
        maxlength: 10
      }
    },
    boil: {
      type: Number,
      required: true,
      trim: true,
      max: 300
    },
    preboil: {
      size: {
        type: Number,
        required: true,
        trim: true,
        max: 10000
      },
      units: {
        type: String,
        required: true,
        trim: true,
        maxlength: 10
      }
    },
  },
  ingredients: {
    malt: {
      base: [
        {
          name: {
            type: String,
            required: true,
            trim: true,
            maxlength: 50
          },
          amount: {
            // type: Number,
            type: String,
            required: true,
            trim: true,
            max: 10000
          },
          units: {
            type: String,
            required: true,
            trim: true,
            maxlength: 10
          }
        }
      ],
      speciality: [
        {
          name: {
            type: String,
            required: true,
            trim: true,
            maxlength: 50
          },
          amount: {
            // type: Number,
            type: String,
            required: true,
            trim: true,
            max: 10000
          },
          units: {
            type: String,
            required: true,
            trim: true,
            maxlength: 10
          }
        }
      ]
    },
    hops: [
      {
        name: {
          type: String,
          required: true,
          trim: true,
          maxlength: 50
        },
        type: {
          type: String,
          required: true,
          trim: true,
          maxlength: 50
        },
        alpha: {
          // type: Number,
          type: String,
          required: true,
          trim: true,
          max: 100
        },
        amount: {
          // type: Number,
          type: String,
          required: true,
          trim: true,
          max: 1000
        },
        units: {
          type: String,
          required: true,
          trim: true,
          maxlength: 10
        },
        addition: {
          type: String,
          required: true,
          trim: true,
          maxlength: 20
        }
      }
    ],
    yeast: {
      name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50
      },
      amount: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50
      },
    },
    misc: {
      type: String,
      // required: true,
      trim: true,
      maxlength: 500
    },
  },
  directions: {
    type: String,
    required: true,
    trim: true,
    maxlength: 4000
  },
  created: { type: Date, default: Date.now }
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
