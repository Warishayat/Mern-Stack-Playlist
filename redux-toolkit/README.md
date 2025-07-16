## lets talk about react redux toolkit

## suppose there are diffrent compoennts and we are sending data from parent comp to last child component we were using prop drilling.

## Solution Came in game rather than sending data from props .

## Suppose parent comp 1 and we have child 2 3 4 5 6 7 

## new way to manage state centrelized store  which mean store data same like database.

## suppose all the components are using the same cart which will be built in redix store and each compoenet can access taht

## value from the store. if store is getting upadte each and every component will update.

## prop drilling is getting saved now.

## Assume a scenario there is a  button on website like counter button when you click on the button its getting update.

## as long you click on the button its get updated from the store. and its update the value from UI.

## Same for other version it will update for each compoenet



## lets take another scenario how this redux toolkit cycle work.
## target there is button which render the count on the screen
## As click on the button execute the function.


## Action
        ## What is action 
        ## Click on button / Hover on the para / there are many events. Action is nothing its just an event.
        ## its the combination of events and additionals information . (#information is nothing but payload. like object etc).

## Reducer
        ## What is reducer?
        ## reducer is noting but just function which contain the logics. where you can update your logics and all the states.

## Slice
        ##What is slice?
        ## i said my application contain various feature like login/singup,counting,reset etc
        ## her ik feature ki state kko maintain karnay ka logic slic k haan lkha huta hae.
        ## In Simple slice is nothing but just a feature.
        ## we wriet initial satate and all reducer logic init.
        ## add cart feature login singup all these are feature.
        ## feature track intial state.

## Store
        ## single source of truth which contain state.

## State
        ## state is teh fancy name of the data.


##### Final step to creat store

## Step1 : Creat the store by adding new folder in react -> src -> redux with filename store.js

## Step2 : Wrap the application for wrap we need to impport provider and bind with App component. and the main reason to wrap

## it we want all the componnets can acess this store.

## Step3 : Creat the slice