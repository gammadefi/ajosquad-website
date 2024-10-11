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
  username: string,
  content: string,
  createdAt: string,
};


export type BlogCardType = BlogType & {
  readTime: string,
  isRecentBlogSection?: boolean,
  comments: CommentType[]
}