"use client";

import Home from "@/components/home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <main className="flex flex-col bg-primary-color overflow-hidden  items-center ">
        <Home />
      </main>
    </QueryClientProvider>
  );
}
