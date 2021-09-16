import { useRouter } from "next/router";
import Link from 'next/link';
import Meta from "../../../components/Meta";

const article = ({article}) => {

    // const router = useRouter();
    // const {id} = router.query;

    return (
        <>
        <Meta title={article.title} keywords='detail title' description={article.excerpt} />
        <div>
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <p>{article.excerpt}</p>
            <Link href='/'>Go back</Link>
        </div>
        </>
    );
};

// export const getServerSideProps = async (context) => {
//     console.log(context.params);
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
//     const article = await res.json();
//     return {
//         props: {
//             article: article
//         }
//     }
// }

export const getStaticProps = async (context) => {
    console.log(context.params);
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
    const article = await res.json();
    return {
        props: {
            article: article
        }
    }
}

export const getStaticPaths = async () => {
    const res  = await fetch('https://jsonplaceholder.typicode.com/posts');
    const articles = await res.json();

    const ids = articles.map(article => article.id);
    const paths = ids.map(id => ({params: {id: id.toString()}}));

    return {
        paths,
        fallback: false,
    }
}

export default article;