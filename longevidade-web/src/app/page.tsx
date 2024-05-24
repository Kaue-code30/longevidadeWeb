"use client";

import DashUser from "@/components/dashUser";
import Home from "@/components/home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <main className="flex flex-col bg-primary-color   items-center ">
        <Home />
      </main>
    </QueryClientProvider>
  );
}
