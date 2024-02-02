import Link from "next/link";
import TMap from "./tmap";
import { Suspense } from "react";

export default function Treeprun() {
    return (
        <section>
            <div>
                <p>Index Treeprun</p>
                <Link href="/">
                    Feodrippe Home
                </Link>
                <Suspense fallback={<p>Loading Treeprun Map...</p>}>
                    <TMap/>
                </Suspense>
            </div>
      </section>

        )
}
