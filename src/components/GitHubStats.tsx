import { useQuery } from "@tanstack/react-query";
import { Star, GitFork, Users } from "lucide-react";

interface GitHubOrg {
  public_repos: number;
  followers: number;
}

interface GitHubRepo {
  stargazers_count: number;
  forks_count: number;
  name: string;
}

const fetchGitHubStats = async () => {
  const [orgRes, reposRes] = await Promise.all([
    fetch("https://api.github.com/orgs/STABLE-TURBO"),
    fetch("https://api.github.com/orgs/STABLE-TURBO/repos"),
  ]);

  if (!orgRes.ok || !reposRes.ok) {
    throw new Error("Failed to fetch GitHub stats");
  }

  const org: GitHubOrg = await orgRes.json();
  const repos: GitHubRepo[] = await reposRes.json();

  const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
  const totalForks = repos.reduce((sum, repo) => sum + repo.forks_count, 0);

  return {
    repos: org.public_repos,
    followers: org.followers,
    stars: totalStars,
    forks: totalForks,
  };
};

export const GitHubStats = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["github-stats"],
    queryFn: fetchGitHubStats,
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchInterval: 1000 * 60 * 5, // Refetch every 5 minutes
  });

  if (isLoading) {
    return (
      <div className="flex gap-6 justify-center">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-2 animate-pulse">
            <div className="w-5 h-5 bg-muted rounded" />
            <div className="w-12 h-4 bg-muted rounded" />
          </div>
        ))}
      </div>
    );
  }

  if (isError || !data) {
    return null;
  }

  const stats = [
    { icon: Star, value: data.stars, label: "Stars" },
    { icon: GitFork, value: data.forks, label: "Forks" },
    { icon: Users, value: data.followers, label: "Followers" },
  ];

  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <stat.icon className="w-5 h-5" />
          <span className="font-semibold text-foreground">{stat.value}</span>
          <span className="text-sm">{stat.label}</span>
        </div>
      ))}
    </div>
  );
};
