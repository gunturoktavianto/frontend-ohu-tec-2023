"use client";

import { useState } from "react";

export default function FormInternship() {
    const [email, setEmail] = useState("");
    const [nama, setNama] = useState("");
    const [nim, setNim] = useState("");
    const [fakultas, setFakultas] = useState("");
    const [jurusan, setJurusan] = useState("");
    const [idLine, setIdLine] = useState("");
    const [buktiBayar, setBuktiBayar] = useState("");
    const [buktiPersyaratan, setBuktiPersyaratan] = useState("");

    const [error, setError] = useState([]);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        console.log("Full name: ", nama);
        console.log("Email: ", email);

        const res = await fetch("../api/internship", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                email,
                nama,
                nim,
                fakultas,
                jurusan,
                idLine,
                buktiBayar,
                buktiPersyaratan,
            }),
        });

        const { msg, success } = await res.json();
        setError(msg);
        setSuccess(success);

        if (success) {
            setEmail("");
            setNama("");
            setNim("");
            setFakultas("");
            setJurusan("");
            setIdLine("");
            setBuktiBayar("");
            setBuktiPersyaratan("");
        }
    };

    return (
        <>
            <div className="w-[80%] mx-auto my-10">
                <h1 className="font-bold text-3xl text-center ">
                    Form Pendaftaran TEC Internship 2023
                </h1>
                <form
                    onSubmit={handleSubmit}
                    className="py-4 mt-4 border-t flex flex-col gap-5"
                >
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            type="text"
                            id="email"
                            placeholder="Email"
                        />
                    </div>

                    <div>
                        <label htmlFor="nama">Nama</label>
                        <input
                            onChange={(e) => setNama(e.target.value)}
                            value={nama}
                            type="text"
                            id="nama"
                            placeholder="Nama"
                        />
                    </div>

                    <div>
                        <label htmlFor="nama">
                            NIM (selain angkatan 2023, gunakan NIM jurusan)
                        </label>
                        <input
                            onChange={(e) => setNim(e.target.value)}
                            value={nim}
                            type="text"
                            id="nim"
                            placeholder="NIM"
                        />
                    </div>
                    <div>
                        <label htmlFor="fakultas">
                            Fakultas (Contoh: FTI, STEI-K, SITH-R, dll)
                        </label>
                        <input
                            onChange={(e) => setFakultas(e.target.value)}
                            value={fakultas}
                            type="text"
                            id="fakultas"
                            placeholder="Fakultas"
                        />
                    </div>
                    <div>
                        <label htmlFor="jurusan">
                            Jurusan (Contoh: TPB, IF, TI, dll)
                        </label>
                        <input
                            onChange={(e) => setJurusan(e.target.value)}
                            value={jurusan}
                            type="text"
                            id="jurusan"
                            placeholder="Jurusan"
                        />
                    </div>
                    <div>
                        <label htmlFor="idLine">ID Line</label>
                        <input
                            onChange={(e) => setIdLine(e.target.value)}
                            value={idLine}
                            type="text"
                            id="idLine"
                            placeholder="ID Line"
                        />
                    </div>
                    <div>
                        <label htmlFor="buktiBayar">
                            Link GDrive Bukti Pembayaran
                        </label>
                        <input
                            onChange={(e) => setBuktiBayar(e.target.value)}
                            value={buktiBayar}
                            type="text"
                            id="buktiBayar"
                            placeholder="Link GDrive Bukti Pembayaran"
                        />
                    </div>
                    <div>
                        <label htmlFor="buktiPersyaratan">
                            Link GDrive Bukti Persyaratan
                        </label>
                        <input
                            onChange={(e) =>
                                setBuktiPersyaratan(e.target.value)
                            }
                            value={buktiPersyaratan}
                            type="text"
                            id="buktiPersyaratan"
                            placeholder="Link GDrive Bukti Persyaratan"
                        />
                    </div>

                    <button
                        className="bg-green-700 p-3 text-white font-bold"
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
                <div className="bg-slate-100 flex flex-col">
                    {error &&
                        error.map((e) => (
                            <div
                                className={`${
                                    success ? "text-green-800" : "text-red-600"
                                } px-5 py-2`}
                            >
                                {e}
                            </div>
                        ))}
                </div>
            </div>
        </>
    );
}
