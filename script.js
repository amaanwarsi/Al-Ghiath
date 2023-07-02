if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./serviceWorker.js')
    .then((registration) => {
      console.log("registered");
    })
    .catch((err) => {
      console.log(err);
    });
}




var btn = document.querySelector("#btn");
var totalQaza = document.querySelector("#total");
var remaining = document.querySelector("#remaining");
var extime = document.querySelector("#time");

var totalValue; // = 1700; // total qaza left


const setVal = ((elem, item) => {
  elem.innerHTML = item;

});

if (typeof(Storage) !== "undefined") {
  var total = localStorage.getItem("qaza")
  if(empty(localStorage.getItem("qazaRemaining")){
    totalValue=prompt("Enter total qaza left"); 
    localStorage.setItem("qazaRemaining", totalValue);

  } else{
     totalValue = localStorage.getItem("qazaRemaining");
  }
  
  var val = parseInt(total) + 1;;
  if (total === null) {
    val = 1;
    setVal(totalQaza, 0);
    setVal(remaining, 0);
    setVal(extime, 0);
  }


  totalValue -= parseInt(val) - 1;


  Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  }

  var date = new Date();
  date=date.addDays(totalValue);
  //  const yyyy = date.getFullYear();
  // let mm = date.getMonth() + 1; // Months start at 0!
  let dd = date.toLocaleString('default', { day: '2-digit' }),
    mm = date.toLocaleString('default', { month: 'long' });
  const yyyy = date.toLocaleString('default', { year: 'numeric' });
  var finalDate = dd + ' ' + mm + ' ' + yyyy;

  setVal(totalQaza, totalValue);
  setVal(remaining, parseInt(val) - 1);
  setVal(extime, finalDate);

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
