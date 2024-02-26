import { MainContent } from "./MainContent";
import Sidebar from "./Sidebar";

export default function SidebarLayout() {
    return (
        <div className="flex gap-3 h-full p-3">
            <div className="w-1/5">
                <Sidebar></Sidebar>
            </div>
            <div className="w-4/5">
                <MainContent></MainContent>
            </div>
        </div>
    );
}