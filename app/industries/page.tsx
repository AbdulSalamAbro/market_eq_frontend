import IndustryPage from "@/components/IndustryPage";
import {getIndustryData} from "@/lib/getIndustryData"

export default async function  Index()  {
    const data = await getIndustryData();
    

    // all data calls
    // main SEO of Page 

    return <main>
        <IndustryPage data={data}/>
    </main>;
}
export const revalidate = 3;