export type BlogType = {
  id: string,
  image: string,
  title: string,
  content: string,
  createdAt: string,
  tags: string[],
  comments: CommentType[]
}

export type CommentType = {
  id: string,
  content: string,
  user_id: string,
  blog_id: string,
  createdAt: string,
};


export type BlogCardType = BlogType & {
  isRecentBlogSection?: boolean,
  comments: CommentType[]
}