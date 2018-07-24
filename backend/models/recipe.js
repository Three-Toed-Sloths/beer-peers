const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    maxlength: 50
  },
  description: {
    type: String,
    required: true,
    trim: true,
    maxlength: 300
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
    batch: {
      size: {
        type: Number,
        required: true,
        trim: true,
        max: 1000
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
            max: 1000
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
            max: 1000
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
        maxlength: 100
      },
      amount: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50
      },
    }
  },
  directions: {
    type: String,
    required: true,
    trim: true,
    maxlength: 255
  },
  created: { type: Date, default: Date.now }
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
