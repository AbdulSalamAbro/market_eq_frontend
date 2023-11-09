import HomePage from "@/components/HomePage";
import { getHomeData } from '@/lib/getHomeData';


export default async function Home() {

   const data = await getHomeData();

  
   console.log("the queryy",data)
  
  return <main>
    <HomePage data={data} />
  </main>;
}

export const revalidate = 3;