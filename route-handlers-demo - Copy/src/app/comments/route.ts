import { type NextRequest } from "next/server";
import { comments } from "./data";
export async function GET(request:NextRequest){
    const searchParams=request.nextUrl.searchParams
    const query=searchParams.get("query")
    const filteredComment= query? comments.filter((comment)=>comment.text.includes(query)):comments
    return  Response.json(filteredComment)
}

// When a user submits a comment, the browser or app sends an HTTP POST request to a specific API 
// endpoint on the Next.js server. The text the user entered is included in the request body as JSON,
//  which is a simple text format used for sending data between the client and server. Next.js automatically 
//  calls the POST route handler and gives it a Request object. Inside this function, we use await request.json() 
//  to read the JSON text and convert it into a JavaScript object. The server then creates a new comment, assigns 
//  it a unique ID, and stores it in memory or a database. After that, the server turns the comment object back into 
//  JSON using JSON.stringify() and sends it back to the client with a 201 Created status. The client receives this 
//  JSON response, turns it back into a JavaScript object, and updates the user interface.
// This process highlights a few important ideas: HTTP is a simple request-and-response system;
//  server route handlers run only on the server, not in the browser; async/await is used because 
//  reading data may take time; servers are stateless, meaning each request is handled separately; and 
//  JSON is just text used for communication, while JavaScript objects are what we actually work with in code.
export async function POST(request:Request){
    const comment=await request.json()
    const newComment={
        id:comments.length+1,
        text:comment.text
    }
    // In below part of the code, the server sends a response back to the client using new Response(). The data we want to send, newComment,
    // is a JavaScript object in memory, but HTTP can only transfer text, so we use JSON.stringify(newComment) to convert it into JSON
    // format, which is a simple text representation that the client can understand. The headers specify "Content-Type": "application/json"
    // to tell the client that the response is JSON, so it knows how to parse it correctly. The status: 201 indicates that the request
    // was successful and a new resource was created on the server. Altogether, this line tells the server to send the newly created 
    // comment as JSON, along with information about the type of data and the result of the operation, so the client can receive it,
    // parse it back into a JavaScript object, and update the UI accordingly. This encapsulates the core backend process of sending
    // structured data from server to client in a RESTful, stateless, and predictable way.
    comments.push(newComment)
    return new Response (JSON.stringify(newComment),{
        headers:{"Content-Type":"application/json"},
        status:201,
    })
}

// A REST API is a standard way for a client such as a browser, mobile app, or another server—to 
// communicate with a backend over the internet by sending HTTP requests to specific URLs called 
// endpoints, each representing a resource, which is simply any type of data the server manages, 
// like users, posts, comments, or products. Each resource has its own unique URL (for example, /api/comments),
// and the client interacts with it using well-defined HTTP methods: GET to read data, POST to create new data,
// PUT or PATCH to update existing data, and DELETE to remove data. These URLs are just text addresses that identify
// exactly “which resource” and sometimes “which specific item” (e.g., /api/comments/123). REST APIs follow principles
// that make them predictable and easy to use: they must organize data into clear resources, use standard HTTP methods, 
// stay stateless (meaning the server does not remember previous requests unless we use tokens or sessions), exchange data
// in a common format like JSON, and always return meaningful status codes such as 200 OK, 201 Created, or 404 Not Found 
// to tell the client what happened. When a user submits a comment in a Next.js application, the browser sends an HTTP POST 
//  request to the comment endpoint with the comment data in the request body, written in JSON text—a simple, language-independent
// format that travels easily across the network. Next.js receives this request and automatically triggers the POST route handler, 
// giving it a Request object that contains everything: the URL, the method, the headers, and the JSON body. Inside the handler, we 
// call await request.json() to convert the raw JSON text into a real JavaScript object, because the server can only work with data once it is parsed
// into an object. The server then creates a new comment, generates a unique ID, and stores it either in memory or a database.
// After processing, it uses JSON.stringify() to convert the comment object back into JSON text and sends it back to the
// client inside an HTTP response with a 201 Created status. The client receives this JSON, converts it back into a JavaScript 
// object, and updates the UI accordingly. All of this demonstrates the core backend ideas used in this single Next.js handler:
// how the HTTP request/response system works, how the server-side environment is completely separate from the client, 
// how asynchronous I/O allows the server to handle multiple requests efficiently, how REST organizes data into structured,
// predictable endpoints, why JSON is the universal communication format, and how statelessness ensures each request is handled
// independently. Understanding these concepts gives you the complete foundation you need to confidently work with backend logic 
// inside Next.js route handlers.







// In Next.js, request.json() and Response.json() are used for working with JSON data between the client and server, while JSON.stringify()
//  is the manual way to convert JavaScript objects into JSON. When a client sends data to the server, like in a POST or PATCH request, the
//   data comes as JSON text, which the server cannot directly use as a JavaScript object. request.json() is an async method that reads this
//    incoming JSON from the request body and converts it into a JavaScript object so the server can work with it. On the other hand, 
//    when the server wants to send data back to the client, Response.json() is a convenient helper that automatically converts a JavaScript
//     object or array into JSON, sets the Content-Type header to "application/json", and sends it with a default status code of 200 OK. 
//     If you need more control, like setting a different HTTP status code or custom headers, you can do this manually with new 
//     Response(JSON.stringify(obj), { headers: ..., status: ... }). Here, JSON.stringify() is used explicitly to turn the JavaScript 
//     object into JSON text, and you must manually specify headers and status. Conceptually, all three are about moving data between 
//     client and server in JSON format: request.json() reads JSON into a usable JS object, Response.json() sends JS objects as JSON 
//     automatically, and JSON.stringify() is the manual way to convert objects into JSON when you want full control over the response.