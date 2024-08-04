/**
 * setAttribute() - used to set the attribute, this method is alway override the privious attribute value
 * 
 * getAttribute() - used to get the attribute 
 * .style.property_name = "property_value"
 * eg., title.style.backgroundColor = 'red'
 * 
 * DIFFRENCE-
 * .innerHTML - it gives the text of selected id or class. if their is any html element is present the it also return the html elements directly with tag
 * 
 * .innerText - it gives the text which is only visible to user
 * 
 * .contentText - it gives the text which is not visible to user and hidden due to some css or other properties
 * 
 * .querySelector() - this is used to select the tag or html element 
 * 1=> in this we have get the element by- 
 *          *class - .querySelector('.class_name')
 *          *id - .querySelector('#id')
 * it return the first value which is get on html document
 * it support all the css selectors
 * 
 * $$$$$$$$$$  IMP $$$$
 * .querySelectorAll() - it gives all element in the form of node list
 * NODELIST - [li, li, li]
 * 
 * NODELIST - IS SIMILAR LIKE ARRAY BUT NOT EXACTLY ARRAY 
 * ON THIS WE CAN USE FOREACH BUT NOT USED MAP
 * 
 * 
 * document.getElementByclassName() - it return the HTMLCollection
 * 
 * HTMLCollection - is array like structure but not array 
 * it this their is not option for looping ###imp
 * 
 * for looping we have to convert this into the array - using Array.from()
 * 
 * 
 * 
 * 
 * parent.children = it gives the child nodes
 * 
 * it gives the htmlCollection
 * 
 * for applying any style parent.children[i]. --> we use this
 * parent.firstElementChild - it gives the first child
 * parent.lastElementChild - it gives the last child
 * 
 *  parentElement = gives the aprent element
 * .nextElementSibling - gives the sibling
 * 
 * .childNodes - gives the child node of parent 
 * 
 * document.createTextNode("suraj" ) - this add the text into div
 * 
 * document.createElement()- used to create the html element
 * 
 * 
 */