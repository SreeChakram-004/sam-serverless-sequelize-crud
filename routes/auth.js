const express = require("express");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const router = express.Router();
require("../config/passport")(passport);
const User = require("../models").User;
const Role = require("../models").Role;

router.post("/signup", async function (req, res) {
  const user = await User.findOne({
    where: {
      email: req.body.email,
    },
  });
  if(user){
    res.json("user already exists try login");
  }else {
    try{
        const newUser = await User.create({
            role_id: req.body.role_id,
            email: req.body.email,
            fullname: req.body.fullname,
            password: req.body.password,
            phone: req.body.phone,
          });
          res.status(200).json(newUser);

    }catch(error){
        res.status(400).json(error);
    }
  }
  // if (!req.body.email || !req.body.password || !req.body.fullname) {
  //     res.status(400).send({
  //         msg: 'Please pass username, password and name.'
  //     })
  //     } else {
  //     Role.findOne({
  //         where: {
  //             role_name: 'admin'
  //         }
  //     }).then((role) => {
  //         console.log(role.id);
  //         User
  //         .create({
  //             email: req.body.email,
  //             password: req.body.password,
  //             fullname: req.body.fullname,
  //             phone: req.body.phone,
  //             role_id: role.id,
  //         })
  //         .then((user) => res.status(201).send(user))
  //         .catch((error) => {
  //             res.status(400).send(error);
  //         });
  //     }).catch((error) => {
  //         res.status(400).send(error);
  //         console.log(error);
  //     });
  // }
});

router.post("/signin", function (req, res) {
    try{
        // const user = await User.findOne({
        //     where: {
        //       email: req.body.email,
        //     },
        //   });



    }catch(error){
        res.status(400).json(error);
    }
//   User.findOne({
//     where: {
//       email: req.body.email,
//     },
//   })
//     .then((user) => {
//       if (!user) {
//         return res.status(401).send({
//           message: "Authentication failed. User not found.",
//         });
//       }
//       user.comparePassword(req.body.password, (err, isMatch) => {
//         if (isMatch && !err) {
//           var token = jwt.sign(
//             JSON.parse(JSON.stringify(user)),
//             "nodeauthsecret",
//             {
//               expiresIn: 86400 * 30,
//             }
//           );
//           jwt.verify(token, "nodeauthsecret", function (err, data) {
//             console.log(err, data);
//           });
//           res.json({
//             success: true,
//             token: "JWT " + token,
//           });
//         } else {
//           res.status(401).send({
//             success: false,
//             msg: "Authentication failed. Wrong password.",
//           });
//         }
//       });
//     })
//     .catch((error) => res.status(400).send(error));
});

module.exports = router;
