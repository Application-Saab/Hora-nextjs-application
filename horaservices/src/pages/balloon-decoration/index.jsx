import React, { useState, useEffect } from "react";
import { Helmet } from 'react-helmet';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import { useParams } from "react-router-dom";
import { BASE_URL, GET_DECORATION_CAT_ID, GET_DECORATION_CAT_ITEM } from '../../utils/apiconstants';
import BirthdayImage from '../../assets/Birthday_dec_cat.jpeg';
import FirstnightImage from '../../assets/first_night_cat_dec.jpeg'
import AnniversaryImage from '../../assets/aniversary_Cat_Dec.jpeg'
import KidsbirthdayImage from '../../assets/kids_birthday_decoration.jpeg'
import BabyShowerImage from '../../assets/baby-shower-dec-cat.jpeg'
import WelcomebabyImage from '../../assets/welcome_baby_dec.jpeg'
import PremiumImage from '../../assets/preminumdecor.jpeg'
import CarbootImage from '../../assets/car_boot.jpg'
import BallonBImage from '../../assets/Balloon-B-new.jpeg'
import { getDecorationOrganizationSchema } from '../../utils/schema';
import { setState } from '../../actions/action';
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useDispatch } from "react-redux";
import '../../css/decoration.css';

const decCat = [
    { id: '2', image: BirthdayImage, name: 'Birthday', subCategory: "Birthday", catValue: "birthday-decoration", imgAlt: "A Gorgeous Candy Birthday Decoration Surprise!" },
    { id: '3', image: FirstnightImage, name: 'First Night', subCategory: "FirstNight", catValue: "first-night-decoration", imgAlt: "Add extra happiness quotient to your wedding night with our exclusive décor package" },
    { id: '4', image: AnniversaryImage, name: 'Anniversary', subCategory: "Anniversary", catValue: "anniversary-decoration", imgAlt: "Immerse yourself in a world of romance with our mesmerizing anniversary decorations." },
    { id: '5', image: KidsbirthdayImage, name: 'Kids Birthday', subCategory: "KidsBirthday", catValue: "kids-birthday-decoration", imgAlt: "Flutter into a world of whimsy with our exclusive Whimsical Flutter-themed Welcome Baby Decorations." },
    { id: '6', image: BabyShowerImage, name: 'Baby Shower', subCategory: "BabyShower", catValue: "baby-shower-decoration", imgAlt: "Celebrate the transformation into motherhood with Our Gilded Baby Shower Decorations." },
    { id: '7', image: WelcomebabyImage, name: 'Welcome Baby', subCategory: "WelcomeBaby", catValue: "welcome-baby-decoration", imgAlt: "A Pastel Theme Oh Baby Decor for your Baby Shower Celebrations!" },
    { id: '8', image: PremiumImage, name: 'premium Decoration', subCategory: "PremiumDecoration", catValue: "premium-decoration", imgAlt: "Birthday party decoration ideas for adults" },
    { id: '9', image: BallonBImage, name: 'Ballon Bouquets', subCategory: "BallonBouquets", catValue: "balloon-bouquets-decoration", imgAlt: "Balloon Bouquet" },
    // Additional items can be added here
];

const Decoration = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    // const navigate = useNavigate();
    const schemaOrg = getDecorationOrganizationSchema();
    const scriptTag = JSON.stringify(schemaOrg);
    let { city } = useParams();
    const hasCityPageParam = city ? true : false;

    const openCatItems = (item) => {
        dispatch(setState(item.subCategory, item.imgAlt));
        if (hasCityPageParam) {
            router.push(`/${city}/balloon-decoration/${item.catValue}`);
        }
        else {
            router.push(`/balloon-decoration/${item.catValue}`);
        }
    };

    return (
        <div>
            <Helmet>
                <title>Balloon and Flower Decoration @999</title>
                <meta name="description" content="Celebrate Anniversary, Birthday & other Occasions with Candlelight Dinners, Surprises & Balloon Decorations" />
                <meta name="keywords" content="Balloon and Flower Decoration @999" />
                <meta property="og:title" content="Balloon and Flower Decoration by Professional Decorators" />
                <meta property="og:description" content="Celebrate Anniversary, Birthday & other Occasions with Candlelight Dinners, Surprises & Balloon Decorations" />
                <meta property="og:image" content="https://horaservices.com/api/uploads/attachment-1706520980436.png" />
                <script type="application/ld+json">{scriptTag}</script>
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Hora Services" />
                <meta property="og:url" content="https://horaservices.com/balloon-decoration" />
                <meta property="og:type" content="website" />
            </Helmet>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", margin: "20px auto 0", width: "70%", justifyContent: "space-between" }} className="decContainerSec decPage">
                {decCat.map((item, index) => (
                    <div key={index} className="imageContainer">
                        <Image src={item.image} className="decCatimage" alt={item.name} onClick={() => openCatItems(item)} />
                    </div>
                ))}
                {/* <div>
            {decCat.map((item, index) => (
            <url>
            <loc>{`https://horaservices.com/balloon-decoration/${item.catValue}`}</loc>
            <priority>1.00</priority>
            </url>
            ))} 
            </div> */}
            </div>
        </div>
    );
};

// Fetching the data at build time
export async function getStaticProps() {
    try {
        const catalogueData = await Promise.all(decCat.map(async (item) => {
            const response = await axios.get(BASE_URL + GET_DECORATION_CAT_ID + item.subCategory);
            const categoryId = response.data.data._id;
            const result = await axios.get(BASE_URL + GET_DECORATION_CAT_ITEM + categoryId);
            return {
                ...item,
                data: result.data.data,
            };
        }));

        return {
            props: {
                catalogueData,
            },
        };
    } catch (error) {
        console.log("Error fetching data:", error.message);
        return {
            props: {
                catalogueData: [],
            },
        };
    }
}

export default Decoration;
