var currency = {
  USD: 184.09,
  EURO: 216.98,
  INDRS: 2.52,
  AUD: 132.33,
};
function loadoptions() {
  var selection = document.querySelector("#currencytype");

  for (var ct in currency) {
    var choice = document.createElement("option");
    var nod = document.createTextNode(ct);
    choice.appendChild(nod);
    selection.appendChild(choice);
  }
}

function convert() {
  var slrs = document.querySelector("#txtslrs").value;
  var currencytype = document.querySelector("#currencytype").value;

  for (var ct in currency) {
    if (currencytype == ct) {
      var convertedrs = slrs * currency[ct];
      document.querySelector("#txtconvertedrs").value = convertedrs;
    }
  }
}