import { Subheading } from '@/components/elements/subheading'
import { Text } from '@/components/elements/text'

export default function UseCases() {
  return (
    <section id="use-cases" className="py-16 bg-mist-50 dark:bg-mist-900/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-mist-900 dark:text-mist-100 sm:text-4xl">
            When to Use Stackit
          </h2>
          <Text className="mt-6">
            Stackit shines in scenarios where breaking work into focused, reviewable pieces accelerates development.
          </Text>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {/* Use Case 1 */}
          <div className="rounded-lg border border-mist-200 bg-white p-8 dark:border-mist-800 dark:bg-mist-950">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-3xl dark:bg-blue-900/30">
                  🏗️
                </div>
              </div>
              <div>
                <Subheading className="mb-3">Large Feature Development</Subheading>
                <Text className="mb-4 text-sm">
                  Building a feature that requires API changes, business logic, UI components, and tests?
                  Stack them in order—each PR focused, each reviewable in minutes.
                </Text>
                <div className="rounded bg-mist-50 dark:bg-mist-900 p-4 text-sm">
                  <Text className="text-sm font-medium mb-2">Example Stack:</Text>
                  <ul className="space-y-1 text-xs text-mist-600 dark:text-mist-400">
                    <li>PR #1: Add API endpoints (50 lines)</li>
                    <li>PR #2: Implement business logic (75 lines)</li>
                    <li>PR #3: Build UI components (100 lines)</li>
                    <li>PR #4: Add integration tests (40 lines)</li>
                  </ul>
                </div>
                <Text className="mt-4 text-sm italic text-mist-500 dark:text-mist-500">
                  "Don't wait for approval before building the next layer"
                </Text>
              </div>
            </div>
          </div>

          {/* Use Case 2 */}
          <div className="rounded-lg border border-mist-200 bg-white p-8 dark:border-mist-800 dark:bg-mist-950">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-3xl dark:bg-purple-900/30">
                  ⚙️
                </div>
              </div>
              <div>
                <Subheading className="mb-3">Refactoring Projects</Subheading>
                <Text className="mb-4 text-sm">
                  Breaking up legacy code requires many small, careful changes. Each refactor step becomes
                  a separate PR that's easy to review and safe to merge.
                </Text>
                <div className="rounded bg-mist-50 dark:bg-mist-900 p-4 text-sm">
                  <Text className="text-sm font-medium mb-2">Example Stack:</Text>
                  <ul className="space-y-1 text-xs text-mist-600 dark:text-mist-400">
                    <li>PR #1: Extract helper functions</li>
                    <li>PR #2: Move to new structure</li>
                    <li>PR #3: Update imports</li>
                    <li>PR #4: Remove deprecated code</li>
                  </ul>
                </div>
                <Text className="mt-4 text-sm italic text-mist-500 dark:text-mist-500">
                  "Make large refactors manageable and safe"
                </Text>
              </div>
            </div>
          </div>

          {/* Use Case 3 */}
          <div className="rounded-lg border border-mist-200 bg-white p-8 dark:border-mist-800 dark:bg-mist-950">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl dark:bg-green-900/30">
                  🔗
                </div>
              </div>
              <div>
                <Subheading className="mb-3">Dependency Chains</Subheading>
                <Text className="mb-4 text-sm">
                  Feature B needs Feature A, Feature C needs B. Express these dependencies clearly
                  through stacked PRs instead of waiting for sequential approval.
                </Text>
                <div className="rounded bg-mist-50 dark:bg-mist-900 p-4 text-sm">
                  <Text className="text-sm font-medium mb-2">Example Stack:</Text>
                  <ul className="space-y-1 text-xs text-mist-600 dark:text-mist-400">
                    <li>PR #1: Base authentication system</li>
                    <li>PR #2: Add OAuth provider (needs #1)</li>
                    <li>PR #3: Add user permissions (needs #2)</li>
                    <li>PR #4: Admin dashboard (needs #3)</li>
                  </ul>
                </div>
                <Text className="mt-4 text-sm italic text-mist-500 dark:text-mist-500">
                  "Express dependencies clearly in your PRs"
                </Text>
              </div>
            </div>
          </div>

          {/* Use Case 4 */}
          <div className="rounded-lg border border-mist-200 bg-white p-8 dark:border-mist-800 dark:bg-mist-950">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100 text-3xl dark:bg-yellow-900/30">
                  ⚡
                </div>
              </div>
              <div>
                <Subheading className="mb-3">Code Review Optimization</Subheading>
                <Text className="mb-4 text-sm">
                  Team struggling with large PR review fatigue? Switch to stacked changes.
                  Small PRs get faster, better feedback and keep the team moving.
                </Text>
                <div className="rounded bg-mist-50 dark:bg-mist-900 p-4 text-sm">
                  <Text className="text-sm font-medium mb-2">Impact:</Text>
                  <ul className="space-y-1 text-xs text-mist-600 dark:text-mist-400">
                    <li>50-line PRs: Reviewed in 5-10 minutes</li>
                    <li>Higher quality feedback per PR</li>
                    <li>Less reviewer fatigue</li>
                    <li>Faster iteration cycles</li>
                  </ul>
                </div>
                <Text className="mt-4 text-sm italic text-mist-500 dark:text-mist-500">
                  "50-line PRs review in minutes, not days"
                </Text>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 mx-auto max-w-2xl text-center">
          <div className="rounded-lg border border-mist-200 bg-white p-8 dark:border-mist-800 dark:bg-mist-950">
            <Subheading className="mb-3">Start Stacking Today</Subheading>
            <Text>
              Whether you're building new features, refactoring code, or optimizing team workflows,
              stackit helps you ship faster with better code quality.
            </Text>
          </div>
        </div>
      </div>
    </section>
  )
}
