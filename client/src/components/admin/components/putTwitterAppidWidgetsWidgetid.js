
export default (async function showResults(values) {
  fetch("http://localhost:5000/putTwitterAppidWidgetsWidgetid", {
    method: 'POST',
    body: JSON.stringify({
      appid: values.PutTwitterAppidWidgetsWidgetidAppid,
      widgetid: values.PutTwitterAppidWidgetsWidgetidWidgetid,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
