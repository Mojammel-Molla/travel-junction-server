import express from 'express'
import { postControllers } from './post.controller'

const router = express.Router()

router.post('/', postControllers.createPost)
router.get('/', postControllers.getAllPosts)
router.get('/:id', postControllers.getSinglePost)

export const PostRoutes = router
