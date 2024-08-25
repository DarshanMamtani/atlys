export type PostType = {
  author: {
    username: string;
    userImg: string;
  };
  createdAt: string;
  body: string;
  emoji?: string;
  commentCount: number;
};
