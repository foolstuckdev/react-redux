## react-redux 101

The three tenants of redux
---
First: the State Tree Principle
everything that changes in app (data/ui state) is contained in a single object called the state or the state tree.


Second: the Action Principle
State tree is redundant (cannot be modified or written to). To change the state, dispatch an action.
Action
Plain JS Object
must have defined ‘type’ property that describes the action to be taken
The action.type will take the form of switch statement options in the reducer (see below).


Third: the Reducer principle
To describe state mutations write a function called the reducer.
Reducer
* is a Pure function (i.e. always returns same value given same arguments)
* takes two arguments: current state of application, action to be dispatched
* returns the next state of the application
*  must return current state for undefined actions. (use default switch statement)

---
(Without redux)
AppComponent —> childComponent

(With redux)
Provider —> AppComponent —> Connect —> childComponent

+ Provider gets all the requirements from Store which houses the reducers

+ Connect is able to communicate with the provider component directly via the Context system 
(context system allows parent to communicate to a child component even if there are components in between)

+ Connect component/ system/ tag also takes in Action creators along with the Provider component’s requirements from the store and thus talks to the child component