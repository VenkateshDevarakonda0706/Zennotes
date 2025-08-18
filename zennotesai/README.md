# ZenNotes AI

Welcome to ZenNotes AI, a cutting-edge note-taking application built with [Next.js](https://nextjs.org). This project leverages the power of AI to help you organize and manage your notes efficiently.

## Getting Started

To get started with the development server, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/zennotes-ai.git
   cd zennotes-ai
   ```

2. Install the dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. Create a `.env.local` file in the root directory and add the following fields:

   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=
   NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=
   LIVEBLOCKS_SECRET_KEY=
   FIREBASE_PROJECT_ID=
   FIREBASE_PRIVATE_KEY=
   FIREBASE_CLIENT_EMAIL=
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Features Checklist

### Implemented Features ✅
- [x] **Real-Time Collaboration**: Share and collaborate on notes with others in real-time.
- [x] **Live Cursors**: See live cursors while your team makes changes.
- [x] **Rich Text Editing**: Create notes with rich text formatting, images, and more.

### Pending Features ❌
- [ ] **Landing Page**: More detailed and enhanced landing page.
- [ ] **Skeleton Animations**: Skeleton loading animations.
- [ ] **Search and Filter**: Quickly find notes using advanced search and filtering options.
- [ ] **AI-Powered Note Organization**: Automatically categorize and tag your notes using AI.
- [ ] **AI-Based Summarization**: Generate concise summaries of long notes using AI.
- [ ] **AI-Powered Note Suggestions**: Get recommendations based on existing notes.

## Technologies Used

- **Next.js**: A React framework for building fast and user-friendly web applications.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Firebase**: Backend services for authentication, database, and storage.
- **Liveblocks**: Real-time collaboration infrastructure.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use [Vercel](https://vercel.com). Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Contact

If you have any questions or would like to discuss potential opportunities, please feel free to reach out to me at [shivamaniyamana2003@gmail.com].

Thank you for checking out ZenNotes AI!

