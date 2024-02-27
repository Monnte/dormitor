import { Card, Input } from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon";
import ItemList from "./ItemList";

export default function Sidebar() {
    return (
        <Card className="box-border p-3 h-full w-full">
            <Input
                classNames={{
                    base: "h-10 mb-3",
                    mainWrapper: "h-full",
                    input: "text-small",
                    inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                }}
                placeholder="Type to search..."
                size="sm"
                startContent={<SearchIcon size={18} />}
                type="search" 
                fullWidth={true}
            />
            <ItemList></ItemList>
        </Card>
    );
}