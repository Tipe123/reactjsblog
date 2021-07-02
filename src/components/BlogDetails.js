import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const {id} = useParams(); //This allows us to use the urls parameters
    const {data:blog , isPending , error} = useFetch('http://localhost:8000/blogs/'+id);

    return ( 
        <div className="blog-details">

        {isPending && <div>Loading...</div>} 
        {error && <div>{error}</div>}
        {blog && (
            <article>
                <h2>{blog.title}</h2>
                <div>{blog.body}</div>
                <p>Written By: {blog.author}</p>
            </article>
        )}   
        
        </div>
     );
}
 
export default BlogDetails;