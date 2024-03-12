

export async function POST(request) {

    let data = await request.json()

    console.log(data)

    return Response.json('your req has been received')

}