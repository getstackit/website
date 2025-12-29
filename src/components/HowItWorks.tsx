import { Subheading } from '@/components/elements/subheading'
import { Text } from '@/components/elements/text'
import { TerminalOutput, TerminalDemo } from '@/components/elements/terminal-output'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-mist-900 dark:text-mist-100 sm:text-4xl">
            How It Works
          </h2>
          <Text className="mt-6">
            Stackit makes stacked workflows simple with an intuitive, step-by-step process.
          </Text>
        </div>

        <div className="space-y-16">
          {/* Step 1 */}
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="lg:order-1">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-mist-500 text-white font-bold mb-4">
                1
              </div>
              <Subheading className="mb-4">Create Stacked Branches</Subheading>
              <Text className="mb-4">
                Build your feature incrementally. Each branch represents one logical change that builds on the previous.
              </Text>
              <Text className="text-sm">
                Use <code className="text-xs bg-mist-200 dark:bg-mist-800 text-mist-900 dark:text-mist-100 px-1.5 py-0.5 rounded">stackit create</code> to create a new branch with a clear message describing what it does.
              </Text>
            </div>
            <div className="lg:order-2">
              <TerminalOutput command="stackit create add-api -m 'feat: add API endpoints'">
{`✓ Created branch feat/add-api-endpoints from main
✓ Switched to feat/add-api-endpoints

# Make your changes...
# git add .`}
              </TerminalOutput>
              <div className="mt-4">
                <TerminalOutput command="stackit create add-logic -m 'feat: implement business logic'">
{`✓ Created branch feat/implement-logic from feat/add-api-endpoints
✓ Switched to feat/implement-logic`}
                </TerminalOutput>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="lg:order-2">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-mist-500 text-white font-bold mb-4">
                2
              </div>
              <Subheading className="mb-4">Visualize Your Stack</Subheading>
              <Text className="mb-4">
                See the structure of your stack at any time. Understand which branches depend on which, and where you are.
              </Text>
              <Text className="text-sm">
                The <code className="text-xs bg-mist-200 dark:bg-mist-800 text-mist-900 dark:text-mist-100 px-1.5 py-0.5 rounded">stackit log</code> command shows your branch tree with colors, status, and current position.
              </Text>
            </div>
            <div className="lg:order-1">
              <TerminalOutput command="stackit log">
{`● feat/implement-logic ← you are here
│ 1 commit
│
○ feat/add-api-endpoints
│ 2 commits
│
main`}
              </TerminalOutput>
            </div>
          </div>

          {/* Step 3 */}
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="lg:order-1">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-mist-500 text-white font-bold mb-4">
                3
              </div>
              <Subheading className="mb-4">Submit as Pull Requests</Subheading>
              <Text className="mb-4">
                Push all branches and create PRs in one command. Stackit sets up proper dependencies so reviewers see the right context.
              </Text>
              <Text className="text-sm">
                Use <code className="text-xs bg-mist-200 dark:bg-mist-800 text-mist-900 dark:text-mist-100 px-1.5 py-0.5 rounded">--stack</code> to submit the entire stack, or submit individual branches as needed.
              </Text>
            </div>
            <div className="lg:order-2">
              <TerminalOutput command="stackit submit --stack">
{`Pushing feat/add-api-endpoints... ✓
Creating PR for feat/add-api-endpoints...
  ✓ Created PR #123: feat: add API endpoints

Pushing feat/implement-logic... ✓
Creating PR for feat/implement-logic...
  ✓ Created PR #124: feat: implement business logic
  ↳ Depends on PR #123

2 PRs created successfully!`}
              </TerminalOutput>
            </div>
          </div>

          {/* Step 4 */}
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="lg:order-2">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-mist-500 text-white font-bold mb-4">
                4
              </div>
              <Subheading className="mb-4">Auto-Restack When Base Changes</Subheading>
              <Text className="mb-4">
                When main updates or a PR gets changes, stackit automatically rebases all dependent branches. No manual work.
              </Text>
              <Text className="text-sm">
                Run <code className="text-xs bg-mist-200 dark:bg-mist-800 text-mist-900 dark:text-mist-100 px-1.5 py-0.5 rounded">stackit sync</code> to pull latest main, delete merged branches, and restack everything.
              </Text>
            </div>
            <div className="lg:order-1">
              <TerminalOutput command="stackit sync">
{`Fetching origin... ✓
Pulling main... ✓ (3 new commits)
Cleaning up merged branches... ✓ (deleted feat/add-api-endpoints)

Restacking remaining branches...
  Rebasing feat/implement-logic onto main... ✓

1 branch restacked successfully!`}
              </TerminalOutput>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="mt-16 mx-auto max-w-3xl">
          <div className="rounded-lg border border-mist-200 bg-mist-50 p-8 dark:border-mist-800 dark:bg-mist-950">
            <Subheading className="mb-4 text-center">That's It!</Subheading>
            <Text className="text-center">
              Create logical branches → Visualize the stack → Submit as PRs → Let stackit handle the rest.
              You stay focused on building, while stackit manages the complexity of keeping everything in sync.
            </Text>
          </div>
        </div>
      </div>
    </section>
  )
}
