'use client'

import { useState } from 'react'
import { Subheading } from '@/components/elements/subheading'
import { Text } from '@/components/elements/text'
import { clsx } from 'clsx/lite'

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-mist-200 dark:border-mist-800">
      <button
        className="flex w-full items-start justify-between py-6 text-left"
        onClick={onToggle}
      >
        <Subheading className="flex-1 pr-4">{question}</Subheading>
        <span className="flex-shrink-0 text-mist-500">
          <svg
            className={clsx('h-6 w-6 transition-transform', isOpen && 'rotate-180')}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className="pb-6">
          <Text>{answer}</Text>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'What are stacked changes?',
      answer: 'A workflow where you break large features into a sequence of small, dependent branches—each branch builds on the previous one, creating a "stack" of focused PRs. Instead of one massive 500-line PR, you create five 100-line PRs that can be reviewed in parallel.',
    },
    {
      question: 'How is this different from regular git branches?',
      answer: 'Stackit tracks parent-child relationships between branches and automatically restacks dependent branches when their base changes. Regular git requires you to manually rebase each branch when the parent is modified, which is error-prone and time-consuming.',
    },
    {
      question: 'What happens when main is updated?',
      answer: 'Run `stackit sync` to pull the latest main, automatically delete merged branches, and restack all your remaining branches onto the new main. Stackit handles all the rebasing complexity for you.',
    },
    {
      question: 'Can I use this with existing branches?',
      answer: 'Yes! Use `stackit track` to start managing existing branches with stackit. You can also run `stackit init` in a repository that already has branches, and stackit will work alongside your current workflow.',
    },
    {
      question: 'What if a PR in the middle of my stack gets changes?',
      answer: 'Make your changes on that branch, run `stackit modify` (like `git commit --amend`), then run `stackit restack` to automatically rebase all child branches onto your updated branch. Stackit ensures the entire stack stays consistent.',
    },
    {
      question: 'Does this work with Bitbucket or GitLab?',
      answer: 'Stackit is currently optimized for GitHub via the `gh` CLI, which provides automatic PR creation with dependencies. Other platforms work for local branch management, but you\'ll need to create PRs manually. GitHub integration offers the best experience.',
    },
    {
      question: 'How does undo work?',
      answer: 'Stackit automatically snapshots your repository state before operations. If something goes wrong, `stackit undo` restores to the previous snapshot. Think of it as Time Machine for git operations—you can safely experiment knowing you can always undo.',
    },
    {
      question: 'Is there a limit to stack size?',
      answer: 'No hard limit, but 3-5 branches per stack is the sweet spot for reviewability. This keeps each PR focused and reviews manageable. Larger stacks work technically but may lose the benefit of small, focused reviews.',
    },
  ]

  return (
    <section id="faq" className="py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-mist-900 dark:text-mist-100 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <Text className="mt-6">
            Common questions about stacked changes and how stackit works.
          </Text>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="divide-y divide-mist-200 dark:divide-mist-800">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 mx-auto max-w-2xl text-center">
          <Text>
            Have more questions?{' '}
            <a href="https://github.com/getstackit/stackit/issues" className="text-mist-900 dark:text-mist-100 font-medium hover:underline">
              Open an issue on GitHub
            </a>{' '}
            or check out the{' '}
            <a href="https://github.com/getstackit/stackit#readme" className="text-mist-900 dark:text-mist-100 font-medium hover:underline">
              full documentation
            </a>.
          </Text>
        </div>
      </div>
    </section>
  )
}
