import { getOtherUserAndGroup } from "@/lib/helper";
import type { ChatType } from "@/types/chat.type"
import { useNavigate } from "react-router-dom";

interface Props {
  chat: ChatType;
  currentUserId: string | null;
}

const ChatHeader = ({
  chat,
  currentUserId
}: Props) => {
  const navigate = useNavigate();
  const {name, subheading, avatar, isOnline, isGroup} = getOtherUserAndGroup(chat, currentUserId);

  return (
    <div>ChatHeader</div>
  )
}

export default ChatHeader