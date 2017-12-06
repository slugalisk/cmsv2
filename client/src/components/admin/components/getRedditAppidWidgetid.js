
export default (async function showResults(values) {
  fetch("http://localhost:5000/getRedditAppidWidgetid", {
    method: 'POST',
    body: JSON.stringify({
      appid: values.GetRedditAppidWidgetidAppid,
      widgetid: values.GetRedditAppidWidgetidWidgetid,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
