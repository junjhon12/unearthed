import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import giftData from '../data/gift'

const __filename = fileURLToPath(import.meta.url)
const __dirnam = path.dirname(_filename)
const router = express.Router()

router.get('/:giftId', (req,res) => {
  res.status(200).json(giftData)
})
router.get('/:giftId', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../public/gift.html'))
})

export default router