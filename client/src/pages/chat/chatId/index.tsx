import {useEffect, useState} from "react";
import { useChat } from "@/hooks/use-chat";
import useChatId from "@/hooks/use-chat-id";
import { useSocket } from "@/hooks/use-socket";
import { useAuth } from "@/hooks/use-auth";
import type { MessageType } from "@/types/chat.type";


const SingleChat = () => {
  const chatId = useChatId();
  const {fetchSingleChat, isSingleChatLoading, singleChat} = useChat();
  const {socket} = useSocket();
  const {user} = useAuth();

  const [replyTo, setReplyTo] = useState<MessageType | null>(null);

  useEffect(() => {
    if(!chatId) return;
    fetchSingleChat(chatId);
  }, [fetchSingleChat, chatId]);

  useEffect(() => {
    if(!chatId || !socket) return;

    socket.emit("chat:join", chatId)

    return () => {
      socket.emit("chat:leave", chatId);
    };
  }, [chatId, socket]);

  return <div>SingleChat</div>

  
}

export default SingleChat;