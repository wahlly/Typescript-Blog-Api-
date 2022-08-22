import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt';
import User from '@/resources/user/user.interface';

const UserSchema = new Schema({
      name: {
            type: String,
            required: true
      },
      email: {
            type: String,
            required: true,
            unique: true,
            trim: true
      },
      password: {
            type: String,
            required: true
      },
      role: {
            type: String,
            default: 'User'
      }
}, { timestamps: true });

UserSchema.pre('save', async function(next) {
      if(!this.isModified('password')) return next();

      const hashedPassword = await bcrypt.hash(this.password, 10);
      this.password = hashedPassword;

      next();
});

UserSchema.methods.isValidPassword = async function(password: string): Promise<Error | boolean> {
      return await bcrypt.compare(password, this.password);
}

export default model<User>('User', UserSchema);;