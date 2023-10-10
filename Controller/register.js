const Signup = require("../model/Signup");
const bcrypt = require("bcrypt");
const jsonwebToken = require("jsonwebtoken");

class register {
  async signUp(req, res) {
    try {
      const name = req.body.name;
      const email = req.body.email;
      const password = req.body.password;

      const post = await Signup.create({
        name: name,
        email: email,
        password: password,
      });
      res.status(200).json({ massage: `user registerd successfully` });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "An error occurred during signup" });
    }
  }

  async login(req, res) {
    try {
      const name = req.body.name;
      const email = req.body.email;
      const password = req.body.password;

      const hashedpassword = await bcrypt.hash(password, 10);

      const existingUser = await Signup.findOne({ where: { email: email } });

      if (existingUser) {
        const oldPassword = existingUser.password;

        const match = await bcrypt.compare(password, oldPassword);
        if (match) {
          const token = await jsonwebToken.sign({ email: email }, "1234", {
            expiresIn: "1h",
          });
          return res.status(200).json({ massage: `login successfully`, token: token });
        } else {
          return res.status(200).json({ massage: `invalid password` });
        }
      } else {
        const insert = await Signup.create({
          name: name,
          email: email,
          password: hashedpassword,
        });
        return res.status(200).json({ massage: `register successfully` });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "An error occurred during signup" });
    }
  }
}
module.exports = {
    signUp:register.prototype.signUp,
login:register.prototype.login}
