import Link from "next/link"
export default function Home(){
    return(
        <>
        <h1>Home</h1>
        <Link href="/blogs">Blogs</Link> <br />
        <Link href="/products">Products <br /></Link>
        <Link href={"/articles/breaking-news-123/?lang=en"}>Read in English <br /></Link>
        <Link href={"/articles/breaking-news-123/?lang=fr"}>Read in French <br /></Link>       
        </>
    )
}