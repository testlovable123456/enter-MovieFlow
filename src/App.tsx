import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, useRoutes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { routers } from "./router";

const queryClient = new QueryClient();

function RoutesComponent() {
  const location = useLocation();
  const element = useRoutes(routers);
  
  return (
    <AnimatePresence mode="wait">
      {element}
    </AnimatePresence>
  );
}

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <RoutesComponent />
        </BrowserRouter>
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </QueryClientProvider>
  )
};

export default App;
