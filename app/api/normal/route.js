import connectDB from "@/lib/mongodb";
import Normal from "@/app/models/normal";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(req) {
    const {
        emailNormal,
        namaNormal,
        nimNormal,
        fakultasNormal,
        jurusanNormal,
        idLineNormal,
        paket,
        isPerwakilan,
        namaPerwakilan,
        buktiBayarNormal,
        buktiPersyaratanNormal,
    } = await req.json();

    try {
        await connectDB();
        await Normal.create({
            emailNormal,
            namaNormal,
            nimNormal,
            fakultasNormal,
            jurusanNormal,
            idLineNormal,
            paket,
            isPerwakilan,
            namaPerwakilan,
            buktiBayarNormal,
            buktiPersyaratanNormal,
        });
        return NextResponse.json({
            msg: ["Registration Sucessful."],
            success: true,
        });
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
        } else {
        }
    }
}
