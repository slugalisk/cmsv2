
export default (async function showResults(values) {
  fetch("http://localhost:5000/deletePeople", {
    method: 'POST',
    body: JSON.stringify({
      peopleid: values.DeletePeopleId,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
