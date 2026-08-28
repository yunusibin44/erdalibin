import SitePage,{pages} from "@/components/site-page";
import {notFound} from "next/navigation";
export function generateStaticParams(){return Object.keys(pages).filter(x=>x!=="home").map(slug=>({slug}))}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;if(!pages[slug])notFound();return <SitePage slug={slug}/>}
