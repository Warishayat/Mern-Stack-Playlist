## This lecture is all about useContext hooks in react.

## lets discuss prop drilling 
## if we want to sent data from child components to parent its called state lifting up and on the other hand if you want 
## want to sent data from parent to child comp its called props that we discussed in our previous lecture.

## there is a parent A Which contain parent b c and d than b have child and same like for others.
## but if we want sent the parent data direclty from a Parent A to D child THAN we will sent it direclty using useCOntext insetad of props driling thats is hectic process in the software term.

## So lets discuss how useContext work in react

## There are three step
## Step1: Creat the Context
## Step2: Provide the  context
## Step3: Consume yhe context


## praent use COntext PROvider which will be parent.
## And each child can be consumer if user want which will consumer that can extract the data.
## Those who need data that called consumer