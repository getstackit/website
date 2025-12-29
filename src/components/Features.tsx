import { Subheading } from '@/components/elements/subheading'
import { Text } from '@/components/elements/text'
import { TerminalDemo } from '@/components/elements/terminal-output'

export default function Features() {
  return (
    <section id="features" className="py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-mist-900 dark:text-mist-100 sm:text-4xl">
            Everything You Need for Stacked Workflows
          </h2>
          <Text className="mt-6">
            Stackit provides a complete toolkit for managing stacked changes, from visualization to automation.
          </Text>
        </div>

        {/* Core Workflow Features */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-mist-900 dark:text-mist-100 mb-8 text-center">Core Workflow</h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-mist-100 text-3xl dark:bg-mist-900">🌳</div>
              <Subheading className="mb-3">Visual Branch Tree</Subheading>
              <Text className="text-sm">See your entire stack at a glance with <code className="text-xs bg-mist-200 dark:bg-mist-800 text-mist-900 dark:text-mist-100 px-1.5 py-0.5 rounded">stackit log</code></Text>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-mist-100 text-3xl dark:bg-mist-900">🔄</div>
              <Subheading className="mb-3">Automatic Restacking</Subheading>
              <Text className="text-sm">Keep branches synced when base changes. No manual rebasing.</Text>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-mist-100 text-3xl dark:bg-mist-900">🚀</div>
              <Subheading className="mb-3">One-Command Submission</Subheading>
              <Text className="text-sm">Push and create PRs for entire stack with proper dependencies.</Text>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-mist-100 text-3xl dark:bg-mist-900">🔀</div>
              <Subheading className="mb-3">Smart Merging</Subheading>
              <Text className="text-sm">Merge approved PRs bottom-up automatically with cleanup.</Text>
            </div>
          </div>
        </div>

        {/* Visual Demo */}
        <div className="mb-16 mx-auto max-w-3xl">
          <TerminalDemo>
{`$ stackit log --full

● feat/add-ui-components ← you are here
│ PR #125 🔨 Draft · CI: 🔄 Running
│ 1 commit · Updated just now
│
○ feat/implement-logic
│ PR #124 👀 In Review · CI: ✓ Passing
│ 3 commits · Updated 1h ago
│
○ feat/add-api-endpoints
│ PR #123 ✓ Approved · CI: ✓ Passing
│ 2 commits · Updated 2h ago
│
main

3 branches · 6 commits · 2 approved`}
          </TerminalDemo>
        </div>

        {/* Advanced Editing Features */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-mist-900 dark:text-mist-100 mb-8 text-center">Advanced Editing</h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-mist-100 text-3xl dark:bg-mist-900">✨</div>
              <Subheading className="mb-3">Absorb Changes</Subheading>
              <Text className="text-sm">Automatically amend uncommitted changes to the right commits.</Text>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-mist-100 text-3xl dark:bg-mist-900">✂️</div>
              <Subheading className="mb-3">Split Branches</Subheading>
              <Text className="text-sm">Break commits into separate focused branches retroactively.</Text>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-mist-100 text-3xl dark:bg-mist-900">↩️</div>
              <Subheading className="mb-3">Safe Undo</Subheading>
              <Text className="text-sm">Restore repository state before any stackit command instantly.</Text>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-mist-100 text-3xl dark:bg-mist-900">📦</div>
              <Subheading className="mb-3">Squash & Fold</Subheading>
              <Text className="text-sm">Combine commits on a branch or merge branch into parent.</Text>
            </div>
          </div>
        </div>

        {/* Organization & Automation Features */}
        <div>
          <h3 className="text-xl font-semibold text-mist-900 dark:text-mist-100 mb-8 text-center">Organization & Automation</h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-mist-100 text-3xl dark:bg-mist-900">🏷️</div>
              <Subheading className="mb-3">Scope Tracking</Subheading>
              <Text className="text-sm">Associate branches with Jira tickets or Linear IDs for organization.</Text>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-mist-100 text-3xl dark:bg-mist-900">🔁</div>
              <Subheading className="mb-3">Batch Operations</Subheading>
              <Text className="text-sm">Run commands across your stack with <code className="text-xs bg-mist-200 dark:bg-mist-800 text-mist-900 dark:text-mist-100 px-1.5 py-0.5 rounded">foreach</code></Text>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-mist-100 text-3xl dark:bg-mist-900">🤖</div>
              <Subheading className="mb-3">AI Integration</Subheading>
              <Text className="text-sm">Works seamlessly with Cursor and Claude Code for AI-powered workflows.</Text>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-mist-100 text-3xl dark:bg-mist-900">🗑️</div>
              <Subheading className="mb-3">Auto Cleanup</Subheading>
              <Text className="text-sm">Automatically detect and remove merged branches with sync.</Text>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}