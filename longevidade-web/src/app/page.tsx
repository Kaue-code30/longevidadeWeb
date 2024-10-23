"use client";

import DashUser from "@/components/dashUser";
import Home from "@/components/home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <main className="flex h-full w-full flex-col bg-primary-color   items-center ">
        <Home />
        {/* <DashUser porcentagem_atual={0} projecao_30_dias={0} projecao_60_dias={0}/> */}
      </main>
    </QueryClientProvider>
  );
}
