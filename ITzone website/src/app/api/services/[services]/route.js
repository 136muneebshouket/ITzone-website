import { NextResponse } from "next/server";

import { SerivcesModel } from "../../../../../lib/model/servicesModel";
import DB_Connect from "../../../../../lib/DB_Connect";

export async function GET(req, content) {
    DB_Connect();

    const con = content.params.blogs;
    const result = await SerivcesModel.findOne({ "slug": { "$regex": con } });

    return NextResponse.json({ result, success: true }, { status: 200 });
}

export async function PUT(req, content) {
    DB_Connect();

    const id = content.params.blogs;
    const filter = { slug: id };

    try {
        const payload = await req.json();
        const result = await SerivcesModel.findOneAndUpdate(filter, payload);
        return NextResponse.json({ result, success: true }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ result: error, success: false }, { status: 400 })
    }
}

export async function DELETE(req, content) {
    DB_Connect();
    try {
        const slug = content.params.blogs;
        const record = { slug: slug };
        const data = await BlogModel.deleteOne(record);
        return NextResponse.json({ data, success: true }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ result: error, success: false }, { status: 400 });
    }
}

