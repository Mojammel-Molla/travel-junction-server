import { Schema, model } from 'mongoose'
import { TPost } from './post.interface'

const postSchema = new Schema({
  title: String,
  content: String,
  images: [String],
  category: String,
  upVotes: { type: Number, default: 0 },
  downVotes: { type: Number, default: 0 },
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  isPremium: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
})

export const PostModel = model<TPost>('Post', postSchema)
