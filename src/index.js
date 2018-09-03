 // import _ from 'lodash';
 import printMe from "./print.js";
 import { cube } from "./math.js";

 function component() {

     var element = document.createElement('div');

     element.innerHTML = [
         "Hello WebPack",
         "5 ao cubo é igual a:"+cube(5)
     ].join("\n\n");

     return element;
 }

 document.body.appendChild(component());

 if (module.hot) {
     module.hot.accept('./print.js', function () {
         console.log('Accepting the updated printMe module!');
         printMe();
     })
 }