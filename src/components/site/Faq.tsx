import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export type FaqItem = { q: string; a: string };

export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <section className="bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-[1fr_2fr]">
        <div>
          <p className="eyebrow text-leaf">FAQ</p>
          <h2 className="mt-3 whitespace-pre-line text-6xl text-forest">{"Questions?\nRibbit."}</h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {items.map((item) => (
            <AccordionItem key={item.q} value={item.q} className="border-forest/15">
              <AccordionTrigger className="py-5 font-sub text-lg font-bold text-forest hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
