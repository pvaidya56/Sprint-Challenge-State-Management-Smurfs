What problem does the context API help solve?
 - Context API aims to help us manage state more easily and avoid prop drilling.
In your own words, describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
   - Actions are objects that "inform" the reducer about actions happening in the app.
    Reducers are pure functions that manage state changes in a predictable manner.
    The Redux Store is an object that contains our application state.
What is the difference between Application state and Component state? When would be a good time to use one over the other?
   -  Application state is "global" state that all components have access to. Component state is state that is defined in a specific component. It's best to use application state when you want your state accessible in a large number of different components spread throughout the component tree, whilst component state is best used in smaller applications where you'll either only use that state in the component its defined in, or you're going to pass it down to a very small number of components.
Describe redux-thunk, what does it allow us to do? How does it change our action-creators?
    - Redux-thunk is middleware that allows us to run asynchronous operations. It changes our action creators by allowing them to return a function rather than a single object, which, in turn, gives us the ability to dispatch more than one action.
What is your favorite state management system you've learned and this sprint? Please explain why!
 - Context API because it seemed to 'click' faster for me than redux, however i wanted to try to impliment redux this time around to see if i would be able to pass using redux.