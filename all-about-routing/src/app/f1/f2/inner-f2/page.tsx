import Link from "next/link"
export default function f3Page(){
    return (
        <div>
            <h1>Inner F2</h1>
            <br />
            <Link href={"/f5"}>Go to f5 three level above</Link>
        </div>
    )
}