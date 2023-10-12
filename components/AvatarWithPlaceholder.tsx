import React from "react";
import { Avatar, AvatarImage } from "./ui/avatar";

const AvatarWithPlaceholder = ({
  src,
  name,
}: {
  src?: string;
  name: string;
}) => {
  return (
    <Avatar className="h-12 w-12">
      <AvatarImage
        src={src || "./placeholderImage.jpg"}
        alt={name + " avatar"}
      />
    </Avatar>
  );
};

export default AvatarWithPlaceholder;
