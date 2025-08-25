"use client";

import React, { useEffect, useState } from "react";
import Document from "../../../../components/Document"; // Adjust the import path as necessary

const DocumentPage = ({ params }: { params: { id: string } }) => {
  const [id, setId] = useState<string | null>(null);

  useEffect(() => {
    setId(params.id);
  }, [params]);

  if (!id) {
    return (
      <div className="flex flex-col gap-4 items-center justify-center w-full h-full animate-pulse">
        <div className="h-8 w-2/3 bg-gray-300 dark:bg-gray-800 rounded" />
        <div className="h-6 w-1/2 bg-gray-200 dark:bg-gray-700 rounded" />
        <div className="h-6 w-1/3 bg-gray-200 dark:bg-gray-700 rounded" />
      </div>
    );
  }

  return (
    <div className="w-full h-full flex-1 flex overflow-hidden flex-col sm:px-4 lg:px-8">
      <Document id={id} />
    </div>
  );
};

export default DocumentPage;