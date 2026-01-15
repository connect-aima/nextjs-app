import { Card } from "@/src/components/card";
import Link from "next/link";
export default function ArNot(){
    return (
        <Card>
            <div>Archived notifications
            </div>
            <div>
                <Link href="/complex-dashboard">Default</Link>
                </div>       
            </Card>
    )
}