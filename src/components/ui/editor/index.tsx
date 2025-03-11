"use client";

import { cn } from "@/lib/utils";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { MenuBar } from "./menu-bar";

type EditorProps = {
  value: string;
  onChange?: (value: string) => void;
  className?: string;
};

export const Editor = ({ value, onChange, className }: EditorProps) => {
  const editor = useEditor({
    extensions: [
      Underline,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      StarterKit.configure({
        bulletList: {
          HTMLAttributes: {
            class: "list-disc pl-4",
          },
        },
        orderedList: {
          HTMLAttributes: {
            class: "list-decimal pl-4",
          },
        },
      }),
    ],
    content: value,
    editorProps: {
      attributes: {
        class: "focus:outline-none h-full p-4",
      },
    },
    onUpdate({ editor }) {
      onChange?.(editor.getHTML());
    },
    onCreate({ editor }) {
      onChange?.(editor.getHTML());
    },
    autofocus: false,
  });

  return (
    <div
      className={cn(
        "bg-background border-muted flex w-full flex-col rounded-2xl border",
        className,
      )}
    >
      <MenuBar editor={editor} />
      <div className="flex h-full flex-col overflow-y-auto [&>div]:h-full">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};
