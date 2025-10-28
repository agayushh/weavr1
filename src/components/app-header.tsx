import { SidebarTrigger } from "@/components/ui/sidebar";

const AppHeader = () => {
  return (
    <header className="flex h-14 shrink-0 gap-2 border-b items-center justify-between bg-background px-4">
      <SidebarTrigger />
    </header>
  );
};

export default AppHeader;
