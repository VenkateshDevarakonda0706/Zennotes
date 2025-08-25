"use client";
import React, { useEffect, useState } from "react";
import { Sidebar } from "./ui/sidebar";
// import { PanelRight, PanelRightOpen } from "lucide-react";
import { useCollection } from "react-firebase-hooks/firestore";
import NewDocumentButton from "./NewDocumentButton";
import { useUser } from "@clerk/nextjs";
import { collectionGroup, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import { DocumentData } from "firebase-admin/firestore";
import { CiFileOn } from "react-icons/ci";
import { cn } from "../lib/utils";

interface RoomDocument extends DocumentData {
  userId: string;
  role: "Owner" | "Editor";
  createdAt: string;
  roomId: string;
}

export function Drawer({ children }: { children: React.ReactNode }) {
  const { user } = useUser();
  const [open, setOpen] = useState(false);
  const [groupedData, setGroupedData] = useState<{
    owner: RoomDocument[];
    editor: RoomDocument[];
  }>({ owner: [], editor: [] });
  const [data, loading] = useCollection(
    user &&
      query(
        collectionGroup(db, "rooms"),
        where("userId", "==", user.emailAddresses[0].toString())
      )
  );

  // Chanegs everytime Data gets updated
  useEffect(() => {
    if (!data) return;
    const grouped = data?.docs.reduce<{
      owner: RoomDocument[];
      editor: RoomDocument[];
    }>(
      (acc, curr) => {
        const roomData = curr.data() as RoomDocument;
        if (roomData.role === "Owner") {
          acc.owner.push({
            id: curr.id,
            ...roomData,
          });
        } else {
          acc.editor.push({
            id: curr.id,
            ...roomData,
          });
        }
        return acc;
      },
      {
        owner: [],
        editor: [],
      }
    );
    setGroupedData(grouped);
  }, [data]);
  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-black flex-1 w-full border border-slate-200 dark:border-purple-800",
        "h-full max-h-full"
      )}
    >
      <Sidebar
        links={[
          ...groupedData.owner.map(doc => ({
            label: doc.roomId,
            href: `/dashboard/doc/${doc.roomId}`,
            icon: <CiFileOn className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
          })),
          ...groupedData.editor.map(doc => ({
            label: doc.roomId,
            href: `/dashboard/doc/${doc.roomId}`,
            icon: <CiFileOn className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
          })),
        ]}
      />
      <div className="w-full pt-4 dark:bg-slate-950">{children}</div>
    </div>
  );
}