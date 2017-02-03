const pubsub = require('@google-cloud/pubsub')({
  projectId: 'project-name-here',
  keyFilename: '/path/to/keyfile.json'
})


const topicName = 'topic-name-here'
const subscriptionName = 'foobar'

pubsub.subscribe(topicName, subscriptionName, {
  ackDeadlineSeconds: 60
}, (err, subscription, apiResponse) => {
  // THIS NEVER RUNS
  if (err) return console.log(err)
  subscription.on('message', event => {
   console.log(event) // do stuff with event
  })
})
