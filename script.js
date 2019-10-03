//function that runs after user click submit button. 
var mainController = function() {
  console.log("this works");
  //Get data from the UI
  var input = UIController.getInput();
//   console.log(input);
  
  //1. define a function constructor
  var DataStru = function(id, name, email, contact, textarea){
         this.id = id;
         this.name = name;
         this.email = email;
         this.contact = contact;
         this.textarea = textarea;
  }
  //2. Define the variable to store the data
  
  //3. Store the data in variable by a method
  var addToDS = function(name, email, contact, textarea){
               
            if(ID > 0) { // Giving ID to each element store in the data Structure. 
                   ID = dataStore[dataStore.length - 1].id + 1;
             }    
             else {ID = 1};
             var newItemInDS = new DataStru(ID, name, email, contact, textarea);
             dataStore.push(newItemInDS);
             return newItemInDS
       }
       var display= function(){
             console.log(dataStore);
       }
       var newItemz = addToDS(input.name,input.email,input.contact,input.textarea);
      //  console.log(newItemz);  // New Data after it has been added to DS
       display();


};
//take input from User Interface 
 var UIController = {
       getInput: function(){
             var inputUI = {
                   name: document.getElementById('name').value,
                   email: document.getElementById('email').value,
                   contact: document.getElementById('contact').value,
                   textarea: document.getElementById('textarea').value
             }
             return inputUI;
       }
 }

 document.querySelector(".submit").addEventListener("click", mainController);
 var dataStore = []; //This variable should be global. 
  var ID = 0; 

// var dataStructure = {
//        //1. define a function constructor
//       DataStru: function(id, name, email, contact, textarea) {
//              this.id = id;
//              this.name = name;      
//              this.email = email;
//              this.contact = contact;
//              this.textarea = textarea;
//        },

//        //2. Define the variable to store the data
//        dataStore: [],



//        //3. Store the data in variable by a method
//        addToDS: function(name, email, contact, textarea){
//             // var ID;     
//             // if(ID > 0) {
//             //        ID = dataStructure.dataStore[dataStructure.dataStore.length].id + 1;
//             //  }    
//             //  else {ID = 0};
//              var newItemInDS = new dataStructure.DataStru(ID, name, email, contact, textarea);
//              dataStructure.dataStore.push(newItemInDS);
//              return newItemInDS
//        },
//        display: function(){
//              console.log(dataStructure.dataStore);
//        }
// }
 
 
