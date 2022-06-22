import { Schema } from "mongoose";

interface token extends Object{
      id: Schema.Types.ObjectId,
      expiresIn: number,
}

export default token