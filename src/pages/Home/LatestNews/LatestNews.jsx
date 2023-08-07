import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './LatestNews.css';

import Lottie from "lottie-react";
import underlineAnimation from '../../../assets/animation/underline-animation.json';
import { Link } from "react-router-dom";

const LatestNews = () => {
    const [footballNews, setFootballNews] = useState([]);
    const [cricketNews, setCricketNews] = useState([]);
    const [otherNews, setOtherNews] = useState([]);

    useEffect(() => {
        fetch('/footballnews.json')
            .then(res => res.json())
            .then(data => setFootballNews(data))
            .catch(error => console.log(error));

        fetch('/cricketnews.json')
            .then(res => res.json())
            .then(data => setCricketNews(data))
            .catch(error => console.log(error));
        fetch('/othernews.json')
            .then(res => res.json())
            .then(data => setOtherNews(data))
            .catch(error => console.log(error));
    }, [])

    return (
        <div className="pt-28 pb-40 bg-yellow-100 px-4" id="blogs">
            <div className="mb-20 text-center">
                <h2 className="text-neutral text-3xl font-semibold leading-snug tracking-wide">
                    Our Latest
                    <span className="relative">
                        <span className="text-green-600"> Blogs. </span>
                        <span className="absolute top-7 start-0">
                            <Lottie animationData={underlineAnimation} loop={true} className="min-w-[120px]" />
                        </span>
                    </span>
                </h2>
            </div>
            <div className="max-w-7xl mx-auto">
                <Tabs>
                    <TabList>
                        <Tab>Football</Tab>
                        <Tab>Cricket</Tab>
                        <Tab>Others</Tab>
                    </TabList>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-12 mx-4 mt-10">
                            {
                                footballNews.map(news => <div class="flex flex-col md:flex-row gap-3 bg-white border border-gray-300 rounded-md shadow-xl overflow-hidden items-center justify-start">
                                    <div class="relative w-full md:w-52 h-44 flex-shrink-0">
                                        <img class="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50" loading="lazy" src={news.image} />
                                    </div>
                                    <div class="flex flex-col gap-2 p-4 md:p-0">
                                        <p class="text-xl font-bold">{news.heading}</p>
                                        <p class="text-gray-500">
                                            {news.short}
                                        </p>
                                        <span class="flex items-center justify-start text-gray-500">
                                            <Link to={`/blogs/${news.id}`} state={{ news }} className="btn btn-xs btn-warning">
                                                Read More..
                                            </Link>
                                        </span>
                                    </div>
                                </div>
                                )
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-12 mx-4 mt-10">
                            {
                                cricketNews.map(news => <div class="flex flex-col md:flex-row gap-3 bg-white border border-gray-300 rounded-md shadow-xl overflow-hidden items-center justify-start">
                                    <div class="relative w-full md:w-52 h-44 flex-shrink-0">
                                        <img class="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50" loading="lazy" src={news.image} />
                                    </div>
                                    <div class="flex flex-col gap-2 p-4 md:p-0">
                                        <p class="text-xl font-bold">{news.heading}</p>
                                        <p class="text-gray-500">
                                            {news.short}
                                        </p>
                                        <span class="flex items-center justify-start text-gray-500">
                                            <Link to={`/blogs/${news.id}`} state={{ news }} className="btn btn-xs btn-warning">
                                                Read More..
                                            </Link>
                                        </span>
                                    </div>
                                </div>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-12 mx-4 mt-10">
                            {
                                otherNews.map(news => <div class="flex flex-col md:flex-row gap-3 bg-white border border-gray-300 rounded-md shadow-xl overflow-hidden items-center justify-start">
                                    <div class="relative w-full md:w-52 h-44 flex-shrink-0">
                                        <img class="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50" loading="lazy" src={news.image} />
                                    </div>
                                    <div class="flex flex-col gap-2 p-4 md:p-0">
                                        <p class="text-xl font-bold">{news.heading}</p>
                                        <p class="text-gray-500">
                                            {news.short}
                                        </p>
                                        <span class="flex items-center justify-start text-gray-500">
                                            <Link to={`/blogs/${news.id}`} state={{ news }} className="btn btn-xs btn-warning">
                                                Read More..
                                            </Link>
                                        </span>
                                    </div>
                                </div>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default LatestNews;