"use client";

import { useEffect, useState } from "react";
import { CldUploadButton } from "next-cloudinary";
import Image from "next/image";

interface ImageUploadProps {
  value?: string;
  onChange: (src: string) => void;
  disabled?: boolean;
}

export const ImageUpload = ({
  value,
  onChange,
  disabled,
}: ImageUploadProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <CldUploadButton
        options={{
          maxFiles: 1,
        }}
        onUpload={(result: any) => onChange(result.info.secure_url)}
        uploadPreset="f4nzapur">
        <div className="relative h-40 w-40">
          <Image
            fill
            alt="Upload"
            src={value || "/placeholderImage.jpg"}
            className="rounded-lg object-cover"
          />
        </div>
      </CldUploadButton>
    </div>
  );
};
