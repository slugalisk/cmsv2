
export default (async function showResults(values) {
  fetch('http://localhost:5000/api/v1/twitter/apps/'+values.appId+'/widgets/'+values.widgetId, {
    method: 'PUT',
    body: JSON.stringify({
      'enableLinks': true,
      'enableMedia': true,
      'enableTruncation': true,
      'limit': 0,
      'linkHashTags': true,
      'linkMentions': true,
      'mediaSize': 'thumb',
      'mentionsFormat': 'SCREEN_NAME',
      'screenName': 'string'
    }),
    headers: new Headers({ 'Content-Type': 'application/json' })
  })
});
