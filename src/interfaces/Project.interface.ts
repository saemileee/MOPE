interface Project {
  project_id: number;
  author_id: number;
  author_name: string;
  author_introduction: string;
  author_img: string;
  project_type: string;
  project_recruitment_status: string;
  project_title: string;
  project_summary: string;
  project_recruitment_roles: {
    roleList: string[];
  };
  project_required_stacks: {
    stackList: string[];
  };
  project_goal: string;
  project_participation_time: string;
  project_introduction: string;
  project_img: string | null;
  project_bookmarks: {
    bookmarkList: Array<{ user_name: string; user_img: number[] }>;
  };
  project_bookmark_count: number;
  project_views: number;
  project_created_at: string;
  project_comments_count: number;
}

export type TypeProject = Project;

export type TypeProjectList = Pick<
  Project,
  | 'project_id'
  | 'project_type'
  | 'project_recruitment_status'
  | 'project_title'
  | 'project_goal'
  | 'project_bookmark_count'
  | 'project_comments_count'
  | 'project_views'
  | 'project_created_at'
> &
  Partial<
    Pick<
      Project,
      | 'project_required_stacks'
      | 'project_participation_time'
      | 'project_summary'
      | 'project_recruitment_roles'
    >
  >;

export type TypeProjectTitle = Pick<
  Project,
  | 'project_type'
  | 'project_recruitment_status'
  | 'project_title'
  | 'project_created_at'
  | 'project_comments_count'
  | 'project_views'
>;

export type TypeProjectBody = Pick<
  Project,
  | 'project_summary'
  | 'project_recruitment_roles'
  | 'project_required_stacks'
  | 'project_goal'
  | 'project_participation_time'
  | 'project_introduction'
>;

export type TypeProjectAuthor = Pick<
  Project,
  'author_id' | 'author_name' | 'author_introduction' | 'author_img'
>;

export type TypeProjectBookmarks = Pick<Project, 'project_bookmarks' | 'project_type'>;

export type TypeProjectModify = Pick<Project, 'project_id' | 'project_recruitment_status'>;

export type TypeProjectPost = Pick<
  Project,
  | 'project_type'
  | 'project_title'
  | 'project_summary'
  | 'project_recruitment_roles'
  | 'project_required_stacks'
  | 'project_goal'
  | 'project_participation_time'
  | 'project_introduction'
>;

export type TypeUserPosts = { project: TypeProjectList }[];

export type TypeStacks = Pick<Project, 'project_required_stacks'>;
