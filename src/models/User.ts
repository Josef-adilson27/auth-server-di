import { Schema, model, InferSchemaType } from 'mongoose';

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, unique: true },
},{
    timestamps:true
});

type User = InferSchemaType<typeof userSchema>;
export const UserModel = model('User', userSchema);