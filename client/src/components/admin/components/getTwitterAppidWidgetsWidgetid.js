
export default (async function showResults(values) {
  fetch("http://localhost:5000/getTwitterAppidWidgetsWidgetid", {
    method: 'POST',
    body: JSON.stringify({
      appid: values.GetTwitterAppidWidgetsWidgetidAppid,
      tokenid: values.GetTwitterAppidWidgetsWidgetidWidgetid,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
