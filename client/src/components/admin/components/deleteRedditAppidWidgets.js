
export default (async function showResults(values) {
  fetch("http://localhost:5000/deleteRedditAppidWidgets", {
    method: 'POST',
    body: JSON.stringify({
      appid: values.DeleteRedditAppidWidgetsAppid,
      widgetid: values.DeleteRedditAppidWidgetsWidgetid
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});