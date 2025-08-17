export type BlogPost = {
	id: string; // slug/id for routing
	title: string;
	date: string; // ISO date string
	summary: string;
	content: string; // HTML content
	tags?: string[];
};

export const blogs: BlogPost[] = [
	{
		id: "react-native-vs-flutter",
		title: "React Native vs Flutter: Which Should You Choose in 2025?",
		date: "2025-08-17",
		summary:
			"A practical comparison of React Native and Flutter in 2025—covering performance, ecosystem, UI, developer experience, and when to pick each.",
		content: `
			<h2 class="text-2xl font-semibold mb-3">Overview</h2>
			<p class="leading-relaxed mb-4">React Native and Flutter remain the two most popular cross‑platform frameworks for building high‑quality mobile apps. Both can deliver near‑native experiences, but they differ in language, rendering, ecosystem, and tooling approach.</p>

			<h2 class="text-2xl font-semibold mb-3">Ecosystem & Talent</h2>
			<ul class="list-disc pl-5 space-y-2 mb-4">
				<li><strong>React Native</strong>: Built on React and JavaScript/TypeScript—huge talent pool, rich third‑party libraries, easy onboarding for web teams.</li>
				<li><strong>Flutter</strong>: Uses Dart and ships with a rich widget ecosystem maintained by Google; great docs and cohesive tooling.</li>
			</ul>

			<h2 class="text-2xl font-semibold mb-3">Performance</h2>
			<p class="leading-relaxed mb-4">Flutter renders with Skia and controls every pixel, offering very consistent performance and visuals across platforms. React Native uses a bridge (with the new architecture bringing <em>JSI/Fabric/TurboModules</em>) which narrows gaps significantly for many apps. For most business apps, both are fast enough; for graphics‑heavy UIs, Flutter often has the edge out of the box.</p>

			<h2 class="text-2xl font-semibold mb-3">UI & Consistency</h2>
			<ul class="list-disc pl-5 space-y-2 mb-4">
				<li><strong>Flutter</strong>: Pixel‑perfect, consistent look across devices with Material/Cupertino widgets.</li>
				<li><strong>React Native</strong>: Uses native components; apps feel at home on each platform, but styling consistency may need more effort.</li>
			</ul>

			<h2 class="text-2xl font-semibold mb-3">Developer Experience</h2>
			<ul class="list-disc pl-5 space-y-2 mb-4">
				<li><strong>React Native</strong>: Familiar React patterns, TS support, massive community, and easy web knowledge transfer.</li>
				<li><strong>Flutter</strong>: Excellent tooling (hot reload, DevTools), cohesive SDK, and fewer dependency mismatches.</li>
			</ul>

			<h2 class="text-2xl font-semibold mb-3">Code Sharing Beyond Mobile</h2>
			<p class="leading-relaxed mb-4">React Native pairs naturally with React for web (via React, React Native Web) and Node tooling. Flutter supports web and desktop targets via the same codebase, often with good results, especially for internal tools.</p>

			<h2 class="text-2xl font-semibold mb-3">Access to Native APIs</h2>
			<p class="leading-relaxed mb-4">Both have strong plugin ecosystems and allow writing your own native modules when needed. Flutter’s plugin model is cohesive; React Native benefits from the massive JS ecosystem and platform‑specific community modules.</p>

			<h2 class="text-2xl font-semibold mb-3">App Size</h2>
			<p class="leading-relaxed mb-4">Flutter apps may start a bit larger due to bundling the engine; React Native can be smaller initially but size depends on libraries and features. Differences are rarely a blocker for modern app stores.</p>

			<h2 class="text-2xl font-semibold mb-3">When to Choose Which</h2>
			<ul class="list-disc pl-5 space-y-2 mb-4">
				<li><strong>Choose React Native</strong> if you have React/JS expertise, want closer native look‑and‑feel, or plan to share logic with a React web app.</li>
				<li><strong>Choose Flutter</strong> if you want a unified, highly consistent UI across platforms, value first‑class tooling, or build graphics‑heavy interfaces.</li>
			</ul>

			<h2 class="text-2xl font-semibold mb-3">Conclusion</h2>
			<p class="leading-relaxed">Both frameworks are production‑proven in 2025. Your team’s skills and product needs should guide the choice: React Native for React‑aligned teams and native‑feel UIs; Flutter for cohesive, performant, and visually consistent apps across platforms.</p>
		`,
		tags: ["React Native", "Flutter", "Mobile", "Cross‑platform"],
	},
];

export function getBlogById(id: string) {
	return blogs.find((b) => b.id === id);
}