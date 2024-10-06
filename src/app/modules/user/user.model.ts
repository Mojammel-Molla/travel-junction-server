import { Schema, model } from 'mongoose'
import { TUser } from './user.interface'

const userSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  profilePicture: { type: String, default: '' },
  bio: { type: String, default: '' },
  followers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  following: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  isVerified: { type: Boolean, default: false },
  premiumAccess: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
})

export const UserModel = model<TUser>('User', userSchema)
