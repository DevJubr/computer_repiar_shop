"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { ButtonHTMLAttributes } from "react";

type Props = {
  title: string;
  className?: string;
  variant?: "default" | null | undefined;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const BackButton = ({ title, className, variant, ...props }: Props) => {
  const router = useRouter();
  return (
    <Button
      title={title}
      variant={variant}
      onClick={() => router.back()}
      className={className}
    >
      {title}
    </Button>
  );
};

export { BackButton };
