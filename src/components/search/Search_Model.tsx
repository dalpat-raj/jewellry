import Image from "next/image";

export default function Search_Model(){
    const handleSearch = (term: string) => {
        console.log(term);
        
    }

    return(
        <div className="mt-16">
            <div className="px-4">
            <input 
                type="text" 
                placeholder={"Search Here...."}
                onChange={(e) => handleSearch(e.target.value)}
                className="border-b-2 outline-0 text-[var(--hover-color
                )] text-2xl w-full focus:border-b-black transition-all duration-300"
            />
            </div>
            <div className="">
                <div className="shadow-md shadow-gray-200 mt-4 py-3">
                    <p className="text-center text-md text-black">Search results</p>
                </div>
                <div className="grid grid-cols-3 max-md:grid-cols-2 grid- gap-4 h-[72.1vh] overflow-scroll py-4 px-4">
                    
                    <div className="col-span-1">
                        <div className="relative aspect-[3/3]">
                            <Image
                                src={"/assets/1.jpeg"}
                                alt="Product Image"
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>
                        <p className="mt-2">Product Details</p>
                    </div>
                    <div className="col-span-1">
                        <div className="relative aspect-[3/3]">
                            <Image
                                src={"/assets/2.jpeg"}
                                alt="Product Image"
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>
                        <p className="mt-2">Product Details</p>
                    </div>
                    <div className="col-span-1">
                        <div className="relative aspect-[3/3]">
                            <Image
                                src={"/assets/3.jpeg"}
                                alt="Product Image"
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>
                        <p className="mt-2">Product Details</p>
                    </div>
                    <div className="col-span-1">
                        <div className="relative aspect-[3/3]">
                            <Image
                                src={"/assets/3.jpeg"}
                                alt="Product Image"
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>
                        <p className="mt-2">Product Details</p>
                    </div>
                    <div className="col-span-1">
                        <div className="relative aspect-[3/3]">
                            <Image
                                src={"/assets/3.jpeg"}
                                alt="Product Image"
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>
                        <p className="mt-2">Product Details</p>
                    </div>
                    <div className="col-span-1">
                        <div className="relative aspect-[3/3]">
                            <Image
                                src={"/assets/3.jpeg"}
                                alt="Product Image"
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>
                        <p className="mt-2">Product Details</p>
                    </div>
                    <div className="col-span-1">
                        <div className="relative aspect-[3/3]">
                            <Image
                                src={"/assets/3.jpeg"}
                                alt="Product Image"
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>
                        <p className="mt-2">Product Details</p>
                    </div>
                    <div className="col-span-1">
                        <div className="relative aspect-[3/3]">
                            <Image
                                src={"/assets/3.jpeg"}
                                alt="Product Image"
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>
                        <p className="mt-2">Product Details</p>
                    </div>
                    <div className="col-span-1">
                        <div className="relative aspect-[3/3]">
                            <Image
                                src={"/assets/3.jpeg"}
                                alt="Product Image"
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>
                        <p className="mt-2">Product Details</p>
                    </div>
                    <div className="col-span-1">
                        <div className="relative aspect-[3/3]">
                            <Image
                                src={"/assets/3.jpeg"}
                                alt="Product Image"
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>
                        <p className="mt-2">Product Details</p>
                    </div>
                    <div className="col-span-1">
                        <div className="relative aspect-[3/3]">
                            <Image
                                src={"/assets/3.jpeg"}
                                alt="Product Image"
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>
                        <p className="mt-2">Product Details</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}