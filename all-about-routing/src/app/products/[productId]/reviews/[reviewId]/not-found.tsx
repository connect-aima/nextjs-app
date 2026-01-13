"use client";
import {usePathname} from "next/navigation"
export default function NotFound(){
    const pathName=usePathname()
    const productId=pathName.split("/")[2]
    const reviewId=pathName.split("/")[4]
    return(
        <div>
            <h2> Review {reviewId} Not Found for product {productId}</h2>
        </div>
    )
}