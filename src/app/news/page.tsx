

interface News{
    title: string;
    link: string;
}
interface Updates{
    title: string;
    desc: string;
}

//sample data
const news: News[] = [
    {
        title: "Miscreants torch bus in Gazipur",
        link: "https://en.prothomalo.com/bangladesh/local-news/dbmx3by8v7"
    },
    {
        title: "Couple dies as mud house collapses in Gazipur",
        link: "https://en.prothomalo.com/bangladesh/local-news/om84py3yng"
    },
];
const updates: Updates[] = [
    {
        title: "Gazipur City Corporation Election 2021",
        desc: "Gazipur City Corporation Election 2021 is scheduled to be held on 15th August 2021. The election will be held in 57 wards of the city corporation."
    },
    {
        title: "Gazipur City Corporation Election 2021",
        desc: "Gazipur City Corporation Election 2021 is scheduled to be held on 15th August 2021. The election will be held in 57 wards of the city corporation."
    }
];


export default function News(){
    
    return (
        <div>
        <main className="max-w-5xl mx-auto px-4 py-6">
            <section className="mb-12">
                <h2 className="text-xl md:text-3xl font-bold text-[#007554] mb-4">
                    News
                </h2>
                <div className="flex flex-col space-y-4">
                    {news.map((news, index) => (
                        <div key={index} className="hover:bg-zinc-200 bg-zinc-100 p-4 rounded-lg flex flex-col space-y-2">
                            <a href={news.link} target="_blank" className="text-base md:text-lg font-semibold text-black">
                                {news.title}
                            </a>
                        </div>
                    ))}

                </div>
            </section>
            <section className="mb-8">
                <h2 className="text-xl md:text-3xl font-bold text-[#007554] mb-4">
                    Updates
                </h2>
                <div className="flex flex-col space-y-4">
                    {updates.map((updates, index) => (
                        <div key={index} className="hover:bg-zinc-200 bg-zinc-100 p-4 rounded-lg flex flex-col space-y-2">
                            <h3 className="text-base md:text-lg font-semibold text-black">
                                {updates.title}
                            </h3>
                            <p className="text-sm md:text-base text-black">
                                {updates.desc}
                                </p>
                        </div>
                    ))}

                </div>
            </section>
        </main>
        </div>
    );
}