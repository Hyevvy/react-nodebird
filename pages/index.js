import { useSelector } from "react-redux";
import PostForm from '../components/PostForm'
import PostCard from '../components/PostCard'
const { default: AppLayout } = require("../components/AppLayout")

const Home = () => {{
    const {isLoggedIn} = useSelector((state)=>state.user)
    const {mainPosts} = useSelector((state) => state.post)

    return(
        <AppLayout>
            {isLoggedIn && <PostForm />}
            {mainPosts.map((post)=> {return (<PostCard key={post.id} post={post}/>)})}
        </AppLayout>
    );
}}
export default Home;