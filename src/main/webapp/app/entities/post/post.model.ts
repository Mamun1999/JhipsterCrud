export interface IPost {
  id: number;
  title?: string | null;
  category?: string | null;
  description?: string | null;
}

export type NewPost = Omit<IPost, 'id'> & { id: null };
