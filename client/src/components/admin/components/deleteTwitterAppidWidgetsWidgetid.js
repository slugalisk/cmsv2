
export default (async function showResults(values) {
  fetch("http://localhost:5000/deleteTwitterAppidWidgetsWidgetid", {
    method: 'POST',
    body: JSON.stringify({
      appid: values.DeleteTwitterAppidWidgetsWidgetidAppid,
      widgetid: values.DeleteTwitterAppidWidgetsWidgetidWidgetid,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
