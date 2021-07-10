const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
const database = admin.database();
const rootRef = database.ref("User");

console.log("start");
/* const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "parthsaliya86",
    pass: "sph@8448",
  },
});
const mailoption = {
  from: "parthsaliya86@gmail.com",
  to: "brijeshdungrani303@gmail.com",
  subject: "Notification",
  text: "Hello",
}; */
/* eslint-disable eol-last */
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
/*  exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
}); */
exports.makeLppercase = functions.database.ref("/messages/{pushId}/original")
    .onCreate((snapshot, context) => {
      // Grab the current value of what was written to the Realtime Database.
      const original = snapshot.val();
      functions.logger.log("Uppercasing", context.params.pushId, original);
      const uppercase = original.toUpperCase();
      // writing to the Firebase Realtime Database.
      return snapshot.ref.parent.child("upper").set(uppercase);
    });


exports.newNodeDetected = functions.database.ref("User/U1/Notify")
    .onUpdate((change, context) => {
      const newval = change.after.val();
      console.log("starts", newval);
      // if (newval) {
      rootRef.on("value", (snapshot) => {
        console.log("snapshhhhhot", snapshot);
        const emailadd = snapshot.child("U1/emailss").val();
        const nodemailer = require("nodemailer");
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "parthsaliya86",
            pass: "sph@8448",
          },
        });
        const mailoption = {
          from: "parthsaliya86@gmail.com",
          to: "brijeshdungrani303@gmail.com",
          subject: "Notification",
          text: "Hello",
        };
        transporter.sendMail(mailoption, function(error, info) {
          console.log("Email function st");
          if (error) {
            console.log("email not sent", error);
          } else {
            console.log("email sent");
          }
        });
        return database.ref("metadata/lc/").set(emailadd);
        // return sendMail(emailadd);
      });
      // }
    });
// to send
/* function sendMail(email) {
  return transporter.
      sendMail(mailoption, function(error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("email sent");
        }
      });
} */