

export async function POST(request) {

    let data = await request.json()

    console.log(data)

    return Response.json('your req has been received')

}

export async function GET(request) {
    
    const searchParams = request.nextUrl.searchParams
    // console.log(searchParams)
    //  console.log(JSON.parse(searchParams.get('filters')) )  
    console.log(searchParams.get('cars'))

    return Response.json('your req has been received')

}