// // // const asyncHandler = require("express-async-handler");
// // // const bcrypt = require("bcrypt");
// // // const User = require("../models/userModel");
// // // const jwt = require("jsonwebtoken");
// // // const secret = "miniproject";
// // // //@desc register user
// // // //@route post/register
// // // //access public
// // // const registerUser = asyncHandler(async (req, res) => {
// // //   const { name, email, password } = req.body;
// // //   //   console.log(name, email, password);
// // //   if (!name || !email || !password) {
// // //     res.status(400);
// // //     throw new Error("all feilds are mandatory");
// // //   }
// // //   const userAvailable = await User.findOne({ email });
// // //   if (userAvailable) {
// // //     res.status(400);
// // //     throw new Error("user already registered!");
// // //   } else {
// // //     const hashedPassword = await bcrypt.hash(password, 10);
// // //     const user = await User.create({
// // //       username: name,
// // //       email,
// // //       password: hashedPassword,
// // //     });
// // //     console.log(user);
// // //     if (user) {
// // //       console.log("user successfull added to db");
// // //       res.status(200).json(user);
// // //     } else {
// // //       res.status(400);
// // //       throw new Error("user details are not valid");
// // //     }
// // //   }
// // // });

// // // //@desc login user
// // // //@route post/login
// // // //access public

// // // const loginUser = asyncHandler(async (req, res) => {
// // //   const { email, password } = req.body;
// // //   if (!email || !password) {
// // //     res.status(400).json("all feilds are mandatory");
// // //   } else {
// // //     const userDoc = await User.findOne({ email: email });
// // //     console.log(userDoc);
// // //     const passOk = await bcrypt.compareSync(password, userDoc.password);
// // //     if (passOk && userDoc) {
// // //       jwt.sign({ email, id: userDoc._id }, secret, {}, (err, token) => {
// // //         if (err) throw err;
// // //         else {
// // //           res.cookie("token", token).json({
// // //             userDoc,
// // //           });
// // //         }
// // //       });
// // //     } else {
// // //       res.status(400).json("wrong credentials");
// // //     }
// // //   }
// // // });

// // // //@desc fetching profile details
// // // //@route /profile
// // // //access private
// // // const getProfileDetails = asyncHandler(async (req, res) => {
// // //   const { id } = req.body;
// // //   const userDoc = await User.findById(id);
// // //   if (!userDoc) {
// // //     res.status(400);
// // //   } else {
// // //     res.json(userDoc);
// // //   }
// // // });

// // // //@desc posting profile details
// // // //@route /profile
// // // //access private
// // // const profileDetails = asyncHandler(async (req, res) => {
// // //   const { id, address, contactNumber, cropDetails, type } = req.body;
// // //   const upDatedDoc = await User.findOneAndUpdate(
// // //     { id },
// // //     {
// // //       address: address,
// // //       contactNumber: contactNumber,
// // //       cropDetails: cropDetails,
// // //       type: type,
// // //     }
// // //   );
// // //   if (!upDatedDoc) {
// // //     res.status(400);
// // //   } else res.status(200).json(upDatedDoc);
// // // });
// // // module.exports = { registerUser, loginUser, getProfileDetails, profileDetails };

// // ///////////////////////////////////////////////////////////////////////////////
// // const asyncHandler = require("express-async-handler");
// // const bcrypt = require("bcrypt");
// // const User = require("../models/userModel");
// // const jwt = require("jsonwebtoken");
// // const secret = "miniproject";
// // const maxAge = 365 * 24 * 60 * 60;

// // const createToken = (id, email) => {
// //   return jwt.sign({ id, email }, secret, {
// //     expiresIn: maxAge,
// //   });
// // };

// // // @desc Register user
// // // @route POST /register
// // // @access Public
// // const registerUser = asyncHandler(async (req, res) => {
// //   const { name, email, password } = req.body;

// //   if (!name || !email || !password) {
// //     res.status(400);
// //     throw new Error("All fields are mandatory");
// //   }

// //   const userAvailable = await User.findOne({ email });

// //   if (userAvailable) {
// //     res.status(400);
// //     throw new Error("User already registered!");
// //   }

// //   const hashedPassword = await bcrypt.hash(password, 10);
// //   const user = await User.create({
// //     username: name,
// //     email,
// //     password: hashedPassword,
// //   });

// //   if (user) {
// //     const token = createToken(user._id, user.email);
// //     res.cookie("token", token, {
// //       maxAge: maxAge * 1000,
// //       httpOnly: true,
// //     });
// //     res.status(200).json({ id: user.__v.id.toString(), email: user.email });
// //   } else {
// //     res.status(400);
// //     throw new Error("User details are not valid");
// //   }
// // });

// // // @desc Login user
// // // @route POST /login
// // // @access Public
// // const loginUser = asyncHandler(async (req, res) => {
// //   const { email, password } = req.body;

// //   if (!email || !password) {
// //     res.status(400).json("All fields are mandatory");
// //     return;
// //   }

// //   const userDoc = await User.findOne({ email });

// //   if (!userDoc) {
// //     res.status(400).json("Wrong credentials");
// //     return;
// //   }

// //   const passOk = await bcrypt.compare(password, userDoc.password);

// //   if (passOk) {
// //     // jwt.sign({ email, id: userDoc._id }, secret, {}, (err, token) => {
// //     //   if (err) {
// //     //     res.status(500).json("Error signing token");
// //     //     return;
// //     //   }
// //     const token = createToken(User._id, User.email);
// //     res.cookie("token", token, {
// //       maxAge: maxAge * 1000,
// //       httpOnly: true,
// //     });
// //     res.status(200).json({ id: userDoc._id, email: userDoc.email });
// //   } else {
// //     res.status(400).json("Wrong credentials");
// //   }
// // });

// // // // @desc Fetch profile details
// // // // @route GET /profile
// // // // @access Private
// // const getProfileDetails = asyncHandler(async (req, res) => {
// //   const token = req.cookies.token;
// //   if (!token) {
// //     return res.status(401).json({ error: "Token not provided" });
// //   }
// //   jwt.verify(token, secret, {}, (err, decoded) => {
// //     if (err) {
// //       return res.status(401).json({ error: "Invalid Token" });
// //     }
// //     res.json({ id: decoded.id, email: decoded.email });
// //   });
// // });
// // // const userDoc = await User.findById(id);

// // //   if (!userDoc) {
// // //     res.status(400).json("User not found");
// // //   } else {
// // //     res.json(userDoc);
// // //   }
// // // });

// // // @desc Update profile details
// // // @route PUT /profile
// // // @access Private
// // const profileDetails = asyncHandler(async (req, res) => {
// //   const { id, address, contactNumber, cropDetails, type } = req.body;
// //   const updatedDoc = await User.findByIdAndUpdate(
// //     id,
// //     {
// //       address,
// //       contactNumber,
// //       cropDetails,
// //       type,
// //     },
// //     { new: true }
// //   );

// //   if (!updatedDoc) {
// //     res.status(400).json("User not found or update failed");
// //   } else {
// //     res.status(200).json(updatedDoc);
// //   }
// // });

// // //@desc get profile details
// // //@get/profile
// // module.exports = { registerUser, loginUser, getProfileDetails, profileDetails };

// ////////////////////////////////////////////////////////

// const asyncHandler = require("express-async-handler");
// const bcrypt = require("bcrypt");
// const User = require("../models/userModel");
// const jwt = require("jsonwebtoken");
// const secret = "miniproject";
// const maxAge = 365 * 24 * 60 * 60;

// const createToken = (id, email) => {
//   return jwt.sign({ id, email }, secret, {
//     expiresIn: maxAge,
//   });
// };

// // @desc Register user
// // @route POST /register
// // @access Public
// const registerUser = asyncHandler(async (req, res) => {
//   const { name, email, password } = req.body;

//   if (!name || !email || !password) {
//     res.status(400);
//     throw new Error("All fields are mandatory");
//   }

//   const userAvailable = await User.findOne({ email });

//   if (userAvailable) {
//     res.status(400);
//     throw new Error("User already registered!");
//   }

//   const hashedPassword = await bcrypt.hash(password, 10);
//   const user = await User.create({
//     username: name,
//     email,
//     password: hashedPassword,
//   });

//   if (user) {
//     const token = createToken(user._id, user.email);
//     res.cookie("token", token, {
//       maxAge: maxAge * 1000,
//       httpOnly: true,
//     });
//     res.status(200).json({ id: user._id.toString(), email: user.email });
//   } else {
//     res.status(400);
//     throw new Error("User details are not valid");
//   }
// });

// // @desc Login user
// // @route POST /login
// // @access Public
// const loginUser = asyncHandler(async (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     res.status(400).json("All fields are mandatory");
//     return;
//   }

//   const userDoc = await User.findOne({ email });

//   if (!userDoc) {
//     res.status(400).json("Wrong credentials");
//     return;
//   }

//   const passOk = await bcrypt.compare(password, userDoc.password);

//   if (passOk) {
//     const token = createToken(userDoc._id, userDoc.email);
//     res.cookie("token", token, {
//       maxAge: maxAge * 1000,
//       httpOnly: true,
//     });
//     res.status(200).json({ id: userDoc._id, email: userDoc.email });
//   } else {
//     res.status(400).json("Wrong credentials");
//   }
// });

// // @desc Fetch profile details
// // @route GET /profile
// // @access Private
// const getProfileDetails = asyncHandler(async (req, res) => {
//   const token = req.cookies.token;
//   if (!token) {
//     return res.status(401).json({ error: "Token not provided" });
//   }
//   jwt.verify(token, secret, {}, (err, decoded) => {
//     if (err) {
//       return res.status(401).json({ error: "Invalid Token" });
//     }
//     res.json({ id: decoded.id, email: decoded.email });
//   });
// });

// // @desc Update profile details
// // @route PUT /profile
// // @access Private
// const profileDetails = asyncHandler(async (req, res) => {
//   const { id, address, contactNumber, cropDetails, type } = req.body;
//   const updatedDoc = await User.findByIdAndUpdate(
//     id,
//     {
//       address,
//       contactNumber,
//       cropDetails,
//       type,
//     },
//     { new: true }
//   );

//   if (!updatedDoc) {
//     res.status(400).json("User not found or update failed");
//   } else {
//     res.status(200).json(updatedDoc);
//   }
// });

// module.exports = { registerUser, loginUser, getProfileDetails, profileDetails };

// //////////////////////////////////

const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const secret = "miniproject";
//@desc register user
//@route post/register
//access public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  //   console.log(name, email, password);
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("all feilds are mandatory");
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("user already registered!");
  } else {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username: name,
      email,
      password: hashedPassword,
    });
    console.log(user);
    if (user) {
      console.log("user successfull added to db");
      res.status(200).json(user);
    } else {
      res.status(400);
      throw new Error("user details are not valid");
    }
  }
});

//@desc login user
//@route post/login
//access public

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json("all feilds are mandatory");
  } else {
    const userDoc = await User.findOne({ email: email });
    const passOk = await bcrypt.compareSync(password, userDoc.password);
    if (passOk && userDoc) {
      jwt.sign({ email, id: userDoc._id }, secret, {}, (err, token) => {
        if (err) {
          console.log("loginerror");
          throw err;
        } else {
          res.cookie("token", token).json({
            id: userDoc._id,
            email,
          });
          console.log("token created");
        }
      });
    } else {
      res.status(400).json("wrong credentials");
    }
  }
});

// @desc Fetch profile details
// @route GET /profile
// @access Private
const getProfileDetails = asyncHandler(async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ error: "Token not provided" });
  }

  try {
    const decoded = jwt.verify(token, secret);

    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ id: user._id, email: user.email, username: user.username });
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }
});

module.exports = { registerUser, loginUser, getProfileDetails };
