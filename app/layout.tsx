import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Prompt Cost Tracker — Track AI Costs Per Output",
  description: "Monitor AI API costs broken down by specific outputs like blog posts, code snippets, or emails. Built for engineering teams and AI product managers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="1d01c14d-4e33-4a02-8f91-1776818f0d92"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
