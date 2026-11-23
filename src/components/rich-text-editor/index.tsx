import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useEffect } from 'react';

type RichTextEditorProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function RichTextEditor({
  value,
  onChange,
}: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: value,
    editorProps: {
      attributes: {
        class:
          'min-h-[300px] p-4 border rounded-md focus:outline-none',
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  useEffect(() => {
    if (!editor) return;

    if (value !== editor.getHTML()) {
      editor.commands.setContent(value);
    }
  }, [value, editor]);

  if (!editor) {
    return null;
  }

  return (
    <div className="border rounded-md overflow-hidden bg-white">
      <div className="flex flex-wrap gap-2 p-3 border-b bg-gray-50">
        <button
          type="button"
          className={`px-3 py-1 rounded border ${
            editor.isActive('bold')
              ? 'bg-blue-500 text-white'
              : 'bg-white'
          }`}
          onClick={() =>
            editor.chain().focus().toggleBold().run()
          }
        >
          B
        </button>

        <button
          type="button"
          className={`px-3 py-1 rounded border ${
            editor.isActive('italic')
              ? 'bg-blue-500 text-white'
              : 'bg-white'
          }`}
          onClick={() =>
            editor.chain().focus().toggleItalic().run()
          }
        >
          I
        </button>

        <button
          type="button"
          className={`px-3 py-1 rounded border ${
            editor.isActive('bulletList')
              ? 'bg-blue-500 text-white'
              : 'bg-white'
          }`}
          onClick={() =>
            editor.chain().focus().toggleBulletList().run()
          }
        >
          Lista
        </button>

        <button
          type="button"
          className={`px-3 py-1 rounded border ${
            editor.isActive('orderedList')
              ? 'bg-blue-500 text-white'
              : 'bg-white'
          }`}
          onClick={() =>
            editor.chain().focus().toggleOrderedList().run()
          }
        >
          Numerada
        </button>

        <button
          type="button"
          className={`px-3 py-1 rounded border ${
            editor.isActive('heading', { level: 2 })
              ? 'bg-blue-500 text-white'
              : 'bg-white'
          }`}
          onClick={() =>
            editor
              .chain()
              .focus()
              .toggleHeading({ level: 2 })
              .run()
          }
        >
          H2
        </button>
      </div>

      <EditorContent editor={editor} />
    </div>
  );
}