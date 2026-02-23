# Assignment_4
PH_B13_a4
**1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?**
Ans:
# getElementById: 
Using this, we can select a specific HTML element by its ID. This works faster than other methods.
const total = document.getElementById("total");
total.style.color = "red";// it will make the element color to red
# getElementsByClassName:
By using this, we can select all the elements with the same class name, which will return an array-like HTML collection.
const name = document.getElementById("name");
name.className = "text-xl"//it will make all the elements with name class text size xl;
# querySelector / querySelectorAll: 
Both works like css selector, we can select id, class, and elements. querySelector selects the first element only of the css selector syntax, on the other hand, querySelectorAll slects every element of the css selector syntax. it returns a nodelist
const allCardSection = document.querySelectorAll(".card");
total.innerText = allCardSection.length;//returns the number of total element with card class

**2. How do you create and insert a new element into the DOM?**
Ans:
By following three steps we can create a new element into the dom
First, we neew to create the element, const emptyDiv = document.createElement("div");
it will create a new div element. then we need to add contents or style:
 emptyDiv.className = "empty-state text-center py-16 bg-white border border-[#F1F2F4] rounded-2 space-y-5";
 emptyDiv.innerHTML=`<h1>Hello World</h1>`
 then we need to insert it: document.body.appendChild(emptyDiv);

 **3. What is Event Bubbling? And how does it work?**
 Ans: Event bubbling is a process where a child element is triggered inside parent elements, it will travel until the targeted element's parent to parent upward, just like a bubble.  
 it means when an element is clicked first it will triggered then element then it will travel to the parent element. 
 <div class="parent">
   <button class="child">
     Button
   </button>
 </div>
 When the button is clicked it will be triggered then it will move up to its parent div.

 **4. What is Event Delegation in JavaScript? Why is it useful?**
 Ans: It is a technique to handle event efficiently by using event bubbling. But here we add a single event listener to a parent element instead of attaching event listeners to each child element.
 It is useful because it reduces the number of event listeners, which improves performance and memory usage. 
 document.querySelector("main").addEventListener("click", function (event) {
  if (event.target.classList.contains("interviewBtn")) {
    console.log('Button clicked:');
  }
});

**5. What is the difference between preventDefault() and stopPropagation() methods?**
Ans: Every browser has some default behaviour, such as: after submitting a form, it reloads the page. Clicking on a link navigates to another page. By using preventDefault(), we can stop these browsers' default behaviour. On the other hand, stopPropagation() is used to stop the event from bubbling up to the parents. 
