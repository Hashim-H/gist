import { Schema, model } from 'mongoose'

interface AppId {
  appId: number
}

interface LinstInterface {
  name: string
  steamid: number
  games: AppId[]
  ordered: boolean
}

const ListSchema = new Schema<LinstInterface>({
  name: {
    type: String,
    required: true,
  },
  steamid: {
    type: Number,
    required: true,
  },
  games: [
    {
      appid: Number,
    },
  ],
  ordered: {
    type: Boolean,
    required: true,
  },
})

const List = model<LinstInterface>('List', ListSchema, 'list')

export default List
