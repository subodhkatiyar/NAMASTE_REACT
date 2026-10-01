{
  /* <div id="root 1">
    <div id="mainPart">
        <div id="ramayan">
            <h1>
                ramayan
            </h1>
            <h2> Sewak hu das tumhara</h2>
        </div>
    </div>
</div> */
}

const rootElement = document.getElementById("root");
const header = React.createElement(
  "div",
  { id: "root1" },
  React.createElement(
    "div",
    { id: "mainPart" },
    React.createElement("div", { id: "ramayan" }, [
      React.createElement("h1", {id: "h1tab", key: "h1-key" }, 'ramayan'),
      React.createElement("h2", { id: "h2tab", key: "h2-key" },'Sewak hu das tumhara'),
    ]),
  ),
);
const reactrRootElement = ReactDOM.createRoot(rootElement);
reactrRootElement.render(header);

let name1 = {
  firstname: 'Subodh',
  lastname: 'katiyar'
}
let name2 = {
  firstname: 'Akshay',
  lastname: 'Saini',
 
}
let  printFullName = function(hometown, pincode) {
    console.log(this.firstname + ' ' + this.lastname + ' from ' + hometown + ' Pincode: ' + pincode);
}

// call method
console.log('Call Method:');
printFullName.call(name1,'Bhopal', '462071');
printFullName.call(name2,'Mumbai', '464551');


// apply method
console.log('apply() Method:');
printFullName.apply(name1,['Bhopal', '462071']);
printFullName.apply(name2,['Mumbai', '464551']);

//Bind: similar to call apply method but it will make of of that function,and later we call or use
console.log('bind() Method:');
let printUser1 = printFullName.bind(name1,'Bhopal', '462071');
printUser1();
let printUser2 = printFullName.bind(name2,'Mumbai', '464551');
printUser2();


