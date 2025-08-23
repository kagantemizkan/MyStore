import Blog1 from "./blogs/blog1";

export type BlogPost = {
  id: string; // slug/id for routing
  title: string;
  date: string; // ISO date string
  summary: string;
  content: React.ReactNode; // HTML content
  tags?: string[];
};

export const blogs: BlogPost[] = [
  {
    id: "react-native-vs-flutter",
    title: "React Native ve Flutterın Farkları",
    date: "2025-08-17",
    summary:
      "React Native ve Flutter'ın 2025'teki farklılıklarının pratik bir karşılaştırması - performans, ekosistem, UI, geliştirici deneyimi ile ilgili yaptığım bir inceleme.",
    content: Blog1(),
    tags: ["React Native", "Flutter", "Mobile", "Cross‑platform"],
  },
];

export function getBlogById(id: string) {
  return blogs.find((b) => b.id === id);
}
