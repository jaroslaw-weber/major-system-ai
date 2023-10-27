import GitHubButton from "react-github-btn";

export function Footer() {
  return (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content">
      <aside className="items-center grid-flow-col hidden md:block">
        <p>Support this project by giving a star on github!</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end fill-white">
        <GitHubButton
          href="https://github.com/jaroslaw-weber/major-system-ai"
          data-color-scheme="no-preference: dark; dark: dark; dark: dark;"
          data-size="large"
          data-show-count="false"
          aria-label="Star jaroslaw-weber/major-system-ai on GitHub"
        >
          Github
        </GitHubButton>
        <GitHubButton
          href="https://github.com/jaroslaw-weber/major-system-ai"
          data-color-scheme="no-preference: dark; dark: dark; dark: dark;"
          data-icon="octicon-star"
          data-size="large"
          data-show-count="true"
          aria-label="Star jaroslaw-weber/major-system-ai on GitHub"
        >
          Star
        </GitHubButton>
      </nav>
    </footer>
  );
}
