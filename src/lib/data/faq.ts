import type { FAQItem } from "@/types";

export const faqItems: FAQItem[] = [
  {
    question: "How much does permanent exterior lighting cost?",
    answer:
      "Residential installations typically range from $3,000 to $6,000, depending on your home's size and roofline complexity. Commercial projects vary based on building size and design requirements. We provide free, detailed quotes so you know exactly what to expect before any work begins.",
    category: "pricing",
  },
  {
    question: "What's included in the installation price?",
    answer:
      "Our all-inclusive pricing covers professional design consultation, all materials and LED fixtures, complete installation by our certified team, app setup and training, and our comprehensive lifetime warranty on both parts and labor.",
    category: "pricing",
  },
  {
    question: "Do you offer financing options?",
    answer:
      "Yes! We partner with several financing providers to offer flexible payment plans. Many of our customers choose 12-month same-as-cash financing or low monthly payment options. Ask about current promotions during your consultation.",
    category: "pricing",
  },
  {
    question: "How long does installation take?",
    answer:
      "Most residential installations are completed in one day (4-8 hours). Larger homes or commercial projects may take 2-3 days. We always provide a clear timeline before starting and work efficiently to minimize disruption to your routine.",
    category: "installation",
  },
  {
    question: "Will installation damage my roof or siding?",
    answer:
      "No. Our installation method uses specialized mounting tracks that attach securely without penetrating roofing materials or causing damage. When properly installed, our system is designed to protect your home's exterior while providing beautiful lighting.",
    category: "installation",
  },
  {
    question: "Can you install in any weather?",
    answer:
      "We can install in most conditions, but we avoid working during rain, high winds, or extreme temperatures for safety reasons. We'll coordinate with you to schedule installation during optimal conditions and keep you informed of any weather-related adjustments.",
    category: "installation",
  },
  {
    question: "How long do the LED lights last?",
    answer:
      "Our commercial-grade LED fixtures are rated for 50,000+ hours of use. With typical usage, that's approximately 15-20 years before needing replacement. Plus, our lifetime warranty covers any premature failures.",
    category: "product",
  },
  {
    question: "Are the lights visible during the day?",
    answer:
      "Our lighting systems are designed to be virtually invisible during daylight hours. The low-profile channels and fixtures blend seamlessly with your roofline, trim, and architectural features. You'll only notice them when they're on.",
    category: "product",
  },
  {
    question: "How do I control the lights?",
    answer:
      "Control is through a user-friendly smartphone app (iOS and Android). You can change colors, set schedules, create custom patterns, and sync with holidays—all from anywhere. We also offer optional integration with smart home systems like Alexa and Google Home.",
    category: "product",
  },
  {
    question: "Can I set the lights to turn on and off automatically?",
    answer:
      "Absolutely! The app includes scheduling features that let you set lights to turn on at sunset and off at a specific time, or use sunrise/sunset automation. You can create different schedules for different days of the week.",
    category: "product",
  },
  {
    question: "What does the lifetime warranty cover?",
    answer:
      "Our comprehensive lifetime warranty covers all LED fixtures, control components, and installation workmanship for as long as you own your home. If anything fails or stops working properly, we'll repair or replace it at no cost to you.",
    category: "warranty",
  },
  {
    question: "Is the warranty transferable if I sell my home?",
    answer:
      "Yes, our warranty transfers to new homeowners, which can be a valuable selling point for your property. We'll provide documentation to help facilitate the transfer during the sale process.",
    category: "warranty",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve the greater Sacramento region including Sacramento, Roseville, Rocklin, Folsom, El Dorado Hills, Rancho Cordova, Citrus Heights, Orangevale, Fair Oaks, Loomis, Auburn, and Grass Valley. If you're within 50 miles of Sacramento, we can likely help.",
    category: "service-area",
  },
  {
    question: "Do you work with HOAs?",
    answer:
      "Yes, we regularly work with homeowners in HOA communities. Our tasteful, professional installations typically meet or exceed HOA guidelines. We can provide documentation and design plans to help with your HOA approval process if needed.",
    category: "service-area",
  },
  {
    question: "How do I maintain my permanent lighting?",
    answer:
      "Maintenance is minimal! We recommend a visual inspection once or twice a year and occasional cleaning of the fixtures if they accumulate dirt or debris. Our warranty covers any maintenance issues, and we offer annual check-up services for peace of mind.",
    category: "warranty",
  },
];

export const getFAQItems = (category?: string) => {
  if (!category) return faqItems;
  return faqItems.filter((item) => item.category === category);
};

export const getFAQCategories = () => {
  const categories = Array.from(new Set(faqItems.map((item) => item.category)));
  const labels: Record<string, string> = {
    pricing: "Pricing & Financing",
    installation: "Installation",
    product: "Product & Features",
    warranty: "Warranty & Maintenance",
    "service-area": "Service Area",
  };
  return categories.map((cat) => ({ value: cat, label: labels[cat] || cat }));
};
