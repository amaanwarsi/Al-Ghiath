
var btn = document.querySelector("#btn");
var totalQaza = document.querySelector("#total");
var remaining = document.querySelector("#remaining");
var extime = document.querySelector("#time");

var totalValue = 1700; // total qaza were left


const setVal = ((elem, item) => {
  elem.innerHTML = item;

});
const calculateTiming = ((d) => {
  const date = new Date();

  var year = date.getFullYear();
  var month = date.getMonth();
  var day = date.getDate();

  let months = 0,
    years = 0,
    days = 0;
  while (d) {
    if (d >= 365) {
      years++;
      d -= 365;
    } else if (d >= 30) {
      months++;
      d -= 30;
    } else {
      days++;
      d--;
    }
  }
  var c = new Date(year + years, month + months, day + days);

  const dd = c.toLocaleString('default', { day: '2-digit' }),
    mm = c.toLocaleString('default', { month: 'long' }),
    yyyy = c.toLocaleString('default', { year: 'numeric' });
  return dd + ' ' + mm + ' ' + yyyy;


});
if (typeof(Storage) !== "undefined") {
  var total = localStorage.getItem("qaza");

  var val = parseInt(total) + 1;;
  if (total === null) {
    val = 1;
    setVal(totalQaza, 0);
    setVal(remaining, 0);
    setVal(extime, 0);
  }


  totalValue -= parseInt(val) - 1;

  setVal(totalQaza, totalValue);
  setVal(remaining, parseInt(val) - 1);
  setVal(extime, calculateTiming(totalValue));

  btn.addEventListener('click', () => {

    localStorage.setItem("qaza", JSON.stringify(val));
    alert('Done');
    location.reload()
  });

} else {
  while (1) {
    alert("will not work");
  }
}
