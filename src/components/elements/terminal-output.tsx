'use client'

import { clsx } from 'clsx/lite'
import { useState } from 'react'
import type { ComponentProps } from 'react'

export function TerminalOutput({
  command,
  children,
  className,
  showPrompt = true,
  ...props
}: {
  command?: string
  showPrompt?: boolean
} & ComponentProps<'div'>) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    if (command) {
      navigator.clipboard.writeText(command)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div
      className={clsx(
        'relative overflow-hidden rounded-lg border border-mist-800 bg-mist-950 font-mono text-sm',
        className,
      )}
      {...props}
    >
      {command && (
        <div className="flex items-start gap-2 border-b border-mist-800 bg-mist-900/50 px-4 py-3">
          {showPrompt && <span className="text-mist-500 select-none">$</span>}
          <span className="flex-1 text-mist-100">{command}</span>
          <button
            onClick={handleCopy}
            className="text-mist-400 hover:text-mist-200 transition-colors"
            title="Copy command"
          >
            {copied ? (
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            )}
          </button>
        </div>
      )}
      <div className="px-4 py-3 text-mist-300 whitespace-pre-wrap">{children}</div>
    </div>
  )
}

export function TerminalDemo({
  className,
  children,
  ...props
}: ComponentProps<'div'>) {
  return (
    <div
      className={clsx(
        'rounded-lg border border-mist-800 bg-mist-950 font-mono text-sm p-4 text-mist-300 whitespace-pre-wrap',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
