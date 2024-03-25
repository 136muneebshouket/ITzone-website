import dbConnect from "@/config/dbconnect"
import user from "@/schemas/user"

export async function POST(request) {
    try {
        dbConnect()

        let data = await request.json()
    
        // console.log(data)
    
        let storedata = await user.create(data)
        if(!storedata){
          throw new Error('something wrong in db')
        }
    
        return Response.json('your req has been received')
    } catch (error) {
        return Response.json(error.message)
    }
   

}

export async function GET(request) {
    
    const searchParams = request.nextUrl.searchParams
    // console.log(searchParams)
    //  console.log(JSON.parse(searchParams.get('filters')) )  
    console.log(searchParams.get('cars'))

    return Response.json('your req has been received')

}