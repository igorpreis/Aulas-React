import { useEffect, useState } from "react"
import "../pages/ListarPosts/posts.css"

export default function Posts() {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts"

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error("Erro ao buscar dados:", error)
      })
  }, [])

  if (isLoading) {
    return <h1>Carrengando...</h1>
  }

  return (
    <>
      <h1>Fetch Posts</h1>
      <section id="box-posts">
        {posts.map((post, index) => (
          <div key={index} className="post">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </section>
    </>
  )
}
