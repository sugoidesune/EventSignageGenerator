function previewFile() {
  var preview = document.querySelector('img');
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();

  reader.addEventListener("load", function () {
    preview.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}

function generateSigns(){
  var signList = document.querySelector('#signList').value.split(',')
  var simpleArray =signList;//['CYNVAN', 'TIMAR', "PUCCA"]
  var templateSign = document.querySelector('.sign-container').cloneNode(true);
  document.querySelector('#allSigns').innerHTML = '';
  simpleArray.forEach(function(el){
    var newSign = templateSign.cloneNode(true);
    newSign.querySelector('h1').innerHTML = el
    document.querySelector('#allSigns').appendChild(newSign);
  })
}



function updateFontsize(){
  var userFontSize = document.querySelector('#fontsize').value;
  var sheet = document.styleSheets[0];
  var rules = sheet.cssRules || sheet.rules;
  rules[1].style.fontSize = userFontSize + "px";
}


document.querySelector('#fontsize').addEventListener('input', updateFontsize )

//increment with up and down arrow keys
document.querySelector('#fontsize').onkeydown = function(e)
{
    if (e.keyCode == 38)
    {
        incrementTextBox(1);
    }
      if (e.keyCode == 40)
    {
        incrementTextBox(-1);
    }
}

function incrementTextBox(num) {
  var value = document.querySelector('#fontsize').value || 0;
  document.querySelector('#fontsize').value = Number(value) + num;
  updateFontsize();
}