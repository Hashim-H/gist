import { model, Schema } from 'mongoose';

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
    appid: Number,
    comments: String
  }],
  ordered: {
    type: Boolean,
    required: true
  },
  // draft: {
  //   type: Boolean,
  //   required: true
  // },
  // public: {
  //   type: Boolean,
  //   required: true
  // },
  // created_at: {
  //   type: Date,
  //   required: true
  // }
});

const List = model('List', ListSchema, 'list');

export default List;