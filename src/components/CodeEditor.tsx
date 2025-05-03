import { useEffect, useRef } from 'react';
import MonacoEditor from 'react-monaco-editor';

interface CodeEditorProps {
  code: string;
  onChange: (newCode: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ code, onChange }) => {
  const editorRef = useRef<any>(null);

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.editor.setValue(code);
    }
  }, [code]);

  const handleEditorChange = (newCode: string) => {
    onChange(newCode);
  };

  return (
    <MonacoEditor
      width="100%"
      height="350"
      language="json"
      theme="vs-dark"
      value={code}
      onChange={handleEditorChange}
      options={{
        selectOnLineNumbers: true,
        minimap: { enabled: false },
      }}
    />
  );
};

export default CodeEditor;
