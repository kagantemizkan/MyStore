import { Layout } from "@/components/Layout";
import Home from "@/pages/Home";
import AppDetails from "@/pages/AppDetails";
import Landing from "@/pages/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { setupThemeListener } from "@/lib/utils";

function App() {
  // Set up favicon switching based on browser theme
  useEffect(() => {
    const cleanup = setupThemeListener();

    // Cleanup listener on unmount
    return cleanup;
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/apps" element={<Home />} />
          <Route path="/app/:id" element={<AppDetails />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
