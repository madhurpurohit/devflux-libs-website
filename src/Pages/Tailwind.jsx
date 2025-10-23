import { GuideCard } from "../utils/GuideCard";
import { handleLinkClick } from "../utils/handleLinkClick";

// MAIN DATA SOURCE FOR THE TAILWIND CHEAT SHEET
const tailwindData = [
  {
    id: "installation-setup",
    category: "Installation & Setup",
    items: [
      {
        title: "Step 1: Install Tailwind CSS",
        description:
          "Install Tailwind CSS and its Vite plugin as dev dependencies.",
        code: `npm install -D tailwindcss @tailwindcss/vite\nbun add --dev tailwindcss @tailwindcss/vite`,
        link: {
          href: "https://tailwindcss.com/docs/installation/using-vite",
          text: "Go to Official Website",
        },
      },
      {
        title: "Step 2: Configure Vite (vite.config.js)",
        description:
          "Import the plugin at the top of your `vite.config.js` or `vite.config.ts` file.",
        code: `import tailwindcss from '@tailwindcss/vite'`,
      },
      {
        title: "Step 3: Add Plugin to Vite (vite.config.js)",
        description:
          "Add the `tailwindcss()` plugin to your plugins array in `vite.config.js`.",
        code: `// vite.config.js\nexport default {\n  plugins: [\n    tailwindcss(),\n    // ...other plugins\n  ],\n}`,
      },
      {
        title: "Step 4: Add Tailwind Directives (index.css)",
        description:
          "In your main CSS file (e.g., `src/index.css`), add the Tailwind directives.",
        code: `@import "tailwindcss";`,
      },
      {
        title: "Tailwind CSS Prettier Plugin",
        description:
          "<b>What is it?</b> An official Prettier plugin to automatically sort your utility classes in a consistent order.<br><b>Why use it?</b> It makes code cleaner, more predictable, and easier to read.",
        code: `npm install -D prettier prettier-plugin-tailwindcss\nbun add --dev prettier prettier-plugin-tailwindcss`,
        link: {
          href: "https://tailwindcss.com/blog/automatic-class-sorting-with-prettier",
          text: "Go to Official Website",
        },
      },
      {
        title: "Prettier Plugin Config (.prettierrc.json)",
        description:
          "Create a `.prettierrc.json` file in your project root and add the plugin.",
        code: `{\n  "plugins": ["prettier-plugin-tailwindcss"]\n}`,
      },
    ],
  },
  {
    id: "dark-mode",
    category: "Dark Mode",
    items: [
      {
        title: "Dark Mode",
        description:
          '<p class="mb-4">Use the <code>dark:</code> prefix for dark mode support. This is activated when the <code>&lt;html&gt;</code> tag has the <code>class="dark"</code> applied.</p><div class="rounded-md border border-dashed border-gray-300 p-4 dark:border-gray-600"><p class="text-black dark:text-white">This text is white in dark mode and black in light mode.</p></div>',
        code: `<p className="text-black dark:text-white">...</p>`,
      },
    ],
  },
  {
    id: "layout",
    category: "Layout",
    items: [
      {
        title: "Display",
        description:
          "<code>block</code>, <code>inline-block</code>, <code>inline</code>, <code>flex</code>, <code>grid</code>, <code>hidden</code>",
      },
      {
        title: "Position",
        description:
          "<code>static</code>, <code>relative</code>, <code>absolute</code>, <code>fixed</code>, <code>sticky</code>",
      },
      {
        title: "Top / Right / Bottom / Left",
        description:
          "<code>top-0</code>, <code>inset-0</code>, <code>inset-x-0</code>. Custom: <code>top-[15px]</code>",
      },
      {
        title: "Visibility",
        description:
          "<code>visible</code>, <code>invisible</code> (reserves space)",
      },
      {
        title: "Z-Index",
        description:
          "<code>z-0</code>, <code>z-10</code>. Custom: <code>z-[999]</code>",
      },
      {
        title: "Overflow",
        description:
          "<code>overflow-auto</code>, <code>overflow-hidden</code>, <code>overflow-x-scroll</code>",
      },
      {
        title: "Object Fit",
        description:
          "<code>object-contain</code>, <code>object-cover</code>, <code>object-fill</code>",
      },
      {
        title: "Object Position",
        description:
          "<code>object-center</code>, <code>object-top</code>, <code>object-bottom-right</code>",
      },
      {
        title: "Float",
        description:
          "<code>float-right</code>, <code>float-left</code>, <code>float-none</code>",
      },
      {
        title: "Clear",
        description:
          "<code>clear-left</code>, <code>clear-right</code>, <code>clear-both</code>",
      },
      {
        title: "Overscroll Behavior",
        description:
          "<code>overscroll-auto</code>, <code>overscroll-contain</code>, <code>overscroll-none</code>",
      },
    ],
  },
  {
    id: "container",
    category: "Container",
    items: [
      {
        title: "Container",
        description:
          '<p class="mb-4">The <code>container</code> class is used to center your content horizontally. By default, it doesn\'t set a width or height but applies a <code>max-width</code> that matches the minimum width of the current breakpoint.</p><div class="space-y-4"><div><h3 class="mb-2 font-semibold">Default Behavior</h3><p>The container\'s <code>max-width</code> changes at each breakpoint, providing a consistent, centered layout. It does not have horizontal padding by default.</p></div><div><h3 class="mb-2 font-semibold">Centering</h3><p>To center a container, you must use the <code>mx-auto</code> utility.</p></div><div><h3 class="mb-2 font-semibold">Customizing Padding</h3><p>You can set default horizontal padding for the container in your <code>tailwind.config.js</code> file. This padding is applied inside the container.</p></div></div>',
        code: `// tailwind.config.js\nmodule.exports = {\n  theme: {\n    container: {\n      padding: '2rem',\n      center: true, // This also applies mx-auto\n    },\n  },\n}`,
      },
    ],
  },
  {
    id: "flexbox",
    category: "Flexbox & Grid",
    items: [
      {
        title: "Flex Direction",
        description:
          "<code>flex-row</code>, <code>flex-col</code>, <code>flex-row-reverse</code>, <code>flex-col-reverse</code>",
      },
      {
        title: "Flex Wrap",
        description:
          "<code>flex-wrap</code>, <code>flex-nowrap</code>, <code>flex-wrap-reverse</code>",
      },
      {
        title: "Justify Content",
        description:
          "<code>justify-start</code>, <code>justify-center</code>, <code>justify-between</code>, <code>justify-around</code>, <code>justify-evenly</code>",
      },
      {
        title: "Align Items",
        description:
          "<code>items-start</code>, <code>items-center</code>, <code>items-end</code>, <code>items-baseline</code>, <code>items-stretch</code>",
      },
      {
        title: "Align Content",
        description:
          "<code>content-start</code>, <code>content-center</code>, <code>content-between</code>, <code>content-around</code> (for multi-line)",
      },
      {
        title: "Align Self",
        description:
          "<code>self-auto</code>, <code>self-start</code>, <code>self-center</code>, <code>self-end</code>, <code>self-stretch</code>",
      },
      {
        title: "Flex Grow",
        description: "<code>grow</code> (allow), <code>grow-0</code> (prevent)",
      },
      {
        title: "Flex Shrink",
        description:
          "<code>shrink</code> (allow), <code>shrink-0</code> (prevent)",
      },
      {
        title: "Order",
        description:
          "<code>order-1</code>, <code>order-last</code>. Custom: <code>order-[5]</code>",
      },
      {
        title: "Grid Template Columns/Rows",
        description:
          "<code>grid-cols-3</code>, <code>grid-rows-2</code>. Custom: <code>grid-cols-[200px_1fr]</code>",
      },
      {
        title: "Grid Column/Row Span",
        description:
          "<code>col-span-2</code>, <code>row-span-2</code>, <code>col-start-3</code>, <code>row-end-5</code>",
      },
      {
        title: "Gap",
        description:
          "<code>gap-4</code>, <code>gap-x-8</code>, <code>gap-y-4</code>. Custom: <code>gap-[1rem]</code>",
      },
      {
        title: "Justify Items",
        description:
          "<code>justify-items-start</code>, <code>justify-items-center</code>, <code>justify-items-end</code>, <code>justify-items-stretch</code>",
      },
      {
        title: "Grid Align Items",
        description:
          "<code>items-start</code>, <code>items-center</code>, <code>items-end</code>, <code>items-stretch</code>",
      },
      {
        title: "Place Items",
        description:
          "<code>place-items-center</code> (shorthand for justify and align)",
      },
      {
        title: "Grid Auto Flow",
        description:
          "<code>grid-flow-row</code>, <code>grid-flow-col</code>, <code>grid-flow-dense</code>",
      },
      {
        title: "Grid Auto Columns/Rows",
        description: "<code>auto-cols-fr</code>, <code>auto-rows-min</code>",
      },
    ],
  },
  {
    id: "spacing",
    category: "Spacing",
    items: [
      {
        title: "Padding",
        description:
          "<code>p-4</code>, <code>px-6</code>, <code>py-2</code>, <code>pt-2</code>, <code>pr-4</code>. Custom: <code>p-[10px]</code>",
      },
      {
        title: "Margin",
        description:
          "<code>m-4</code>, <code>mx-auto</code>, <code>-mt-3</code>, <code>mb-2</code>. Custom: <code>m-[5%]</code>",
      },
      {
        title: "Space Between",
        description:
          '<p class="mb-2">To add space between child items in a layout like Flexbox or Grid. This applies margin to all items except the first one.</p><ul class="list-inside list-disc space-y-1"><li><code>space-x-&#123;amount&#125;</code>: Adds horizontal space.</li><li><code>space-y-&#123;amount&#125;</code>: Adds vertical space.</li></ul><p class="mt-2 text-sm">Example: <code>&lt;div class="flex space-x-4"&gt;...&lt;/div&gt;</code></p>',
      },
    ],
  },
  {
    id: "sizing",
    category: "Sizing",
    items: [
      {
        title: "Width",
        description:
          "<code>w-full</code>, <code>w-1/2</code>, <code>w-fit</code>, <code>w-screen</code>. Custom: <code>w-[300px]</code>",
      },
      {
        title: "Height",
        description:
          "<code>h-full</code>, <code>h-screen</code>, <code>h-fit</code>. Custom: <code>h-[50vh]</code>",
      },
      {
        title: "Min/Max Width",
        description:
          "<code>min-w-0</code>, <code>max-w-md</code>, <code>max-w-full</code>",
      },
      {
        title: "Min/Max Height",
        description:
          "<code>min-h-0</code>, <code>max-h-screen</code>, <code>min-h-full</code>",
      },
      {
        title: "Aspect Ratio",
        description:
          "<code>aspect-video</code> (16/9), <code>aspect-square</code> (1/1)",
      },
    ],
  },
  {
    id: "typography",
    category: "Typography",
    items: [
      {
        title: "Font Size",
        description:
          "<code>text-lg</code>, <code>text-xl</code>. Custom: <code>text-[22px]</code>",
      },
      {
        title: "Font Weight",
        description:
          "<code>font-normal</code>, <code>font-bold</code>, <code>font-extrabold</code>",
      },
      {
        title: "Font Style",
        description: "<code>italic</code>, <code>not-italic</code>",
      },
      {
        title: "Text Color",
        description:
          "<code>text-red-500</code>, <code>dark:text-white</code>, <code>text-opacity-50</code>",
      },
      {
        title: "Text Align",
        description:
          "<code>text-left</code>, <code>text-center</code>, <code>text-right</code>, <code>text-justify</code>",
      },
      {
        title: "Text Decoration",
        description:
          "<code>underline</code>, <code>line-through</code>, <code>no-underline</code>",
      },
      {
        title: "Text Transform",
        description:
          "<code>uppercase</code>, <code>lowercase</code>, <code>capitalize</code>, <code>normal-case</code>",
      },
      {
        title: "Text Overflow",
        description:
          "<code>truncate</code>, <code>text-ellipsis</code>, <code>text-clip</code>",
      },
      {
        title: "Whitespace",
        description:
          "<code>whitespace-normal</code>, <code>whitespace-nowrap</code>, <code>whitespace-pre</code>",
      },
      {
        title: "Line Height (Leading)",
        description:
          "<code>leading-tight</code>, <code>leading-normal</code>, <code>leading-loose</code>",
      },
      {
        title: "Letter Spacing (Tracking)",
        description:
          "<code>tracking-tighter</code>, <code>tracking-normal</code>, <code>tracking-widest</code>",
      },
    ],
  },
  {
    id: "backgrounds",
    category: "Backgrounds",
    items: [
      {
        title: "Background Color",
        description: "<code>bg-blue-500</code>, <code>bg-opacity-50</code>",
      },
      {
        title: "Background Image",
        description:
          "<code>bg-[url('/img.png')]</code>, <code>bg-gradient-to-r</code>, <code>from-purple-500</code>, <code>to-pink-500</code>",
      },
      {
        title: "Background Size",
        description:
          "<code>bg-auto</code>, <code>bg-cover</code>, <code>bg-contain</code>",
      },
      {
        title: "Background Repeat",
        description:
          "<code>bg-repeat</code>, <code>bg-no-repeat</code>, <code>bg-repeat-x</code>",
      },
      {
        title: "Background Position",
        description:
          "<code>bg-center</code>, <code>bg-top</code>, <code>bg-bottom-right</code>",
      },
      {
        title: "Background Attachment",
        description:
          "<code>bg-fixed</code>, <code>bg-local</code>, <code>bg-scroll</code>",
      },
      {
        title: "Background Clip",
        description: "<code>bg-clip-border</code>, <code>bg-clip-text</code>",
      },
    ],
  },
  {
    id: "borders",
    category: "Borders",
    items: [
      {
        title: "Border Radius",
        description:
          "<code>rounded-lg</code>, <code>rounded-full</code>. Custom: <code>rounded-[10px]</code>",
      },
      {
        title: "Border Width",
        description:
          "<code>border</code>, <code>border-4</code>, <code>border-x-2</code>. Custom: <code>border-[3px]</code>",
      },
      {
        title: "Border Color",
        description:
          "<code>border-green-500</code>, <code>dark:border-gray-500</code>",
      },
      {
        title: "Border Style",
        description:
          "<code>border-solid</code>, <code>border-dashed</code>, <code>border-dotted</code>",
      },
      {
        title: "Divide Width & Color",
        description:
          "<code>divide-x-2</code>, <code>divide-y-4</code>, <code>divide-gray-500</code>",
      },
      {
        title: "Outline",
        description:
          "<code>outline-2</code>, <code>outline-dashed</code>, <code>outline-offset-2</code>",
      },
      {
        title: "Ring",
        description:
          "<code>ring-2</code>, <code>ring-blue-500</code>, <code>ring-offset-2</code>",
      },
    ],
  },
  {
    id: "shadows",
    category: "Shadows",
    items: [
      {
        title: "Box Shadow",
        description:
          '<p class="mb-2 text-sm">Adds a shadow around an element\'s entire box. Includes `shadow-inner`.</p><p><b>Syntax:</b> <code>shadow-sm</code>, <code>shadow</code>, <code>shadow-md</code>, <code>shadow-lg</code>, <code>shadow-xl</code>, <code>shadow-2xl</code></p><p><b>Customize:</b> Use arbitrary values like <code>shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]</code> or configure in <code>tailwind.config.js</code>.</p><div class="mt-2 rounded-lg bg-cyan-200 p-4 shadow-lg dark:bg-cyan-800">This element has a large box shadow.</div>',
      },
      {
        title: "Shadow Color",
        description:
          '<p class="mb-2 text-sm">Sets the color of a box shadow.</p><p><b>Syntax:</b> <code>shadow-cyan-500/50</code></p><div class="mt-2 rounded-lg bg-white p-4 shadow-lg shadow-pink-500/50 dark:bg-gray-700">This element has a pink shadow.</div>',
      },
      {
        title: "Drop Shadow",
        description:
          '<p class="mb-2 text-sm">Adds a shadow to the rendered content of an element, respecting transparency. Uses the CSS `filter` property.</p><p><b>Syntax:</b> <code>drop-shadow-md</code>, <code>drop-shadow-lg</code>, <code>drop-shadow-2xl</code></p><p><b>Customize:</b> Not customizable with arbitrary values directly. Configure in <code>tailwind.config.js</code> under `theme.dropShadow`.</p><svg class="mt-2 drop-shadow-lg" width="100" height="100" viewBox="0 0 24 24"><path fill="#38bdf8" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>',
      },
      {
        title: "Text Shadow",
        description:
          '<p class="mb-2 text-sm">Adds a shadow directly to text. This is not a default Tailwind utility and requires a plugin or custom utility.</p><p><b>Customize:</b> You can add this with an arbitrary value.</p><p><b>Example:</b> <code>&lt;p className="[text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-black"&gt;...&lt;/p&gt;</code></p><p class="mt-2 text-2xl font-bold shadow-cyan-500/50 [text-shadow:2px_2px_4px_var(--tw-shadow-color)]">Text with a shadow.</p>',
      },
    ],
  },
  {
    id: "effects",
    category: "Effects",
    items: [
      {
        title: "Opacity",
        description: "<code>opacity-50</code>, <code>opacity-100</code>",
      },
      {
        title: "Mix Blend Mode",
        description:
          "<code>mix-blend-multiply</code>, <code>mix-blend-screen</code>",
      },
      {
        title: "Background Blend Mode",
        description:
          "<code>bg-blend-multiply</code>, <code>bg-blend-screen</code>",
      },
    ],
  },
  {
    id: "filters",
    category: "Filters",
    items: [
      {
        title: "Filter",
        description:
          "<code>blur-sm</code>, <code>brightness-125</code>, <code>contrast-150</code>, <code>grayscale</code>, <code>saturate-150</code>",
      },
      {
        title: "Backdrop Filter",
        description:
          "<code>backdrop-blur-sm</code>, <code>backdrop-brightness-50</code>, <code>backdrop-saturate-150</code>",
      },
    ],
  },
  {
    id: "tables",
    category: "Tables",
    items: [
      {
        title: "Border Collapse",
        description:
          "<code>border-collapse</code>, DE <code>border-separate</code>",
      },
      {
        title: "Table Layout",
        description: "<code>table-auto</code>, <code>table-fixed</code>",
      },
    ],
  },
  {
    id: "transitions-animation",
    category: "Transitions & Animation",
    items: [
      {
        title: "Transition Property",
        description:
          "<code>transition</code>, <code>transition-colors</code>, <code>transition-transform</code>",
      },
      {
        title: "Transition Duration",
        description: "<code>duration-75</code>, <code>duration-500</code>",
      },
      {
        title: "Transition Timing Function",
        description: "<code>ease-linear</code>, <code>ease-in-out</code>",
      },
      {
        title: "Transition Delay",
        description: "<code>delay-75</code>, <code>delay-500</code>",
      },
      {
        title: "Animation",
        description:
          "<code>animate-spin</code>, <code>animate-ping</code>, <code>animate-pulse</code>, <code>animate-bounce</code>",
      },
      {
        title: "Custom Animation",
        description: "Define in <code>tailwind.config.js</code>.",
      },
    ],
  },
  {
    id: "transforms",
    category: "Transforms",
    items: [
      {
        title: "Scale",
        description:
          "<code>scale-50</code>, <code>scale-x-75</code>, <code>hover:scale-110</code>",
      },
      {
        title: "Rotate",
        description: "<code>rotate-45</code>, <code>hover:-rotate-90</code>",
      },
      {
        title: "Translate",
        description:
          "<code>translate-x-4</code>, <code>-translate-y-1/2</code>",
      },
      {
        title: "Skew",
        description: "<code>skew-x-3</code>, <code>skew-y-6</code>",
      },
      {
        title: "Reflection (Mirror Effect)",
        description:
          '<p>For a reflection effect, the element is duplicated and a vertical scale transform is applied to it (<code>-scale-y-100</code>).</p><div class="mt-2 flex items-center justify-center space-x-8"><div class="text-center"><p class="font-bold text-cyan-500">Original</p><svg class="h-16 w-16 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></div><div class="text-center"><p class="font-bold text-cyan-500">Reflected</p><div class="relative"><svg class="h-16 w-16 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg><svg class="absolute top-full left-0 h-16 w-16 -scale-y-100 text-cyan-500 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></div></div></div>',
      },
    ],
  },
  {
    id: "interactivity",
    category: "Interactivity",
    items: [
      {
        title: "Appearance",
        description:
          "<code>appearance-none</code> (removes browser-specific styling)",
      },
      {
        title: "Cursor",
        description:
          "<code>cursor-pointer</code>, <code>cursor-wait</code>, <code>cursor-not-allowed</code>",
      },
      {
        title: "Pointer Events",
        description:
          "<code>pointer-events-none</code>, <code>pointer-events-auto</code>",
      },
      {
        title: "User Select",
        description:
          "<code>select-none</code>, <code>select-text</code>, <code>select-all</code>",
      },
      {
        title: "Scroll Behavior",
        description: "<code>scroll-auto</code>, <code>scroll-smooth</code>",
      },
      {
        title: "Accent Color",
        description: "<code>accent-pink-500</code>, <code>accent-auto</code>",
      },
    ],
  },
  {
    id: "svg",
    category: "SVG",
    items: [
      {
        title: "Fill",
        description: "<code>fill-current</code>, <code>fill-blue-500</code>",
      },
      {
        title: "Stroke",
        description: "<code>stroke-current</code>, <code>stroke-red-500</code>",
      },
      {
        title: "Stroke Width",
        description:
          "<code>stroke-0</code>, To <code>stroke-1</code>, <code>stroke-2</code>",
      },
    ],
  },
  {
    id: "accessibility",
    category: "Accessibility",
    items: [
      {
        title: "Screen Readers",
        description:
          "<code>sr-only</code> (visually hides the element but keeps it available for screen readers), <code>not-sr-only</code>",
      },
    ],
  },
  {
    id: "responsive-design",
    category: "Responsive Design",
    items: [
      {
        title: "Breakpoints",
        description:
          '<code>sm:</code> (640px), <code>md:</code> (768px), <code>lg:</code> (1024px), <code>xl:</code> (1280px), <code>2xl:</code> (1536px)<p class="mt-2 text-sm">Example: <code>className="w-full lg:w-1/2"</code></p>',
      },
    ],
  },
  {
    id: "colors",
    category: "Colors",
    items: [
      {
        title: "Default Color Palette",
        description:
          "<code>transparent</code>, <code>current</code>, <code>black</code>, <code>white</code>, <code>grays</code>, <code>reds</code>, <code>oranges</code>, <code>yellows</code>, <code>greens</code>, <code>teals</code>, <code>blues</code>, <code>indigos</code>, <code>purples</code>, <code>pinks</code>",
      },
    ],
  },
  {
    id: "variants",
    category: "Variants",
    items: [
      {
        title: "Element States",
        description:
          '<p class="mb-4 text-sm">With these variants, you can style an element based on user interaction (hover, focus, active, disabled).</p><div class="rounded-lg border p-6 dark:border-gray-700"><button class="focus:ring-opacity-75 rounded bg-cyan-500 px-4 py-2 font-semibold text-white transition-all duration-300 hover:bg-cyan-600 focus:ring-2 focus:ring-cyan-400 focus:outline-none active:scale-95 active:bg-cyan-700">Interact With Me</button><button class="ml-4 cursor-not-allowed rounded bg-gray-200 px-4 py-2 font-semibold text-gray-400 disabled:opacity-50 dark:bg-gray-600 dark:text-gray-500" disabled>Disabled</button></div>',
        code: `<button className="... hover:bg-cyan-600 focus:ring-2 active:bg-cyan-700">...</button>`,
      },
      {
        title: "Group States",
        description:
          '<p class="mb-4 text-sm">By adding the <code>group</code> class to a parent element, you can style child elements when the parent is in a certain state (e.g., `group-hover`).</p><div class="rounded-lg border p-6 dark:border-gray-700"><a href="#" class="group flex items-center rounded-lg bg-gray-100 p-4 transition hover:bg-cyan-500 dark:bg-gray-800 dark:hover:bg-cyan-500"><svg class="h-6 w-6 text-gray-500 transition group-hover:text-white dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg><p class="ml-3 font-semibold text-gray-700 transition group-hover:text-white dark:text-gray-200">Hover over the group</p></a></div>',
        code: `<a href="#" class="group ... hover:bg-cyan-500">\n  <svg class="... group-hover:text-white">...</svg>\n</a>`,
      },
      {
        title: "Focus Within",
        description:
          '<p class="mb-4 text-sm">This is used to style a parent element when a child element (like an input) is in focus.</p><div class="rounded-lg border p-6 dark:border-gray-700"><div class="flex items-center rounded-lg border-2 border-gray-200 p-2 transition focus-within:border-cyan-500 focus-within:ring-1 focus-within:ring-cyan-500 dark:border-gray-600"><input type="email" placeholder="Click me to focus" class="w-full bg-transparent focus:outline-none dark:text-white"/></div></div>',
        code: `<div class="... focus-within:border-cyan-500">\n  <input ... />\n</div>`,
      },
      {
        title: "Positional States",
        description:
          '<p class="mb-4 text-sm">For styling elements in a list or group based on their position (first, last, odd, even).</p><div class="rounded-lg border p-6 dark:border-gray-700"><ul class="space-y-2"><li class="rounded bg-gray-200 p-2 first:bg-cyan-200 dark:bg-gray-700 dark:first:bg-cyan-800">First Item (Styled with `first:`)</li><li class="rounded bg-gray-200 p-2 odd:bg-gray-300 dark:bg-gray-700 dark:odd:bg-gray-600">Second Item (Styled with `odd:`)</li><li class="rounded bg-gray-200 p-2 even:bg-gray-200 dark:bg-gray-700 dark:even:bg-gray-700">Third Item (Styled with `even:`)</li><li class="rounded bg-gray-200 p-2 last:bg-pink-200 dark:bg-gray-700 dark:last:bg-pink-800">Last Item (Styled with `last:`)</li></ul></div>',
        code: `<li class="... first:bg-cyan-200 odd:bg-gray-300 last:bg-pink-200">...</li>`,
      },
    ],
  },
];

// The main component that you will export
export default function Tailwind() {
  return (
    <div className="min-h-screen bg-gray-100 pt-24 font-sans text-gray-800 dark:bg-gray-900 dark:text-gray-300">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        <header className="mb-10 text-center">
          <h1 className="mb-2 text-4xl font-extrabold text-gray-900 sm:text-5xl dark:text-neutral-100">
            The Definitive Tailwind CSS Cheat Sheet
          </h1>
          <p className="mt-2 text-lg text-cyan-400">
            Your complete and professional guide to Tailwind CSS.
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
                  {tailwindData.map((category) => (
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
          <main className="space-y-12 lg:col-span-9">
            {tailwindData.map((categoryData) => (
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
                    <GuideCard
                      key={itemIndex}
                      title={item.title}
                      description={item.description}
                      code={item.code}
                      link={item.link} // Pass the link prop
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
