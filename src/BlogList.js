const BlogList = ({blogs, title, DeleteHandler}) => {
    return (
        <div>
            <h1>{title}</h1>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <button onClick={()=> DeleteHandler(blog.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default BlogList;