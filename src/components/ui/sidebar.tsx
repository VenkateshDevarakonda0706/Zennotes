import React, { useState } from "react";
import Link from "next/link";
import { PanelRight, PanelRightOpen } from "lucide-react";

interface SidebarLink {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

interface SidebarProps {
  links: SidebarLink[];
}

export const Sidebar: React.FC<SidebarProps> = ({ links }) => {
  const [open, setOpen] = useState(true);
  const [search, setSearch] = useState("");
  const filteredLinks = links.filter(link =>
    link.label.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <aside className={`bg-neutral-100 dark:bg-neutral-950 h-full flex flex-col transition-all duration-300 ${open ? "w-64" : "w-16"}`}>
      <div className="flex items-center justify-between px-4 py-2">
        <button onClick={() => setOpen(!open)} className="focus:outline-none">
          {open ? <PanelRightOpen /> : <PanelRight />}
        </button>
        {open && <span className="text-lg font-bold">Notes</span>}
      </div>
      {open && (
        <div className="px-4 py-2">
          <input
            type="text"
            placeholder="Search notes..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full px-3 py-2 rounded border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      )}
      <nav className="flex-1 px-2 py-2 overflow-y-auto">
        {filteredLinks.length === 0 && open ? (
          <div className="text-neutral-500 px-2 py-2">No notes found.</div>
        ) : (
          filteredLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-2 px-2 py-2 rounded hover:bg-neutral-200 dark:hover:bg-purple-950 transition-colors duration-200"
            >
              {link.icon && <span>{link.icon}</span>}
              {open && <span className="truncate">{link.label}</span>}
            </Link>
          ))
        )}
      </nav>
    </aside>
  );
};
const filteredLinks = links.filter(link =>
  link.label.toLowerCase().includes(search.toLowerCase())
);