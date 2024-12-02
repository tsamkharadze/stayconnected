export type tagsType = {
  [x: string]: any;
  id: number;
  name: string;
};

export type Tags = {
  id: number;
  name: string;
};

export type authorType = {
  id: number;
  fullname: string;
  email: string;
  rating: number;
};

export type questionType = {
  id: number;
  title: string;
  tags: tagsType;
  description: string;
  answers_count: number;
  created_at: string;
  author: authorType;
};
