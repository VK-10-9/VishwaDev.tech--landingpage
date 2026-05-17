"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const faqData = [
  {
    category: "Getting Started",
    questions: [
      {
        question: "Who makes up the VishwaDev community?",
        answer: "We are an exclusive, tight-knit group of 15 passionate developers. We focus on building high-quality software, learning from one another, and solving complex problems together."
      },
      {
        question: "Can anyone join VishwaDev?",
        answer: "Currently, our community is invite-only to maintain our focus on quality and close collaboration. However, we occasionally open up spots for exceptional developers who share our passion."
      },
      {
        question: "What is your main focus?",
        answer: "We operate as a collective of passionate developers. We build tools for ourselves and our clients, focusing entirely on code quality and innovation."
      }
    ]
  },
  {
    category: "Projects & Showcase",
    questions: [
      {
        question: "What types of projects can I showcase?",
        answer: "You can showcase any technology project including web applications, mobile apps, AI/ML projects, IoT devices, blockchain applications, and more. We welcome innovation across all tech domains."
      },
      {
        question: "How do I submit my project?",
        answer: "Use the 'Submit Project' button in the navigation to add your project. Include a description, tech stack, live demo link, and GitHub repository for the best showcase."
      },
      {
        question: "Can I edit my projects after submission?",
        answer: "Yes! You can edit your project details, update descriptions, change links, and modify your showcase at any time through your dashboard."
      }
    ]
  },
  {
    category: "VishwaDev Labs",
    questions: [
      {
        question: "What is VishwaDev Labs?",
        answer: "VishwaDev Labs is our exclusive incubation program that identifies promising student projects and provides mentorship, resources, and funding opportunities to transform them into viable startups."
      },
      {
        question: "How do I apply to VishwaDev Labs?",
        answer: "Click on 'Apply to VishwaDev Labs' on our homepage or visit the VishwaDev Labs section. You'll need to submit your project, business plan, and go through our selection process."
      },
      {
        question: "What support does VishwaDev Labs provide?",
        answer: "We provide expert mentorship, seed funding opportunities, access to investor networks, technical resources, and guidance to help transform your project into a successful startup."
      }
    ]
  },
  {
    category: "Community",
    questions: [
      {
        question: "How do we collaborate?",
        answer: "As a small team of 15, we work closely on GitHub, chat daily on our private Discord, and host weekly code reviews to ensure everything we ship is top-tier."
      },
      {
        question: "Do you take on client work?",
        answer: "Yes! Through VishwaDev Labs, our elite 15-person team takes on select client projects, delivering custom web and mobile apps with unparalleled attention to detail."
      },
      {
        question: "What's the main goal of VishwaDev?",
        answer: "Our goal is simple: write beautiful code, build meaningful projects, and grow together as a small, focused team of elite developers."
      }
    ]
  }
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <button
        className="w-full p-4 text-left flex justify-between items-center hover:bg-muted transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-foreground">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-muted-foreground" />
        ) : (
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        )}
      </button>
      {isOpen && (
        <div className="p-4 pt-0 border-t border-border">
          <p className="text-muted-foreground leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-16 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Frequently Asked Questions
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about VishwaDev, our platform features, and how to get the most out of your developer journey.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 border-b border-border pb-2">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => (
                  <FAQItem
                    key={faqIndex}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Still have questions?
          </h2>
          <p className="text-muted-foreground mb-6">
            Can&apos;t find the answer you&apos;re looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/support"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              Contact Support
            </Link>
            <Link
              href="/discord"
              className="border border-border px-6 py-3 rounded-md font-medium hover:bg-muted transition-colors"
            >
              Join Discord</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
