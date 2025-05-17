import { Tabs as TabsPrimitive } from "bits-ui";
import { tv } from "tailwind-variants";

// Use the tabs as it is without custom wrapper
const Tabs = TabsPrimitive.Root;
const TabsList = TabsPrimitive.List;
const TabsTrigger = TabsPrimitive.Trigger;
const TabsContent = TabsPrimitive.Content;

const tabsListVariants = tv({
  base: "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
});

const tabsTriggerVariants = tv({
  base: "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
});

export {
  Tabs,
  TabsContent,
  TabsList,
  tabsListVariants,
  TabsTrigger,
  tabsTriggerVariants,
};
