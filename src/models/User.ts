import { Schema, model, InferSchemaType } from 'mongoose';
import { z } from 'zod';

const UserSchemaZod = z.object({
  name: z.string().min(3).nonempty(),
  email: z.email().nonempty(),
  password:z.string().nonempty().min(4)
});

type IUser = z.infer<typeof UserSchemaZod>;

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, unique: true },
  password:{type: String}
},{
    timestamps:true
});

export type User = InferSchemaType<typeof userSchema>;
export const UserModel = model('User', userSchema);