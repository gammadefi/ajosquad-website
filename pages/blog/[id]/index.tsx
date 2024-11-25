import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { BlogType } from '../../../src/libs/types';
import Header from '../../../src/components/Header';
import Footer from '../../../src/components/Footer';
import Pagination from '../../../src/components/Pagination';
import BreadCrumb from '../../../src/sections/Blog/[id]/BreadCrumb';
import Post from '../../../src/sections/Blog/[id]/Post';
import Comments from '../../../src/sections/Blog/[id]/Comments';
import RelatedBlogs from '../../../src/sections/Blog/[id]/RelatedPosts';

const index = ({ data1, data2 }: { data1: { totalPages: number, data: BlogType[] }, data2: { data: BlogType } }) => {
  const currentBlogPost = data2.data;
  const relatedBlogPosts = data1.data;
  const totalPages = data1.totalPages;
  return (
    <div>
      <Head>
        <title>{currentBlogPost.title} | Ajosqaud</title>
      </Head>
      <main>
        <Header hasHero={false} />
        <div className='px-4 md:px-10 lg:px-24 py-10 lg:py-20'>
          <BreadCrumb blogTitle={currentBlogPost.title} />
          <div className='pt-5 grid gap-4 lg:grid-cols-[1fr_0.5fr] lg:gap-14'>
            <Post blogPost={currentBlogPost} />
            <Comments comments={currentBlogPost.comments} />
          </div>
        </div>
        <section className='px-4 md:px-10 lg:px-24 2xl:px-28 py-10 md:py-20'>
          <h3 className='text-2xl lg:text-4xl font-semibold mb-5 md:mb-10'>Other related posts</h3>
          {
            relatedBlogPosts.length != 0 ?
              <div>
                <RelatedBlogs blogPosts={relatedBlogPosts} />
                <Pagination totalPages={totalPages} />
              </div> : <p className='font-medium text-xl'>No related posts</p>
          }
        </section>


        <Footer />
      </main>
    </div>
  )
}

export default index

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  const { query } = context;

  let url = 'https://api.ajosquad.com/blog?limit=6';

  if (query.tag) url = url + `&tags=${query.tag}`;

  if (query.page) url = url + `&page=${query.page}`;

  const responses = await Promise.all([
    fetch(url),
    fetch(`https://api.ajosquad.com/blog/${id}`)
  ]);
  const data1 = await responses[0].json();
  const data2 = await responses[1].json();
  console.log(data1, data2)
  return {
    props: {
      data1,
      data2
    },
  }
}

