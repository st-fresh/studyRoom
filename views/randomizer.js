////This is just having fun with es6 .. comments are loose throughout.. LOOSEY GOOSEY!
///
//PreALPHA/ This function runs firstist because its got the mostist () curvy's/ We pass window, document, and jQuery in to allow for global scoping pattern
(() => {
    //ALPHA.i/ Lets get the main function in our Immediate Invocation function with the long-name and tell it to fire if-and-only-if (run); is called by user-button-press
    let run = () => DoWorkInsideAnImmediateInvocatingFunctionWithES6toCreateRandomChooserForMyCareerOpportunities()  
    //ALPHA.ii/ Access body dom element for appending more elements to
    const _B = $("body");
    //ALPHA.iii/ Lets make sure people know I'm not takin' no back-sass!!
    _B.append("WARNING: I am not responsible for your fate/destiny/legacy based on the choices this tool randomly makes for you -OR- the Choices you allow your friends to make for you - that's all you!");
    //ALPHA.iv/ Lets write the button to the view - yay PUSH BUTTONZ!!
    _B.append("<INPUT ID='runButton' TYPE='button' VALUE='START'/>");
    //ALPHA.v/ Lets tell ALPHA.iv/button to only do things if the user clicks it, and to call the (run); function if the user dares to click
    $('#runButton').addEventListener('click', () => {  
        run();//Renders remaining UI
    });
    function DoWorkInsideAnImmediateInvocatingFunctionWithES6toCreateRandomChooserForMyCareerOpportunities() {
    //ALPHA.vi/ Lets add a div contaier for the Input-fields to be all cozy together within/ Then we can append to it more input-fields with our button at INIT.iii/
      _B.append("DIV ID='inputs'></DIV>");
    //ALPHA.vii/ Lets get reference to the cotainer for our input-fields/ This is added to global scope because of PreALPHA/
      const _I = $('#inputs');
    //ALPHA.viii/ Lets add a div container for the Poll to render in
      _B.append("<DIV ID='poll'></DIV>");
    //-->> 
    
          //INIT.i/ Lets add the input UIs first/ Careful with parens cuz/ All added to the container made at ALPHA.vii/ Why 8?.. I DUNNO! You tell me and we'll both know!
      _I.append("<INPUT ID='companyInput1' TYPE='text' />"); 
      _I.append("<INPUT ID='companyInput2' TYPE='text' />");
      _I.append("<INPUT ID='companyInput3' TYPE='text' />");
      _I.append("<INPUT ID='companyInput4' TYPE='text' />");
      _I.append("<INPUT ID='companyInput5' TYPE='text' />");
      _I.append("<INPUT ID='companyInput6' TYPE='text' />");
      _I.append("<INPUT ID='companyInput7' TYPE='text' />");
      _I.append("<INPUT ID='companyInput8' TYPE='text' />");
      
    //INIT/ Short for Initialize, this declares all vars we needs to have funs with


    //INIT.ii/ We can render all of our Companies Online-Links with Job-Titles within the page during INIT if we want/ I didn't take time to make a container for these, they're floating in Body, oh well, do it yourself!
    //_B.append('FORD in Palo Alto :' + '<a href="http://bit.ly/ford_A">bit.ly/ford_A</a>' + '/ UX-Research-Lead');
    //_B.append('APPLE in San Jose :' + '<a href="http://bit.ly/apple_B">bit.ly/apple_B/</a>' + '/ UI-Developer');
    //_B.append('AMAZON in Cupertino :' + '<a href="http://bit.ly/amazon_C">bit.ly/amazon_C</a>' + '/ Mobile-Visual Designer Cuptertino');
    //_B.append('WALMART LABS in San Bruno :' + '<a href="http://bit.ly/walmartlabs_d">bit.ly/walmartlabs_d</a>' + '/  JavaScript Developer');
    //_B.append('IGT in Fremont :' + '<a href="http://bit.ly/igt_e">bit.ly/igt_e</a>' + '/ JavaScript GraphicJS Developer');

    //INIT.iii/ This button allows user to add as many additional Companies as desired
    _B.append("<INPUT ID='addCompanyButt' TYPE='button' VALUE='ADD COMPANY' />");
    //--> This would be a good time to write the click-event-listener for this button outside of this scope skip to III/ 

    //INIT.iv/ Lets add some more buttons that allow User to execute Poll and Randomize via UI -- PRESS Z BUTTONZ!!
    _B.append("<INPUT ID='buildPoll' TYPE='button' VALUE='CREATE POLL' />"); //This button lets user create poll
    _B.append("<INPUT ID='randomizeButton' TYPE='BUTTON' VALUE='READ MY PALM' />"); //This button runs randomizer on most current input-field values entered by user input

    //INIT.v/ Grab all the UI with jQuerynessness/ Declares some const's too because they will never change
        let addUI = function() {
            return {
                addButton : function(){
                                const _ADD_BUTTON = $('#addCompanyButt');
                            }, //not 100% certain this is even possible.. 
                allInputs : function(){
                                let companies = $('INPUT');
                            }, //if we use let here instead of var we block-scope this to the scope it is instatiated within (possiby not good because it's dynamic; may need looser scope for functionality.. ooooOOOo functional programming)
                pollButton: function(){
                                const _POLL_BUTTON = $('#buildPoll');
                            },
                ranButton : function(){
                                const _RAN_BUTTON = $('#randomizeButton');
                            },
                poll      : $('#poll') //, //you don't need the Poll DIV container if you don't need to make a Poll/ Consider removing or comment this/ Remember to match destructor below at INIT.vi/
                //company1  : "name", //If you want to make a Poll and/or Run this program witout clicking any UI then uncomment accordingly
                //company2  : "name", 
                //company3  : "name" //Add more if you want below where //.'s are/ Remember to match in destructor below
                //.
                //.
                //.
            };
        };

        //INIT.vi/ Lets create all of our variables automagically with ES6 object destructuring - YAY!
        let {
            addButton : addButton,
            allInputs : allInputs,
            pollButton: pollButt,
            ranButton : ranButt,
            poll      : pollDiv //, 
            //company1  : company1 //create these vars if and only if you are making a Poll 
            //company2  : company2
            //company3  : company3
            //.
            //.
            //.
        } = addUI(); //this calls addUIs and then automagically makes vars and adds them to global scope/ based on INIT.v/
        addButton(); 
_ADD_BUTTON.addEventListener('click', () => {  
    allInputs(); //expose companies let-var to this listener
    companies[companies.length].append(("<INPUT ID='companyInput'"+fieldCount.toString+"'TYPE='text' />"));
    fieldCount++;
    //document.write... blah blah blah.. add a new input-field - I'm tired
});
    };

})(window, document, jQuery); //expose to global scope so that all vars created are accessible outside immediate invocation function

//GLO.i/ Short for Global/ Global scoped logic/ Start by declaring fieldCount counter with var not let because needs to be avail inside other functions within global scope/ This will keep track of input-fields added by user with button-press   
var fieldCount = 8;
var pollUp     = false; //Was Poll started?/ See GLO.ii/
//GLO.ii/ Create const's in global scope/ see INIT.v/
addButton(); //adds the _ADD_BUTTON to global scope
ranButt(); //adds the _RAND_BUTTON to global scope
pollButt(); //adds the _POLL_BUTTON to global scope
//GLO.iii/ Bind on-change listener to the input fields, as soon as they change fire a function that updates Poll and Asks to re-randomize 
input1.click(function() {
    if(pollUp) { //was the Poll already rendered?/ see GLO.ii/
        let i1 = input1.value
    }
  $( ".target" ).change();
});
//GLO.ii/ Add listener to Poll-Button that generates a Poll/ Use functions available from immediate invocation/ Requires UI/ Can use hard-coded company1.. company#
_POLL_BUTTON.addEventListener('click', () => {  
    pollUp = true; //Poll was started because button was clicked
    allInputs(); //grabs all input elements from DOM and stores them into companies let-var/ this is a dom array-object/ a cluster of dom input field elements
    if (companies) {
        companies.length > fieldCount ? a : a  ; //More than 8 inputs means add new ones to pollerizer, Less than 8 inputs means you already have them in global scope for use
    }
    pollDiv.append();
    
    document.write("<INPUT ID='backButton' TYPE='button' VALUE='BACK' />"); //This shows up if you runSideI is called allowing User to go back to Poll-Maker
    //hide RAN button until BACK is clicked
});





_RAN_BUTTON.addEventListener('click', () => {  
    
        allInputs(); //grabs all input elements from DOM and stores them into companies let-var
        //companies var should be available to this functions scope so:
        if (companies) {
            companies.length > 8 ? true : false  ; //More than 8 inputs means add new ones to pollerizer, Less than 8 inputs means you already have them in global scope for use
        }
    });
    document.write("<INPUT ID='backButton' TYPE='button' VALUE='BACK' />"); //This shows up if you runSideI is called allowing User to go back to Poll-Maker
    //hide POLL button until BACK is clicked

//var vote = [A, B, C, D];

///III, IMMEDIATE FUNCTION OUTRO - ---- EVERYTHING BELOW HAPPENS NEXT/ These functions use what is initialized above to global scope in I/




//Which Object-ive Do You Have? //so punny! omuhgursh!
// (singleParam) => {
//     let a = 1;
//     return [answer]
// };


//a)
// { 
//     GoWorkFor : AMAZON
// }
//b)
// {
//     GoWorkFor : FORD
// }
//c
// {
//     GoWorkFor : APPLE
// }
//d
// {
//     GoWorkFor : WALMARTLABS
// }
//e 
// {
//     GoWorkFor : IGT
// }

//////////////////////// ZEBRA ZONE const = NONE_SHALL_PASS;
//////  const = NONE_SHALL_PASS;
//////  (function() = { const = NONE_SHALL_PASS;
////    if (you had an opportunity to interview for a Front-End UI-UX Dev Position Using Angular 2 with the following companies) { Which would you prefer to work for ?? const = NONE_SHALL_PASS;
