import { model, Schema } from 'mongoose';

const GameSchema = new Schema({
  appid: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  img_icon_url: {
    type: String,
    required: true
  },
  img_logo_url: {
    type: String,
    required: true
  }
});

const Game = model('Game', GameSchema, 'game');

export default Game;