import React from 'react';

import SearchBar from './SearchBar';
import Screen from './newsScreen';
import FoxNews from './FoxNews';
import FeatureNews from './FeatureNews';
import data from './data';
import TechNews from './TechNews';
import PoliticalNews from  './PoliticalNews';
import EntertainmentNews from './EntertainmentNews';

export default function NewsApp() {

    const foxNews = data.filter(item => item.category === 'Fox News');
    const techNews = data.filter(item => item.category === 'Tech News');
    const politicalhNews = data.filter(item => item.category === 'Political News');
    const entertainmentNews = data.filter(item => item.category === 'Entertainment News');
    return (
        <Screen>
            <SearchBar/>
            <FeatureNews item={{
                id: "2",
                title: "Elon Musk Reportedly Wants To Terminate $20M USD Settlement Deal With SEC Regarding His Tweets",
                desc: "Tesla's CEO Elon Musk has reportedly asked federal courts to terminate his $20 million USD fraud settlement with the SEC from 2018. The issue in question pertains to the need for Musk to gain approval before Tweeting.",
                thumbnail: "http://bigdata-vn.com/wp-content/uploads/2021/10/1634216105_990_Hinh-ve-don-gian-ma-dep-de-thuong-cute-danh.jpg",
                category: "Tech News"
            }}/>
            <FoxNews data={foxNews}/>
            <PoliticalNews data={politicalhNews} />
            <TechNews data={techNews}/>
            <EntertainmentNews data={entertainmentNews} />
        </Screen>
    );
}