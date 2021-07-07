const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
const database = admin.database();
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

exports.newNodeDetected = functions.database.ref("users/{userId}/first_name")
    .onWrite((change, context) => {
      const oldname = change.before.val();
      const newName = change.after.val();
      const userId = context.params.userId;
      database.ref("metadata/lc/").set(oldname+"chn"+newName+"for"+userId);
    });