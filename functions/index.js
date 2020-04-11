const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.helloWorld = functions.region('asia-east2').https.onRequest((request, response) => { response.send("Hello from Anup the Boss!");
});

const createNotification = (notification) => {
  return admin.firestore().collection('notifications')
  .add(notification)
  . then( doc => console.log("Notification added", doc))
}

exports.projectCreated = functions.region('asia-east2').firestore
.document('projects/{projectId}')
.onCreate( (doc) => {
  const project = doc.data()
  const notification = {
    content: 'Added a new project',
    user: '${project.authorFirstName} ${project.authorLastName}',
    time: admin.firestore.FieldValue.serverTimestamp()
  }
  return createNotification(notification); })
