export const ExternalLink = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-cyan-400 underline transition-colors hover:text-cyan-300"
  >
    {children}
  </a>
);
