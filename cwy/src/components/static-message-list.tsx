import { memo } from 'react';
import Image from 'next/image';
import Header from './header';
import type { MessageType } from '@/lib/types';

import { BlogMessage } from "./messages/blog-message"
import { ProjectMessage } from "./messages/project-message"
import { MusicMessage } from "./music-widget"
import { LocationMessage } from "./map-widget"
import { PhotosMessage } from "./messages/photos-message"
import { ResumeMessage } from "./messages/resume-message"
import { TextMessage } from "./messages/text-message"

interface StaticMessageListProps {
  className?: string;
}

const BUBBLE_STYLES = {
  sent: "bg-[#007AFF] text-white rounded-[18px] rounded-br-[6px]",
  received: "bg-[#E9E9EB] dark:bg-[#2C2C2E] text-black dark:text-white rounded-[18px] rounded-bl-[6px]"
} as const

const MAX_WIDTHS = {
  project: "max-w-[280px]",
  music: "max-w-[320px]", 
  location: "max-w-[240px]",
  default: "max-w-[85%]"
} as const

// Hardcoded messages from data.ts
const HARDCODED_MESSAGES: MessageType[] = [
  {
    id: "1",
    content: "Hey!! Yogesh here.",
    type: "text",
    sender: "assistant",
  },
  {
    id:"1.1",
    content: "",
    photos: [
      {
        src: "/me.jpg",
        alt: "Yash's photo",
        caption: "Coding + Content Creation grind 🚀"
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
    blogs: [
      {
        title: "🔥Amazon Interview Question",
        description: "Explaining Missing number in array in simple way.",
        link: "https://www.instagram.com/reel/DMpEVHMTLOB/"
      },
      {
        title: "⚡ MNC'S Most Asked Question",
        description: "Just One Mismatch explained in 60 seconds.",
        link: "https://www.instagram.com/reel/DMxGnmATRF0/"
      },
      {
        title: "🚀 Samsung Interview Question",
        description: "Broken Calculator Question for interviews.",
        link: "https://www.instagram.com/reel/DOBLrJAE2bt/"
      }
    ],
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
      }
    ],
    sender: "assistant",
    content: "",
  },
  {
    id: "6.2",
    type: "text",
    content: "**PLay Perks**\n\nA unified play layer where worlds converge and communities connect—laying the foundation for what will soon become one of the world’s largest virtual economies, powered by gaming and AI.\n\nTechnologies: MERN",
    sender: "assistant",
  },
  {
    id: "6.3",
    type: "text",
    content: "GitHub repo coming soon 👀",
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


const StaticMessageList = memo<StaticMessageListProps>(({ className = '' }) => {
  const renderMessageContent = (message: MessageType) => {
    const isUser = message.sender === "user"
    const bubbleClass = isUser ? BUBBLE_STYLES.sent : BUBBLE_STYLES.received
    const maxWidth = MAX_WIDTHS[message.type as keyof typeof MAX_WIDTHS] || MAX_WIDTHS.default
    const commonProps = { bubbleClass, bubbleMaxWidth: maxWidth }
    
    switch (message.type) {
      case "text":
        return (
          <TextMessage 
            content={message.content || ""} 
            {...commonProps}
          />
        )
        
      case "location":
        return message.location && (
          <LocationMessage locationCity={message.location.city} />
        )
        
      case "music":
        return (
          <MusicMessage 
            content={message.content} 
            {...commonProps}
          />
        )
        
      case "photos":
        return message.photos && (
          <PhotosMessage 
            content={message.content} 
            photos={message.photos} 
            {...commonProps}
          />
        )
        
      case "resume":
        return message.resumeLink && (
          <ResumeMessage 
            content={message.content} 
            resumeLink={message.resumeLink} 
            resumeLinkText={message.resumeLinkText} 
            isUser={isUser}
            {...commonProps}
          />
        )
        
      case "blog":
        return (
          <BlogMessage 
            content={message.content} 
            blogs={message.blogs} 
            {...commonProps}
          />
        )
        
      case "project":
        return message.project && (
          <ProjectMessage 
            content={message.content} 
            project={message.project} 
            {...commonProps}
          />
        )
        
      default:
        return (
          <TextMessage 
            content={message.content || ""} 
            {...commonProps}
          />
        )
    }
  }

  return (
    <div className={`w-full max-w-3xl mx-auto flex flex-col ${className}`}>
      {/* Top spacing area - matches MessageList */}
      <div className="h-16 sm:h-20 md:h-24 flex-shrink-0"></div>
      
      {/* Header section - matches MessageList */}
      <div className="mb-8 relative">
        <Header />
      </div>
      <div className="h-8 sm:h-12 md:h-16 lg:h-20 xl:h-24 flex-shrink-0"></div>
      
      {/* Messages container - matches MessageList spacing */}
      <div className="space-y-3 sm:space-y-4 md:space-y-5 mt-auto">
        {HARDCODED_MESSAGES.map((message, index) => {
          const isUser = message.sender === "user"
          
          return (
            <div key={message.id || `msg-${index}`} className="w-full">
              <div
                className={`flex items-end gap-2 my-1 ${isUser ? "flex-row-reverse" : ""}`}
                role="listitem"
                aria-label={`${isUser ? 'Your' : 'Received'} message`}
              >
                {!isUser && (
                  <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 mb-1 border border-white/10 shadow-sm">
                    <Image
                      src="/char.png"
                      alt="Assistant avatar"
                      width={24}
                      height={24}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                )}

                <div className={`flex-1 flex ${isUser ? "justify-end" : "justify-start"}`}>
                  {renderMessageContent(message)}
                </div>

                {isUser && (
                  <div className="w-6 h-6 flex-shrink-0 mb-1" aria-hidden="true" />
                )}
              </div>
            </div>
          )
        })}
        
        {/* Bottom spacing - matches MessageList */}
        <div className="h-6 sm:h-8 md:h-10 flex-shrink-0"></div>
      </div>
    </div>
  );
});

StaticMessageList.displayName = 'StaticMessageList';
export default StaticMessageList;