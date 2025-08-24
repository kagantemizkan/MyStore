import { Layout } from "@/components/Layout";
import { ScrollToTop } from "@/components/ScrollToTop";
import Home from "@/pages/Home";
import AppDetails from "@/pages/AppDetails";
import Landing from "@/pages/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { setupThemeListener } from "@/lib/utils";
import Blogs from "@/pages/Blogs";
import BlogDetails from "@/pages/BlogDetails";

function App() {
  // Set up favicon switching based on browser theme
  useEffect(() => {
    const cleanup = setupThemeListener();

    // Cleanup listener on unmount
    return cleanup;
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/apps" element={<Home />} />
          <Route path="/app/:id" element={<AppDetails />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
