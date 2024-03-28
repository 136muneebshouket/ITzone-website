import dbConnect from "@/config/dbconnect";
import user from "@/schemas/user";

export async function POST(request) {
  try {
    dbConnect();

    let data = await request.json();

    // // console.log(data)

    let storedata = await user.create(data);
    if (!storedata) {
      throw new Error("something wrong in db");
    }

    return Response.json("your req has been received");
  } catch (error) {
    return Response.json(error.message);
  }
}

export async function GET(request) {
  try {
    const searchParams = request.nextUrl.searchParams;
    // console.log(searchParams)
    //  console.log(JSON.parse(searchParams.get('filters')) )
    // console.log(searchParams.get('cars'))

    let filters = {};

    let users = await user.find(filters, { updatedAt: 0, _v: 0 });

    return Response.json({
      success: true,
      payload: users,
    });
  } catch (error) {
    console.log(error.me);
    return Response.json(error.message);
  }
}

export async function DELETE(request) {
  try {
    const searchParams = request.nextUrl.searchParams;
    let del_id = searchParams.get("user_id");

    let deleted = await user.findByIdAndDelete({ _id: del_id });

    if (!deleted) {
      throw new Error("somthing went wrong");
    }

    return Response.json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    return Response.json(error.message);
  }
}

export async function PUT(request) {
  try {
    let data = await request.json();
    let { formdata , id} = data
     
     let update =await user.findByIdAndUpdate({_id:id},formdata)
     if(!update){
        throw new Error("somthing went wrong");
     }
    
    return Response.json("User upadted successfully");
  } catch (error) {
    return Response.json(error.message);
  }
}
