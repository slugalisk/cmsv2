
export default (async function showResults(values) {
  fetch("http://localhost:5000/getTwitterAppidWidgetsWidgetid", {
    method: 'POST',
    body: JSON.stringify({
      appid: values.GetTwitterAppidWidgetsWidgetidAppid,
      widgetid: values.GetTwitterAppidWidgetsWidgetidWidgetid,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
