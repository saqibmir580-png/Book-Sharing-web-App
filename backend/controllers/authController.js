const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");

//register the user
exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    //check if the user exits
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        success: false,
        error: "User already exits",
      });
    }
    // hash the password
    const hashedPssword = bcrypt.hashSync(password, 10);
    //create the user
    user = new User({
      username,
      email,
      password: hashedPssword,
    });
    //save this user into the databse or mongodb
    await user.save();
    //generate the jwt token for authentication for login purpose
    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.status(201).json({
      success: true,
      token,
      message: "Registeration successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "server error",
    });
  }
};
//login the user
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    //check it the user exits or not
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        error: "Invalid Credentials",
      });
    }
    //check the pasword for login and then login the user first we compare the password
    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched) {
      return res.status(400).json({
        success: false,
        error: "Password does not exits",
      });
    }
    //geneate the token
    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.status(201).json({
      success: true,
      token,
      message: "Login Successfully!",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "server error",
    });
  }
};
//get the current user
exports.getme = async (req, res) => {
  try {
    //all the details of the user is stored in id variable

    const user = await User.findById(req.user.id).select("-password");
    res.json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "server error",
    });
  }
};
