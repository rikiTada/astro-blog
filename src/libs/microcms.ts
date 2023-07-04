import { createClient ,MicroCMSQueries} from "microcms-js-sdk";

const client = createClient({
	serviceDomain: import.meta.env.SERVICE_DOMAIN,
	apiKey: import.meta.env.API_KEY,
})

// ブログ一覧
export const getBlogs = async (queries: MicroCMSQueries) => {
	return await client.get({ endpoint: "blogs", queries })
};


// ブログ詳細
export const getBlogDetail = async (
	blogid: string,
	queries?: MicroCMSQueries
) => {
	return await client.getListDetail({
		endpoint: "blogs",
		contentId: blogid,
		queries
	})
};
