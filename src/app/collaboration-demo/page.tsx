import React from "react";
import Head from "next/head";

export default function CollaborationDemo() {
  return (
    <>
      <Head>
        <title>Collaboration Demo | ZenNotes AI</title>
        <meta name="description" content="See how real-time collaboration works in ZenNotes AI." />
      </Head>
      <div className="min-h-screen flex flex-col items-center justify-center bg-landing-bg dark:bg-landing-bg-dark p-8">
        <h1 className="text-3xl font-bold mb-4">Real-Time Collaboration Demo</h1>
        <p className="mb-6 text-lg text-muted-foreground max-w-xl text-center">
          Watch how ZenNotes AI enables seamless teamwork with live cursors, instant edits, and collaborative note-taking. This demo shows multiple users working together in real time.
        </p>
        <div className="flex justify-center items-center mt-8">
          <video width="640" height="360" controls poster="/demo/demo-collaboration.gif">
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="rounded-lg shadow-lg overflow-hidden border border-neutral-200 dark:border-neutral-800">
          <img
            src="https://user-images.githubusercontent.com/74038190/212284115-f47cd8ff-2ffb-4b04-b5bf-4d1c14c0247f.gif"
            alt="ZenNotes AI Collaboration Demo"
            className="w-full max-w-2xl h-auto"
          />
        </div>
      </div>
    </>
  );
}