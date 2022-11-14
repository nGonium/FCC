import { useState } from 'react'

function App() {
  const [editorContent, setEditorContent] = useState([
    "# Markdown preview", 
    "## Subheadings use multiple #'s",
    "### Heading 3",
    "#### Heading 4",
    "##### Heading 5",
    "###### Heading 6",
    "\n## Fomatting text",
    "using * or _",
    "*emphasized*, **strong**, ***both?***",
    "_emphasized_, __strong__, ___both?___",
    "Create a link [read more](www.markdown.com)",
    "> Blockquote",
    "\n## Code",
    "Inline code `foo()` and `bar` ",
    "```js",
    "const a",
    "```",
    "\n## Structured data",
    "List",
    "- item 1",
    "\n## Image",
    "![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)",
    
  ].join('  \n'))
  console.log(editorContent)
  return (
    <div className="App container">
      <textarea 
        id="editor" 
        className="container form-control" 
        style={{height: "200px"}}
        value={editorContent} 
        onChange={(v) => setEditorContent(v.target.value)}></textarea>
      <div 
        id="preview"
        dangerouslySetInnerHTML={{__html: window.marked.parse(editorContent)}}></div>
    </div>
  );
}

export default App;
