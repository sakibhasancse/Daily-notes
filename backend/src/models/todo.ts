import {model, Document} from 'mongoose'
import todoSchema from '../schema/todo'

export interface ITodo extends Document {
  name: string
  description: string
  status: boolean
}

export default model<ITodo>('todo', todoSchema)