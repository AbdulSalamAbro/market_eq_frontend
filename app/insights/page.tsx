import InsightPage from "@/components/insightPage"
import {getInsightsData} from "@/lib/getInsightsData"

const Index= async () => {
    const data = await getInsightsData();
    
  
   console.log("the inshghtt yy",data)
    return (
        <main>
            <InsightPage data={data} />
        </main>
    )
}

export default Index


export const revalidate = 3;
