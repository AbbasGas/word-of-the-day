import express from 'express'
import { getWordDay } from '../controllers/index.js'

const router = express.Router()

router.get('/', getWordDay)

export default router
