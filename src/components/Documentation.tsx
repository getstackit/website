import { Subheading } from '@/components/elements/subheading'
import { Text } from '@/components/elements/text'

export default function Documentation() {
  return (
    <section id="documentation" className="py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-mist-900 dark:text-mist-100 sm:text-4xl">
            Documentation
          </h2>
          <p className="mt-4 text-lg text-mist-600 dark:text-mist-400">
            Learn more about Stackit&apos;s features and advanced workflows:
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <a href="https://github.com/getstackit/stackit#getting-started" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-mist-200 bg-white p-6 dark:border-mist-800 dark:bg-mist-950 hover:border-mist-300 dark:hover:border-mist-700 transition-colors">
            <Subheading className="mb-3">📖 Getting Started Guide</Subheading>
            <Text>Complete walkthrough for new users including installation, setup, and your first stack.</Text>
          </a>

          <a href="https://github.com/getstackit/stackit#command-reference" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-mist-200 bg-white p-6 dark:border-mist-800 dark:bg-mist-950 hover:border-mist-300 dark:hover:border-mist-700 transition-colors">
            <Subheading className="mb-3">📚 Command Reference</Subheading>
            <Text>Complete reference for all stackit commands with examples and options.</Text>
          </a>

          <a href="https://github.com/getstackit/stackit#common-workflows" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-mist-200 bg-white p-6 dark:border-mist-800 dark:bg-mist-950 hover:border-mist-300 dark:hover:border-mist-700 transition-colors">
            <Subheading className="mb-3">🎓 Common Workflows</Subheading>
            <Text>Learn common patterns like creating stacks, handling reviews, and syncing with main.</Text>
          </a>

          <a href="https://github.com/getstackit/stackit#configuration" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-mist-200 bg-white p-6 dark:border-mist-800 dark:bg-mist-950 hover:border-mist-300 dark:hover:border-mist-700 transition-colors">
            <Subheading className="mb-3">⚙️ Configuration</Subheading>
            <Text>Customize Stackit&apos;s behavior with repository and global configuration options.</Text>
          </a>

          <a href="https://github.com/getstackit/stackit/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-mist-200 bg-white p-6 dark:border-mist-800 dark:bg-mist-950 hover:border-mist-300 dark:hover:border-mist-700 transition-colors">
            <Subheading className="mb-3">🤝 Contributing</Subheading>
            <Text>Want to contribute? Learn about the project structure and development workflow.</Text>
          </a>

          <a href="#faq" className="rounded-lg border border-mist-200 bg-white p-6 dark:border-mist-800 dark:bg-mist-950 hover:border-mist-300 dark:hover:border-mist-700 transition-colors">
            <Subheading className="mb-3">❓ FAQ</Subheading>
            <Text>Common questions and troubleshooting tips for working with stacked changes.</Text>
          </a>
        </div>

        <div className="mt-16 rounded-lg border border-mist-200 bg-mist-50 p-8 dark:border-mist-800 dark:bg-mist-900">
          <Subheading className="mb-4">Need Help?</Subheading>
          <Text className="mb-4">
            Run <code className="rounded bg-mist-200 dark:bg-mist-800 text-mist-900 dark:text-mist-100 px-2 py-1 text-sm">stackit --help</code> or{' '}
            <code className="rounded bg-mist-200 dark:bg-mist-800 text-mist-900 dark:text-mist-100 px-2 py-1 text-sm">stackit [command] --help</code> to see detailed command information.
          </Text>
          <Text>
            Found a bug or have a feature request?{' '}
            <a
              href="https://github.com/getstackit/stackit/issues"
              className="text-mist-600 hover:text-mist-700 dark:text-mist-400 dark:hover:text-mist-300"
            >
              Open an issue on GitHub
            </a>.
          </Text>
        </div>
      </div>
    </section>
  )
}