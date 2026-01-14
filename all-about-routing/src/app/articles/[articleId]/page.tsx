"use client"
import Link from "next/link"
import {use} from "react"
export default  function NewsArticle(
    {params,searchParams}
    :
    {
        params:Promise<{articleId:string}> ;
        searchParams:Promise<{lang? :"en"|"es"|"fr"}>
    }
)
{
    const {articleId} = use(params) ;
    const {lang = "en"}=use(searchParams) ;
    return(
        <div>
            <h1>News Article {articleId}</h1>
            <p>Reading in {lang}</p>
            <div>
                <Link href={`/articles/${articleId}?lang=en`}>English <br /></Link>
                <Link href={`/articles/${articleId}?lang=es`}>Spanish <br /></Link>
                <Link href={`/articles/${articleId}?lang=fr`}>French <br /></Link>
            </div>
        </div>
    )
}