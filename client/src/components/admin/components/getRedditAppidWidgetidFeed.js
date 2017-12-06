
export default (async function showResults(values) {
  fetch("http://localhost:5000/getRedditAppidWidgetidFeed", {
    method: 'POST',
    body: JSON.stringify({
      appid: values.GetRedditAppidWidgetidFeedAppid,
      widgetid: values.GetRedditAppidWidgetidFeedWidgetid,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
