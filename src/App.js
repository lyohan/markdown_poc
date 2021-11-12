import MarkdownEditor from '@uiw/react-markdown-editor';
import { useState } from 'react'

function App() {
  const [markdown, setMarkdown] = useState("");
  return (
    <>
    <MarkdownEditor
      height={1000}
      visible
      value="# This is a H1  \n## This is a H2  \n###### This is a H6"
      onChange={(editor, data, value) => setMarkdown(value)}
    />
    </>
  );
}

export default App;
