  <script>
document.onmouseover = function(e) {

 var profiles = '{
"rogerson" : [
      {"name" : "Ken Rogerson"},
      {"position" : "Public Policy Director of Undergraduate Studies"},
      {"department" : "Sanford School of Public Policy"},
      {"university" : "Duke University"},
      {"bio" : "ROGERSON -- Lorem ipsum dolor sit amet, no usu ludus commodo, singulis neglegentur accommodare ius te, propriae periculis cum id. Ne meis temporibus eos, vel prompta interpretaris ex. Sit ea tacimates forensibus, ut suas forensibus reprimique vel. Cu tation altera mucius his ROGERSON"}
],
"ancell" : [
      {"name" : "Aaron Ancell"},
      {"position" : "Graduate Student"},
      {"department" : "Department of Philosophy"},
      {"affliation" : "Duke University"},
      {"bio" : "test test test"}
],
"beaver" : [
      {"name" : "Tony Beaver"},
      {"position" : "Professor of Philosophy, Director Digital Humanities Laboratory"},
      {"department" : "Department of Philosophy and Religion (Chair)"},
      {"affliation" : "Duke University"},
      {"bio" : "test test test beaver"}
],
"blaser" : [
      {"name" : "Steven Blaser"},
      {"position" : "Chairman of NCCS"},
      {"department" : "Undergraduate Student, Class 2014"},
      {"affliation" : "Duke University"},
      {"bio" : "test test test blaser"}
],
"buchanan" : [
      {"name" : "Allen Buchanan"},
      {"position" : "James B. Duke Professor of Philosophy"},
      {"department" : "Department of Philosophy"},
      {"affliation" : "Duke University"},
      {"bio" : "test test test buchanan"}
],
"deforge" : [
      {"name" : "Alex DeForge"},
      {"position" : "Graduate Student"},
      {"department" : "Department of Philosophy"},
      {"affliation" : "Duke University"},
      {"bio" : "test test test deforge"}
],
"floridi" : [
      {"name" : "Luciano Floridi"},
      {"position" : "Professor of Philosophy and Ethics of Information"},
      {"department" : "Department of Philosophy"},
      {"affliation" : "Oxford Internet Institute"},
      {"bio" : "test test test floridi"}
]
}'

var profiles1 = '{"name" : "john"}';

var person = JSON.parse(profiles1).name;


    var nameId = e.target.id;
    var sideN = document.getElementById("sideName");

    sideN.innerHTML = "<h2>" + nameId + "</h2>";
   
}
</script>


