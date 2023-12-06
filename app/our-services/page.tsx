import ServicesPage from "@/components/servicesPage"
import {getServicePageData} from "@/lib/getServicesData"

const Index= async () => {

    const data = await getServicePageData();
    
    console.log("the================= ops data",data)

    return (
        <main>
                <ServicesPage data={data}/>
        </main>
    )
}

export default Index

export const revalidate = 3;
