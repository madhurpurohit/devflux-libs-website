import { CheatSheetCard } from "../utils/CheatSheetCard";
import { handleLinkClick } from "../utils/handleLinkClick";

// Main data source for the Git & GitHub cheat sheet from PDF
const gitData = [
  {
    id: "introduction",
    category: "Introduction",
    items: [
      {
        title: "What is Git?",
        description:
          "<b>Git</b> is a version control system. It's free, open-source software installed on your local machine. It doesn't need an internet connection. It helps track changes in code, manage versions, and collaborate through branching and merging. It works on your computer.",
      },
      {
        title: "What is GitHub?",
        description:
          "<b>GitHub</b> is a website (cloud platform) that lets you host and share your Git repositories online. It's an online service provider/platform that needs an active internet connection. It provides services for storing, sharing, and collaborating on Git repositories with others.",
      },
      {
        title: "Git vs GitHub",
        description:
          "Git is the tool, GitHub is the place where you use the tool with others.",
      },
    ],
  },
  {
    id: "file-folder-commands",
    category: "File & Folder Commands (Terminal)",
    items: [
      {
        title: "Make Directory (Folder)",
        description: "Use `mkdir` to create folders.",
        code: `# Single Folder\nmkdir foldername\n\n# Multiple Folders\nmkdir folderone foldertwo`,
      },
      {
        title: "Create Files",
        description: "Use `touch` to create files.",
        code: `# Single File\ntouch filename.extension\n\n# Multiple Files\ntouch file1.txt file2.docx`,
      },
      {
        title: "Change Directory (Folder)",
        description: "Use `cd` to navigate between folders.",
        code: `# Go into a specific folder\ncd foldername\n\n# Go back one folder up (parent directory)\ncd ..\n\n# Go to home directory\ncd\ncd ~\n\n# Go to a specific path\ncd /path/to/folder\n\n# Go to the previous directory\ncd -`,
      },
      {
        title: "Check Working Directory Path",
        description:
          "Use `pwd` (print working directory) to see the full path of your current location.",
        code: `pwd`,
      },
      {
        title: "List Files & Directories",
        description: "Various `ls` commands to view folder contents.",
        code: `# List files & directories\nls\n\n# Long listing with details (permissions, size, date)\nls -l\n\n# Show all files including hidden (starting with .)\nls -a\n\n# Long list + show hidden files\nls -la\n\n# Human-readable sizes (KB, MB)\nls -lh\n\n# List recursively (files in subfolders too)\nls -R\n\n# Sort by time (newest first)\nls -t\n\n# Sort by size (largest first)\nls -S\n\n# Show only directories\nls -d */`,
      },
      {
        title: "Other Listing Commands",
        description: "More ways to view files and structures.",
        code: `# Show folder & file structure as a tree (requires install: brew install tree)\ntree\n\n# List all .js files in current directory & subdirectories\nfind . -name "*.js"\n\n# List folders/files with their sizes\ndu -sh *\n\n# List (print) contents of a text file\ncat filename.txt\n\n# View contents page-by-page (press 'q' to quit)\nless filename.txt`,
      },
    ],
  },
  {
    id: "git-config",
    category: "Git Configuration",
    items: [
      {
        title: "Configure Username & Email",
        description:
          "Set your identity for Git commits. Use `--global` to set for all repositories on your machine.",
        code: `git config --global user.name "Your Name"\ngit config --global user.email "your.email@example.com"`,
      },
      {
        title: "Local Configuration",
        description:
          "To use a different name/email for a specific repository, navigate into that repository's folder and run the config commands without `--global` (or use `--local`, which is the default).",
        code: `# Inside your project folder\ngit config user.name "Project Specific Name"\ngit config user.email "project.email@example.com"`,
      },
      {
        title: "View Configuration",
        description: "Check your configured username and email.",
        code: `# View global name\ngit config --global user.name\n\n# View global email\ngit config --global user.email\n\n# View all configurations (global and local)\ngit config --list\n# (Press 'q' to exit the list view)`,
      },
      {
        title: "Remove Configuration",
        description: "Unset specific or all global configurations.",
        code: `# Remove global username\ngit config --global --unset user.name\n\n# Remove global email\ngit config --global --unset user.email\n\n# Remove the entire global config file (use with caution)\nrm ~/.gitconfig`,
      },
      {
        title: "Change Default Editor",
        description:
          "Set VS Code as the default editor for Git operations like commit messages.",
        code: `git config --global core.editor "code --wait"`,
      },
      {
        title: "Change Default Branch Name",
        description:
          "Set the default initial branch name for new repositories (e.g., from `master` to `main`).",
        code: `git config --global init.defaultBranch main`,
      },
    ],
  },
  {
    id: "git-basics",
    category: "Git Basics",
    items: [
      {
        title: "Initialize Repository",
        description: "Create a new Git repository in the current folder.",
        code: `git init`,
      },
      {
        title: "Check Status",
        description:
          "See the status of your working directory and staging area (which files are modified, staged, or untracked).",
        code: `git status`,
      },
      {
        title: "Add Files to Staging Area",
        description: "Track files and prepare them for commit.",
        code: `# Add a single file\ngit add filename.ext\n\n# Add multiple specific files\ngit add file1.txt file2.js\n\n# Add all changes in the current directory and subdirectories\ngit add .\n# OR\ngit add -A`,
      },
      {
        title: "Remove Files from Staging (Unstage)",
        description:
          "If you added a file by mistake, you can remove it from the staging area.",
        code: `# Method 1: Keeps changes, just unstages\ngit restore --staged filename.ext\n\n# Method 2 (Older): Also keeps changes, just unstages\ngit reset HEAD filename.ext`,
      },
      {
        title: "Stop Tracking a File (but keep locally)",
        description:
          "To completely stop tracking a file (e.g., a config file accidentally added) but keep it in your folder. Use this carefully.",
        code: `git rm --cached filename.ext`,
      },
      {
        title: "Commit Changes",
        description:
          "Save your staged changes to the repository history with a descriptive message.",
        code: `git commit -m "Your descriptive commit message"`,
      },
      {
        title: "View Commit History (Logs)",
        description: "See the history of commits.",
        code: `# Show detailed log (press 'q' to exit)\ngit log\n\n# Show condensed log (one line per commit)\ngit log --oneline`,
      },
      {
        title: "Add and Commit in One Line",
        description: "Stage all changes and commit them with a message.",
        code: `git add . && git commit -m "Your message"`,
      },
      {
        title: "Track an Empty Folder",
        description:
          "Git doesn't track empty folders. To force tracking, create an empty file named `.gitkeep` inside the folder.",
        code: `# Create the file inside the empty folder\ntouch empty-folder/.gitkeep\n# Then add and commit the folder\ngit add empty-folder/\ngit commit -m "Add empty folder structure"`,
      },
    ],
  },
  {
    id: "gitignore",
    category: ".gitignore File",
    items: [
      {
        title: "Purpose",
        description:
          "A `.gitignore` file specifies intentionally untracked files that Git should ignore. Files already tracked by Git are not affected.",
      },
      {
        title: "Syntax Examples",
        description: "Common patterns used in `.gitignore`.",
        code: `# Ignore a specific file\nconfig.log\n\n# Ignore all files with .tmp extension\n*.tmp\n\n# Ignore a specific folder (and its contents)\nnode_modules/\n\n# Ignore files in any folder named 'logs'\nlogs/\n\n# Ignore file but not if it's in a specific subfolder\n!src/config.log`,
      },
      {
        title: "Finding Patterns",
        description:
          "Use a `.gitignore` generator website (like gitignore.io or search for 'gitignore generator') to find standard patterns for your specific project type (Node.js, Python, React, etc.).",
      },
    ],
  },
  {
    id: "branches",
    category: "Branches",
    items: [
      {
        title: "What is a Branch?",
        description:
          "A branch is like an independent timeline or workspace for your code. It allows you to work on new features or bug fixes without affecting the main codebase (`main` or `master` branch) until you're ready to merge.",
      },
      {
        title: "List Branches",
        description:
          "See all local branches. The current branch will be marked with an asterisk (*).",
        code: `git branch`,
      },
      {
        title: "HEAD Pointer",
        description:
          "`HEAD` is a pointer that indicates your current location in the Git history – usually pointing to the latest commit of the branch you are currently on.",
      },
      {
        title: "Create a New Branch",
        description: "Create a new branch based on your current location.",
        code: `git branch new-feature-branch`,
      },
      {
        title: "Switch Branches",
        description: "Move your working directory to a different branch.",
        code: `# Method 1\ngit checkout other-branch-name\n\n# Method 2 (Newer, recommended)\ngit switch other-branch-name`,
      },
      {
        title: "Create and Switch Branch",
        description: "Create a new branch and immediately switch to it.",
        code: `# Method 1\ngit checkout -b new-branch-name\n\n# Method 2 (Newer, recommended)\ngit switch -c new-branch-name`,
      },
    ],
  },
  {
    id: "merging",
    category: "Merging Branches",
    items: [
      {
        title: "Types of Merging",
        description:
          "<b>Fast-Forward Merge:</b> Occurs when the target branch hasn't diverged from the source branch. Git simply moves the target branch pointer forward. Easy, no merge commit created.<br><b>Non-Fast-Forward Merge (Three-Way Merge):</b> Occurs when both branches have new commits since they diverged. Git creates a new 'merge commit' that combines the changes from both branches. This preserves the history of both branches.",
      },
      {
        title: "Merge Command",
        description:
          "Combine changes from another branch into your current branch. <b>Make sure you are on the target branch first.</b>",
        code: `# Switch to the branch you want to merge INTO (e.g., main)\ngit switch main\n\n# Merge the other branch (e.g., feature-branch) INTO main\ngit merge feature-branch`,
      },
      {
        title: "Merge Conflicts",
        description:
          "If Git can't automatically combine changes (e.g., both branches modified the same line), a merge conflict occurs. You must manually edit the conflicted files to resolve the differences, then `git add` the resolved files and `git commit` to finalize the merge.",
      },
      {
        title: "Delete a Branch",
        description:
          "Delete a local branch. You cannot delete the branch you are currently on.",
        code: `# Delete a merged branch (safe)\ngit branch -d branch-to-delete\n\n# Force delete an unmerged branch (use with caution)\ngit branch -D branch-to-delete`,
      },
      {
        title: "Rename a Branch",
        description: "Rename a local branch.",
        code: `# Rename the current branch\ngit branch -m new-name\n\n# Rename another branch\ngit branch -m old-name new-name`,
      },
    ],
  },
  {
    id: "git-diff",
    category: "Git Diff",
    items: [
      {
        title: "Purpose",
        description:
          "`git diff` shows the line-by-line differences between various states in your repository (working directory, staging area, commits, branches).",
      },
      {
        title: "Common Diff Commands",
        description: "Compare different states.",
        code: `# 1. Changes Not Staged Yet\n# (Compare Working Directory vs. Staging Area)\ngit diff\n\n# 2. Changes Staged for Commit\n# (Compare Staging Area vs. Last Commit)\ngit diff --staged\n# OR\ngit diff --cached \n\n# 3. Compare Two Branches\n# (Show differences between the tips of two branches)\ngit diff branch1 branch2\n\n# 4. Compare Two Commits\n# (Show differences between two specific commits)\ngit diff commit_hash_1 commit_hash_2`,
      },
    ],
  },
  {
    id: "git-stash",
    category: "Git Stash",
    items: [
      {
        title: "Purpose",
        description:
          "`git stash` temporarily saves your uncommitted changes (both staged and unstaged) so you can switch branches or work on something else without committing incomplete work. It cleans your working directory.",
      },
      {
        title: "When to Use",
        description:
          "You have changes you're not ready to commit, but need to switch branches, pull updates, or fix an urgent bug without losing your current work.",
      },
      {
        title: "Common Stash Commands",
        description: "Manage your stashed changes.",
        code: `# 1. Save current changes to stash\ngit stash\n# OR save with a message\ngit stash save "Work in progress on feature X"\n\n# 2. List all stashes\ngit stash list\n\n# 3. Apply the latest stash (and keep it in the list)\ngit stash apply # Applies stash@{0}\n# Apply a specific stash\ngit stash apply stash@{2}\n\n# 4. Apply the latest stash (and remove it from the list)\ngit stash pop # Applies stash@{0}\n# Apply and remove a specific stash\ngit stash pop stash@{2}\n\n# 5. View changes in a stash\ngit stash show stash@{1}\n\n# 6. Delete the latest stash\ngit stash drop\n# Delete a specific stash\ngit stash drop stash@{1}\n\n# 7. Delete all stashes (use with caution)\ngit stash clear`,
      },
      {
        title: "Apply Stash to a Different Branch",
        description:
          "You can stash changes on one branch and apply them on another.",
        code: `# On branch 'feature-A'\ngit stash\n\n# Switch to another branch\ngit switch feature-B\n\n# Apply the stashed changes here\ngit stash pop`,
      },
    ],
  },
  {
    id: "git-tags",
    category: "Git Tags",
    items: [
      {
        title: "Purpose",
        description:
          "Tags mark specific points in history as important, typically used for releases (e.g., `v1.0`, `v2.1.3`). They act like bookmarks for specific commits.",
      },
      {
        title: "Types of Tags",
        description:
          "<b>Lightweight Tags:</b> Just a pointer to a specific commit. Simple name bookmarks.<br><b>Annotated Tags:</b> Store extra metadata (tagger name, email, date, message). Recommended for releases as they are like full objects in Git.",
      },
      {
        title: "Common Tag Commands",
        description: "Create and manage tags.",
        code: `# 1. List all tags\ngit tag\n\n# 2. Create a lightweight tag at the current commit\ngit tag v1.0.1\n\n# 3. Create an annotated tag at the current commit\ngit tag -a v1.0 -m "Release version 1.0"\n\n# 4. Tag a past commit\ngit tag v0.9 commit_hash\ngit tag -a v0.9 commit_hash -m "Tagging past commit"\n\n# 5. Show tag details and the commit it points to\ngit show v1.0\n\n# 6. Delete a tag locally\ngit tag -d v1.0.1\n\n# 7. Push a specific tag to remote (e.g., origin)\ngit push origin v1.0\n\n# 8. Push all local tags to remote\ngit push origin --tags\n\n# 9. Delete a remote tag (push an empty ref)\ngit push origin :refs/tags/v1.0.1\n# OR (newer syntax)\ngit push origin --delete v1.0.1\n\n# 10. Checkout the code state at a specific tag\ngit checkout v1.0`,
      },
    ],
  },
  {
    id: "git-rebase",
    category: "Git Rebase",
    items: [
      {
        title: "Purpose",
        description:
          "`git rebase` rewrites commit history. It takes commits from one branch and reapplies them on top of another branch's latest commit. This creates a cleaner, more linear history compared to merging.",
      },
      {
        title: "How it Works",
        description:
          "Imagine you're working on `feature-branch` which branched off `main`. Meanwhile, `main` has new commits. `git rebase main` (while on `feature-branch`) will: <br>1. Temporarily save your `feature-branch` commits. <br>2. Reset `feature-branch` to match the latest `main`. <br>3. Re-apply your saved commits one by one on top of the updated `main`.",
      },
      {
        title: "Caution!",
        description:
          "<b>Never rebase branches that are shared with others (e.g., `main`, `develop`, or any public branch).</b> Rebasing rewrites history, which can cause major problems if others have based their work on the original history you just changed.",
      },
      {
        title: "Common Rebase Commands",
        description: "Perform different types of rebase.",
        code: `# 1. Rebase current branch onto another branch\n# (Switch to your feature branch first)\ngit switch my-feature\n# Rebase onto main\ngit rebase main\n\n# 2. Interactive Rebase (Modify recent commits)\n# Rebase the last 3 commits interactively\ngit rebase -i HEAD~3\n# Rebase interactively starting *after* a specific commit\ngit rebase -i <commit_hash>\n\n# 3. Abort a rebase in progress (if things go wrong)\ngit rebase --abort\n\n# 4. Continue a rebase after resolving conflicts\ngit rebase --continue\n\n# 5. Pull latest changes using rebase instead of merge\ngit pull --rebase origin main`,
      },
      {
        title: "Interactive Rebase Actions (`rebase -i`)",
        description:
          "During an interactive rebase, you can edit the list of commits in your editor:<br>• <b>`pick` (p):</b> Use commit as is (default).<br>• <b>`reword` (r):</b> Edit the commit message.<br>• <b>`edit` (e):</b> Pause to amend the commit (change code, message, etc.).<br>• <b>`squash` (s):</b> Combine commit with the previous one (melds changes, prompts for new message).<br>• <b>`fixup` (f):</b> Combine commit with previous one (melds changes, discards this commit's message).<br>• <b>`drop` (d):</b> Remove the commit entirely.<br> Save and close the editor (`Esc` then `:x` or `:wq` in Vim) to proceed.",
      },
    ],
  },
  {
    id: "git-reflog",
    category: "Git Reflog",
    items: [
      {
        title: "Purpose",
        description:
          "`git reflog` shows a history of where `HEAD` (and branch tips) have pointed. It's your personal safety net, recording checkouts, commits, resets, rebases, merges – even if commits are no longer reachable by any branch ('lost'). `git log` only shows the current branch history.",
      },
      {
        title: "When to Use",
        description:
          "• Recovering a deleted branch.<br>• Finding 'lost' commits after a bad `reset` or `rebase`.<br>• Undoing a change by resetting to a previous state.",
      },
      {
        title: "Common Reflog Commands",
        description: "Navigate and use the reflog.",
        code: `# 1. Show the reflog for HEAD\ngit reflog\n\n# 2. Show reflog for a specific branch\ngit reflog show main\n\n# 3. Checkout a previous state temporarily\n# (HEAD@{n} refers to the nth entry from the top of 'git reflog')\ngit checkout HEAD@{5}\n\n# 4. Permanently reset current branch to a previous state\n# (Use with caution - discards subsequent commits)\ngit reset --hard HEAD@{2}\n\n# 5. Find a lost commit hash in reflog, then restore it\n# (Example: create a new branch from the lost commit)\ngit branch recovered-branch <lost_commit_hash>`,
      },
    ],
  },
  {
    id: "git-remote",
    category: "Git Remote (Connecting to GitHub)",
    items: [
      {
        title: "Check Remote Connections",
        description:
          "List the remote repositories configured for your local repository.",
        code: `git remote -v`,
      },
      {
        title: "Add a Remote Repository",
        description:
          "Connect your local repository to a remote one (like on GitHub). 'origin' is the conventional name for the primary remote.",
        code: `# Get the HTTPS or SSH URL from your GitHub repo page\ngit remote add origin <remote_repository_url>`,
      },
      {
        title: "Push Code to Remote",
        description:
          "Upload your local branch commits to the remote repository.",
        code: `# Push the 'main' branch to the 'origin' remote\ngit push origin main\n\n# Force push (Use with extreme caution - overwrites remote history)\ngit push origin main --force\n# OR\ngit push origin main -f`,
      },
      {
        title: "Set Upstream Branch",
        description:
          "Link your local branch to a remote branch. After setting this, you can use `git push` and `git pull` without specifying 'origin main' every time.",
        code: `# Push 'main' to 'origin' and set it as upstream\ngit push --set-upstream origin main\n# Shorthand\ngit push -u origin main`,
      },
      {
        title: "Push/Pull After Upstream is Set",
        description: "Simplified commands once upstream is configured.",
        code: `# Push commits from current local branch to its upstream remote branch\ngit push\n\n# Fetch and merge commits from the upstream remote branch into current local branch\ngit pull`,
      },
      {
        title: "Add Upstream for Forks",
        description:
          "When working with forks, 'origin' typically refers to your fork, and 'upstream' refers to the original repository you forked from.",
        code: `git remote add upstream <original_repository_url>`,
      },
      {
        title: "Unset Upstream",
        description:
          "Remove the upstream tracking information from the current branch.",
        code: `git branch --unset-upstream`,
      },
    ],
  },
  {
    id: "open-source",
    category: "Open Source Contribution Guide",
    items: [
      {
        title: "Key Principles",
        description:
          "<b>1. Communication:</b> Engage with the community (forums, Slack, Discord). Understand the project's workflow, coding style, and goals before contributing.<br><b>2. Add Value:</b> Focus on contributions that genuinely improve the project (bug fixes, requested features, documentation improvements).<br><b>3. Clear Description:</b> Write detailed commit messages and pull request descriptions explaining *what* you changed and *why*. <br><b>4. Read Guidelines:</b> Most projects have a `CONTRIBUTING.md` file. Read and follow it carefully (branch naming, code style, testing).",
      },
      {
        title: "Contribution Workflow (Fork & Pull Request)",
        description: "The standard process for contributing.",
        code: `# 1. Fork the Repository on GitHub\n# (Click the 'Fork' button on the original repo's page)\n\n# 2. Clone Your Fork Locally\n# (Get the URL from YOUR forked repo)\ngit clone <your_fork_repository_url>\ncd repository-name\n\n# 3. Add the Original Repository as 'upstream' Remote\ngit remote add upstream <original_repository_url>\n\n# 4. Keep Your Fork's main Branch Updated\ngit checkout main\ngit fetch upstream\ngit merge upstream/main # Or git rebase upstream/main\ngit push origin main\n\n# 5. Create a New Branch for Your Changes\n# (Always work on a feature branch, not main)\ngit checkout -b my-new-feature\n\n# 6. Make Your Code Changes\n# ... write code, add tests ...\n\n# 7. Commit Your Changes\ngit add .\ngit commit -m "feat: Add new feature X"\n\n# 8. Push Your Branch to Your Fork ('origin')\ngit push origin my-new-feature\n\n# 9. Create a Pull Request (PR) on GitHub\n# (Go to your fork on GitHub, click 'Contribute', then 'Open pull request'.\n# Choose the original repo's main branch as the base and your feature branch as the compare.\n# Write a clear title and description.)\n\n# 10. Respond to Feedback & Update PR if Needed\n# ... make more commits on your local branch ...\ngit push origin my-new-feature # Updates the PR automatically`,
      },
      {
        title: "Keeping Your Fork Synced",
        description:
          "Regularly update your fork's `main` branch from the original `upstream` repository to avoid conflicts.",
        code: `# Switch to your main branch\ngit switch main\n\n# Fetch changes from the original repo\ngit fetch upstream\n\n# Merge upstream's main into your main\ngit merge upstream/main\n# (Alternatively, use rebase for a linear history: git rebase upstream/main)\n\n# Push the updates to your fork on GitHub\ngit push origin main`,
      },
    ],
  },
  {
    id: "git-errors",
    category: "Common Git Errors & Issues",
    items: [
      {
        title: "Error: 'fatal: the remote end hung up unexpectedly'",
        description:
          "<b>Cause:</b> Often due to a poor network connection or trying to push a very large file/commit.<br><b>Solution 1 (Large Files):</b> Increase Git's HTTP buffer size. Note GitHub's file size limit (usually 100MB per file).",
        code: `# Increase buffer to 500MB (example)\ngit config --global http.postBuffer 524288000`,
      },
      {
        title: "Error: Pushing Large Files (>100MB)",
        description:
          '<b>Problem:</b> GitHub (and many Git hosts) have limits on individual file sizes (often 100MB).<br><b>Solution:</b> Use Git Large File Storage (LFS) to track large files. Install LFS, then use `git lfs track "*.psd"` (for example) to tell LFS to handle Photoshop files. Add the `.gitattributes` file created by LFS to your regular Git commit.',
        code: `# Install Git LFS (if needed, e.g., brew install git-lfs)\ngit lfs install\n\n# Track large file types\ngit lfs track "*.psd"\ngit lfs track "*.mp4"\n\n# Add the .gitattributes file\ngit add .gitattributes\n\n# Add your large files\ngit add my-large-video.mp4\n\n# Commit and push as usual\ngit commit -m "Add large video file via LFS"\ngit push origin main`,
      },
      {
        title:
          "Error: 'Updates were rejected because the remote contains work...'",
        description:
          "<b>Cause:</b> The remote branch has commits that your local branch doesn't have. You need to integrate the remote changes before pushing.<br><b>Solution:</b> Pull the remote changes first, resolve any conflicts, then push.",
        code: `# Fetch and merge remote changes\ngit pull origin main\n\n# (Resolve conflicts if any)\n\n# Then push your changes\ngit push origin main`,
      },
    ],
  },
  {
    id: "best-practices",
    category: "Professional Best Practices",
    items: [
      {
        title: "Write Meaningful Commit Messages",
        description:
          "Follow a consistent format (e.g., Conventional Commits: `feat: Add user login`, `fix: Correct calculation error`). The message should explain *what* changed and *why*.",
      },
      {
        title: "Commit Often, Perfect Later",
        description:
          "Make small, logical commits frequently. You can always clean up your history later using interactive rebase (`git rebase -i`) before pushing or creating a pull request.",
      },
      {
        title: "Use Feature Branches",
        description:
          "Never commit directly to `main` or `develop`. Create a new branch for every feature, bug fix, or task. This keeps the main branches stable.",
      },
      {
        title: "Keep Branches Short-Lived",
        description:
          "Merge feature branches back into the main development line (e.g., `develop` or `main`) frequently to avoid large, complex merges.",
      },
      {
        title: "Pull Before You Push",
        description:
          "Always update your local branch (`git pull` or `git pull --rebase`) before pushing your changes to avoid conflicts.",
      },
      {
        title: "Understand Your Workflow (e.g., Gitflow)",
        description:
          "Familiarize yourself with common branching strategies like Gitflow (with `main`, `develop`, `feature`, `release`, `hotfix` branches) or simpler GitHub Flow ( `main` and feature branches). Choose one that fits your team size and project.",
      },
      {
        title: "Review Pull Requests Thoroughly",
        description:
          "When reviewing PRs, check not just the code logic but also style, tests, and commit history clarity. Provide constructive feedback.",
      },
      {
        title: "Use `.gitignore` Effectively",
        description:
          "Ensure generated files, dependencies (`node_modules`), environment files (`.env`), and OS-specific files (`.DS_Store`) are ignored.",
      },
    ],
  },
];

// The main component that you will export
export default function Git() {
  return (
    <div className="min-h-screen bg-gray-100 pt-24 font-sans text-gray-800 dark:bg-gray-900 dark:text-gray-300">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        <header className="mb-10 text-center">
          <h1 className="mb-2 text-4xl font-extrabold text-gray-900 sm:text-5xl dark:text-neutral-100">
            Git & GitHub Cheat Sheet
          </h1>
          <p className="mt-2 text-lg text-cyan-400">
            Your complete guide to version control with Git and GitHub.
          </p>
        </header>
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Table of Contents */}
          <aside className="mb-8 lg:col-span-3 lg:mb-0">
            <div className="sidebar sticky top-25 rounded-lg bg-white p-4 shadow-lg dark:bg-gray-800">
              <h2 className="mb-4 border-b border-gray-300 pb-2 text-xl font-bold dark:border-gray-600">
                Table of Contents
              </h2>
              <nav>
                <ul className="space-y-2 text-sm">
                  {gitData.map((category) => (
                    <li key={category.id}>
                      <a
                        href={`#${category.id}`}
                        onClick={(e) => handleLinkClick(e, category.id)}
                        className="transition-colors hover:text-cyan-400"
                      >
                        {category.category}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="space-y-8 lg:col-span-9">
            {gitData.map((categoryData) => (
              <div
                key={categoryData.id}
                id={categoryData.id}
                className="scroll-mt-20"
              >
                <h2 className="mb-8 border-b-2 border-cyan-500 pb-2 text-3xl font-bold text-gray-900 dark:text-white">
                  {categoryData.category}
                </h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {categoryData.items.map((item, itemIndex) => (
                    <CheatSheetCard
                      key={itemIndex}
                      title={item.title}
                      description={item.description || ""}
                      code={item.code}
                    />
                  ))}
                </div>
              </div>
            ))}
          </main>
        </div>
      </div>
    </div>
  );
}
