import Link from "next/link"


export default function OfferBar() {

    return (
        <div className="w-[100%] bg-[var(--black)] text-[var(--white)] flex justify-center items-center gap-2 py-2">
            <p className="text-[12px]">BUY 1 GET 1 FREE |&nbsp; Use Code : </p>
            <Link href={"/"} className="bg-[var(--bg-btn)] text-[12px] py-[2px] px-[10px] rounded-2xl">B1G1</Link>
        </div>
    )
}