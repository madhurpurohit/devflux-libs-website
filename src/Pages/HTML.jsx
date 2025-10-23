import { CheatSheetCard } from "../utils/CheatSheetCard";
import { handleLinkClick } from "../utils/handleLinkClick";

// The main data source for the cheat sheet
const htmlData = [
  {
    id: "structure",
    category: "Document Structure",
    items: [
      {
        title: "<!DOCTYPE html>",
        description:
          "Declares the document type to be HTML5. It must be the very first line of your HTML file.",
        code: `<!DOCTYPE html>`,
      },
      {
        title: "<html>",
        description:
          "The root element of an HTML page. All other elements are descendants of this element.<br>• <b>lang</b>: Specifies the language of the document's content, which helps search engines and screen readers.",
        code: `<html lang="en">...</html>`,
      },
      {
        title: "<head>",
        description:
          "A container for metadata (data about the HTML document). Metadata is not displayed.<br>• <b>&lt;title&gt;</b>: Sets the title for the browser tab.<br>• <b>&lt;meta&gt;</b>: Provides character set, page description, keywords, etc.<br>• <b>&lt;link&gt;</b>: Links to external resources like CSS files.<br>• <b>&lt;script&gt;</b>: Embeds client-side scripts.",
        code: `<head>\n  <meta charset="UTF-8">\n  <title>Page Title</title>\n</head>`,
      },
      {
        title: "<body>",
        description:
          "Contains all the visible contents of an HTML document, such as headings, paragraphs, images, hyperlinks, tables, and lists.",
        code: `<body>...</body>`,
      },
      {
        title: "Favicon",
        description:
          "Sets the small icon that appears in the browser tab. It's linked within the `<head>` tag.",
        code: `<link rel="icon" type="image/png" href="/favicon.png">`,
      },
    ],
  },
  {
    id: "semantic",
    category: "Semantic & Structural Elements",
    items: [
      {
        title: "<header>",
        description:
          "Represents introductory content, typically a group of introductory or navigational aids. Can contain headings, logos, search forms, etc.",
      },
      { title: "<nav>", description: "Defines a set of navigation links." },
      {
        title: "<main>",
        description:
          "Specifies the main, dominant content of the document. There should only be one `<main>` element per page.",
      },
      {
        title: "<section>",
        description:
          "Defines a thematic grouping of content, typically with a heading.",
      },
      {
        title: "<article>",
        description:
          "Represents a self-contained composition in a document, such as a forum post, a magazine or newspaper article, or a blog entry.",
      },
      {
        title: "<aside>",
        description:
          "Defines content aside from the content it is placed in (like a sidebar).",
      },
      {
        title: "<footer>",
        description:
          "Defines a footer for a document or section, often containing authorship information, copyright data, or links to related documents.",
      },
      {
        title: "Bookmarks (Anchor Links)",
        description:
          "Create a link that jumps to a specific part of a page. The link's `href` must match the `id` of the target element.",
        code: `<!-- The Link -->\n<a href="#section2">Go to Section 2</a>\n\n<!-- The Target Element -->\n<h2 id="section2">Section 2</h2>`,
      },
    ],
  },
  {
    id: "text",
    category: "Text Formatting",
    items: [
      {
        title: "Headings <h1>-<h6>",
        description:
          "Define hierarchical headings. <b>&lt;h1&gt;</b> should be used for the main heading, followed by <b>&lt;h2&gt;</b>, and so on. Using them in order is important for SEO and accessibility.",
        code: `<h1>Main Heading</h1>\n<h2>Sub-heading</h2>`,
      },
      {
        title: "<p>",
        description: "Defines a paragraph of text.",
        code: `<p>This is a paragraph.</p>`,
      },
      {
        title: "Inline Formatting",
        description:
          "Used to format parts of a text.<br>• <b>&lt;b&gt;</b> / <b>&lt;strong&gt;</b>: Make text bold. `<strong>` implies strong importance.<br>• <b>&lt;i&gt;</b> / <b>&lt;em&gt;</b>: Make text italic. `<em>` implies emphasis.<br>• <b>&lt;u&gt;</b>: Underlines text (use with caution as it can be confused with links).<br>• <b>&lt;s&gt;</b> / <b>&lt;del&gt;</b>: Strikethrough text, indicating it's incorrect or deleted.<br>• <b>&lt;ins&gt;</b>: Represents inserted text.<br>• <b>&lt;mark&gt;</b>: Highlights text.",
        code: `<p>This is <strong>important</strong> and this is <mark>highlighted</mark>.</p>`,
      },
      {
        title: "<sup> & <sub>",
        description:
          "Used for superscript and subscript text.<br>• <b>&lt;sup&gt;</b>: Renders text half a character above the normal line.<br>• <b>&lt;sub&gt;</b>: Renders text half a character below the normal line.",
        code: `E = mc<sup>2</sup>\nH<sub>2</sub>O`,
      },
      {
        title: "<pre> & <code>",
        description:
          "Used for displaying code.<br>• <b>&lt;pre&gt;</b>: Defines preformatted text. It preserves both spaces and line breaks.<br>• <b>&lt;code&gt;</b>: Defines a piece of computer code. Often nested inside `<pre>` for code blocks.",
        code: `<pre><code>\nfunction hello() {\n  console.log("Hello, world!");\n}\n</code></pre>`,
      },
      {
        title: "<br> & <hr>",
        description:
          "<b>&lt;br&gt;</b>: Inserts a single line break. Use it for content where the division of lines is significant, like poems or addresses.<br><b>&lt;hr&gt;</b>: Represents a thematic break or a horizontal rule, used to separate content.",
        code: `Line one.<br>Line two.\n<hr>`,
      },
      {
        title: "<blockquote>",
        description:
          "Specifies a section that is quoted from another source. The `cite` attribute can be used to provide the source URL.",
        code: `<blockquote cite="source_url">\n  <p>Quoted text here.</p>\n</blockquote>`,
      },
    ],
  },
  {
    id: "forms",
    category: "Forms & Inputs",
    items: [
      {
        title: "<form>",
        description:
          "A container for user input controls.<br>• <b>action</b>: The URL where the form data is sent upon submission.<br>• <b>method</b>: The HTTP method to use ('get' or 'post'). 'POST' is more secure for sensitive data.",
        code: `<form action="/submit-data" method="post">...</form>`,
      },
      {
        title: "Text-based Inputs",
        description:
          "Used for single-line text input.<br>• <b>type='text'</b>: General text.<br>• <b>type='password'</b>: Masks input.<br>• <b>type='email'</b>: Validates for email format.<br>• <b>type='tel'</b>: For telephone numbers.<br>• <b>type='url'</b>: For URLs.<br>• <b>type='search'</b>: For search fields.",
        code: `<input type="email" placeholder="you@example.com" required maxlength="50">`,
      },
      {
        title: "Date & Time Inputs",
        description:
          "Provide special UI for selecting dates and times.<br>• <b>type='date'</b>: Select a day, month, and year.<br>• <b>type='time'</b>: Select a time.<br>• <b>type='datetime-local'</b>: Select date and time (no timezone).",
        code: `<label for="birthday">Birthday:</label>\n<input type="date" id="birthday" name="birthday">`,
      },
      {
        title: "Buttons & Actions",
        description:
          "Inputs that perform actions.<br>• <b>type='submit'</b>: A button that submits the form data.<br>• <b>type='reset'</b>: A button that resets all form controls to their initial values.<br>• <b>type='image'</b>: An image that functions as a submit button. Requires `src` and `alt` attributes.",
        code: `<input type="submit" value="Register">\n<input type="reset" value="Clear Form">`,
      },
      {
        title: "Other Input Types",
        description:
          "Specialized input controls.<br>• <b>type='file'</b>: Allows the user to select one or more files from their device.<br>• <b>type='color'</b>: Provides a color picker.<br>• <b>type='range'</b>: A slider for selecting a value in a range.",
        code: `<label for="profile_pic">Profile Picture:</label>\n<input type="file" id="profile_pic" accept="image/png, image/jpeg">`,
      },
      {
        title: "Radio & Checkbox",
        description:
          "For radio buttons, use the same <b>name</b> attribute to group them, allowing only one selection. Checkboxes allow multiple selections.<br>• <b>checked</b>: A boolean attribute to specify that an option should be pre-selected.",
        code: `<!-- Radio Group -->\n<input type="radio" id="html" name="fav_lang" value="HTML" checked>\n<label for="html">HTML</label><br>\n\n<!-- Checkbox -->\n<input type="checkbox" id="terms" name="terms" required>\n<label for="terms">I agree</label>`,
      },
    ],
  },
  {
    id: "media",
    category: "Media & Embedding",
    items: [
      {
        title: "<img>",
        description:
          "Embeds an image into the page.<br>• <b>src</b>: Specifies the path to the image file. This is mandatory.<br>• <b>alt</b>: Provides alternative text for screen readers or if the image fails to load. Crucial for accessibility.<br>• <b>width/height</b>: Sets the image's dimensions in pixels (unit is omitted).<br>• <b>loading</b>: Can be set to `lazy` to defer loading of off-screen images.",
        code: `<img src="image.png" alt="A descriptive text" width="100" height="100" loading="lazy">`,
      },
      {
        title: "<audio>",
        description:
          "Embeds sound content.<br>• <b>controls</b>: Displays standard audio controls like play, pause, and volume.<br>• <b>autoplay</b>: Starts playing automatically (often blocked by browsers).<br>• <b>loop</b>: Repeats the audio once it finishes.<br>• <b>muted</b>: Mutes the audio by default.",
        code: `<audio controls>\n  <source src="sound.mp3" type="audio/mpeg">\n</audio>`,
      },
      {
        title: "<video>",
        description:
          "Embeds video content.<br>• <b>controls</b>: Displays standard video controls.<br>• <b>poster</b>: An image to show before the video plays.<br>• <b>autoplay, loop, muted</b>: Behave like the audio attributes.<br>• <b>playsinline</b>: Allows video to play inline on iOS instead of automatically entering fullscreen.",
        code: `<video controls width="250" poster="poster.png">\n  <source src="movie.mp4" type="video/mp4">\n</video>`,
      },
      {
        title: "<iframe>",
        description:
          "Embeds another HTML document within the current page.<br>• <b>src</b>: The URL of the page to embed.<br>• <b>title</b>: A descriptive title for accessibility.<br>• <b>width/height</b>: Sets the frame's dimensions.<br>• <b>allow</b>: Specifies a feature policy for the iframe (e.g., `autoplay; fullscreen`).<br>• <b>allowfullscreen</b>: Boolean attribute to allow the iframe to go fullscreen.<br>• <b>loading</b>: Can be set to `lazy`.",
        code: `<iframe \n  src="https://www.youtube.com/embed/VIDEO_ID"\n  title="YouTube video player" \n  frameborder="0" \n  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" \n  allowfullscreen\n></iframe>`,
      },
    ],
  },
  {
    id: "tables",
    category: "Tables",
    items: [
      {
        title: "<table>",
        description:
          "The main container for a table used to display tabular data.",
        code: `<table>...</table>`,
      },
      {
        title: "<thead>, <tbody>, <tfoot>",
        description:
          "These elements group table content for semantic clarity.<br>• <b>&lt;thead&gt;</b>: Groups header content.<br>• <b>&lt;tbody&gt;</b>: Groups the main body content.<br>• <b>&lt;tfoot&gt;</b>: Groups footer content.",
        code: `<table>\n  <thead>...</thead>\n  <tbody>...</tbody>\n  <tfoot>...</tfoot>\n</table>`,
      },
      {
        title: "<tr>, <th>, <td>",
        description:
          "The core components of a table.<br>• <b>&lt;tr&gt;</b>: Defines a table row.<br>• <b>&lt;th&gt;</b>: Defines a header cell (bold and centered by default).<br>• <b>&lt;td&gt;</b>: Defines a standard data cell.",
        code: `<tr>\n  <th>Header 1</th>\n  <td>Data 1</td>\n</tr>`,
      },
      {
        title: "colspan & rowspan",
        description:
          "Attributes for `<th>` and `<td>` to make a single cell span over multiple columns or rows.<br>• <b>colspan</b>: Specifies how many columns a cell should span.<br>• <b>rowspan</b>: Specifies how many rows a cell should span.",
        code: `<tr>\n  <th colspan="2">Spans two columns</th>\n</tr>`,
      },
      {
        title: "<caption>",
        description:
          "Defines a table caption. It must be inserted immediately after the `<table>` tag.",
        code: `<table>\n  <caption>Monthly Savings</caption>\n  ...\n</table>`,
      },
    ],
  },
  {
    id: "accessibility",
    category: "Accessibility (A11y)",
    items: [
      {
        title: "Semantic HTML",
        description:
          "Using correct semantic elements like <b>&lt;nav&gt;</b>, <b>&lt;main&gt;</b>, <b>&lt;header&gt;</b>, and <b>&lt;footer&gt;</b> gives screen readers context about the page structure, which is vital for users with visual impairments.",
      },
      {
        title: "Alt Text for Images",
        description:
          'The <b>alt</b> attribute on <b>&lt;img&gt;</b> tags provides a textual description of the image. If an image is purely decorative, use an empty alt attribute: `alt=""`.',
      },
      {
        title: "ARIA Roles",
        description:
          'Accessible Rich Internet Applications (ARIA) roles can be added to elements to define their purpose when it\'s not natively clear. For example, `role="navigation"` or `role="button"`.',
        code: `<div role="button" tabindex="0">Click me</div>`,
      },
      {
        title: "tabindex",
        description:
          'The <b>tabindex</b> attribute controls the order in which elements are focused when a user navigates with the Tab key.<br>• <b>tabindex="0"</b>: Allows elements not normally focusable (like &lt;div&gt;) to receive focus.<br>• <b>tabindex="-1"</b>: Removes an element from the default tab order.',
      },
      {
        title: "Labeling Forms",
        description:
          "Always use the <b>&lt;label&gt;</b> element for form inputs. The `for` attribute of the label must match the `id` of the input, linking them together for screen reader users.",
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
          "Used to display reserved characters in HTML or characters not on your keyboard.<br>• <b>&amp;lt;</b> renders as &lt;<br>• <b>&amp;gt;</b> renders as &gt;<br>• <b>&amp;amp;</b> renders as &amp;<br>• <b>&amp;quot;</b> renders as &quot;<br>• <b>&amp;copy;</b> renders as ©",
        code: `<p>The &lt;p&gt; tag defines a paragraph. &copy; 2024</p>`,
      },
      {
        title: "Emmet Shortcuts",
        description:
          'A plugin for many popular text editors which allows for high-speed coding.<br>• <b>!</b> or <b>html:5</b> &rarr; HTML5 boilerplate<br>• <b>nav>ul>li*3>a</b> &rarr; Navigation list<br>• <b>div.container</b> &rarr; &lt;div class="container"&gt;<br>• <b>p#intro</b> &rarr; &lt;p id="intro"&gt;',
        code: `<!-- Type 'ul.nav>li.item*3>a' then press Tab -->`,
      },
    ],
  },
];

// The main component that you will export
export default function HTML() {
  return (
    <div className="min-h-screen bg-gray-100 pt-24 font-sans text-gray-800 dark:bg-gray-900 dark:text-gray-300">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        <header className="mb-10 text-center">
          <h1 className="mb-2 text-4xl font-extrabold text-gray-900 sm:text-5xl dark:text-neutral-100">
            The Definitive HTML Cheat Sheet
          </h1>
          <p className="mt-2 text-lg text-cyan-400">
            Your complete and professional guide to HTML5.
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
                  {htmlData.map((category) => (
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
            {htmlData.map((categoryData) => (
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
