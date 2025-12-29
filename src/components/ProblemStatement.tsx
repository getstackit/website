import { Subheading } from '@/components/elements/subheading'
import { Text } from '@/components/elements/text'

export default function ProblemStatement() {
  return (
    <section id="problem" className="py-16 bg-mist-50 dark:bg-mist-900/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Problem Section */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-mist-900 dark:text-mist-100 sm:text-4xl">
            The Problem with Large Pull Requests
          </h2>
          <Text className="mt-6">
            Traditional development workflows create bottlenecks that slow down shipping velocity and reduce code quality.
          </Text>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-20">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-3xl dark:bg-red-900/30">
              ⏰
            </div>
            <Subheading className="mb-3">Review Bottlenecks</Subheading>
            <Text className="text-sm">
              500-line PRs sit for days. Reviewers get overwhelmed and fatigued, leading to rushed or superficial reviews.
            </Text>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100 text-3xl dark:bg-yellow-900/30">
              🚧
            </div>
            <Subheading className="mb-3">Blocking Workflow</Subheading>
            <Text className="text-sm">
              Can't start the next task while waiting for approval. Your productivity stalls between reviews.
            </Text>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-3xl dark:bg-orange-900/30">
              ⚠️
            </div>
            <Subheading className="mb-3">Risky Merges</Subheading>
            <Text className="text-sm">
              Big changes mean big conflicts and hard-to-debug issues. One massive merge can break production.
            </Text>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-3xl dark:bg-gray-800/30">
              📚
            </div>
            <Subheading className="mb-3">Poor History</Subheading>
            <Text className="text-sm">
              One massive commit doesn't tell the story. Future developers struggle to understand the evolution.
            </Text>
          </div>
        </div>

        {/* Solution Section */}
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-mist-900 dark:text-mist-100 sm:text-4xl">
            Enter Stacked Changes
          </h2>
          <Text className="mt-6">
            Break large features into a sequence of small, focused branches. Each branch builds on the previous one, creating a "stack" of reviewable PRs.
          </Text>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-16 items-center">
          <div>
            <div className="rounded-lg border-2 border-red-200 bg-white p-8 dark:border-red-900/50 dark:bg-mist-950">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/30 text-2xl mb-4">
                  😰
                </div>
                <Subheading className="mb-4 text-red-900 dark:text-red-400">Traditional Workflow</Subheading>
                <div className="space-y-3 text-sm text-left">
                  <div className="flex items-start gap-2">
                    <span className="text-red-600 dark:text-red-500 mt-0.5">✗</span>
                    <Text className="text-sm">One 500-line PR with everything mixed together</Text>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-600 dark:text-red-500 mt-0.5">✗</span>
                    <Text className="text-sm">Waits days for review while work blocks</Text>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-600 dark:text-red-500 mt-0.5">✗</span>
                    <Text className="text-sm">Reviewers struggle to understand context</Text>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-600 dark:text-red-500 mt-0.5">✗</span>
                    <Text className="text-sm">All-or-nothing deployment risk</Text>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-lg border-2 border-green-200 bg-white p-8 dark:border-green-900/50 dark:bg-mist-950">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 text-2xl mb-4">
                  🚀
                </div>
                <Subheading className="mb-4 text-green-900 dark:text-green-400">Stacked Workflow</Subheading>
                <div className="space-y-3 text-sm text-left">
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-500 mt-0.5">✓</span>
                    <Text className="text-sm">Five 100-line PRs, each focused on one thing</Text>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-500 mt-0.5">✓</span>
                    <Text className="text-sm">Reviews happen in parallel, don't block work</Text>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-500 mt-0.5">✓</span>
                    <Text className="text-sm">Each PR tells a clear, logical story</Text>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-500 mt-0.5">✓</span>
                    <Text className="text-sm">Ship incrementally as parts get approved</Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 mx-auto max-w-3xl">
          <div className="rounded-lg border border-mist-200 bg-white p-8 dark:border-mist-800 dark:bg-mist-950">
            <Text className="text-center">
              <strong>Each PR is one logical step, building on the previous:</strong> Add API → Implement Logic → Build UI → Add Tests.
              Reviewers can focus on one change at a time, provide better feedback, and approve faster.
            </Text>
          </div>
        </div>
      </div>
    </section>
  )
}
