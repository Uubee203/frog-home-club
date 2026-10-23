import { MessageSquareText, Phone } from "lucide-react";
import { SMS_HREF, TEL_HREF } from "@/lib/site";

/** Persistent Call / Text bar on small screens. */
export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-on-dark/10 bg-ink/95 p-3 backdrop-blur lg:hidden">
      <a
        href={TEL_HREF}
        className="flex h-13 items-center justify-center gap-2 rounded-md bg-leaf font-display text-xl tracking-wider text-primary-foreground"
      >
        <Phone className="h-5 w-5" aria-hidden />
        Call
      </a>
      <a
        href={SMS_HREF}
        className="flex h-13 items-center justify-center gap-2 rounded-md bg-lime font-display text-xl tracking-wider text-forest-deep"
      >
        <MessageSquareText className="h-5 w-5" aria-hidden />
        Text
      </a>
    </div>
  );
}
