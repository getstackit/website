import { ButtonLink, PlainButtonLink } from '@/components/elements/button'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import { TerminalDemo } from '@/components/elements/terminal-output'

export default function Hero() {
  return (
    <section id="hero" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-mist-900 dark:text-mist-100 sm:text-6xl">
                Ship Features Faster with Smaller, Focused Pull Requests
              </h1>
              <p className="mt-6 text-lg leading-8 text-mist-600 dark:text-mist-400">
                Break large changes into logical steps. Review in parallel. Merge incrementally. Stackit handles the complexity.
              </p>
              <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
                <ButtonLink href="#problem">
                  See How It Works
                </ButtonLink>
                <PlainButtonLink href="#installation">
                  Get Started <ArrowNarrowRightIcon />
                </PlainButtonLink>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <TerminalDemo className="text-left">
{`● feat/add-ui-components ← you are here
│ PR #125 🔨 Draft
│
○ feat/implement-logic
│ PR #124 ← In Review
│
○ feat/add-api-endpoints
│ PR #123 ✓ Approved
│
main

3 branches · 2 approved · 1 in review`}
              </TerminalDemo>
              <p className="mt-3 text-sm text-center text-mist-500 dark:text-mist-500">
                Visualize your entire stack with <code className="bg-mist-200 dark:bg-mist-800 text-mist-900 dark:text-mist-100 px-1.5 py-0.5 rounded">stackit log</code>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}