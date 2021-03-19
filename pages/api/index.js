import fm from 'front-matter'
import fs from 'fs'

function readFile(slug) {

    const data = fs.readFileSync(`./pages/posts/${slug}.md`, 'utf8')

    return fm(data)

}

export async function getAllPosts() {

  const context = require.context('../posts', false, /\.md$/)
  const posts = []

  for(const key of context.keys()){

    const post = key.slice(2);
    const content = await import(`../posts/${post}`);
    const meta = content.default.attributes

    posts.push({
      slug: post.replace('.md',''),
      title: meta.title,
      summary: meta.summary,
      date: meta.date
    })
  }

  const formattedPosts = posts.sort((a,b) => {
    new Date(b.date) - new Date(a.date)
  }).map(post=> ({
    ...post, date: new Date(post.date).toDateString()
  }))

  return formattedPosts;

}

export async function getPostBySlug(slug) {

    const data = readFile(slug)
    const meta = data.attributes
    const content = data.body

    return {
        title: meta.title, 
        date: new Date(meta.date).toDateString(),
        content: content
    }

}