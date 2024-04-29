import { NextResponse } from "next/server";
import DB_Connect from "../../../../lib/DB_Connect";
import { SerivcesModel } from "../../../../lib/model/servicesModel";


export async function GET (req) {
    DB_Connect();
    let data = [];
    try {
        data = await SerivcesModel.find();
    } catch (error) {
        data = {result:"error", success:false};
        return NextResponse.json({data}, {status:404});
    }
    return NextResponse.json({result:data, success:true}, {status:200})
}


export async function POST(req) {
    DB_Connect();
    try {
        const payload = await req.json();
        let servicesData = new SerivcesModel(payload);
        const data = await servicesData.insertOne();
        return NextResponse.json({ result: data, success: true });
    } catch (err) {
        return NextResponse.json({ result: err.message, success: false });
    }
}