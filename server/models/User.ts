import { model, Schema } from 'mongoose';

const UserSchema = new Schema({
  steamid: {
    type: Number,
    required: true
  },
  personaname: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  },
  avatarmedium: {
    type: String,
    required: true
  },
  avatarfull: {
    type: String,
    required: true
  },
  favouriteslist: {
    type: Number,
    required: true
  },
  lists: [{
    type: Number,
    required: true
  }]
});

const User = model('User', UserSchema, 'user');

export default User;