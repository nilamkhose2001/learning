const jwt = require("jsonwebtoken");
const User = require("../user/user.model");
const secret = process.env.SECRET_PASSWORD;
const signup = async (req, res) => {
  let { name, email, password, role } = req.body;
  try {
    let user = await User.create({
      name: name,
      email: email,
      password: password,
      role: role,
    });
    res.send({ user, message: "SignUp successfully...!" });
  } catch (err) {
    res.send({ message: err.message });
  }
};

const login = async (req, res) => {
  let { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      res.send({ message: "user not found...please do signup first!" });
    } else {
      if (user.password != password) {
        res.send({ message: "Wrong Credentials" });
      } else {
        const token = jwt.sign(
          {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
          },
          secret,
          { expiresIn: "7 days" }
        );
        res.send({ user, token, message: "Login successfully...!" });
      }
    }
  } catch (err) {
    res.send({ message: err.message });
  }
};

module.exports = { signup, login };
