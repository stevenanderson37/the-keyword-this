//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?
/*
      //Answer
      It allows the code to be cleaner by allowing a shortcut to the code it is being executed in by looking at the context of where it is being called.

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
      1. Explicit: told exactly where the this keyword is bound to through the use of .call, .apply, or .bind.
      2. Implicit: also known as "left of the dot," when the context is not explicity told it looks for the implied context, which would be found to the left of the dot. For example, o.average(); would look for the context of "this" in the variable "o".
      3. Default/window: when the context of the this keyword cannot be found explicitly or implicitly then it is taken out to the window, which is a bad thing that we never want to happen.
      4. New/constructor: gives us the ability to create new objects through the use of the this keyword in a constructor function that we can then execute the function with new data to create a new object. It is good practice to always capitalize the first letter of a constructor function to indicate to everyone that it is not a normal function, and that it can only be used as a constructor.

  // 3) What is the difference between call and apply?

      //Answer
      Call and apply can be used pretty much interchangeably. They both happen immediately after they are called, and the order of the parameters matter in both as the parameters are called in the order they are given. However, call uses normal parameters while apply can use an array.

  // 4) What does .bind do?

      //Answer
      .bind binds to a function and creates a new function with a unique name.
*/
//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here
var user = {
  username: "akira",
  email: "singularity@gmail.com",
  getUsername: function(){
    return this.username;
  }
}

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.
user.getUsername();

//Next Problem


// Write the function definitions which will make the following function invocations function properly.

  //Function Invocations Here
function Car(company, model, year, move) {
  this.company = company;
  this.model = model;
  this.year = year;
  this.move = 0;
  this.moveCar = function(){
    return this.move += 10;
  }
}

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to add a move property and write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
  //Code Here
getYear.call(prius);
getYear.call(mustang);

//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = getMyUsername.call(myUser); //Fix this

//Above you're given an object, and  a function. What will the getUsername function return?
//Note(no tests)
  //Answer Here
  // An error, because there is not a getUsername function. However, that is most likely just a typo. The getMyUsername function would return undefined, because the this keyword found in the getMyUsername function is not bound to the myUser object.

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here
  // Another typo on the function name. The 'this keyword' is bound to the window when the getMyUsername function runs, because it is not explicitly bound or implicitly bound to anything.

//Fix the getMyUsername invocation so that userName will be equal to 'iliketurtles'.
