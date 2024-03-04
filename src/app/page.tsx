import SidebarLayout from "./SidebarLayout";
import Header from "./Header";

export default function Home() {
  return (
    <main className="flex flex-col gap-3 h-screen">
        <Header></Header>
        <SidebarLayout></SidebarLayout>
    </main>
  );
}
