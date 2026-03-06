"use client";

import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { faqs } from "@/data/site";

export function FaqList() {
  return (
    <div className="space-y-4">
      {faqs.map((faq) => (
        <Disclosure
          key={faq.question}
          as="div"
          className="rounded-[1.5rem] border border-pine/10 bg-sand/70 px-5 py-4 transition duration-300 hover:border-pine/20 hover:shadow-[0_14px_30px_rgba(41,68,54,0.08)]"
        >
          <DisclosureButton className="flex w-full items-center justify-between gap-4 text-left text-base font-semibold text-pine">
            <span>{faq.question}</span>
            <span className="text-xl leading-none text-bark/50">+</span>
          </DisclosureButton>
          <DisclosurePanel className="pt-3 text-sm leading-7 text-bark/75">
            {faq.answer}
          </DisclosurePanel>
        </Disclosure>
      ))}
    </div>
  );
}
