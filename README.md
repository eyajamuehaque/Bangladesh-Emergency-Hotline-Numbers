**What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?**

When the element has a unique id then using getElementById we can find the element.
When we want to use multiple elements with the same class we use getElementsByClassName.
By using querySelector, we find the first element that matches a CSS selector.
By using querySelectorAll, we find all elements that match a CSS selector.

**How do you create and insert a new element into the DOM?**

To create a new element, use const new = document.createElement("element").
To insert it into the page, use parent.appendChild(new)

**What is Event Bubbling and how does it work?**

When an event happens on an element, it first runs on that element then the same event bubbles up to its parent elements, then their parents, and so on and this is called Bubbling.

**What is Event Delegation in JavaScript? Why is it useful?**

Attaching a single event listener to a parent element instead of adding listeners to multiple child elements is Event Delegation. Event Delegation makes fewer event listeners and makes the code clean and clear.

**What is the difference between preventDefault() and stopPropagation() methods?**

preventDefault() Stops the default browser behavior of an element.
stopPropagation() Stops an event from bubbling up the DOM tree.

