import { User } from "../schemas/UserSchema.js";
import { ApiError } from "../errors/ApiError.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const generateToken = (email, id) => {
  return jwt.sign({ email, id }, process.env.SECRET_KEY);
};

export class UserController {
  static async createUser(req, res, next) {
    const { email, password } = req.body;
    if (!email || !password) {
      throw ApiError.badRequest("Invalid email or password");
    }
    const user = await User.findOne({ email });
    if (user) {
      throw ApiError.badRequest("Email already in use");
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const createdUser = await User.create({
      email,
      password: hashPassword,
    });
    const token = generateToken(email, createdUser._id.toString());
    res.json({ token });
  }

  static async loginUser(req, res, next) {
    const { email, password } = req.body;
    // if (!email || !password) {
    //   throw ApiError.badRequest("Invalid email or password");
    // }
    const user = await User.findOne({ email });
    if (user) {
      if (!bcrypt.compareSync(password, user.password)) {
        throw ApiError.badRequest("Invalid email or password");
      }
    } else throw ApiError.badRequest("Invalid email or password");
    const token = generateToken(email, user._id.toString());
    res.json({ token });
  }
}
