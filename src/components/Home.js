
import BlogList from "./BlogList";
import useFetch from "./useFetch";


const Home = () => {

    const {data:blogs , isPending , error} = useFetch('http://localhost:8000/blogs');



   
    //we use useEffect to fire a function after every render
    //we then have a dependency array [] that makes the useEffect not to run after every render
    return (  
        <div className="home">
            {error && <div>{ error }</div>}
            {isPending && <div>Loading............</div>}
            { blogs && <BlogList blogs = {blogs} title = "All Blogs" />}
            {/* If we want to output marios blogs only we need to use the filter method */}
            {/* <BlogList blogs = {blogs.filter((blog)=> blog.author === 'mario')} title = "Mario's blogs" /> */}

        
        </div>
    );
}
 
export default Home;


//{/* <button onClick = {(e) => handleClickAgain('mario' , e) }>Click me again</button> */}


// const handleClickAgain= (name , e) =>{
    //     console.log('hello ' + name ,e.target );
    // }
    //Passing this as an anonymus function so that we can pass values.
    //anonymus functions don't just fire they wait for the button to be clicked



//let name = 'mario'

    //  const [name, setName] = useState('mario');

    //  const [age , setAge] = useState(25)

    // const handleClick = () =>{
    //    setName('luigi');
    //    setAge(30)
    // }
// <p>{name} is {age} years old</p>
//{/* <button onClick = {handleClick}  >Click me</button> */}