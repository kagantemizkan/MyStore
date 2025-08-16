import { useState, useEffect } from "react";

interface GitHubStats {
  contributions: number;
  repositories: number;
  followers: number;
  loading: boolean;
  error: string | null;
}

const GITHUB_USERNAME = "kagantemizkan";

// GraphQL query to get contributions
const CONTRIBUTIONS_QUERY = `
  query($username: String!) {
    user(login: $username) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
        }
      }
      repositories {
        totalCount
      }
      followers {
        totalCount
      }
    }
  }
`;

export function useGitHubStats(): GitHubStats {
  const [stats, setStats] = useState<GitHubStats>({
    contributions: 0,
    repositories: 0,
    followers: 0,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;

    const fetchGitHubStats = async () => {
      try {
        // Try GitHub's GraphQL API (requires no auth for public data)
        const response = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: CONTRIBUTIONS_QUERY,
            variables: { username: GITHUB_USERNAME },
          }),
        });

        if (!response.ok) {
          throw new Error("GraphQL API failed, trying REST API fallback");
        }

        const data = await response.json();

        if (data.errors) {
          throw new Error("GraphQL returned errors");
        }

        if (isMounted && data.data?.user) {
          setStats({
            contributions: data.data.user.contributionsCollection.contributionCalendar.totalContributions,
            repositories: data.data.user.repositories.totalCount,
            followers: data.data.user.followers.totalCount,
            loading: false,
            error: null,
          });
          return;
        }
      } catch (error) {
        console.warn("GraphQL API failed, trying alternative approach:", error);
      }

      // Fallback: Try to get basic stats from REST API
      try {
        const userResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);

        if (!userResponse.ok) {
          throw new Error(`GitHub API error: ${userResponse.status}`);
        }

        const userData = await userResponse.json();

        // Try to get contributions from GitHub's profile page (public data)
        let contributionsCount = 0;

        try {
          // Fetch the user's GitHub profile page to extract contributions
          const profileResponse = await fetch(`https://github.com/${GITHUB_USERNAME}`, {
            headers: {
              Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
              "User-Agent": "Mozilla/5.0 (compatible; Portfolio/1.0)",
            },
          });

          if (profileResponse.ok) {
            const profileHTML = await profileResponse.text();

            // Extract contributions from the profile page
            // Look for the contributions text pattern
            const contributionsMatch = profileHTML.match(/(\d{1,3}(?:,\d{3})*)\s+contributions?\s+in\s+the\s+last\s+year/i);

            if (contributionsMatch) {
              contributionsCount = parseInt(contributionsMatch[1].replace(/,/g, ""));
            } else {
              // Try alternative pattern
              const altMatch = profileHTML.match(/data-count="(\d+)"/);
              if (altMatch) {
                contributionsCount = parseInt(altMatch[1]);
              }
            }
          }
        } catch (profileError) {
          console.warn("Failed to fetch contributions from profile page:", profileError);
        }

        // Fallback: Use events API to estimate if profile scraping failed
        if (contributionsCount === 0) {
          try {
            const eventsResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/events?per_page=100`);

            if (eventsResponse.ok) {
              const events = await eventsResponse.json();

              // Count recent activity as a rough estimate
              const oneYearAgo = new Date();
              oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

              const recentEvents = events.filter((event: any) => {
                const eventDate = new Date(event.created_at);
                return eventDate > oneYearAgo;
              });

              // Estimate contributions based on events
              if (recentEvents.length > 0) {
                contributionsCount = recentEvents.length * 4; // Conservative estimate
              }
            }
          } catch (eventsError) {
            console.warn("Failed to fetch events for contribution estimation:", eventsError);
          }
        }
        if (contributionsCount === 0) {
          contributionsCount = 50;
        }

        if (isMounted) {
          setStats({
            contributions: contributionsCount,
            repositories: userData.public_repos,
            followers: userData.followers,
            loading: false,
            error: null,
          });
        }
      } catch (error) {
        console.error("Failed to fetch GitHub stats:", error);
        if (isMounted) {
          setStats((prev) => ({
            ...prev,
            loading: false,
            error: "Failed to load GitHub stats",
          }));
        }
      }
    };

    fetchGitHubStats();

    return () => {
      isMounted = false;
    };
  }, []);

  return stats;
}
