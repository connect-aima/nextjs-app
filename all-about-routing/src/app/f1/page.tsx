import Link from "next/link"
export default function f1Page(){
    return (
        <div>
            <h1>F1 Page</h1>
            <Link href={"/f1/f2"}>Move to F2</Link>
            <br />
            <Link href={"/f3"}>Move to F3</Link>
            </div>

        
    )
}