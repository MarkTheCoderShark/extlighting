"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { CTAButton } from "./cta-button";
import { cn } from "@/lib/utils";
import type { FAQItem } from "@/types";

interface FAQSectionProps {
  className?: string;
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
  showViewAll?: boolean;
  maxItems?: number;
  columns?: 1 | 2;
}

function FAQAccordionItem({ faq, isOpen, onToggle }: { 
  faq: FAQItem; 
  isOpen: boolean; 
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-charcoal-200 last:border-0">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-charcoal-900 pr-4">{faq.question}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 flex-shrink-0 text-gold-700 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 pb-5" : "max-h-0"
        )}
      >
        <p className="text-charcoal-600 leading-relaxed">{faq.answer}</p>
      </div>
    </div>
  );
}

export function FAQSection({
  className,
  faqs,
  title = "Frequently Asked Questions",
  subtitle = "Get answers to common questions about permanent exterior lighting.",
  showViewAll = false,
  maxItems,
  columns = 1,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const displayFaqs = maxItems ? faqs.slice(0, maxItems) : faqs;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: displayFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  if (columns === 2) {
    const midpoint = Math.ceil(displayFaqs.length / 2);
    const leftColumn = displayFaqs.slice(0, midpoint);
    const rightColumn = displayFaqs.slice(midpoint);

    return (
      <section className={cn("section bg-background", className)}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="container">
          <SectionHeading title={title} subtitle={subtitle} />
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="rounded-xl bg-white p-6 shadow-sm border border-charcoal-100">
              {leftColumn.map((faq, i) => (
                <FAQAccordionItem
                  key={faq.question}
                  faq={faq}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              ))}
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm border border-charcoal-100">
              {rightColumn.map((faq, i) => {
                const actualIndex = i + midpoint;
                return (
                  <FAQAccordionItem
                    key={faq.question}
                    faq={faq}
                    isOpen={openIndex === actualIndex}
                    onToggle={() => setOpenIndex(openIndex === actualIndex ? null : actualIndex)}
                  />
                );
              })}
            </div>
          </div>
          {showViewAll && (
            <div className="mt-10 text-center">
              <CTAButton href="/faq" variant="outline">
                View All FAQs
              </CTAButton>
            </div>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className={cn("section bg-background", className)}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container">
        <SectionHeading title={title} subtitle={subtitle} />
        <div className="mx-auto mt-12 max-w-3xl rounded-xl bg-white p-6 shadow-sm border border-charcoal-100">
          {displayFaqs.map((faq, i) => (
            <FAQAccordionItem
              key={faq.question}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
        {showViewAll && (
          <div className="mt-10 text-center">
            <CTAButton href="/faq" variant="outline">
              View All FAQs
            </CTAButton>
          </div>
        )}
      </div>
    </section>
  );
}
