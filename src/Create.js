import { useState } from "react";
import { useNavigate } from 'react-router-dom'

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const navigate= useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author}

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("New blog added");
            setIsPending(false);
            navigate('/');
        })
    }

    return ( 
        <div className="create">
            <h2>
                Create Blog Post
            </h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea 
                    required 
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <label>Blog Author:</label>
                <select 
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    >
                    <option value="George Orwell">George Orwell</option>
                    <option value="Aldous Huxley">Aldous Huxley</option>
                </select>
                { !isPending && <button>Add Blog</button>}
                { isPending && <button disabled>Adding Blog</button>}

                <p>{title}</p>
                <p>{author}</p>
                <p>{body}</p>
            </form>
        </div>
     );
}
 
export default Create;