# Site Boilerplate
Site Boilerplate (for IE 9 and upwards) utilizing the following principles:
* [Atomic Design](http://patternlab.io/)
* Object-oriented SCSS for modular development 
* [CSS guidelines](http://cssguidelin.es/) / [ITCSS](https://twitter.com/itcss_io) scss structure 
* Loosely follows [BEM](https://css-tricks.com/bem-101/) to create clear css components but with less parent element name repetition and allowing low-level nesting. 
* Web app source and dist folder structure
* Using Gulp for compilation and browser refresh.

Brad Frost's Atomic Design and Harry Robert's CSSGuidlines/ITCSS share the same approach in that they begin will simple elements/atoms and building up to complex groups of elements/molecules. This works in favor of the cascade as it reduces any CSS specificity issues.


###Further Reading
* [Brad Frost - Atomic Design](https://vimeo.com/67476280)
* [Harry Roberts - MindBEMding – getting your head ’round BEM syntax](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)

#Front End Guidelines

###CSS
The CSS should aim to be object orientated to create reusable, flexible classes which makes future updates easy and logical. Write component based css inline with an atomic design methodology. 

###Main objectives of CSS
* Component driven
* Object Orientated
* Maintainable

###Components
Component based CSS keeps the code clean and modular. A BEM approach would be like this, note repeated parent class name:
```
.car {}
	.car__wheel {}
	.car__door {}
```
When looking at both the HTML markup and the CSS it's clear where the parent is and what it is called. So it is acceptable to not reference the parent name in the child element class names:
```
.car {
	.wheel {}
	.door {}
}
```
##Nesting and specificity
Specificity can cause issues when working with the cascade, but if component nesting is kept low (ideally no more than 3) and clear, it will cause minimal problems. 

BEM approach encourages having a unique class for every element, keeping all elements at the root of the cascade, eliminating any cascade entirely. However the cascade can be useful, speed up development and cause no issues if components are built responsibly with specificity in mind.

###Class names
Classe names are all lower case and use underscores for spacing:   
```<header class="site_header"></header>```

**Modifier classes** use the element's class name with an added double hyphen, followed by the modifier name:   
```<div class="modal   modal--small"></div>```

3 spaces before modifiers for readability:   
```<div class="modal   modal--small"></div>```   
Modifiers come last within the class name list.

### Context vs component / element
Implementation styles are based on context, visual styles are based on component / element.
Style elements based on what they are - not where they are.
Style code should be based on the component.
Implementation code should be based on thier context.

For example, if a button is in a component in which the button needs to be floated right, it is due to being inside the parent component. The button styling doesnt need modifying. Simply reference the button inside of the compnent class and add the implementation classes. 

A button modifier class in this situation would be another option, although it may create unneeded additional markup, as well as making future style modifications within layout changes more difficult.

###Content agnostic class names
Component class names should not be tied to the content inside the component. For example using the the class name ‘welcome_message’ would not be ideal. As that layout / component could be used elsewhere for other purposes.

###Avoid use of IDs 
IDs have the highest specificity of any css selector and as a result they cause issue with overwriting styles in the cascade. Avoid using any IDs.
Sometimes developers will add an ID to an element for the sole purpose of referencing the ID in javascript. However this isnt neccessary, instead use a class and reference the element using getElementsByClassName("class_name")[0]; (note 'ClassName' is beneficial over 'ClassList' due to it's wider browser support).

###Quasi-Qualified Selectors

>`ul.nav {}`
Here we can see that the .nav class is meant to be used on a ul element, and not on a nav. By using quasi-qualified selectors we can still provide that information without actually qualifying the selector    
`/*ul*/.nav {}`

###Javascipt hooks 
>A common practice is to use data-* attributes as JS hooks, but this is incorrect. data-* attributes, as per the spec, are used to store custom data private to the page or application (emphasis mine). data-* attributes are designed to store data, not be bound to.

All javascript hooks should be prefixed with 'js_'. for example:   
```<a class="btn js_open_modal"></a>```

###CSS structure

```
/**
 * CONTENTS
 *
 * SETTINGS
 * Global...............Globally-available variables and config.
 * * Gloablly availible settings. Config switches. Brand colors etc
 *
 * TOOLS
 * Mixins...............Useful mixins.
 * * Globally availible tools. Public mixins. Helper functions.
 *
 * GENERIC
 * Normalize.css........A level playing field.
 * Box-sizing...........Better default `box-sizing`.
 * * Ground zero styles. Low specificty. Far-reaching. Resets, noramlize etc
 *
 * BASE
 * Headings.............H1–H6 styles.
 * * unclassed HTML elements - ul, p, a, buttons, input, textarea, select, blockquote,
 *
 * OBJECTS
 * Wrappers.............Wrapping and constraining elements.
 * * OOCSS. Design patterns. No cosmetics. Begin using classes exclusively. Agnostically named (eg ui_list)
 *
 * COMPONENTS
 * Page-head............The main page header.
 * Page-foot............The main page footer.
 * Buttons..............Button elements.
 * * Designed pieces of UI. Still only using classes. Explicitly named.
 *
 * Optional - Theme Layer 
 * Optional - A/B Test layer
 *
 * TRUMPS
 * Text.................Text helpers.
 * * overides, utiliies and helpers, 
 * * affect one piece of the DOM at a time
 * * usually carry important
 */
 ```

###CSS titles
All section titles are listed as:   
```
/*------------------------------------*\ 
Section Title
\*------------------------------------*/
```

Section subtitles listed as:   
```/*-----------buttons-------------*/ ```

###HTML Markup
3 spaces before modifiers for readability:   
```<div class="modal   modal--small"></div>```   
Modifiers come last within the class name list.

####Meaningful use of white space
>As with our rulesets, it is possible to use meaningful whitespace in your HTML. You can denote thematic breaks in content with five (5) empty lines, for example:

```
<header class="page_head">
    ...
</header>





<main class="page_content">
    ...
</main>
```
