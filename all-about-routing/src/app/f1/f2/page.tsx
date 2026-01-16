import Link from "next/link"
export default function f2Page(){
    return (
        <div>
            <h1>F2 Page</h1>
            <br />
            <Link href={"/f4"}>Move to f4 which is two level high</Link>
            </div>
    )
}