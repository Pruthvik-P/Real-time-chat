import groupImage from "@/assets/group-image.png";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface Props {
  name: string;
  src?: string;
  size?: string;
  isOnline?: boolean;
  isGroup?: boolean;
}

const AvatarWithBadge = ({
  name,
  src,
  isOnline,
  isGroup = false,
  size = "w-9 h-9",
}: Props) => {
  const avatar = isGroup ? groupImage : src || "";

  return (
    <div className="relative shrink-0 ">
      <Avatar className={size}>
        <AvatarImage src={avatar} />
        <AvatarFallback className="bg-primary/10 text-primary font-semibold">
          {name?.charAt(0)}
        </AvatarFallback>
      </Avatar>
      {isOnline && !isGroup && (
        <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounder-full border-2 bg-green-500" />
      )}
    </div>
  );
};

export default AvatarWithBadge;
