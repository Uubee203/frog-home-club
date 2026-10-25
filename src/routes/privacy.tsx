import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { BUSINESS_NAME, PHONE_DISPLAY, TEL_HREF } from "@/lib/site";

const TITLE = "Privacy Policy | Frog Home Club";
const DESC =
  "How Frog Home Club collects, uses, and shares your information when you request lawn care or junk removal in the Dallas area.";
const EFFECTIVE_DATE = "October 25, 2026";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://froghomeclub.com/privacy" },
    ],
    links: [{ rel: "canonical", href: "https://froghomeclub.com/privacy" }],
  }),
  component: PrivacyPolicy,
});

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-3xl text-forest sm:text-4xl">{title}</h2>
      <div className="mt-3 space-y-4">{children}</div>
    </section>
  );
}

function PrivacyPolicy() {
  return (
    <>
      <div className="bg-forest">
        <div className="mx-auto max-w-[760px] px-4 py-14 sm:px-6 md:py-20">
          <h1 className="text-6xl text-on-dark sm:text-7xl">Privacy Policy</h1>
          <p className="mt-3 text-on-dark-muted">Effective date: {EFFECTIVE_DATE}</p>
        </div>
      </div>

      <article className="bg-card">
        <div className="mx-auto max-w-[760px] px-4 py-12 text-base leading-relaxed text-forest sm:px-6 sm:text-lg sm:leading-8 md:py-16 [&_a]:font-semibold [&_a]:text-leaf [&_a]:underline [&_a]:underline-offset-4">
          <p>
            Frog Home Club ("we," "us") provides lawn care and junk removal services in the Dallas
            area. This policy explains what information we collect, how we use it, and the choices
            you have.
          </p>

          <Section title="1. Information We Collect">
            <p>
              When you request a quote, book a service, or contact us, we may collect your name,
              phone number, email address, service address, ZIP code, the service you need, and
              details or photos about the job. We collect this through our website, Facebook and
              Instagram lead forms, Google, Thumbtack, phone calls, texts, and email. We also take
              photos of the work area before and after each job.
            </p>
          </Section>

          <Section title="2. How We Use Your Information">
            <p>
              We use your information to respond to your request, give you a quote, schedule and
              complete the service, send invoices, follow up after the job, ask for a review, and
              let you know about related services such as seasonal lawn plans. You can tell us to
              stop marketing messages at any time.
            </p>
          </Section>

          <Section title="3. How We Share Your Information">
            <p>
              We do not sell your personal information. We share it only as needed to provide your
              service:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                With the local service professionals who perform the work on our behalf, who receive
                your name, address, phone number, and job details so they can complete the job.
              </li>
              <li>
                With service providers that help us run the business, such as payment processing,
                scheduling, and email or text messaging tools.
              </li>
              <li>When required by law.</li>
            </ul>
            <p>
              Mobile phone numbers and text messaging consent will not be shared with third parties
              or affiliates for their marketing purposes.
            </p>
          </Section>

          <Section title="4. Text Messages">
            <p>
              If you give us your phone number, we may text you about your quote, appointment, and
              service. Message and data rates may apply. Reply STOP to opt out at any time.
            </p>
          </Section>

          <Section title="5. How Long We Keep Information">
            <p>
              We keep your information as long as needed to provide services, keep business and tax
              records, and handle any questions about past work.
            </p>
          </Section>

          <Section title="6. Your Choices">
            <p>
              You can ask us to access, correct, or delete your personal information, or to stop
              contacting you, by emailing or calling us using the contact information below. We will
              respond within a reasonable time.
            </p>
          </Section>

          <Section title="7. Security">
            <p>
              We use reasonable measures to protect your information. No method of storing or
              sending information is completely secure.
            </p>
          </Section>

          <Section title="8. Children">
            <p>
              Our services are for adults. We do not knowingly collect information from children
              under 13.
            </p>
          </Section>

          <Section title="9. Changes to This Policy">
            <p>
              We may update this policy. The effective date at the top shows when it was last
              changed.
            </p>
          </Section>

          <Section title="10. Contact Us">
            <address className="not-italic">
              {BUSINESS_NAME}
              <br />
              Phone: <a href={TEL_HREF}>{PHONE_DISPLAY}</a>
              <br />
              Dallas, Texas
            </address>
          </Section>
        </div>
      </article>
    </>
  );
}
