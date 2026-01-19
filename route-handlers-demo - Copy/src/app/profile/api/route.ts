import { type NextRequest } from "next/server"
import { headers } from "next/headers"
//second approach of handling cookies
import { cookies } from "next/headers"
export async function GET(request:NextRequest){
    // const requestHeader=new Headers(request.headers)
    // console.log(requestHeader.get("Authorization"))
        const headerList= await headers()
        console.log(headerList.get("Authorization"))
    //First approach  using a set cookie header to set a cookie and the request object to read it
        const theme=request.cookies.get("theme")
        console.log(theme)
    //second approach using build in cookie handler 
    const cookieStore=await cookies()
    cookieStore.set("result","20")
    console.log(cookieStore.get("result"))
        return new Response("<h1>Profile api data!<h1/>",{
            headers:{
                "Content-Type":"text/html",
                "Set-Cookie":"theme=dark"
            }
        }
    )
}




//  Request Headers (Client → Server)

// * **Purpose:** Give the server extra information about the request.
// * **They do NOT contain the main data** (like JSON body), only instructions or metadata.

// **Common types:**

// * **`User-Agent`**

//   * Tells the server which browser, app, or device is making the request.
//   * **Backend concept:** Server can **adapt response** for different devices if needed.

// * **`Accept`**

//   * Tells the server what formats the client can handle (`application/json`, `text/html`).
//   * **Backend concept:** Server can **send data in a format the client understands**.

// * **`Authorization`**

//   * Contains a token or credentials to prove the client’s identity.
//   * **Backend concept:** Server uses it to **check permissions** without remembering previous requests (stateless).

// * **`Content-Type`**

//   * Tells the server what format the body of the request is in (`application/json`, `multipart/form-data`).
//   * **Backend concept:** Server knows **how to parse the data correctly**.

// * **`Cookie`**

//   * Sends cookies stored in the browser to the server.
//   * **Backend concept:** Can be used for **sessions or authentication**.

// ---

// ## **2️⃣ Response Headers (Server → Client)**

// * **Purpose:** Tell the client how to handle the response.
// * **They do NOT contain the main data**, just info about it.

// **Common types:**

// * **`Content-Type`**

//   * Tells the client the **format of the response** (`application/json`).
//   * **Backend concept:** Client knows **how to parse the data** correctly.

// * **`Cache-Control`**

//   * Tells the client if it can **store/cache the response** and for how long.
//   * **Backend concept:** Makes communication **faster and more efficient**.

// * **`Set-Cookie`**

//   * Lets the server **set cookies** on the client for sessions or auth.
//   * **Backend concept:** Helps maintain **state or authentication** securely.

// * **`Access-Control-Allow-Origin`**

//   * Tells the browser which domains are allowed to access the server.
//   * **Backend concept:** Security for **cross-domain requests** (CORS).

// * **Custom headers** (like `X-RateLimit-Limit`)

//   * Server can send any extra info about the response.
//   * **Backend concept:** Used for **additional instructions or metadata**.

// ---

// ### ✅ **Simple Summary**

// * **Request headers:** Client → Server; tell the server about **who is requesting, what format, and permissions**.
// * **Response headers:** Server → Client; tell the client **how to handle, parse, cache, or secure the data**.
// * **Headers are metadata**, separate from the actual data in request/response body.
// * Understanding headers is **essential for REST APIs, security, caching, and stateless communication**.

