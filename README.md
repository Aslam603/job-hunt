## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?


## Answer to the question no-1

|NAME             | DIFFERENCES |
|:----------------|:------------|
|getElementById   |1.Can get element only by using|
|                 |id.
|                 |2.It only returns one Element|
|getElementsByClassName|1.If it has multiple elements then|
|                      |it gives HTMLcollection .|
|                       |2.It has only one Element|
|querySelector     |It only returns the first matching element|
|queryselectorAll  |It gives all the matching element  |

## 2. How do you create and insert a new element into the DOM?

## Answer to the question no-2

To create and insert  new element into the DOM , at first
we have to create element by using createElement().After 
creating the element we need to add content.Then finally
need to use appendChild() or append to insert in DOM.

## 3. What is Event Bubbling? And how does it work?
 
 ## Answer to the question no-3

Event Bubbling means when you click on a inner child
or in any event, it will definitely go to parent elements
step by step.

Event Bubbling works when you click an element ,that element gets the event first.
After that the events goes to parent element step by step.
All the parent elements can respond too but  for that a listener
is needed to respond the same event.

## 4. What is Event Delegation in JavaScript? Why is it useful?

## Answer to the question no-4

Event Delegation  in javascript is when you add listener in parent element
 to handle events of child element.

 Event Delegation is very useful because it's performance is much better than 
 adding listener to each child , by using this the code becomes more easier
 to handle or maintain.Code maintenance gets easier because less code required.
 There are many reasons for this to become useful such as less memory usage,
 works with dynamic elements.


 ## 5. What is the difference between preventDefault() and stopPropagation() methods?

## Answer to the question no-5

|preventDefault() | stopPropagation()|
|:----------------|:-----------------|
|1.It prevents default behaviour.|1. It prevents event bubbling|
|2.Does not stop propagation.|2.It stops propagation|
|3.event still bubbles.  |3.default action still works|
