import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

//method 1 custom matcher config
// export function middleware(request: NextRequest) {
//     return NextResponse.redirect(new URL('/', request.url));

// }
// export const config = {
//     matcher: ['/profile'],
// };
//method 2 conditional statement 
export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith('/profile')) {
        return NextResponse.redirect(new URL('/hello', request.url));
    }
}
