import { contentData } from "@/constants";
import { blogData } from "@/constants";
const EXTERNAL_DATA_URL = "https://assignmentshelp.uk";

export default async function sitemap() {

  const blogs = blogData.map((content)=>({
    url: `${EXTERNAL_DATA_URL}/blog/${content.slug}`,
    lastModified: content.isoDate,
    priority:0.90
  }))

  const content = contentData.map((content)=>({
    url: `${EXTERNAL_DATA_URL}/${content.slug}`,
    lastModified: content.isoDate,
    priority:0.90

  }))
  const home = [""].map((content)=>({
    url: `${EXTERNAL_DATA_URL}`,
    lastModified: content.isoDate,
    priority: 1.00
  }))

  const routes = ["/order","/contact","/aboutus"].map((route)=>({
    url: `${EXTERNAL_DATA_URL}${route}`,  
    lastModified: new Date("08/01/2024").toISOString(),
    priority: 0.70
  }))

  return [...routes, ...blogs, ...content, ...home]
}


