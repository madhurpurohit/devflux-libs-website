import { ExternalLink } from "./ExternalLink";
import { CodeBlock } from "./CodeBlock";

export const GuideCard = ({ title, description, code, link }) => (
  <div className="flex h-full scroll-mt-20 flex-col rounded-lg bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-500/20 dark:bg-gray-800">
    <h3 className="mb-2 text-xl font-bold text-cyan-500 dark:text-cyan-400">
      {title}
    </h3>
    {description && (
      <div
        className="mb-4 flex-grow text-base text-gray-600 dark:text-gray-400"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    )}
    {code && <CodeBlock>{code}</CodeBlock>}
    {link && (
      <div className="mt-4">
        <ExternalLink href={link.href}>{link.text}</ExternalLink>
      </div>
    )}
  </div>
);
