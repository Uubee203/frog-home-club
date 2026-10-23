import { MessageSquareText, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SMS_HREF, TEL_HREF } from "@/lib/site";
import { cn } from "@/lib/utils";

type Props = {
  callLabel?: string;
  textLabel?: string;
  className?: string;
  /** Visual treatment for the "Text" button depending on background. */
  tone?: "dark" | "light";
};

export function CallTextButtons({
  callLabel = "Call",
  textLabel = "Text",
  className,
  tone = "dark",
}: Props) {
  return (
    <div className={cn("flex flex-col gap-3 sm:flex-row", className)}>
      <Button asChild variant="call" size="xl">
        <a href={TEL_HREF}>
          <Phone aria-hidden />
          {callLabel}
        </a>
      </Button>
      <Button asChild variant={tone === "dark" ? "text" : "ghostLight"} size="xl">
        <a href={SMS_HREF}>
          <MessageSquareText aria-hidden />
          {textLabel}
        </a>
      </Button>
    </div>
  );
}
