import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { blogs } from "@/data/blogs";

export default function Blogs() {
	const sorted = [...blogs].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return (
		<div className="space-y-6">
			<div className="text-center">
				<h1 className="text-3xl font-bold mb-2">Blogs</h1>
				<p className="text-muted-foreground">Thoughts on mobile, frontend, and developer experience</p>
			</div>
			<div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2">
				{sorted.map((post) => (
					<Link
						key={post.id}
						to={`/blog/${post.id}`}
						className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-xl"
					>
						<Card className="h-full transition-all duration-200 group-hover:shadow-lg group-hover:-translate-y-0.5">
							<CardHeader>
								<CardTitle className="text-xl group-hover:text-primary transition-colors">{post.title}</CardTitle>
								<div className="text-xs text-muted-foreground">{new Date(post.date).toLocaleDateString()}</div>
							</CardHeader>
							<CardContent>
								<p className="leading-relaxed text-sm text-muted-foreground">{post.summary}</p>
								{post.tags && (
									<div className="mt-3 flex gap-2 flex-wrap">
										{post.tags.map((tag) => (
											<span key={tag} className="px-2 py-0.5 text-xs bg-primary/10 text-primary rounded-md font-medium">
												{tag}
											</span>
										))}
									</div>
								)}
							</CardContent>
						</Card>
					</Link>
				))}
			</div>
		</div>
	);
}