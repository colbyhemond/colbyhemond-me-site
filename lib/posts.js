// //pulled from wutali (https://github.com/wutali/nextjs-netlify-blog-template/blob/master/src/lib/posts.ts)

// // import fs from "fsevents"
// import matter from "gray-matter";
// import path from "path";
// import yaml from "js-yaml";

// const postsDirectory = path.join(process.cwd(), "pages/posts");

// // export type PostContent = {
// //   readonly date: string;
// //   readonly title: string;
// //   readonly slug: string;
// //   readonly tags?: string[];
// // };

// export const PostContent = {
//   date: '',
//   title: '',
//   slug: '',
//   tags: []
// }

// // let postCache: PostContent[];
// let postCache

// // function fetchPostContent(): PostContent[] {
//   function fetchPostContent() {
//   if (postCache) {
//     return postCache;
//   }
//   // Get file names under /posts
//   const fileNames = fs.readdirSync(postsDirectory);
//   const allPostsData = fileNames
//     .filter((it) => it.endsWith(".mdx"))
//     .map((fileName) => {
//       // Read markdown file as string
//       const fullPath = path.join(postsDirectory, fileName);
//       const fileContents = fs.readFileSync(fullPath, "utf8");

//       // Use gray-matter to parse the post metadata section
//       const matterResult = matter(fileContents, {
//         // engines: {
//         //   yaml: (s) => yaml.safeLoad(s, { schema: yaml.JSON_SCHEMA }) as object,
//         // },
//         engines: {
//           yaml: (s) => yaml.safeLoad(s, { schema: yaml.JSON_SCHEMA }),
//         },
//       });
//       // const matterData = matterResult.data as {
//       //   date: string;
//       //   title: string;
//       //   tags: string[];
//       //   slug: string;
//       // };
//       const matterData =  {
//         date: '',
//         title: '',
//         tags: [],
//         slug: ''
//       }
//       const slug = fileName.replace(/\.mdx$/, "");

//       // Validate slug string
//       if (matterData.slug !== slug) {
//         throw new Error(
//           "slug field not match with the path of its content source"
//         );
//       }

//       return matterData;
//     });
//   // Sort posts by date
//   postCache = allPostsData.sort((a, b) => {
//     if (a.date < b.date) {
//       return 1;
//     } else {
//       return -1;
//     }
//   });
//   return postCache;
// }

// // export function countPosts(tag?: string): number {
// export function countPosts(tag) {
//   return fetchPostContent().filter(
//     (it) => !tag || (it.tags && it.tags.includes(tag))
//   ).length;
// }

// // export function listPostContent(
// //   page: number,
// //   limit: number,
// //   tag?: string
// // ): PostContent[] {
// export function listPostContent(page, limit, tag) {
//   return fetchPostContent()
//     .filter((it) => !tag || (it.tags && it.tags.includes(tag)))
//     .slice((page - 1) * limit, page * limit);
// }