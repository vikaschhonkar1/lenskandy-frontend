import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type TabsContent = {
  tabData: {
    value: string;
    label: any;
  }[];
};

export function CategoryFilterTabs({ tabData }: TabsContent) {
  return (
    <Tabs defaultValue={tabData[0]?.value} className="my-3">
      <TabsList className="flex w-max bg-transparent text-color-none border-none">
        {tabData?.map((item) => (
          <TabsTrigger
            className="text-md rounded-3xl text-gray-400 mr-[8px] px-[10px] py-[5px] border-2 border-gray-200 
            data-[state=active]:bg-[#0000B7] data-[state=active]:text-white data-[state=active]:shadow"
            key={item?.value}
            value={item?.value}>
            {item?.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
