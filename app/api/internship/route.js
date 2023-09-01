import connectDB from "@/lib/mongodb";
import Internship from "@/app/models/internship";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(req) {
    const {
        email,
        nama,
        nim,
        fakultas,
        jurusan,
        idLine,
        buktiBayar,
        buktiPersyaratan,
    } = await req.json();

    try {
        await connectDB();
        await Internship.create({
            email,
            nama,
            nim,
            fakultas,
            jurusan,
            idLine,
            buktiBayar,
            buktiPersyaratan,
        });

        
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            let errorList = [];
            for (let e in error.errors) {
                errorList.push(error.errors[e].message);
            }
            console.log(errorList);
            return NextResponse.json({ msg: errorList });
        } else {
            return NextResponse.json({ msg: ["Unable."] });
        }
    }
}
