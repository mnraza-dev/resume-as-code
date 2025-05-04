import { useEffect, useRef } from 'react';
import MonacoEditor from 'react-monaco-editor';
import * as monaco from 'monaco-editor';


interface CodeEditorProps {
  code: string;
  onChange: (newCode: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ code, onChange }) => {
  const editorRef = useRef<any>(null);

  useEffect(() => {
    monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
      validate: true,
      schemas: [
        {
          uri: 'http://myserver/resume-schema.json',
          fileMatch: ['*'],
          schema: {
            type: 'object',
            properties: {
              name: { type: 'string' },
              title: { type: 'string' },
              summary: { type: 'string' },
              location: { type: 'string' },
              email: { type: 'string' },
              phone: { type: 'string' },
              linkedin: { type: 'string' },
              github: { type: 'string' },
              skills: {
                type: 'array',
                items: { type: 'string' },
              },
              achievements: {
                type: 'array',
                items: { type: 'string' },
              },
              experience: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    company: { type: 'string' },
                    role: { type: 'string' },
                    duration: { type: 'string' },
                    location: { type: 'string' },
                    description: {
                      type: 'array',
                      items: { type: 'string' },
                    },
                  },
                },
              },
              education: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    institution: { type: 'string' },
                    degree: { type: 'string' },
                    year: { type: 'string' },
                  },
                },
              },
              certifications: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    name: { type: 'string' },
                    issuer: { type: 'string' },
                    year: { type: 'string' },
                  },
                },
              },
              projects: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    name: { type: 'string' },
                    description: { type: 'string' },
                    url: { type: 'string' },
                  },
                },
              },
            },
            required: ['name', 'title', 'skills', 'experience'],
          },
        },
      ],
    });
  }, []);

  const handleEditorChange = (newCode: string) => {
    onChange(newCode);
  };

  return (
    <MonacoEditor
      width="100%"
      height="400"
      language="json"
      theme="vs-dark"
      value={code}
      onChange={handleEditorChange}
      editorDidMount={(editor) => {
        editorRef.current = editor;
      }}
      options={{
        selectOnLineNumbers: true,
        minimap: { enabled: false },
        fontSize: 14,
        automaticLayout: true,
      }}
    />
  );
};

export default CodeEditor;
