import { Router } from 'express'
import { getHome, postHome, getId, deleteId, putId } from './item.controllers'

const router = Router()

router
  .route('/')
  .get(getHome)
  .post(postHome)

router
  .route('/:id')
  .get(getId)
  .delete(deleteId)
  .put(putId)

export default router
