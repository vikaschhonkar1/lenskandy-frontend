import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

type TabsContent = {
  defaultValue: number | string;
  tabData: {
    value: string;
    label: any;
    path: any;
  }[];
};

export function CategoryFilterTabs(props: TabsContent) {
  const { defaultValue, tabData } = props;
  return (
    //@ts-ignore
    <Tabs defaultValue={tabData[parseInt(defaultValue)]?.value} className="my-3">
      <TabsList className="flex w-max bg-transparent text-color-none border-none">
        {tabData?.map((item) => (
          <TabsTrigger
            className="text-md rounded-3xl text-gray-400 mr-[8px] px-[10px] py-[5px] border-2 border-gray-200 
            data-[state=active]:bg-[#0000B7] data-[state=active]:text-white data-[state=active]:shadow"
            key={item?.value}
            value={item?.value}
          >
            <Link href={item?.path}>{item?.label}</Link>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
