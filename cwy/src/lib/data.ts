import type { MessageType, Blog } from "./types";

export function generateInitialMessages(): MessageType[] {
  // Your top reels instead of blogs
  const topReels: Blog[] = [
    {

      title: "🔥 Amazon Interview Question",
      description: "Explaining Missing number in array in simple way.",
      link: "https://www.instagram.com/reel/DMpEVHMTLOB/",
    },
    {
      title: "⚡ MNC'S Most Asked Question",
      description: "Just One Mismatch explained in 60 seconds.",
      link: "https://www.instagram.com/reel/DMxGnmATRF0/",
    },
    {
      title: "🚀 Samsung Interview Question",
      description: "Broken Calculator Question for interviews.",
      link: "https://www.instagram.com/reel/DOBLrJAE2bt/",
    },
  ];

  return [
    {
      id: "1",
      content: "Hey 👋 Yogesh here (CodeWithYash)",
      type: "text",
      sender: "assistant",
    },
    {
      id: "1.1",
      content: "",
      photos: [
        {
          src: "/me.jpg",
          alt: "Yash's photo",
          caption: "Coding + Content Creation grind 🚀",
        },
      ],
      type: "photos",
      sender: "assistant",
    },
    {
      id: "1.2",
      content: "I make DSA content, full-stack projects & share coding knowledge 💻",
      type: "text",
      sender: "assistant",
    },
    {
      id: "2",
      content: "Currently building AI-powered assistants & real-time apps ⚡",
      type: "text",
      sender: "assistant",
    },
    {
      id: "2.1",
      content: "People say I simplify tough coding concepts 😅",
      type: "text",
      sender: "assistant",
    },
    {
      id: "2.2",
      content: "Obsessed with MERN stack, & solving DSA problems 🔥",
      type: "text",
      sender: "assistant",
    },
    {
      id: "3",
      content: "Here are my **top reels** 👇 (click to watch on Instagram):",
      type: "blog",
      blogs: topReels,
      sender: "assistant",
    },
    {
      id: "4",
      content: "Music keeps me sane while debugging 🎶 (Bollywood + Lo-fi)",
      type: "text",
      sender: "assistant",
    },
    {
      id: "4.3",
      content: "",
      type: "music",
      sender: "assistant",
    },
    {
      id: "5",
      content: "Based in India 🇮🇳",
      type: "text",
      sender: "assistant",
    },
    {
      id: "5.1",
      content: "",
      type: "location",
      location: {
        city: "Delhi NCR, India",
      },
      sender: "assistant",
    },
    {
      id: "6",
      content: "Some projects I've been working on:",
      type: "text",
      sender: "assistant",
    },
    {
      id: "6.1",
      type: "photos",
      photos: [
        {
          src: "/playperks.png",
          alt: "Play Perks - Gaming revolution",
        },
      ],
      sender: "assistant",
      content: "",
    },
    {
      id: "6.2",
      type: "text",
      content:
        "**PLay Perks**\n\nA unified play layer where worlds converge and communities connect—laying the foundation for what will soon become one of the world’s largest virtual economies, powered by gaming and AI: the “Play Economy.”\n\nTechnologies: MERN",
      sender: "assistant",
    },
    {
      id: "6.3",
      type: "text",
      content: "Deployed version + repo on my GitHub 👉 https://github.com/YogeshBisht12/Play-Perks",
      sender: "assistant",
    },
    {
      id: "6.4",
      type: "photos",
      photos: [
        {
          src: "/chitchat.png",
          alt: "ChitChat App",
        },
      ],
      sender: "assistant",
      content: "",
    },
    {
      id: "6.5",
      type: "text",
      content:
        "**ChitChat**\n\nFull-stack real-time chat app with Cloudinary media sharing & JWT authentication.\n\nTechnologies: React, Node.js, MongoDB, Socket.io",
      sender: "assistant",
    },
    {
      id: "6.6",
      type: "text",
      content: "Deployed version + repo on my GitHub 👉 https://github.com/YogeshBisht12/ChitChat",
      sender: "assistant",
    },
    {
      id: "6.7",
      type: "text",
      content:
        "More projects (Lip Reading AI, Lie Detection, Speaker Identification) coming soon 🚀",
      sender: "assistant",
    },
    {
      id: "7",
      content: "Always open to connect & collab 🤝",
      type: "text",
      sender: "assistant",
    },
    {
      id: "7.1",
      content: "Hit me up for ideas, coding discussions or just vibes!",
      type: "text",
      sender: "assistant",
    },
  ];
}
