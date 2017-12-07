
export default (async function showResults(values) {
  fetch("http://localhost:5000/getTwitterAppidWidgetsWidgetidFeed", {
    method: 'POST',
    body: JSON.stringify({
      appid: values.GetTwitterAppidWidgetsWidgetidFeedAppid,
      widgetid: values.GetTwitterAppidWidgetsWidgetidFeedWidgetid,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
