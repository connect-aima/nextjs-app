"use client"
// import "./style.css"
import Link from "next/link"
import { usePathname } from "next/navigation"


const navLinks=[
    {name:"Rejister",href:"/rejister"},
    {name:"login",href:"/login"}
]
export default function AuthLayout({children}:{children:React.ReactNode}){
    const pathname=usePathname()
    return(
        <div >
            {navLinks.map((link)=>{
                const isActive=pathname===link.href ||(pathname.startsWith(link.href) && link.href!=="/")
                return(
                    <Link
                    className={isActive?"font-bold mr-4 bg-amber-400" : "text-blue-500 mr-4"}
                     href={link.href} key={link.name}>{link.name} <br /></Link>
                )
            })}
            {children}

        </div>
    )

}