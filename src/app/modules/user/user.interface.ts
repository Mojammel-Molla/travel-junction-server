import { Types } from 'mongoose'

export type TUser = {
  name: string
  email: string
  password: string
  profilePicture: string
  bio: string
  followers: Types.ObjectId[]
  following: Types.ObjectId[]
  isVerified: boolean
  premiumAccess: boolean
  createdAt: Date
}
