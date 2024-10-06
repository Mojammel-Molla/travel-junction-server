import express from 'express'
import { postControllers } from './post.controller'

const router = express.Router()

router.post('/', postControllers.createPost)

export const PostRoutes = router
