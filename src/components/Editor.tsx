"use client";

import React from "react";
import { useRoom, useSelf } from "@liveblocks/react";
import { useEffect, useState } from "react";
import * as Y from "yjs";
import { LiveblocksYjsProvider } from "@liveblocks/yjs";
import {
  BlockConfig,
  BlockNoteEditor,
  InlineContentSchema,
  StyleSchema,
} from "@blocknote/core";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/shadcn";
import "@blocknote/shadcn/style.css";
import stringToColor from "../lib/stringToColor";
// TODO: Replace ToolbarButton with a custom button or available UI component

function Editor() {
  const room = useRoom();
  const [doc, setDoc] = useState<Y.Doc>();
  const [provider, setProvider] = useState<LiveblocksYjsProvider>();
  const [aiSummary, setAiSummary] = useState("");
  const [aiSuggestions, setAiSuggestions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const yDoc = new Y.Doc();
    const yDocProvider = new LiveblocksYjsProvider(room, yDoc);
    setDoc(yDoc);
    setProvider(yDocProvider);

    return () => {
      yDoc?.destroy();
      yDocProvider?.destroy();
    };
  }, [room]);

  if (!doc || !provider) {
    return null;
  }

  return (
    <div className="max-w-6xl w-full h-full flex-1 max-h-screen">
      <div className="flex gap-2 mb-2">
        <button
          title="Summarize Note with AI"
          className="px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600"
          onClick={async () => {
            setLoading(true);
            const content = editor.getText();
            const res = await fetch("/api/ai", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ action: "summarize", content }),
            });
            const data = await res.json();
            setAiSummary(data.summary || "No summary returned.");
            setLoading(false);
          }}
        >🤖 Summarize Note</button>
        <button
          title="Auto-Tag Note with AI"
          className="px-3 py-1 rounded bg-purple-500 text-white hover:bg-purple-600"
          onClick={() => {
            alert("AI auto-tagging coming soon!");
          }}
        >🏷️ Auto-Tag Note</button>
        <button
          title="Suggest Improvements with AI"
          className="px-3 py-1 rounded bg-green-500 text-white hover:bg-green-600"
          onClick={async () => {
            setLoading(true);
            const content = editor.getText();
            const res = await fetch("/api/ai", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ action: "suggest", content }),
            });
            const data = await res.json();
            setAiSuggestions(data.suggestions || []);
            setLoading(false);
          }}
        >💡 Suggest Improvements</button>
      </div>
      {loading && <div className="my-2 text-blue-500">AI is working...</div>}
      {aiSummary && (
        <div className="my-2 p-2 bg-yellow-100 rounded">
          <strong>AI Summary:</strong> {aiSummary}
        </div>
      )}
      {aiSuggestions.length > 0 && (
        <div className="my-2 p-2 bg-green-100 rounded">
          <strong>AI Suggestions:</strong>
          <ul className="list-disc ml-6">
            {aiSuggestions.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </div>
      )}
      {/* Block editor */}
      <BlockNote doc={doc} provider={provider} />
    </div>
  );
}

type EditorProps = {
  doc: Y.Doc;
  provider: LiveblocksYjsProvider;
};

function BlockNote({ doc, provider }: EditorProps) {
  const userInfo = useSelf((me) => me.info);
  const editor: BlockNoteEditor<
    Record<string, BlockConfig>,
    InlineContentSchema,
    StyleSchema
  > = useCreateBlockNote({
    collaboration: {
      provider,
      fragment: doc.getXmlFragment("document-store"),
      user: {
        name: userInfo?.name ?? "Anonymous",
        color: stringToColor(userInfo?.email ?? ""),
      },
    },
  });

  // Explicitly type the props passed to BlockNoteView
  const blockNoteProps = {
    editor: editor,
    theme: "light" as const, // You can adjust the theme
    editable: true, // Adjust editable state if needed
  };

  return <BlockNoteView {...blockNoteProps} className="flex-1" />;
}

export default Editor;