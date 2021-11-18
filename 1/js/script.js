
$(document).ready(function(){
  // frame-carousel
  $(".frame-carousel").owlCarousel({
    margin: 0,
    nav: true,
    dots: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 9000,
    autoplayHoverPause: true,
    autoheight: true,
    // autoWidth:true,
    navText : ["<img src='images/left-arrow.png' alt='Previous' title='Previous' class='object'>",
    "<img src='images/right-arrow.png' alt='Next' title='Next' class='object'>"
    ],
    responsive: {
      0:{
          items: 1
      },
      480:{
          items: 2
      },
      767:{
          items: 3
      },
      991:{
          items: 4
      }
    }
  });


});

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}

/*An array containing all the country names in the world:*/
var countries = ["Afghanistan-(+93)","Albania-(+355)","Algeria-(+213)","Andorra-(+376)","Angola-(+244)","Anguilla-(+1-264)","Antigua & Barbuda-(+1-268)","Argentina-(+54)","Armenia-(+374)","Aruba-(+297)","Australia-(+61)","Austria-(+43)","Azerbaijan-(+994)","Bahamas-(+1-242)","Bahrain-(+973)","Bangladesh-(+880)","Barbados-(+1-246)","Belarus-(+375)","Belgium-(+32)","Belize-(+501)","Benin-(+229)","Bermuda-(1-441)","Bhutan-(+975)","Bolivia-(+591)","Bosnia & Herzegovina-(+387)","Botswana-(+267)","Brazil-(+55)","British Virgin Islands-(+1-284)","Brunei-(+673)","Bulgaria-(+359)","Burkina Faso-(+226)","Burundi-(+257)","Cambodia-(+855)","Cameroon-(+237)","Canada-(+1)","Cape Verde-(+238)","Cayman Islands-(+1-345)","Central Arfrican Republic-(+236)","Chad-(+235)","Chile-(+56)","China-(+86)","Colombia-(+57)","Congo-(+243)","Cook Islands-(+682)","Costa Rica-(+506)","Cote D Ivoire-(+225)","Croatia-(+385)","Cuba-(+53)","Curacao-(+599)","Cyprus-(+357)","Czech Republic-(+420)","Denmark-(+45)","Djibouti-(+253)","Dominica-(+1-767)","Dominican Republic-(+1-809, +1-829, +1-849)","Ecuador-(+593)","Egypt-(+20)","El Salvador-(+503)","Equatorial Guinea-(+240)","Eritrea-(+291)","Estonia-(+372)","Ethiopia-(+251)","Falkland Islands-(+500)","Faroe Islands-(+298)","Fiji-(+679)","Finland-(+358)","France-(+33)","French Polynesia-(+689)","French West Indies-(+312)","Gabon-(+241)","Gambia-(+220)","Georgia-(+995)","Germany-(+49)","Ghana-(+233)","Gibraltar-(+350)","Greece-(+30)","Greenland-(+299)","Grenada-(+1-473)","Guam-(+1-671)","Guatemala-(+502)","Guernsey-(+44-1481)","Guinea-(+224)","Guinea Bissau-(+245)","Guyana-(+592)","Haiti-(+509)","Honduras-(+504)","Hong Kong-(+852)","Hungary-(+36)","Iceland-(+354)","India-(+91)","Indonesia-(+62)","Iran-(+98)","Iraq-(+964)","Ireland-(+353)","Isle of Man-(+44-1624)","Israel-(+972)","Italy-(+39)","Jamaica-(+1-876)","Japan-(+81)","Jersey-(+44-1534)","Jordan-(+962)","Kazakhstan-(+7)","Kenya-(+254)","Kiribati-(+686)","Kosovo-(+383)","Kuwait-(+965)","Kyrgyzstan-(+996)","Laos-(+856)","Latvia-(+371)","Lebanon-(+961)","Lesotho-(+266)","Liberia-(+231)","Libya-(+218)","Liechtenstein-(+423)","Lithuania-(+370)","Luxembourg-(+352)","Macau-(+853)","Macedonia-(+389)","Madagascar-(+261)","Malawi-(+265)","Malaysia-(+60)","Maldives-(+960)","Mali-(+223)","Malta-(+356)","Marshall Islands-(+692)","Mauritania-(+222)","Mauritius-(+230)","Mexico-(+52)","Micronesia-(+691)","Moldova-(+373)","Monaco-(+377)","Mongolia-(+976)","Montenegro-(+382)","Montserrat-(+1-664)","Morocco-(+212)","Mozambique-(+258)","Myanmar-(+95)","Namibia-(+264)","Nauru-(+674)","Nepal-(+977)","Netherlands-(+31)","Netherlands Antilles-(+599)","New Caledonia-(+687)","New Zealand-(+64)","Nicaragua-(+505)","Niger-(+227)","Nigeria-(+234)","North Korea-(+850)","Norway-(+47)","Oman-(+968)","Pakistan-(+92)","Palau-(+680)","Palestine-(+970)","Panama-(+507)","Papua New Guinea-(+675)","Paraguay-(+595)","Peru-(+51)","Philippines-(+63)","Poland-(+48)","Portugal-(+351)","Puerto Rico-(+1-787)","Qatar-(+974)","Reunion-(+262)","Romania-(+40)","Russia-(+7)","Rwanda-(+250)","Saint Pierre & Miquelon-(+508)","Samoa-(+685)","San Marino-(+378)","Sao Tome and Principe-(+239)","Saudi Arabia-(+966)","Senegal-(+221)","Serbia-(+381)","Seychelles-(+248)","Sierra Leone-(+232)","Singapore-(+65)","Slovakia-(+421)","Slovenia-(+386)","Solomon Islands-(+677)","Somalia-(+252)","South Africa-(+27)","South Korea-(+82)","South Sudan-(+211)","Spain-(+34)","Sri Lanka-(+94)","St Kitts & Nevis-(+1)","St Lucia-(+1)","St Vincent-(+1)","Sudan-(+249)","Suriname-(+597)","Swaziland-(+268)","Sweden-(+46)","Switzerland-(+41)","Syria-(+963)","Taiwan-(+886)","Tajikistan-(+992)","Tanzania-(+255)","Thailand-(+66)","Timor L'Este-(+670)","Togo-(+228)","Tonga-(+676)","Trinidad & Tobago-(+1-868)","Tunisia-(+216)","Turkey-(+90)","Turkmenistan-(+993)","Turks & Caicos-(+1-649)","Tuvalu-(+688)","Uganda-(+256)","Ukraine-(+380)","United Arab Emirates-(+971)","United Kingdom-(+44)","United States of America-(+1)","Uruguay-(+598)","Uzbekistan-(+998)","Vanuatu-(+678)","Vatican City-(+379)","Venezuela-(+58)","Vietnam-(+84)","Virgin Islands (US)-(+1)","Yemen-(+967)","Zambia-(+260)","Zimbabwe-(+263)"];

/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("myInput"), countries);

