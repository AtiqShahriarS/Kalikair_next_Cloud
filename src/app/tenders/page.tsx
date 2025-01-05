interface Tenders{
    title: string;
    desc: string;
    //photos: string[];
}
//sample data
const tenders: Tenders[] = [
    {
        title: "Tender notice for the construction of a new bridge in Gazipur",
        desc: "The tender notice for the construction of a new bridge in Gazipur has been published. The tender will be open for 7 days starting from 1st September 2021."
    },
    {
        title: "Tender notice for the construction of a new road in Gazipur",
        desc: "The tender notice for the construction of a new road in Gazipur has been published. The tender will be open for 7 days starting from 1st September 2021."
    },
    {
        title: "Tender notice for the construction of a new road in Gazipur",
        desc: "The tender notice for the construction of a new road in Gazipur has been published. The tender will be open for 7 days starting from 1st September 2021."
    },
];

export default function Tenders(){
    return (
        <div>
            <h2 className="text-2xl md:text-4xl font-bold text-white text-center py-8 bg-[#007554] mb-4">
                    Tenders
            </h2>
            <main className="flex flex-col items-center justify-center">
            <section className="mb-8">
                    <div className="max-w-5xl flex flex-col space-y-4 px-4 py-6 items-center">
                        <div className="flex sm:flex-col flex-wrap md:flex-row items-center justify-center gap-10 ">
                            {tenders.map((tenders, index) => (
                                <div key={index} className="max-h-[30rem] sm:max-h-96 sm:max-w-96 max-w-[90vw] bg-white shadow-lg p-4 rounded-lg flex flex-col space-y-2 transition ease-in-out duration-300 hover:-translate-y-1 hover:shadow-xl gap-2">
                                    <h3 className="text-base md:text-lg font-semibold text-black ">
                                        {tenders.title}
                                    </h3>
                                    <p className="text-sm md:text-base text-black">
                                        {tenders.desc}
                                    </p>
                                    <a href="#" className="text-[#007554] font-semibold text-sm md:text-base hover:underline">Details</a>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
    </div>
    );
}