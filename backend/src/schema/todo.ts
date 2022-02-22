import { Schema } from "mongoose"

const todoSchema: Schema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: Boolean
  }
})

export default todoSchema
