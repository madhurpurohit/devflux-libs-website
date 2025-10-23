import { CheatSheetCard } from "../utils/CheatSheetCard";
import { handleLinkClick } from "../utils/handleLinkClick";

// Main data source for the CSS cheat sheet
const cssData = [
  {
    id: "selectors",
    category: "Selectors & Combinators",
    items: [
      {
        title: "Basic Selectors",
        description:
          '<b>Description:</b> Target elements based on their type, class, or ID.<br><b>Values:</b><br>• <b>Type:</b> `p`<br>• <b>Class:</b> `.my-class`<br>• <b>ID:</b> `#my-id`<br>• <b>Universal:</b> `*`<br>• <b>Attribute:</b> `[type="text"]`',
      },
      {
        title: "Combinators",
        description:
          "<b>Description:</b> Define the relationship between selectors.<br><b>Values:</b><br>• <b>Descendant (` `):</b> `div p`<br>• <b>Child (`>`):</b> `div > p`<br>• <b>Adjacent Sibling (`+`):</b> `h1 + p`<br>• <b>General Sibling (`~`):</b> `h1 ~ p`",
      },
      {
        title: "State Pseudo-classes",
        description:
          "<b>Description:</b> Select elements based on their interaction state.<br><b>Values:</b> `:active`, `:hover`, `:focus`, `:focus-within`, `:link`, `:visited`.",
        code: `a:hover {\n  color: red;\n}`,
      },
      {
        title: "Positional Pseudo-classes",
        description:
          "<b>Description:</b> Select elements based on their position in the document tree.<br><b>Values:</b> `:first-child`, `:last-child`, `:nth-child(n)`, `:first-of-type`, `:last-of-type`.",
      },
      {
        title: "Logical Pseudo-classes",
        description:
          "<b>Description:</b> Logical pseudo-classes for more complex selections.<br>• <b>:is(...selectors)</b>: Matches any selector in the list.<br>• <b>:where(...selectors)</b>: Similar to `:is()` but has zero specificity.<br>• <b>:has(...selectors)</b>: The 'parent selector'; selects an element if any of its descendants match the list.<br>• <b>:not(...selectors)</b>: Selects elements that do not match any selector in the list.",
        code: `/* Selects any h1, h2, or h3 inside an article */\narticle :is(h1, h2, h3) {\n  line-height: 1.2;\n}`,
      },
      {
        title: "Validation Pseudo-classes",
        description:
          "<b>Description:</b> Style form elements based on their validation state.<br>• <b>:valid / :invalid</b>: Based on HTML5 constraint validation.<br>• <b>:user-valid / :user-invalid</b>: Similar, but only apply after significant user interaction.",
        code: `input:invalid {\n  border-color: red;\n}`,
      },
      {
        title: "Pseudo-elements",
        description:
          "<b>Description:</b> Style a specific part of an element.<br><b>Values:</b> `::before`, `::after`, `::first-letter`, `::first-line`, `::selection`, `::placeholder`.",
        code: `p::first-line {\n  font-weight: bold;\n}`,
      },
    ],
  },
  {
    id: "units",
    category: "CSS Units",
    items: [
      {
        title: "Absolute Units",
        description:
          "<b>Description:</b> Fixed units that are not relative to anything else. They are generally not recommended for responsive design.<br><b>Values:</b> `px` (pixels), `pt` (points), `cm` (centimeters), etc.",
      },
      {
        title: "Relative Units",
        description:
          "<b>Description:</b> Relative to another length property, making them great for responsive design.<br><b>Values:</b> `%`, `vw` (viewport width), `vh` (viewport height), `em`, `rem`.",
      },
      {
        title: "em vs rem",
        description:
          "<b>Description:</b> Two of the most important relative units.<br>• <b>em:</b> Relative to the `font-size` of its direct or nearest parent element.<br>• <b>rem (root em):</b> Relative to the `font-size` of the root (`<html>`) element. This makes it more predictable than `em` for creating scalable layouts.",
        code: `/* If root font-size is 16px */\n.title {\n  font-size: 2rem; /* 32px */\n  padding: 1em; /* 32px, because it's relative to its own font-size */\n}`,
      },
    ],
  },
  {
    id: "box-model",
    category: "The Box Model",
    items: [
      {
        title: "Padding",
        description:
          "<b>Description:</b> The space between the content and the border.<br><b>Syntax:</b> `padding: &lt;top&gt; &lt;right&gt; &lt;bottom&gt; &lt;left&gt;;`<br><b>Values:</b> Lengths (`px`, `rem`), percentages (`%`).",
        code: `div {\n  padding: 25px;\n}`,
      },
      {
        title: "Border",
        description:
          "<b>Description:</b> The border surrounding the padding.<br><b>Syntax:</b> `border: &lt;border-width&gt; &lt;border-style&gt; &lt;border-color&gt;;`<br><b>Values:</b> `1px`, `solid`, `black`.",
        code: `div {\n  border: 2px dashed red;\n}`,
      },
      {
        title: "Margin",
        description:
          "<b>Description:</b> The space outside the border, separating elements.<br><b>Syntax:</b> `margin: &lt;top&gt; &lt;right&gt; &lt;bottom&gt; &lt;left&gt;;`<br><b>Values:</b> Lengths (`px`, `rem`), percentages (`%`), `auto`.",
        code: `div {\n  margin-bottom: 20px;\n}`,
      },
      {
        title: "box-sizing",
        description:
          "<b>Description:</b> Defines how width and height are calculated.<br><b>Syntax:</b> `box-sizing: &lt;value&gt;;`<br><b>Values:</b> `content-box` (default), `border-box`.",
        code: `* {\n  box-sizing: border-box;\n}`,
      },
      {
        title: "Logical Border Properties",
        description:
          "<b>Description:</b> Border properties that are relative to the writing direction.<br>• <b>border-block:</b> Corresponds to `border-top` and `border-bottom` in horizontal writing modes.<br>• <b>border-inline:</b> Corresponds to `border-left` and `border-right`.",
        code: `.box {\n  border-block: 2px solid red;\n  border-inline: 1px solid blue;\n}`,
      },
    ],
  },
  {
    id: "font-properties",
    category: "Font Properties",
    items: [
      {
        title: "font-family",
        description:
          '<b>Description:</b> Specifies the font for an element. Provide fallback fonts.<br><b>Syntax:</b> `font-family: &lt;font1&gt;, &lt;font2&gt;, ...;`<br><b>Values:</b> Font names (`"Times New Roman"`, `Arial`), generic families (`sans-serif`).',
        code: `body {\n  font-family: Arial, sans-serif;\n}`,
      },
      {
        title: "font-size",
        description:
          "<b>Description:</b> Sets the size of the font.<br><b>Syntax:</b> `font-size: &lt;value&gt;;`<br><b>Values:</b> `px`, `em`, `rem`, `%`, `vw`.",
        code: `h1 {\n  font-size: 2.5rem;\n}`,
      },
      {
        title: "font-weight",
        description:
          "<b>Description:</b> Sets the thickness of the font.<br><b>Syntax:</b> `font-weight: &lt;value&gt;;`<br><b>Values:</b> `normal` (400), `bold` (700), numeric values `100` to `900`.",
        code: `p {\n  font-weight: bold;\n}`,
      },
      {
        title: "font-style",
        description:
          "<b>Description:</b> Sets the style of the font.<br><b>Syntax:</b> `font-style: &lt;value&gt;;`<br><b>Values:</b> `normal`, `italic`, `oblique`.",
        code: `em {\n  font-style: italic;\n}`,
      },
      {
        title: "font-variant",
        description:
          "<b>Description:</b> A shorthand for various font variant properties, most commonly used for `small-caps`.",
        code: `.title {\n  font-variant: small-caps;\n}`,
      },
    ],
  },
  {
    id: "text-properties",
    category: "Text Properties",
    items: [
      {
        title: "color",
        description:
          "<b>Description:</b> Sets the color of the text.<br><b>Syntax:</b> `color: &lt;color-value&gt;;`",
        code: `p { color: #333; }`,
      },
      {
        title: "text-align",
        description:
          "<b>Description:</b> Specifies the horizontal alignment of text.<br><b>Syntax:</b> `text-align: &lt;value&gt;;`<br><b>Values:</b> `left`, `right`, `center`, `justify`.",
        code: `.center-text { text-align: center; }`,
      },
      {
        title: "text-decoration",
        description:
          "<b>Description:</b> Adds decoration to text.<br><b>Syntax:</b> `text-decoration: &lt;line&gt; &lt;style&gt; &lt;color&gt;;`<br><b>Values:</b> `none`, `underline`, `overline`, `line-through`.",
        code: `a {\n  text-decoration: none;\n}`,
      },
      {
        title: "text-transform",
        description:
          "<b>Description:</b> Controls the capitalization of text.<br><b>Syntax:</b> `text-transform: &lt;value&gt;;`<br><b>Values:</b> `none`, `capitalize`, `uppercase`, `lowercase`.",
        code: `h1 {\n  text-transform: uppercase;\n}`,
      },
      {
        title: "line-height",
        description:
          "<b>Description:</b> Sets the distance between lines of text.<br><b>Syntax:</b> `line-height: &lt;value&gt;;`<br><b>Values:</b> unitless number (e.g., `1.5`), length (`px`, `em`), percentage.",
        code: `p {\n  line-height: 1.6;\n}`,
      },
      {
        title: "letter-spacing & word-spacing",
        description:
          "<b>Description:</b> Controls the space between characters or words.<br><b>Syntax:</b> `letter-spacing: &lt;value&gt;;`",
        code: `h1 {\n  letter-spacing: 2px;\n  word-spacing: 4px;\n}`,
      },
      {
        title: "word-wrap / overflow-wrap",
        description:
          "<b>Description:</b> Allows long words to be broken and wrap onto the next line.<br><b>Syntax:</b> `overflow-wrap: &lt;value&gt;;`<br><b>Values:</b> `normal`, `break-word`.",
        code: `.break-long-words {\n  overflow-wrap: break-word;\n}`,
      },
      {
        title: "vertical-align",
        description:
          "<b>Description:</b> Sets the vertical alignment of an inline, inline-block or table-cell element.<br><b>Syntax:</b> `vertical-align: &lt;value&gt;;`<br><b>Values:</b> `baseline`, `top`, `middle`, `bottom`, `text-top`, `text-bottom`.",
        code: `img {\n  vertical-align: middle;\n}`,
      },
      {
        title: "writing-mode",
        description:
          "<b>Description:</b> Defines whether lines of text are laid out horizontally or vertically.<br><b>Syntax:</b> `writing-mode: &lt;value&gt;;`<br><b>Values:</b> `horizontal-tb`, `vertical-rl`, `vertical-lr`.",
        code: `.vertical-text {\n  writing-mode: vertical-rl;\n}`,
      },
    ],
  },
  {
    id: "layout",
    category: "Layout & Positioning",
    items: [
      {
        title: "display",
        description:
          "<b>Description:</b> Specifies the display behavior of an element.<br><b>Syntax:</b> `display: &lt;value&gt;;`<br><b>Values:</b> `block`, `inline`, `inline-block`, `flex`, `grid`, `table`, `none`.",
        code: `span {\n  display: block;\n}`,
      },
      {
        title: "position",
        description:
          "<b>Description:</b> Specifies the type of positioning method.<br><b>Syntax:</b> `position: &lt;value&gt;;`<br><b>Values:</b> `static`, `relative`, `absolute`, `fixed`, `sticky`.",
        code: `.modal {\n  position: fixed;\n}`,
      },
      {
        title: "inset",
        description:
          "<b>Description:</b> A shorthand for `top`, `right`, `bottom`, and `left`. Used with positioned elements.<br><b>Syntax:</b> `inset: &lt;value&gt;;`",
        code: `.overlay {\n  position: fixed;\n  inset: 0;\n}`,
      },
      {
        title: "z-index",
        description:
          "<b>Description:</b> Specifies the stack order of a positioned element.<br><b>Syntax:</b> `z-index: &lt;integer&gt; | auto;`",
        code: `.overlay {\n  z-index: 999;\n}`,
      },
      {
        title: "overflow",
        description:
          "<b>Description:</b> Controls content that is too big to fit.<br><b>Syntax:</b> `overflow: &lt;value&gt;;` `overflow-x: &lt;value&gt;;` `overflow-y: &lt;value&gt;;`<br><b>Values:</b> `visible`, `hidden`, `scroll`, `auto`.",
        code: `.card {\n  overflow-y: auto;\n}`,
      },
      {
        title: "float & clear",
        description:
          "<b>Description:</b> `float` pushes an element to the side of its container. `clear` is used to control the behavior of elements after a floated element.<br><b>Syntax:</b> `float: &lt;left|right|none&gt;;` `clear: &lt;both|left|right|none&gt;;`",
        code: `.img-left { float: left; }\n.footer { clear: both; }`,
      },
      {
        title: "visibility",
        description:
          "<b>Description:</b> Shows or hides an element without changing the layout.<br><b>Syntax:</b> `visibility: &lt;value&gt;;`<br><b>Values:</b> `visible`, `hidden`, `collapse`.",
        code: `.hide-me {\n  visibility: hidden;\n}`,
      },
    ],
  },
  {
    id: "flexbox",
    category: "Flexbox",
    items: [
      {
        title: "Flex Container",
        description:
          "<b>Description:</b> To create a flex container, set `display: flex`.",
      },
      {
        title: "flex-direction",
        description:
          "<b>Description:</b> Defines the direction of the main axis.<br><b>Syntax:</b> `flex-direction: &lt;value&gt;;`<br><b>Values:</b> `row`, `row-reverse`, `column`, `column-reverse`.",
        code: `.container {\n  flex-direction: column;\n}`,
      },
      {
        title: "justify-content",
        description:
          "<b>Description:</b> Aligns items along the main axis.<br><b>Syntax:</b> `justify-content: &lt;value&gt;;`<br><b>Values:</b> `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`.",
      },
      {
        title: "align-items",
        description:
          "<b>Description:</b> Aligns items along the cross axis.<br><b>Syntax:</b> `align-items: &lt;value&gt;;`<br><b>Values:</b> `stretch`, `flex-start`, `flex-end`, `center`, `baseline`.",
      },
      {
        title: "align-content",
        description:
          "<b>Description:</b> Aligns multiple lines of flex items on the cross axis.<br><b>Syntax:</b> `align-content: &lt;value&gt;;`<br><b>Values:</b> `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `stretch`.",
      },
      {
        title: "Flex Items",
        description:
          "<b>Description:</b> Properties for flex children.<br>• <b>flex-grow</b>: Ability to grow.<br>• <b>flex-shrink</b>: Ability to shrink.<br>• <b>order</b>: Sets item order.<br>• <b>align-self</b>: Overrides `align-items` for a single item.",
      },
    ],
  },
  {
    id: "grid",
    category: "Grid Layout",
    items: [
      {
        title: "Grid Container",
        description:
          "<b>Description:</b> To create a grid container, set `display: grid`.",
      },
      {
        title: "grid-template-columns / rows",
        description:
          "<b>Description:</b> Defines grid columns and rows.<br><b>Syntax:</b> `grid-template-columns: &lt;track-size-list&gt;;`<br><b>Values:</b> `px`, `%`, `fr`, `auto`, `repeat()`, `minmax()`.",
        code: `.container {\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n}`,
      },
      {
        title: "gap",
        description:
          "<b>Description:</b> Specifies the size of the grid lines (gutters).<br><b>Syntax:</b> `gap: &lt;row-gap&gt; &lt;column-gap&gt;;`",
        code: `.container {\n  gap: 20px;\n}`,
      },
      {
        title: "grid-column / grid-row",
        description:
          "<b>Description:</b> Specifies a grid item's size and location.<br><b>Syntax:</b> `grid-column: &lt;start-line&gt; / &lt;end-line&gt;;`",
        code: `.item-a {\n  grid-column: 1 / 3;\n  grid-row: 2;\n}`,
      },
      {
        title: "grid-template-areas",
        description:
          "<b>Description:</b> Defines a grid template by referencing the names of the grid areas which are specified with the `grid-area` property.",
        code: `/* Parent */\n.container {\n  grid-template-areas:\n    'header header'\n    'sidebar main';\n}\n\n/* Child */\n.header { grid-area: header; }`,
      },
      {
        title: "Grid Sizing Keywords",
        description:
          "<b>Description:</b> Advanced sizing for grid tracks.<br>• <b>min-content</b>: Smallest possible size.<br>• <b>max-content</b>: Ideal size to fit content.<br>• <b>minmax(min, max)</b>: Defines a size range.<br>• <b>auto-fill vs auto-fit</b>: Used with `repeat()` to create as many tracks as will fit. `auto-fit` collapses empty tracks.",
      },
      {
        title: "Grid Alignment",
        description:
          "<b>Description:</b> Aligning items and content within the grid.<br>• <b>justify-content / align-content</b>: Aligns the whole grid within the container.<br>• <b>justify-items / align-items</b>: Aligns items within their grid cells.<br>• <b>justify-self / align-self</b>: Aligns a single item within its cell.",
      },
    ],
  },
  {
    id: "transforms",
    category: "Transforms",
    items: [
      {
        title: "transform",
        description:
          "<b>Description:</b> Applies a 2D or 3D transformation to an element. This property allows you to rotate, scale, move, skew, etc., elements.<br><b>Syntax:</b> `transform: &lt;function1&gt; &lt;function2&gt; ...;`",
        code: `div {\n  transform: rotate(45deg) scale(1.5);\n}`,
      },
      {
        title: "translate()",
        description:
          "<b>Description:</b> Moves an element from its current position.<br><b>Values:</b> `translateX(n)`, `translateY(n)`, `translate(x, y)`, `translateZ(n)`, `translate3d(x, y, z)`.",
        code: `div:hover {\n  transform: translateX(50px);\n}`,
      },
      {
        title: "scale()",
        description:
          "<b>Description:</b> Changes the size of an element.<br><b>Values:</b> `scaleX(n)`, `scaleY(n)`, `scale(x, y)`, `scaleZ(n)`, `scale3d(x, y, z)`.",
        code: `div:hover {\n  transform: scale(1.2);\n}`,
      },
      {
        title: "rotate()",
        description:
          "<b>Description:</b> Rotates an element around a fixed point.<br><b>Values:</b> `rotateX(angle)`, `rotateY(angle)`, `rotateZ(angle)` (or just `rotate(angle)`), `rotate3d(x, y, z, angle)`.",
        code: `div:hover {\n  transform: rotate(180deg);\n}`,
      },
      {
        title: "skew()",
        description:
          "<b>Description:</b> Skews an element along the X and Y-axis.<br><b>Values:</b> `skewX(angle)`, `skewY(angle)`, `skew(x-angle, y-angle)`.",
        code: `div:hover {\n  transform: skewX(20deg);\n}`,
      },
      {
        title: "transform-origin",
        description:
          "<b>Description:</b> Changes the position of the point around which a transformation is applied.<br><b>Syntax:</b> `transform-origin: &lt;x-offset&gt; &lt;y-offset&gt; &lt;z-offset&gt;;`<br><b>Values:</b> Keywords (`center`, `top`, `left`), lengths, percentages.",
        code: `div {\n  transform-origin: top left;\n}`,
      },
      {
        title: "perspective",
        description:
          "<b>Description:</b> Gives a 3D-positioned element some perspective. It should be applied to the parent container.<br><b>Syntax:</b> `perspective: &lt;length&gt; | none;`",
        code: `.container {\n  perspective: 1000px;\n}`,
      },
    ],
  },
  {
    id: "shadows-filters",
    category: "Shadows & Filters",
    items: [
      {
        title: "box-shadow",
        description:
          "<b>Description:</b> Attaches one or more shadows to an element's box.<br><b>Syntax:</b> `box-shadow: &lt;offset-x&gt; &lt;offset-y&gt; &lt;blur-radius&gt; &lt;spread-radius&gt; &lt;color&gt; inset;`",
        code: `div {\n  box-shadow: 10px 5px 5px red;\n}`,
      },
      {
        title: "text-shadow",
        description:
          "<b>Description:</b> Adds shadow to text.<br><b>Syntax:</b> `text-shadow: &lt;offset-x&gt; &lt;offset-y&gt; &lt;blur-radius&gt; &lt;color&gt;;`",
        code: `h1 {\n  text-shadow: 2px 2px 4px #000000;\n}`,
      },
      {
        title: "filter",
        description:
          "<b>Description:</b> Applies graphical effects like blur or color shifting to an element.<br><b>Syntax:</b> `filter: &lt;function&gt;(value);`<br><b>Values:</b> `blur()`, `brightness()`, `contrast()`, `grayscale()`, `hue-rotate()`, `invert()`, `opacity()`, `saturate()`, `sepia()`, `drop-shadow()`.",
        code: `img {\n  filter: grayscale(100%);\n}`,
      },
      {
        title: "backdrop-filter",
        description:
          "<b>Description:</b> Applies filter effects to the area behind an element.<br><b>Syntax:</b> `backdrop-filter: &lt;function&gt;(value);`<br><b>Values:</b> Same as `filter` (e.g., `blur()`, `brightness()`, etc.).",
        code: `.overlay {\n  backdrop-filter: blur(10px);\n}`,
      },
    ],
  },
  {
    id: "transitions-animations",
    category: "Transitions & Animations",
    items: [
      {
        title: "transition",
        description:
          "<b>Description:</b> A shorthand property for setting the four transition properties.<br><b>Syntax:</b> `transition: &lt;property&gt; &lt;duration&gt; &lt;timing-function&gt; &lt;delay&gt;;`<br>• <b>property:</b> The name of the CSS property to transition (e.g., `background-color`).<br>• <b>duration:</b> The length of time the transition takes (e.g., `0.4s`).<br>• <b>timing-function:</b> The speed curve of the transition (e.g., `ease-in-out`).<br>• <b>delay:</b> The time to wait before starting (e.g., `0.1s`).",
        code: `button {\n  transition: background-color 0.4s ease-in-out;\n}`,
      },
      {
        title: "@keyframes",
        description:
          "<b>Description:</b> Defines the stages of an animation. You can specify changes at different percentages of the animation's duration.",
        code: `@keyframes slide-in {\n  from { transform: translateX(-100%); }\n  to { transform: translateX(0); }\n}`,
      },
      {
        title: "animation",
        description:
          "<b>Description:</b> A shorthand property for all animation properties.<br><b>Syntax:</b> `animation: &lt;name&gt; &lt;duration&gt; &lt;timing-function&gt; &lt;delay&gt; &lt;iteration-count&gt; &lt;direction&gt; &lt;fill-mode&gt; &lt;play-state&gt;;`",
        code: `div {\n  animation: slide-in 1s ease-out forwards;\n}`,
      },
    ],
  },
  {
    id: "queries-nesting",
    category: "Queries & Nesting",
    items: [
      {
        title: "@media Query",
        description:
          "<b>Description:</b> Used to apply different styles for different media types/devices.<br><b>Syntax:</b> `@media screen and (min-width: &lt;value&gt;) { ... }`",
        code: `/* On screens 600px or wider */\n@media screen and (min-width: 600px) {\n  body {\n    background-color: lightblue;\n  }\n}`,
      },
      {
        title: "@container Query",
        description:
          "<b>Description:</b> Allows an element to change its styles based on the size of its parent container.<br><b>Syntax:</b> `container-type: &lt;type&gt;;` on parent, `@container (min-width: &lt;value&gt;) { ... }` on child.",
        code: `/* Parent */\n.card-container {\n  container-type: inline-size;\n}\n\n/* Child */\n@container (min-width: 400px) {\n  .card { flex-direction: row; }\n}`,
      },
      {
        title: "CSS Nesting",
        description:
          "<b>Description:</b> Allows writing CSS rules inside other rules, reducing repetition.<br><b>Syntax:</b> Use `&` to refer to the parent selector. No special characters are needed for child selectors.",
        code: `nav {\n  ul {\n    list-style-type: none;\n  }\n\n  a {\n    color: blue;\n\n    &:hover {\n      color: red;\n    }\n  }\n}`,
      },
    ],
  },
  {
    id: "interactivity",
    category: "Interactivity & User Interface",
    items: [
      {
        title: "accent-color",
        description:
          "<b>Description:</b> Sets the accent color for UI controls like checkboxes and radio buttons.<br><b>Syntax:</b> `accent-color: &lt;color&gt; | auto;`",
        code: `input[type="checkbox"] {\n  accent-color: hotpink;\n}`,
      },
      {
        title: "scroll-behavior",
        description:
          "<b>Description:</b> Sets the behavior for a scrolling box when scrolling is triggered by navigation.<br><b>Syntax:</b> `scroll-behavior: &lt;auto|smooth&gt;;`",
        code: `html {\n  scroll-behavior: smooth;\n}`,
      },
      {
        title: "Scroll Snap",
        description:
          "<b>Description:</b> Enforces scroll positions to snap to specific points after the user finishes scrolling.<br><b>Parent:</b> `scroll-snap-type: &lt;axis&gt; &lt;strictness&gt;;`<br><b>Child:</b> `scroll-snap-align: &lt;start|center|end&gt;;`",
        code: `/* Parent */\n.container {\n  scroll-snap-type: y mandatory;\n}\n\n/* Child */\n.section {\n  scroll-snap-align: start;\n}`,
      },
      {
        title: "outline",
        description:
          "<b>Description:</b> A line drawn outside the element's border, often used for accessibility focus indicators.<br><b>Syntax:</b> `outline: &lt;width&gt; &lt;style&gt; &lt;color&gt;;`",
        code: `button:focus-visible {\n  outline: 2px solid blue;\n  outline-offset: 2px;\n}`,
      },
    ],
  },
  {
    id: "specificity-accessibility",
    category: "Specificity & Accessibility",
    items: [
      {
        title: "CSS Specificity",
        description:
          "<b>Description:</b> An algorithm browsers use to determine which CSS rule is the most 'specific' and therefore should be applied.<br><b>Hierarchy (Highest to Lowest):</b><br>1. Inline Styles (`style=\"...\"`)<br>2. IDs (`#my-id`)<br>3. Classes, Attributes, Pseudo-classes (`.my-class`, `[type]`, `:hover`)<br>4. Elements, Pseudo-elements (`div`, `::before`)",
      },
      {
        title: "Accessibility Features",
        description:
          "<b>Description:</b> Writing CSS with accessibility in mind.<br>• <b>:focus-visible:</b> A pseudo-class that applies styles only when an element is focused via keyboard, improving the experience for keyboard users.<br>• <b>prefers-reduced-motion:</b> A media query to disable or reduce animations for users who are sensitive to motion.<br>• <b>High Contrast:</b> Ensure text has sufficient color contrast against its background (WCAG guidelines).",
        code: `@media (prefers-reduced-motion: reduce) {\n  * {\n    animation: none !important;\n    transition: none !important;\n  }\n}`,
      },
    ],
  },
  {
    id: "advanced",
    category: "Advanced & Miscellaneous",
    items: [
      {
        title: "HTML Entities",
        description:
          "<b>Description:</b> Used to display reserved characters in HTML or characters not on your keyboard.<br>• <b>&amp;lt;</b> renders as &lt;<br>• <b>&amp;gt;</b> renders as &gt;<br>• <b>&amp;amp;</b> renders as &amp;<br>• <b>&amp;quot;</b> renders as &quot;<br>• <b>&amp;copy;</b> renders as ©",
        code: `<p>The &lt;p&gt; tag defines a paragraph. &copy; 2024</p>`,
      },
      {
        title: "Emmet Shortcuts",
        description:
          "<b>Description:</b> A plugin for many popular text editors which allows for high-speed coding.<br>• <b>pos:a</b> &rarr; `position: absolute;`<br>• <b>d:f</b> &rarr; `display: flex;`<br>• <b>jc:c</b> &rarr; `justify-content: center;`<br>• <b>m:10</b> &rarr; `margin: 10px;`",
        code: `/* Type 'p10-20' then press Tab */\npadding: 10px 20px;`,
      },
    ],
  },
  {
    id: "important-qna",
    category: "Important Q&A",
    items: [
      {
        title: "How to clip text to a video or image background?",
        description:
          "<b>Answer:</b> You can achieve this by setting a `background-image` or embedding a `<video>`, then using `background-clip: text` and making the text color `transparent`.",
        code: `/* For Image Background */\n.fancy-text-img {\n  background-image: url('path/to/image.jpg');\n  background-size: cover;\n  color: transparent;\n  -webkit-background-clip: text;\n  background-clip: text;\n}\n\n/* For Video Background */\n/* HTML needs a video inside the text container */\n.fancy-text-vid {\n  position: relative;\n  color: black; /* Fallback color */\n  mix-blend-mode: screen; /* Or other blend modes */\n}`,
      },
      {
        title: "What is `prefers-color-scheme`?",
        description:
          "<b>Answer:</b> It's a media feature used to detect if the user has requested a light or dark color theme on their operating system.<br><b>Why use it:</b> To automatically adapt your site's theme to the user's system preference, creating a more seamless user experience.<br><b>Syntax:</b> `@media (prefers-color-scheme: &lt;value&gt;) { ... }`<br><b>Values:</b> `light`, `dark`, `no-preference`.",
        code: `@media (prefers-color-scheme: dark) {\n  body {\n    background-color: #121212;\n    color: white;\n  }\n}`,
      },
      {
        title: "How to create a reflection effect?",
        description:
          "<b>Answer:</b> You can create a reflection by duplicating the element (often using a `::after` pseudo-element), flipping it vertically with `transform: scaleY(-1)`, and applying a gradient mask to fade it out.<br><b>Syntax (without `-webkit-box-reflect`):</b> Use a pseudo-element and a CSS mask.<br><b>Syntax (with `-webkit-box-reflect`):</b> A simpler, but less supported, property.",
        code: `/* With -webkit-box-reflect (simpler) */\n.reflected-element {\n  -webkit-box-reflect: below 0px linear-gradient(to bottom, transparent, white);\n}\n\n/* Without (better support) */\n.element-to-reflect {\n  position: relative;\n}\n.element-to-reflect::after {\n  content: '';\n  /* ... positioning and duplication styles ... */\n  transform: scaleY(-1);\n  mask-image: linear-gradient(transparent, white);\n}`,
      },
      {
        title: "What are the default axes for transforms?",
        description:
          "<b>Answer:</b> When you use the shorthand transform functions, they apply to specific axes by default.<br>• <b>`translate: &lt;value&gt;;`</b>: If one value is given, it applies to the X-axis (`translateX`).<br>• <b>`scale: &lt;value&gt;;`</b>: Applies uniformly to both X and Y axes.<br>• <b>`rotate: &lt;value&gt;;`</b>: Rotates the element around the Z-axis (coming out of the screen), creating a 2D rotation.",
        code: `/* This moves the element 50px to the right */\ndiv {\n  transform: translate(50px);\n}\n\n/* This rotates the element 45 degrees clockwise */\ndiv {\n  transform: rotate(45deg);\n}`,
      },
    ],
  },
  {
    id: "best-practices",
    category: "Professional Best Practices",
    items: [
      {
        title: "Use a CSS Reset",
        description:
          "Start with a CSS reset (like `normalize.css` or a modern alternative) to make browser styling consistent.",
      },
      {
        title: "Organize Your CSS",
        description:
          "Group related styles together. A common approach is to structure your stylesheet from general (body, links) to specific (components, utilities).",
      },
      {
        title: "Prefer Classes over IDs",
        description:
          "Use classes for styling. Reserve IDs for JavaScript hooks or fragment identifiers. Classes are reusable; IDs are not.",
      },
      {
        title: "Use Relative Units",
        description:
          "Use relative units like `rem` for `font-size` and `em` for padding/margin where appropriate to create more scalable and accessible layouts.",
      },
      {
        title: "Avoid Over-qualifying Selectors",
        description:
          "Keep selectors short and efficient. Instead of `ul.nav li.item`, just use `.nav-item`. This makes CSS less brittle and easier to override.",
      },
      {
        title: "Comment Your Code",
        description:
          "Leave comments for complex sections, z-index values, or non-obvious code to help your future self and other developers.",
      },
    ],
  },
];

// The main component that you will export
export default function CSS() {
  return (
    <div className="min-h-screen bg-gray-100 pt-24 font-sans text-gray-800 dark:bg-gray-900 dark:text-gray-300">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        <header className="mb-10 text-center">
          <h1 className="mb-2 text-4xl font-extrabold text-gray-900 sm:text-5xl dark:text-neutral-100">
            The Definitive CSS Cheat Sheet
          </h1>
          <p className="mt-2 text-lg text-cyan-400">
            Your complete and professional guide to CSS.
          </p>
        </header>
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Table of Contents */}
          <aside className="mb-8 lg:col-span-3 lg:mb-0">
            <div className="sidebar sticky top-25 rounded-lg bg-white p-4 shadow-lg dark:bg-gray-800">
              <h2 className="mb-4 border-b border-gray-300 pb-2 text-xl font-bold dark:border-gray-600">
                Table of Contents
              </h2>
              <nav>
                <ul className="space-y-2 text-sm">
                  {cssData.map((category) => (
                    <li key={category.id}>
                      <a
                        href={`#${category.id}`}
                        onClick={(e) => handleLinkClick(e, category.id)}
                        className="transition-colors hover:text-cyan-400"
                      >
                        {category.category}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="space-y-8 lg:col-span-9">
            {cssData.map((categoryData) => (
              <div
                key={categoryData.id}
                id={categoryData.id}
                className="scroll-mt-20"
              >
                <h2 className="mb-8 border-b-2 border-cyan-500 pb-2 text-3xl font-bold text-gray-900 dark:text-white">
                  {categoryData.category}
                </h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {categoryData.items.map((item, itemIndex) => (
                    <CheatSheetCard
                      key={itemIndex}
                      title={item.title}
                      description={item.description || ""}
                      code={item.code}
                    />
                  ))}
                </div>
              </div>
            ))}
          </main>
        </div>
      </div>
    </div>
  );
}
