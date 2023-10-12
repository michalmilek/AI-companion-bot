import React from "react";
import { ChatBubbleLeftIcon } from "@heroicons/react/24/solid";

const ChatMessageSkeleton = () => {
  return (
    <div className="flex items-start mb-4 w-full">
      <div className="flex-1">
        <div className="flex items-center mb-1 flex-row-reverse">
          <div className="w-16 h-4 bg-gray-300 rounded-full mr-2 animate-pulse"></div>
          <div className="w-16 h-4 bg-gray-300 rounded-full mr-2 animate-pulse"></div>
          <div className="w-16 h-4 bg-gray-300 rounded-full animate-pulse"></div>
        </div>
        <div className="flex items-center flex-row-reverse">
          <ChatBubbleLeftIcon className="h-5 w-5 text-gray-300 mr-2" />
          <div className="w-16 h-4 bg-gray-300 rounded-full mr-2 animate-pulse"></div>
          <div className="w-16 h-4 bg-gray-300 rounded-full mr-2 animate-pulse"></div>
          <div className="w-16 h-4 bg-gray-300 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessageSkeleton;
