import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';

import cartLounge from '../images/cartLounge.png'
import meraKitchen from '../images/meraKitchen.png'
import azu from '../images/azu.png'
import artel from '../images/artel.png'
import vanGofh from '../images/vanGofh.png'
import cheeseria from '../images/cheeseria.png'
import location from '../images/location.svg'
import {Navigation} from "swiper/modules";

export function PlacesCarousel() {

    return (
        <div className="popular-slider">
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={25}
                grabCursor={true}
                centeredSlides={true}
                navigation={true}
                modules={[Navigation]}>
                <SwiperSlide>
                    <div className={'places-card'}>
                        <img src={cartLounge} alt={'cart lounge'} />
                        <div className={'places-card__down'}>
                            <p>CART Lounge</p>
                            <p><img src={location} alt={'location'} />ул. 2-я Юго-Западная д.3А</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'places-card'}>
                        <img src={meraKitchen} alt={'cart lounge'} />
                        <div className={'places-card__down'}>
                            <p>Mera kitchen</p>
                            <p><img src={location} alt={'location'} />ул. Разведчика Ахмерова, 7</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'places-card'}>
                        <img src={azu} alt={'cart lounge'} />
                        <div className={'places-card__down'}>
                            <p>AZU</p>
                            <p><img src={location} alt={'location'} />ул. Декабристов, 8</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'places-card'}>
                        <img src={artel} alt={'cart lounge'} />
                        <div className={'places-card__down'}>
                            <p>ARTEL</p>
                            <p><img src={location} alt={'location'} />ул. Муштари, 18</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'places-card'}>
                        <img src={vanGofh} alt={'cart lounge'} />
                        <div className={'places-card__down'}>
                            <p>Van Gofh</p>
                            <p><img src={location} alt={'location'} />п. Ибрагимова, 56А, этаж 3</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'places-card'}>
                        <img src={cheeseria} alt={'cart lounge'} />
                        <div className={'places-card__down'}>
                            <p>Cheeseria</p>
                            <p><img src={location} alt={'location'} />ул. Мусы Джалиля, 8/44</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}