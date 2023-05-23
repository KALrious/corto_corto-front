import type { ProjectLanding } from "./types";
import { PROJECT_API_URL, SERVER, TOKEN } from "./utils";

/** @type {import('./$types').LayoutLoad} */
export const load = async () => {
  try {
    const res = await fetch(`${PROJECT_API_URL}?populate[0]=mainImage`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    const item: ProjectLanding = await res.json();
    const { data } = item;
    const returnData = data.map((item) => ({
      ...item,
      attributes: {
        ...item.attributes,
        mainImage: {
          ...item.attributes.mainImage,
          data: {
            attributes: {
              ...item.attributes.mainImage.data.attributes,
              url: `${SERVER}${item.attributes.mainImage.data.attributes.url}`,
            },
          },
        },
      },
    }));

    return { data: returnData };
  } catch (e) {
    return { data: [] };
  }
};
