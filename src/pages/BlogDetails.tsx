import { useParams, Link as RouterLink } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getBlogById } from "@/data/blogs";
import { FiArrowLeft } from "react-icons/fi";

export default function BlogDetails() {
	const { id } = useParams();
	const post = id ? getBlogById(id) : undefined;

	if (!post) {
		return (
			<div className="space-y-4">
				<Button variant="ghost" size="sm" asChild>
					<RouterLink to="/blogs" className="inline-flex items-center gap-2">
						<FiArrowLeft /> Back to Blogs
					</RouterLink>
				</Button>
				<p className="text-muted-foreground">Post not found.</p>
			</div>
		);
	}

	return (
		<div className="space-y-4">
			<Button variant="ghost" size="sm" asChild>
				<RouterLink to="/blogs" className="inline-flex items-center gap-2">
					<FiArrowLeft /> Back to Blogs
				</RouterLink>
			</Button>

			<Card>
				<CardHeader>
					<CardTitle className="text-2xl">{post.title}</CardTitle>
					<div className="text-xs text-muted-foreground">{new Date(post.date).toLocaleDateString()}</div>
				</CardHeader>
				<CardContent>
					<div className="leading-relaxed" dangerouslySetInnerHTML={{ __html: post.content }} />
				</CardContent>
			</Card>
		</div>
	);
}