import { memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface CompactHeaderProps {
  isVisible: boolean;
}

const ANIMATION_CONFIG = {
  container: {
    hidden: { 
      height: 0, 
      opacity: 0,
      y: -10,
    },
    visible: { 
      height: 70, 
      opacity: 1,
      y: 0,
      transition: {
        height: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
        y: { type: "spring", stiffness: 500, damping: 25 },
        when: "beforeChildren",
        staggerChildren: 0.05
      }
    },
    exit: {
      height: 0,
      opacity: 0,
      y: -10,
      transition: {
        height: { duration: 0.2 },
        opacity: { duration: 0.15 },
        y: { duration: 0.15 },
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  },
  child: {
    hidden: { opacity: 0, y: -8 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 400, damping: 20 }
    },
    exit: { 
      opacity: 0, 
      y: -8,
      transition: { duration: 0.15 }
    }
  }
} as const;

const PROFILE_DATA = {
  name: "Yogesh Bisht",
  title: "Developer",
  avatar: "/char.png",
  socialUrl: "https://www.instagram.com/codewithyash3/"
} as const;

const BUTTON_STYLES = [
  "ml-auto px-3 py-1.5 text-xs font-medium text-white",
  "bg-gradient-to-b from-blue-500 to-blue-700",
  "border-b-2 border-blue-900",
  "shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.15)]",
  "hover:translate-y-[-1px] hover:shadow-[0_6px_8px_-1px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.15)]",
  "active:translate-y-[1px] active:shadow-[0_2px_3px_-1px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]",
  "rounded-md transition-all duration-150",
  "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50",
  "flex items-center gap-1.5"
].join(" ");

const InstagramIcon = () => (
  <svg
    className="w-3.5 h-3.5"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm4.25 3a6.25 6.25 0 1 1 0 12.5 6.25 6.25 0 0 1 0-12.5Zm0 1.5a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5Zm6.25-.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
  </svg>
);


const UserAvatar = memo(() => (
  <motion.div 
    className="rounded-full relative w-10 h-10 mr-3"
    variants={ANIMATION_CONFIG.child}
  >
    <div className="rounded-full overflow-hidden w-full h-full">
      <Image
        src={PROFILE_DATA.avatar}
        alt="User Avatar"
        width={40}
        height={40}
        className="w-full h-full object-cover border border-white/10"
        priority
      />
    </div>
    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border border-white/10 z-10" />
  </motion.div>
));

UserAvatar.displayName = 'UserAvatar';

const UserInfo = memo(() => (
  <div className="flex-grow">
    <motion.h1 
      className="font-medium text-white/90 text-base"
      variants={ANIMATION_CONFIG.child}
    >
      {PROFILE_DATA.name}
    </motion.h1>
    <motion.p 
      className="text-white/50 text-xs"
      variants={ANIMATION_CONFIG.child}
    >
      {PROFILE_DATA.title}
    </motion.p>
  </div>
));

UserInfo.displayName = 'UserInfo';

const FollowButton = memo(() => {
  const handleFollowClick = () => {
    window.open(PROFILE_DATA.socialUrl, '_blank');
  };

  return (
    <motion.button
      variants={ANIMATION_CONFIG.child}
      className={BUTTON_STYLES}
      onClick={handleFollowClick}
      aria-label="Follow me on X (Twitter)"
    >
      <InstagramIcon />
      Follow Me
    </motion.button>
  );
});

FollowButton.displayName = 'FollowButton';

const CompactHeader = memo<CompactHeaderProps>(({ isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed top-0 left-0 right-0 z-[2000] backdrop-blur-md bg-black/85 border-b border-white/5 overflow-hidden"
          variants={ANIMATION_CONFIG.container}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          
          <div className="max-w-[500px] mx-auto h-full flex items-center px-3">
            <UserAvatar />
            <UserInfo />
            <FollowButton />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

CompactHeader.displayName = 'CompactHeader';
export default CompactHeader;