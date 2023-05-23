export type StrapiResponse<T> = {
  data: {
    id: number;
    attributes: T;
  }[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

type Image = {
  data: {
    attributes: {
      name: string;
      url: string;
    };
  };
};

type Project = {
  label: string;
  createdDate: Date;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  secondaryLabel: string;
};

export type ProjectLanding = StrapiResponse<
  Project & {
    mainImage: Image;
  }
>;
