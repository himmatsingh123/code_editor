import React, { useState } from 'react';
import '../App.css'

const App = () => {
  const [htmlCode, setHtmlCode] = useState('<!DOCTYPE html>\n<html>\n  <head>\n    <title>My Page</title>\n  </head>\n  <body>\n    <h1>Hello, World!</h1>\n  </body>\n</html>');
  const [cssCode, setCssCode] = useState('body {\n  background-color: lightgray;\n}');
  const [jsCode, setJsCode] = useState('document.querySelector("h1").style.color = "blue";');

  const [isHtmlLocked, setIsHtmlLocked] = useState(false);
  const [isCssLocked, setIsCssLocked] = useState(false);
  const [isJsLocked, setIsJsLocked] = useState(false);

  const handleCopyCode = (codeType) => {
    let codeToCopy = '';
    switch (codeType) {
      case 'html':
        codeToCopy = htmlCode;
        break;
      case 'css':
        codeToCopy = cssCode;
        break;
      case 'js':
        codeToCopy = jsCode;
        break;
      default:
        break;
    }

    navigator.clipboard.writeText(codeToCopy).then(() => {
      alert(`Copied ${codeType} to clipboard`);
    });
  };

  const handleSaveCode = () => {
    // You can implement code saving functionality here.
  };

  return (
    <div className="editor">
      <div className="editor-panel">
        <div className="editor-header">
          <span>HTML</span>
          <button className= 'button' onClick={() => handleCopyCode('html')}>Copy</button>
          <button className= 'button'onClick={handleSaveCode}>Save</button>
          <button className= 'button' onClick={() => setIsHtmlLocked(!isHtmlLocked)}>{isHtmlLocked ? 'Unlock' : 'Lock'}</button>
        </div>
        <textarea
          value={htmlCode}
          onChange={(e) => !isHtmlLocked && setHtmlCode(e.target.value)}
          readOnly={isHtmlLocked}
        />
      </div>

      <div className="editor-panel">
        <div className="editor-header">
          <span>CSS</span>
          <button className= 'button' onClick={() => handleCopyCode('css')}>Copy</button>
          <button className= 'button' onClick={handleSaveCode}>Save</button>
          <button className= 'button'onClick={() => setIsCssLocked(!isCssLocked)}>{isCssLocked ? 'Unlock' : 'Lock'}</button>
        </div>
        <textarea
          value={cssCode}
          onChange={(e) => !isCssLocked && setCssCode(e.target.value)}
          readOnly={isCssLocked}
        />
      </div>

      <div className="editor-panel">
        <div className="editor-header">
          <span>JavaScript</span>
          <button className= 'button' onClick={() => handleCopyCode('js')}>Copy</button>
          <button className= 'button' onClick={handleSaveCode}>Save</button>
          <button className= 'button' onClick={() => setIsJsLocked(!isJsLocked)}>{isJsLocked ? 'Unlock' : 'Lock'}</button>
        </div>
        <textarea
          value={jsCode}
          onChange={(e) => !isJsLocked && setJsCode(e.target.value)}
          readOnly={isJsLocked}
        />
      </div>

      <div className="result">
        <iframe
          title="Result"
          sandbox="allow-scripts"
          srcDoc={`<html><head><style>${cssCode}</style></head><body>${htmlCode}</body></html><script>${jsCode}</script>`}
        />
      </div>
    </div>
  );
};

export default App;
