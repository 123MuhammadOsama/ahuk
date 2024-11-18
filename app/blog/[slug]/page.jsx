import getBlogMetadata from "@/constants/getBlogMetadata";
import { blogData } from "@/constants";
import Error from "@/components/Error";
import Image from "next/image";

const getBlogContent = async (slug) => {
  const blogJson = blogData.find((blog) => blog.slug === slug);
  if (!blogJson) {
    return <Error />;
  } else {
    try {
      const { slug } = blogJson;
      const Mymodule = await import(`../../../blog/${slug}`);
      const ContentComponent = Mymodule.default;
      return <ContentComponent />;
    } catch (error) {
      console.log(error);
      return <Error />;
    }
  }
};

const BlogPage = async (props) => {
  const slug = props.params.slug;
  const blogContent = await getBlogContent(slug);
  const blogJson = blogData.find((content) => content.slug === slug);
  if (!blogJson) {
    return <Error />;
  }

  return (
<div className="container mx-auto mt-12 px-4 lg:flex lg:space-x-8">
 
  <div className="lg:w-1/4 mb-8 lg:mb-0 hidden lg:block">
    <div className="sticky top-32">
      <Image
        src="/Ahuk_Banner.png"
        alt="banner"
        width={300}
        height={600}
        className="w-full"
      />
    </div>
  </div>

 
  <div className="lg:w-3/4">
   
    <div className="flex justify-between mb-6">
      <p className="text-green-600">{blogJson.date}</p>
      <p className="text-green-600">{blogJson.read} min read</p>
    </div>

    
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">{blogJson.title}</h1>
      <div className="prose lg:prose-xl">
        {blogContent}
      </div>
    </div>
  </div>
</div>


  );
};

export const generateStaticParams = async () => {
  const blogs = getBlogMetadata();
  return blogs.map((post) => ({
    slug: post.slug,
  }));
};

export async function generateMetadata(props) {
  const blogs = getBlogMetadata();
  const slug = props.params.slug;
  const blog = blogs.find((post) => post.slug === slug);
  if (blog) {
    return {
      slug,
      title: blog.title,
      description: blog.description,
      image: blog.image,
      date: blog.date,
      author: blog.author,
      openGraph: {
        title: blog.openGraph.title,
        description: blog.openGraph.description,
        images: blog.openGraph.images,
        url: blog.openGraph.url,
        locale: blog.openGraph.locale,
        type: blog.openGraph.type,
        site_name: blog.openGraph.site_name,
        publishedTime: blog.openGraph.publishedTime,
        authors: blog.openGraph.authors,
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
}
export default BlogPage;
