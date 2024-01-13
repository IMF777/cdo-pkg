# Sem Documentation

Sem is a small, compact UI package for modifying on-screen elements with profound ease. Access or modify elements as if they were JavaScript objects.

Sem has a build of ```window```. It supports both local and global importing.

## Importing Sem

### Global import

```
package("sem");

sem.onload = function(){
  $ // [function:Function]
  Template // [function:Function]
}
```

### Local import

```
var sem = require("sem");

sem.onload = function(){
  sem.$ // [function:Function]
  sem.Template // [function:Function]
}

```
<br>

Sem includes two main functions: ```$```[↗](#$) and ```Template```[↗](#template).

<br>

> ## ```$```
> ```[function:Function]```

Expects one parameter: the id of the target element. Returns an object with multiple getters, setters, properties and methods associated with the element's content, design and layout. This includes element text, value, and design-associated properties like background-color, border, font-size and more.

```var element = $(id);```
```[Object]```

## Property types:

- [Content](#content)
- [Text and font](#text-and-font)
- [Visibility](#visibility)
- [Background and border](#background-and-border)
- [Image](#image)
- [Size and position](#size-and-position)
- [Horizontal and vertical align](#horizontal-and-vertical-align)
- [Slider properties](#slider-properties)
- [Select elements](#select-elements)
- [HTML and CSS](#html-and-css)
- [Events](#events)
- [Move with animation](#move-with-animation)

### Content

#### ```get``` | ```element.elt``` ```[String]```

&emsp;Returns element id. Only getter.

#### ```get``` | ```element.text``` ```[String]```

&emsp;Returns element text content. Uses ```getText()```[↗](https://studio.code.org/docs/ide/applab/expressions/getText) internally.

#### ```set``` | ```element.text = [String]```

&emsp;Sets element text content. Uses ```setText()```[↗](https://studio.code.org/docs/ide/applab/expressions/setText) internally.

#### ```get``` | ```element.num``` ```[Number]```

&emsp;Returns a numeric value held by the element (for sliders etc.) Uses ```getNumber()```[↗](https://studio.code.org/docs/ide/applab/expressions/getNumber) internally.

#### ```set``` | ```element.num = [Number]```

&emsp;Sets element's numeric value. Uses ```setNumber()```[↗](https://studio.code.org/docs/ide/applab/expressions/setNumber) internally.

#### ```get``` | ```element.placeholder``` ```[String]```

&emsp;Returns placeholder value of input element. Uses ```getProperty()```[↗](https://studio.code.org/docs/ide/applab/expressions/getProperty) internally.

#### ```set``` | ```element.placeholder = [String]```

&emsp;Sets placeholder value of input element. Uses ```setProperty()```[↗](https://studio.code.org/docs/ide/applab/expressions/setProperty) internally

#### ```get``` | ```element.readonly``` ```[Boolean]```

&emsp;Returns Boolean indicating whether textarea is readonly or not. Uses ```getProperty()```[↗](https://studio.code.org/docs/ide/applab/expressions/getProperty) internally.

#### ```set``` | ```element.readonly = [String]```

&emsp;Sets readonly property of textarea. Uses ```setProperty()```[↗](https://studio.code.org/docs/ide/applab/expressions/setProperty) internally

### Text and font

#### ```get``` | ```element.fontSize``` ```[Number]```

&emsp;Returns element font-size. Uses ```getProperty()```[↗](https://studio.code.org/docs/ide/applab/expressions/getProperty) internally.

#### ```set``` | ```element.fontSize = [Number]```

&emsp;Sets element font-size. Uses ```setProperty()```[↗](https://studio.code.org/docs/ide/applab/expressions/setProperty) internally

#### ```get``` | ```element.fontFamily``` ```[String]```

&emsp;Returns element font-family. Uses ```getProperty()```[↗](https://studio.code.org/docs/ide/applab/expressions/getProperty) internally.

#### ```set``` | ```element.fontFamily = [String]```

&emsp;Sets element font-family. Uses ```setProperty()```[↗](https://studio.code.org/docs/ide/applab/expressions/setProperty) internally

#### ```get``` | ```element.textColor``` ```[String]```

&emsp;Returns element text-color in rgb format. Uses ```getProperty()```[↗](https://studio.code.org/docs/ide/applab/expressions/getProperty) internally.

#### ```set``` | ```element.textColor = [String || rgb(red,green,blue)]```

&emsp;Sets element text-color. Uses ```setProperty()```[↗](https://studio.code.org/docs/ide/applab/expressions/setProperty) internally

#### ```get``` | ```element.textAlign``` ```["left" || "right" || "center" || "justify"]```

&emsp;Returns element text-align in rgb format. Uses ```getProperty()```[↗](https://studio.code.org/docs/ide/applab/expressions/getProperty) internally.

#### ```get``` | ```element.textAlign = ["left" || "right" || "center" || "justify"]```

&emsp;Sets element text-align. Uses ```setProperty()```[↗](https://studio.code.org/docs/ide/applab/expressions/setProperty) internally

### Visibility

#### ```method``` | ```element.delete()```
&emsp;Removes element from HTML document. Uses ```deleteElement()```[↗](https://studio.code.org/docs/ide/applab/expressions/deleteElement) internally.

#### ```get``` | ```element.hidden``` ```[Boolean]```

&emsp;Returns true if the element is hidden from view, else returns false. Uses ```getProperty()```[↗](https://studio.code.org/docs/ide/applab/expressions/getProperty) internally.

#### ```set``` | ```element.hidden = [Boolean]```

&emsp;Sets element hidden property. Uses ```setProperty()```[↗](https://studio.code.org/docs/ide/applab/expressions/setProperty) internally

#### ```method``` | ```element.hide(Number?)```

&emsp;Temporarily hides element from view, optionally after elapse of [parameter] milliseconds. Uses ```hideElement()```[↗](https://studio.code.org/docs/ide/applab/expressions/hideElement) and ```setTimeout()```[↗](https://studio.code.org/docs/ide/applab/expressions/setTimeout) internally.

#### ```method``` | ```element.show(Number?)```

&emsp;Brings element back to view, optionally after elapse of [parameter] milliseconds. Uses ```showElement()```[↗](https://studio.code.org/docs/ide/applab/expressions/showElement) and ```setTimeout()```[↗](https://studio.code.org/docs/ide/applab/expressions/setTimeout) internally.

### Background and border

#### ```get``` | ```element.backgroundColor``` ```[String]```

&emsp;Returns element background-color in rgb format. Uses ```getProperty()```[↗](https://studio.code.org/docs/ide/applab/expressions/getProperty) internally.

#### ```set``` | ```element.backgroundColor = [String || rgb(red,green,blue)]```

&emsp;Sets element background-color. Uses ```setProperty()```[↗](https://studio.code.org/docs/ide/applab/expressions/setProperty) internally

#### ```get``` | ```element.borderColor``` ```[String]```

&emsp;Returns border-color of element. Uses ```getProperty()```[↗](https://studio.code.org/docs/ide/applab/expressions/getProperty) internally.

#### ```set``` | ```element.borderColor = [String]```

&emsp;Sets border-color of element. Uses ```setProperty()```[↗](https://studio.code.org/docs/ide/applab/expressions/setProperty) internally

#### ```get``` | ```element.borderRadius``` ```[Number]```

&emsp;Returns border-radius of element. Uses ```getProperty()```[↗](https://studio.code.org/docs/ide/applab/expressions/getProperty) internally.

#### ```set``` | ```element.borderRadius = [Number]```

&emsp;Sets border-radius of element. Uses ```setProperty()```[↗](https://studio.code.org/docs/ide/applab/expressions/setProperty) internally

#### ```get``` | ```element.borderWidth``` ```[Number]```

&emsp;Returns border-width of element. Uses ```getProperty()```[↗](https://studio.code.org/docs/ide/applab/expressions/getProperty) internally.

#### ```set``` | ```element.borderWidth = [Number]```

&emsp;Sets border-color of element. Uses ```setProperty()```[↗](https://studio.code.org/docs/ide/applab/expressions/setProperty) internally

### Image

#### ```get``` | ```element.image``` ```[String]```

&emsp;Returns image url/source of image element. Uses ```getProperty()```[↗](https://studio.code.org/docs/ide/applab/expressions/getProperty) internally.

#### ```set``` | ```element.image = [String]```

&emsp;Sets image element's image source. Uses ```setProperty()```[↗](https://studio.code.org/docs/ide/applab/expressions/setProperty) internally

#### ```get``` | ```element.fit``` ```["fill" || "cover" || "contain" || "none"]```

&emsp;Returns image fit type. Uses ```getProperty()```[↗](https://studio.code.org/docs/ide/applab/expressions/getProperty) internally.

#### ```set``` | ```element.fit = ["fill" || "cover" || "contain" || "none"]```

&emsp;Sets image fit type. Uses ```setProperty()```[↗](https://studio.code.org/docs/ide/applab/expressions/setProperty) internally

#### ```get``` | ```element.iconColor``` ```[String]```

&emsp;Returns icon color if image element contains an icon. Uses ```getProperty()```[↗](https://studio.code.org/docs/ide/applab/expressions/getProperty) internally.

#### ```set``` | ```element.iconColor = [String]```

&emsp;Sets image element's icon color. Uses ```setProperty()```[↗](https://studio.code.org/docs/ide/applab/expressions/setProperty) internally

### Size and position

#### ```get``` | ```element.height``` ```[Number]```

&emsp;Returns height of element. Uses ```getProperty()```[↗](https://studio.code.org/docs/ide/applab/expressions/getProperty) internally.

#### ```set``` | ```element.height = [Number]```

&emsp;Sets height of element. Uses ```setProperty()```[↗](https://studio.code.org/docs/ide/applab/expressions/setProperty) internally

#### ```get``` | ```element.width``` ```[Number]```

&emsp;Returns width of element. Uses ```getProperty()```[↗](https://studio.code.org/docs/ide/applab/expressions/getProperty) internally.

#### ```set``` | ```element.width = [Number]```

&emsp;Sets width of element. Uses ```setProperty()```[↗](https://studio.code.org/docs/ide/applab/expressions/setProperty) internally

#### ```get``` | ```element.size``` ```[Array:[Number,Number]]```

&emsp;Returns array containing height and width values respectively. Uses ```getProperty()```[↗](https://studio.code.org/docs/ide/applab/expressions/getProperty) internally.

#### ```set``` | ```element.size = [Array:[Number,Number]]```

&emsp;Sets element height to array item ```0``` and width to array item ```1```. Uses ```setProperty()```[↗](https://studio.code.org/docs/ide/applab/expressions/setProperty) internally

#### ```get``` | ```element.x``` ```[Number]```

&emsp;Returns x position of element. Uses ```getProperty()```[↗](https://studio.code.org/docs/ide/applab/expressions/getProperty) internally.

#### ```set``` | ```element.x = [Number]```

&emsp;Sets x position of element. Uses ```setProperty()```[↗](https://studio.code.org/docs/ide/applab/expressions/setProperty) internally

#### ```get``` | ```element.y``` ```[Number]```

&emsp;Returns y position of element. Uses ```getProperty()```[↗](https://studio.code.org/docs/ide/applab/expressions/getProperty) internally.

#### ```set``` | ```element.y = [Number]```

&emsp;Sets y position of element. Uses ```setProperty()```[↗](https://studio.code.org/docs/ide/applab/expressions/setProperty) internally

#### ```get``` | ```element.position``` ```[Array:[Number,Number]]```

&emsp;Returns array containing x and y position values respectively. Uses ```getProperty()```[↗](https://studio.code.org/docs/ide/applab/expressions/getProperty) internally.

#### ```set``` | ```element.position = [Array:[Number,Number]]```

&emsp;Sets element x position to array item ```0``` and y position to array item ```1```. Uses ```setProperty()```[↗](https://studio.code.org/docs/ide/applab/expressions/setProperty) internally.

#### 🟥❗ >=1.2.0 ❗🟥 ```property``` | ```element.minX```

&emsp;When property is not ```false```, restricts element from having an x position lower than its value. Use with ```element.maxX``` to confine element in a certain range on the x axis. Defaults to ```false```.

#### 🟥❗ >=1.2.0 ❗🟥 ```property``` | ```element.maxX```

&emsp;When property is not ```false```, restricts element from having an x position higher than its value. Use with ```element.minX``` to confine element in a certain range on the x axis. Defaults to ```false```.

#### 🟥❗ >=1.2.0 ❗🟥 ```property``` | ```element.minY```

&emsp;When property is not ```false```, restricts element from having an y position lower than its value. Use with ```element.maxY``` to confine element in a certain range on the y axis. Defaults to ```false```.

#### 🟥❗ >=1.2.0 ❗🟥 ```property``` | ```element.maxY```

&emsp;When property is not ```false```, restricts element from having an y position lower than its value. Use with ```element.minY``` to confine element in a certain range on the y axis. Defaults to ```false```.

#### ```method``` | ```element.collides(String, Number?)``` ```[Boolean]```

&emsp;Returns whether element intersects with element matching id given as argument. Accepts an offset as optional second parameter. Note that this method only checks for box collision. Internally uses factors such as both elements' size and position to determine whether they intersect.

### Horizontal and vertical align

#### 🟥❗ >=1.3.0 ❗🟥 ```method``` | ```element.alignX("left" || "center" || "right", Number?)```

&emsp;Horizontally aligns element to left, right, or center of the screen. Accepts an offset as optional second parameter. Internally uses factors such as element and screen size to determine new position.

#### 🟥❗ >=1.3.0 ❗🟥 ```method``` | ```element.alignY("top" || "center" || "bottom", Number?)```

&emsp;Vertically aligns element to top, bottom, or center of the screen. Accepts an offset as optional second parameter. Internally uses factors such as element and screen size to determine new position.

#### 🟥❗ >=1.3.0 ❗🟥 ```method``` | ```element.align(String, Number?, Number?)```

&emsp;Aligns element to a certain position on screen based on first argument. The argument must be a compound of horizontal and vertical align ("top-left", "right-center", "bottom-right" etc.) in whichever order, or "center". Accepts two optional arguments: an x offset and y offset. Internally uses factors such as element and screen size to determine new position.

#### 🟥❗ >=1.3.0 ❗🟥 ```method``` | ```element.alignParentX(String, "left" || "center" || "right", Number?)```

&emsp;Appends element to element with id specified in first parameter and horizontally aligns element to left, right, or center of parent. Accepts an offset as optional second parameter. Internally uses factors such as elements' size to determine new position.

#### 🟥❗ >=1.3.0 ❗🟥 ```method``` | ```element.alignParentY(String, "top" || "center" || "bottom", Number?)```

&emsp;Appends element to element with id specified in first parameter and vertically aligns element to top, bottom, or center of parent. Accepts an offset as optional second parameter. Internally uses factors such as elements' size to determine new position.

#### 🟥❗ >=1.3.0 ❗🟥 ```method``` | ```element.alignParent(String, String, Number?, Number?)```

&emsp;Appends element to element with id specified in first parameter and aligns element to a certain position on parent based on second argument. The argument must be a compound of horizontal and vertical align ("top-left", "right-center", "bottom-right" etc.) in whichever order, or "center". Accepts two optional arguments: an x offset and y offset. Internally uses factors such as elements' size to determine new position.

### Slider properties

#### ```get``` | ```element.value``` ```[Number]```

&emsp;Returns current numeric value of slider. Uses ```getProperty()```[↗](https://studio.code.org/docs/ide/applab/expressions/getProperty) internally.

#### ```set``` | ```element.value = [Number]```

&emsp;Sets numeric value of slider. Uses ```setProperty()```[↗](https://studio.code.org/docs/ide/applab/expressions/setProperty) internally

#### ```get``` | ```element.min``` ```[Number]```

&emsp;Returns min value of slider. Uses ```getProperty()```[↗](https://studio.code.org/docs/ide/applab/expressions/getProperty) internally.

#### ```set``` | ```element.min = [Number]```

&emsp;Sets min of slider. Uses ```setProperty()```[↗](https://studio.code.org/docs/ide/applab/expressions/setProperty) internally

#### ```get``` | ```element.max``` ```[Number]```

&emsp;Returns max value of slider. Uses ```getProperty()```[↗](https://studio.code.org/docs/ide/applab/expressions/getProperty) internally.

#### ```set``` | ```element.max = [Array]```

&emsp;Sets max value of slider. Uses ```setProperty()```[↗](https://studio.code.org/docs/ide/applab/expressions/setProperty) internally

#### ```get``` | ```element.range``` ```[Array:[Number,Number]]```

&emsp;Returns array containing slider min and max values respectively. Uses ```getProperty()```[↗](https://studio.code.org/docs/ide/applab/expressions/getProperty) internally.

#### ```set``` | ```element.range = [Array:[Number,Number]]```

&emsp;Sets slider min to array item ```0``` and max to array item ```1```. Uses ```setProperty()```[↗](https://studio.code.org/docs/ide/applab/expressions/setProperty) internally

#### ```get``` | ```element.step``` ```[Number]```

&emsp;Returns step property of slider. Uses ```getProperty()```[↗](https://studio.code.org/docs/ide/applab/expressions/getProperty) internally.

#### ```set``` | ```element.step = [Number]```

&emsp;Sets step property of slider. Uses ```setProperty()```[↗](https://studio.code.org/docs/ide/applab/expressions/setProperty) internally

### Select elements

#### ```get``` | ```element.groupId``` ```[String]```

&emsp;Returns group-id of radio button. Uses ```getProperty()```[↗](https://studio.code.org/docs/ide/applab/expressions/getProperty) internally.

#### ```set``` | ```element.groupId = [String]```

&emsp;Sets group-id of radio button. Uses ```setProperty()```[↗](https://studio.code.org/docs/ide/applab/expressions/setProperty) internally

#### ```get``` | ```element.checked``` ```[Boolean]```

&emsp;Returns Boolean indicating status of radio button or checkbox. Uses ```getProperty()```[↗](https://studio.code.org/docs/ide/applab/expressions/getProperty) internally.

#### ```set``` | ```element.checked = [Boolean]```

&emsp;Sets checked property of radio button or checkbox. Uses ```setProperty()```[↗](https://studio.code.org/docs/ide/applab/expressions/setProperty) internally

#### ```get``` | ```element.options``` ```[Array:String[]]```

&emsp;Returns array containing options inside a dropdown. Uses ```getProperty()```[↗](https://studio.code.org/docs/ide/applab/expressions/getProperty) internally.

#### ```set``` | ```element.options = [Array:String[]]```

&emsp;Sets options property of dropdown. Uses ```setProperty()```[↗](https://studio.code.org/docs/ide/applab/expressions/setProperty) internally

#### ```get``` | ```element.index``` ```[Number]```

&emsp;Returns dropdown index. Uses ```getProperty()```[↗](https://studio.code.org/docs/ide/applab/expressions/getProperty) internally.

#### ```set``` | ```element.index = [Number]```

&emsp;Sets dropdown index. Uses ```setProperty()```[↗](https://studio.code.org/docs/ide/applab/expressions/setProperty) internally

### HTML and CSS

#### ```set``` | ```element.html = [String]```

&emsp;Sets element's innerHTML to provided string. Uses ```innerHTML()```[Not documented] internally. Only setter.

#### ```set``` | ```element.CSS = [String]```

&emsp;Sets CSS styling of element to provided string. Uses ```setStyle()```[↗](https://studio.code.org/docs/ide/applab/expressions/setStyle) internally. Only setter.

#### ```set``` | ```element.parent = [String]```

&emsp;Appends element to the element with the matching id. Uses ```setParent()```[Not document] internally. Only setter.

#### ```set``` | ```element.children = [String || Array:String[]]```

&emsp;Appends element with the matching id to element. 🟥❗ >=1.1.0 ❗🟥 If argument provided is of type array, loops through array items and appends element with id of each item to element. Uses ```setParent()```[Not documented] internally. Only setter.

#### ```set``` | ```element.scrollX = [Boolean]```

&emsp;Enables or disables horizontal scrolling for element. Uses ```setStyle()```[↗](https://studio.code.org/docs/ide/applab/expressions/setStyle) internally. Only setter.

#### ```set``` | ```element.scrollY = [Boolean]```

&emsp;Enables or disables vertical scrolling for element. Uses ```setStyle()```[↗](https://studio.code.org/docs/ide/applab/expressions/setStyle) internally. Only setter.

#### ```get``` | ```element.scrollable``` ```[Array:[Boolean,Boolean]]```

&emsp;Returns, in order, whether the element is horizontally and vertically scrollable. Note that this is only useful if ```element.scrollX```[↗](#html-and-css) or ```element.scrollY```[↗](#html-and-css) were previously set in the same object.

#### ```set``` | ```element.scrollable = [Array:[Boolean,Boolean]]```

&emsp;Sets, in order, element's horizontal and vertical scrolling. Uses ```element.scrollX```[↗](#html-and-css) and ```element.scrollY```[↗](#html-and-css) internally.

### Events

#### ```set``` | ```element.click = [Function]```

&emsp;Calls function when a ```click``` event is generated on element. Uses ```onEvent()```[↗](https://studio.code.org/docs/ide/applab/expressions/onEvent) internally.

#### ```set``` | ```element.change = [Function]```

&emsp;Calls function when a ```change``` event is generated on element. Uses ```onEvent()```[↗](https://studio.code.org/docs/ide/applab/expressions/onEvent) internally.

#### ```set``` | ```element.keyup = [Function]```

&emsp;Calls function when a ```keyup``` event is generated on element. Uses ```onEvent()```[↗](https://studio.code.org/docs/ide/applab/expressions/onEvent) internally.

#### ```set``` | ```element.keydown = [Function]```

&emsp;Calls function when a ```keydown``` event is generated on element. Uses ```onEvent()```[↗](https://studio.code.org/docs/ide/applab/expressions/onEvent) internally.

#### ```set``` | ```element.keypress = [Function]```

&emsp;Calls function when a ```keypress``` event is generated on element. Uses ```onEvent()```[↗](https://studio.code.org/docs/ide/applab/expressions/onEvent) internally.

#### ```set``` | ```element.mousemove = [Function]```

&emsp;Calls function when a ```mousemove``` event is generated on element. Uses ```onEvent()```[↗](https://studio.code.org/docs/ide/applab/expressions/onEvent) internally.

#### ```set``` | ```element.mousedown = [Function]```

&emsp;Calls function when a ```mousedown``` event is generated on element. Uses ```onEvent()```[↗](https://studio.code.org/docs/ide/applab/expressions/onEvent) internally.

#### ```set``` | ```element.mouseup = [Function]```

&emsp;Calls function when a ```mouseup``` event is generated on element. Uses ```onEvent()```[↗](https://studio.code.org/docs/ide/applab/expressions/onEvent) internally.

#### ```set``` | ```element.mouseover = [Function]```

&emsp;Calls function when a ```mouseover``` event is generated on element. Uses ```onEvent()```[↗](https://studio.code.org/docs/ide/applab/expressions/onEvent) internally.

#### ```set``` | ```element.mouseout = [Function]```

&emsp;Calls function when a ```mouseout``` event is generated on element. Uses ```onEvent()```[↗](https://studio.code.org/docs/ide/applab/expressions/onEvent) internally.

#### ```set``` | ```element.input = [Function]```

&emsp;Calls function when an ```input``` event is generated on element. Uses ```onEvent()```[↗](https://studio.code.org/docs/ide/applab/expressions/onEvent) internally.

#### ```set``` | ```element.dblClick = [Function]```

&emsp;Calls function when two ```click``` events are generated on element. If ```element```[↗](#sem-documentation) already has a ```click``` listener, calls it two times. Uses ```element.click```[↗](#events) internally.

#### ```set``` | ```element.hover = [Object]```

&emsp;Applies the properties (i.e., any property covered in this documentation) present in argument when cursor hovers overs element. If parameter has a ```callback``` property, executes it with one argument. Uses ```element.mouseover```[↗](#events) and ```element.mouseout```[↗](#events) internally.

#### ```set``` | ```element.drag = [String]```

&emsp;Makes element scrollable across element with id provided. Set to false to disable scrolling. Calls ```element.drop```[↗](#events) after element is dropped. Uses ```element.mouseover```[↗](#events) and ```element.mouseout```[↗](#events) internally.

#### ```method``` | ```element.drop``` ```[Function]```

&emsp;Called when a draggable element is dropped. Defaults to ```function(){}```.

### Move with animation

#### 🟥❗ >=1.6.0 ❗🟥 ```method``` | ```element.moveX(Number, Function?)``` 🟥❗ <1.6.0 && >=1.4.0 ```element.velocityX(Number, Function?)``` ❗🟥

&emsp;Dynamically moves element to x position specified in first argument with animation. Accepts a callback as optional second parameter, which will be called once element reaches target x position. Internally uses a ```timedLoop()```[↗](https://studio.code.org/docs/ide/applab/expressions/timedLoop), and ```element.speedX```[↗](#moving-animation) and ```element.rateX```[↗](#moving-animation) properties.

#### 🟥❗ >=1.6.0 ❗🟥 ```method``` | ```element.moveY(Number, Function?)``` 🟥❗ <1.6.0 && >=1.4.0 ```element.velocityY(Number, Function?)``` ❗🟥

&emsp;Dynamically moves element to y position specified in first argument with animation. Accepts a callback as optional second parameter, which will be called once element reaches target y position. Internally uses a ```timedLoop()```[↗](https://studio.code.org/docs/ide/applab/expressions/timedLoop), and ```element.speedY```[↗](#moving-animation) and ```element.rateY```[↗](#moving-animation) properties.

#### 🟥❗ >=1.4.0 ❗🟥 ```property``` | ```element.speedX``` ```[Number]```

&emsp;Given to ```timedLoop()```[↗](https://studio.code.org/docs/ide/applab/expressions/timedLoop) milliseconds parameter as argument when ```element.moveX()```[↗](#moving-animation) is called. Defaults to ```10```. Increasing this property will potentially affect smoothness of animation.

#### 🟥❗ >=1.4.0 ❗🟥 ```property``` | ```element.speedY``` ```[Number]```

&emsp;Given to ```timedLoop()```[↗](https://studio.code.org/docs/ide/applab/expressions/timedLoop) milliseconds parameter as argument when ```element.moveY()```[↗](#moving-animation) is called. Defaults to ```10```. Increasing this property will potentially affect smoothness of animation.

#### 🟥❗ >=1.4.0 ❗🟥 ```property``` | ```element.rateX``` ```[Number]```

&emsp;The number of pixels to increment (or decrement if first argument to ```element.moveX()```[↗](#moving-animation) is negative) each [```element.speedX```[↗](#moving-animation)] milliseconds during the ```timedLoop()```[↗](https://studio.code.org/docs/ide/applab/expressions/timedLoop). Defaults to ```1```. Increasing this property will potentially affect smoothness of animation.

#### 🟥❗ >=1.4.0 ❗🟥 ```property``` | ```element.rateY``` ```[Number]```

&emsp;The number of pixels to increment (or decrement, if first argument to ```element.moveY()```[↗](#moving-animation) is negative) each [```element.speedYA```[↗](#moving-animation)] milliseconds during the ```timedLoop()```[↗](https://studio.code.org/docs/ide/applab/expressions/timedLoop). Defaults to ```1```. Increasing this property will potentially affect smoothness of animation.

<br>

> ## ```Template```
> ```[function:Function]```

Constructor function. Expects one parameter: an object with element properties, an an optional property ```callback```[↗](#template). Resultant object has one property ```this.props```[↗](#template) and one method ```this.Apply()```[↗](#template).

```var template = new Template(Object)```

#### ```property``` | ```template.props``` | ```[Object]```

&emsp;Object holding all properties in object passed on to ```Template()```[↗](#template) as argument, and their values, allowing the values to be updated.

&emsp; 🟥❗ >=1.5.0 ❗🟥 ```property``` | ```template.props.callback(Object)``` | ```[Function]```

&emsp;Called once for each element given as argument for ```template.Apply()```[↗](#template), with a ```$()```[↗](#property-types) object of the element with the corresponding id as argument.

#### ```method``` | ```template.Apply(String[])```

&emsp;Applies properties in ```this.props```[↗](#template) to all elements with ids given as arguments.
