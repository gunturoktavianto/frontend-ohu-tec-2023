// import connectDB from "@/lib/mongodb";
// import InternshipNormal from "@/app/models/internship";
// import { NextResponse } from "next/server";
// import mongoose from "mongoose";

// export async function POST(req) {
//     const {
//         emailNormal,
//         namaNormal,
//         nimNormal,
//         fakultasNormal,
//         jurusanNormal,
//         idLineNormal,
//         paket,
//         isPerwakilan,
//         NamaPerwakilan,
//         buktiBayarNormal,
//         buktiPersyaratanNormal,
//     } = await req.json();

//     try {
//         await connectDB();
//         await InternshipNormal.create({
//             emailNormal,
//             namaNormal,
//             nimNormal,
//             fakultasNormal,
//             jurusanNormal,
//             idLineNormal,
//             paket,
//             isPerwakilan,
//             NamaPerwakilan,
//             buktiBayarNormal,
//             buktiPersyaratanNormal,
//         });
//         return NextResponse.json({
//             msg: ["Registration Sucessful."],
//             success: true,
//         });
//     } catch (error) {
//         if (error instanceof mongoose.Error.ValidationError) {
//         } else {
//         }
//     }
// }
