import { cn } from "@/lib/utils";
import type { MessageType } from "@/types/chat.type";

interface Props{
  message: MessageType;
  onReply?: (message: MessageType) => void;
}
const ChatMessageBody = ({
  message,
  onReply
}: Props) => {
  const {user} = useAuth();

  const userId = user?._id || null;
  const isCurrentUser = message.sender?._id === userId;
  const senderName = isCurrentUser ? "You" : message.sender?.name;

  const replySenderName = message.replyTo?.sender?._id === userId 
    ? "You"
    : message.replyTo?.sender?.name;

  const containerClass = cn(
    "group flex gap-2 py-3 px-4",
    isCurrentUser && "flex-row-reverse text-left"
  )

  const contentWrapperClass = cn(
    "max-w-[70%] flex flex-col relative",
    isCurrentUser && "items-end"
  )

  const messageClass = cn(
    "min-w-[200px] px-3 py-2 text-sm break-words shadow-sm",
    isCurrentUser ? "bg-accent dark:bg-primary/40 rounded-tr-xl rounded-l-xl"
    : "bg-[#f5f5f5] dark:bg-accent rounded-bl-xl rounded-r-xl"
  )

  return (
    <div>ChatMessageBody</div>
  )
}

export default ChatMessageBody