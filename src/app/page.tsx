import SidebarLayout from "./SidebarLayout";

export default function Home() {
  return (
    <main className="flex flex-col gap-3 h-screen">
      <div>header</div>
      <SidebarLayout></SidebarLayout>
    </main>
  );
}
