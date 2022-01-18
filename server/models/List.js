const { model, Schema } = require('mongoose');

const ListSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  steamid: {
    type: Number,
    required: true
  },
  games: [{
    appid: Number
  }],
  ordered: {
    type: Boolean,
    required: true
  }
});

const List = model('List', ListSchema, 'list');

module.exports = List;