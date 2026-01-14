import { Metadata} from "next"

type Props={
  params:Promise<{productId:string}>
}
//generating metadata function
export const generateMetadata=async({params}:Props):Promise<Metadata> => {
  const id=(await params).productId
  const title=await new Promise((resolve)=>{
setTimeout(()=>{
  resolve(`iphone ${id}`)
})
  })
  return {
    title:`Product ${title}`
  }
}



//main function
export default async function ProductDetails({
  params,
}: Props) {
  const  productId  = (await params).productId;

  return <h1>Details about product {productId}</h1>;
}
