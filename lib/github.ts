export interface GitHubRepoStats {
  name: string;
  stars: number;
  forks: number;
  language: string | null;
  url: string;
  description: string | null;
  updatedAt: string;
}

export interface GitHubProfileStats {
  publicRepos: number;
  followers: number;
  following: number;
  totalStars: number;
  languages: { name: string; count: number; percentage: number; color: string }[];
  topRepos: GitHubRepoStats[];
  avatarUrl: string;
  profileUrl: string;
}

const LANGUAGE_COLORS: Record<string, string> = {
  Java: "#f89820",
  TypeScript: "#3178c6",
  JavaScript: "#f7df1e",
  Python: "#3776ab",
  HTML: "#e34f26",
  CSS: "#1572b6",
  Go: "#00add8",
  "C++": "#00599c",
  Shell: "#89e051",
};

const FALLBACK_STATS: GitHubProfileStats = {
  publicRepos: 12,
  followers: 10,
  following: 12,
  totalStars: 8,
  avatarUrl: "https://avatars.githubusercontent.com/u/187583597?v=4",
  profileUrl: "https://github.com/PrashanttBG",
  languages: [
    { name: "Java", count: 4, percentage: 36, color: "#f89820" },
    { name: "TypeScript", count: 3, percentage: 27, color: "#3178c6" },
    { name: "JavaScript", count: 2, percentage: 18, color: "#f7df1e" },
    { name: "Python", count: 2, percentage: 19, color: "#3776ab" },
  ],
  topRepos: [
    {
      name: "Medora",
      stars: 2,
      forks: 0,
      language: "Java",
      url: "https://github.com/PrashanttBG/Medora",
      description: "Smart Medical Companion — AI-powered health report analysis",
      updatedAt: "2025-07-16T16:38:36Z",
    },
    {
      name: "GupShup",
      stars: 2,
      forks: 0,
      language: "TypeScript",
      url: "https://github.com/PrashanttBG/GupShup",
      description: "Enterprise Kafka real-time chat platform with live metrics",
      updatedAt: "2025-12-18T14:57:23Z",
    },
    {
      name: "SupportHub",
      stars: 1,
      forks: 0,
      language: "TypeScript",
      url: "https://github.com/PrashanttBG/SupportHub",
      description: "Customer support messaging portal with urgency detection",
      updatedAt: "2026-01-04T15:25:08Z",
    },
    {
      name: "MailBuddy",
      stars: 1,
      forks: 0,
      language: "Java",
      url: "https://github.com/PrashanttBG/MailBuddy",
      description: "AI Gmail auto-reply Chrome extension powered by Gemini",
      updatedAt: "2025-06-18T17:36:20Z",
    },
  ],
};

export async function fetchGitHubStats(username: string): Promise<GitHubProfileStats> {
  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, { next: { revalidate: 3600 } }),
      fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`, {
        next: { revalidate: 3600 },
      }),
    ]);

    if (!userRes.ok || !reposRes.ok) {
      return FALLBACK_STATS;
    }

    const user = await userRes.json();
    const repos: Array<{
      name: string;
      stargazers_count: number;
      forks_count: number;
      language: string | null;
      html_url: string;
      description: string | null;
      updated_at: string;
      fork: boolean;
    }> = await reposRes.json();

    const ownRepos = repos.filter((r) => !r.fork);
    const totalStars = ownRepos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0);

    const langCounts: Record<string, number> = {};
    for (const repo of ownRepos) {
      if (repo.language) {
        langCounts[repo.language] = (langCounts[repo.language] || 0) + 1;
      }
    }

    const totalLangRepos = Object.values(langCounts).reduce((a, b) => a + b, 0) || 1;
    const languages = Object.entries(langCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([name, count]) => ({
        name,
        count,
        percentage: Math.round((count / totalLangRepos) * 100),
        color: LANGUAGE_COLORS[name] || "#6366f1",
      }));

    const topRepos: GitHubRepoStats[] = ownRepos
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 6)
      .map((r) => ({
        name: r.name,
        stars: r.stargazers_count,
        forks: r.forks_count,
        language: r.language,
        url: r.html_url,
        description: r.description,
        updatedAt: r.updated_at,
      }));

    return {
      publicRepos: user.public_repos ?? FALLBACK_STATS.publicRepos,
      followers: user.followers ?? FALLBACK_STATS.followers,
      following: user.following ?? FALLBACK_STATS.following,
      totalStars,
      avatarUrl: user.avatar_url || FALLBACK_STATS.avatarUrl,
      profileUrl: user.html_url || FALLBACK_STATS.profileUrl,
      languages: languages.length > 0 ? languages : FALLBACK_STATS.languages,
      topRepos: topRepos.length > 0 ? topRepos : FALLBACK_STATS.topRepos,
    };
  } catch {
    return FALLBACK_STATS;
  }
}
