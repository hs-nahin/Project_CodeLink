import Codemirror from 'codemirror';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/selection/active-line';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/3024-day.css'; // Add the light theme
import 'codemirror/theme/dracula.css';
import { useEffect, useRef } from 'react';

// eslint-disable-next-line react/prop-types
const Editor = ({ language, isDarkMode, onEditorChange }) => {
  const editorRef = useRef(null);

  useEffect(() => {
    editorRef.current = Codemirror.fromTextArea(document.getElementById('realtimeEditor'), {
      mode: language,
      theme: isDarkMode ? 'dracula' : '3024-day',
      autoCloseTags: true,
      autoCloseBrackets: true,
      lineNumbers: true,
    });

    editorRef.current.on('change', (editor) => {
      const value = editor.getValue();
      onEditorChange(value);
    });

    return () => {
      editorRef.current && editorRef.current.toTextArea();
    };
  }, [language, isDarkMode, onEditorChange]);

  return <textarea id="realtimeEditor" />;
};

export default Editor;
