import { FormWrapper } from "./FormWrapper";
import Link from "next/link";

type LinkPage4Data = {
    linkFormTecFest: string;
};

type LinkPage4Props = LinkPage4Data & {
    updateFields: (fields: Partial<LinkPage4Data>) => void;
};

export function LinkPage4({ linkFormTecFest, updateFields }: LinkPage4Props) {
    return (
        <FormWrapper title="Link Form Pendaftaran TEC Festival 2023 (Grand Summit + Startup Expo)">
            <br />
            <div className="form-tecfest">
                <Link
                    href="http://bit.ly/RegistrasiGSTECFest"
                    className="underline text-blue-400"
                >
                    Form Pendaftaran Grand Summit
                </Link>
                <br />

                <Link
                    href="http://bit.ly/RSVPStartupExpo"
                    className="underline text-blue-400"
                >
                    Form Pendaftaran Startup Expo
                </Link>
            </div>
        </FormWrapper>
    );
}
