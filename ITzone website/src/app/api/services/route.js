import { NextResponse } from "next/server";
import { SerivcesModel } from "@/../lib/model/servicesModel";
import DB_Connect from "@/../lib/DB_Connect";

function createSlug(str) {
    return str
        .toLowerCase() // Convert string to lowercase
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/[^\w\-]+/g, '') // Remove non-word characters except hyphens
        .replace(/\-\-+/g, '-') // Replace multiple hyphens with single hyphen
        .replace(/^-+/, '') // Trim hyphens from start of string
        .replace(/-+$/, ''); // Trim hyphens from end of string
}

export async function GET(req) {
    let data = [];
    try {
        DB_Connect();
        data = await SerivcesModel.find();
    } catch (error) {
        data = { result: "error", success: false };
        return NextResponse.json({ data }, { status: 404 });
    }
    return NextResponse.json({ result: data, success: true }, { status: 200 })
}

export async function POST(req) {
    DB_Connect();
    try {
        const pay = await req.json();
        const title = pay.heading;
        const slug = createSlug(title);
        const payload = {...pay, slug};
        // To Send data through POSTMAN through post request
        let student = new SerivcesModel(payload);

        const data = await student.save();
        return NextResponse.json({ result: data, success: true });
    } catch (err) {
        return NextResponse.json({ result: err.message, success: false });
    }
}