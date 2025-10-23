export const CodeBlock = ({ children }) => (
  <pre className="mt-4 overflow-x-auto rounded-lg border border-gray-300 bg-gray-200 p-4 dark:border-gray-700 dark:bg-gray-900">
    <code className="font-mono text-sm whitespace-pre-wrap text-indigo-600 dark:text-yellow-300">
      {children}
    </code>
  </pre>
);
