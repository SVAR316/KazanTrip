import {Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

import 'swiper/css/navigation';
import '../styles/popular.scss'
import {Autoplay, Navigation} from 'swiper/modules';

import kremNab from '../images/kremNab.png'
import popularShrif from '../images/popularSharif.png'
import popularVlad from '../images/popularVlad.png'
import popularKrem from '../images/popularKrem.png'
import popularKazan from '../images/popularKazan.png'
import popularYri from '../images/popularYri.png'
import popularBylak from '../images/popularBylak.png'
import popularAkuat from '../images/popularAkuat.png'
import popularSad from '../images/popularSad.png'

export function PopularCarousel() {

    return (
        <>
            <div className={'popular-mobile'}>
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={50}
                grabCursor={true}
                centeredSlides={true}
                navigation={true}
                modules={[Navigation]}>
                <SwiperSlide>
                    <div className={'popular-item'}>
                        <img src={popularShrif} />
                        <div className={'popular-item__text'}>
                            <p>Мечеть Кул Шариф</p>
                        </div>
                        <p className={'popular-item__title'}>Главная джума-мечеть</p>
                        <div className={'popular-item__line'}></div>
                        <p className={'popular-item__address'}>13, Вахитовский район, территория Кремль, Казань</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'popular-item'}>
                        <img src={kremNab} />
                        <div className={'popular-item__text'}>
                            <p>Кремлёвская набережная</p>
                        </div>
                        <p className={'popular-item__title'}> <span>adlsasdjjaasdasdas</span></p>
                        <div className={'popular-item__line'}></div>
                        <p className={'popular-item__address'}>ул. Федосеевская, 1, Казань, Респ. Татарстан, 420111</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'popular-item'}>
                        <img src={popularVlad} />
                        <div className={'popular-item__text'}>
                            <p>Дворец земледельцев</p>
                        </div>
                        <p className={'popular-item__title'}>Здание в историческом центре Казани</p>
                        <div className={'popular-item__line'}></div>
                        <p className={'popular-item__address'}>Федосеевская ул., 36, Казань</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'popular-item'}>
                        <img src={popularKrem} />
                        <div className={'popular-item__text'}>
                            <p>Казанский Кремль</p>
                        </div>
                        <p className={'popular-item__title'}>Древнейшая часть Казани</p>
                        <div className={'popular-item__line'}></div>
                        <p className={'popular-item__address'}>Республика Татарстан, Казань, проезд Шейнкмана</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'popular-item'}>
                        <img src={popularKazan} />
                        <div className={'popular-item__text'}>
                            <p>Казан</p>
                        </div>
                        <p className={'popular-item__title'}>Дворец бракосочетаний</p>
                        <div className={'popular-item__line'}></div>
                        <p className={'popular-item__address'}>ул. Сибгата Хакима, 4</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'popular-item'}>
                        <img src={popularYri} />
                        <div className={'popular-item__text'}>
                            <p>Парк имени Урицкого</p>
                        </div>
                        <p className={'popular-item__title'}>Один из наиболее крупных парков</p>
                        <div className={'popular-item__line'}></div>
                        <p className={'popular-item__address'}>Академика Королева, 47</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'popular-item'}>
                        <img src={popularBylak} />
                        <div className={'popular-item__text'}>
                            <p>Булак</p>
                        </div>
                        <p className={'popular-item__title'}>Канал в Вахитовском районе Казани</p>
                        <div className={'popular-item__line'}></div>
                        <p className={'popular-item__address'}>ул.Лево-Булачная</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'popular-item'}>
                        <img src={popularAkuat} />
                        <div className={'popular-item__text'}>
                            <p>Экият</p>
                        </div>
                        <p className={'popular-item__title'}>Крупнейший театр кукол в России</p>
                        <div className={'popular-item__line'}></div>
                        <p className={'popular-item__address'}>ул.Лево-Петербургская ул., 57, Казань • этаж 2</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'popular-item'}>
                        <img src={popularSad} />
                        <div className={'popular-item__text'}>
                            <p>Лядской сад</p>
                        </div>
                        <p className={'popular-item__title'}> <span>adlsasdjjaasdasdas</span></p>
                        <div className={'popular-item__line'}></div>
                        <p className={'popular-item__address'}>ул. Максима Горького</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
        <div className={'popular'}>
            <Swiper
                slidesPerView={4}
                spaceBetween={50}
                grabCursor={true}
                centeredSlides={true}
                navigation={true}
                modules={[Navigation]}>
                <SwiperSlide>
                    <div className={'popular-item'}>
                        <img src={popularShrif} />
                        <div className={'popular-item__text'}>
                            <p>Мечеть Кул Шариф</p>
                        </div>
                        <p className={'popular-item__title'}>Главная джума-мечеть</p>
                        <div className={'popular-item__line'}></div>
                        <p className={'popular-item__address'}>13, Вахитовский район, территория Кремль, Казань</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'popular-item'}>
                        <img src={kremNab} />
                        <div className={'popular-item__text'}>
                            <p>Кремлёвская набережная</p>
                        </div>
                        <p className={'popular-item__title'}> <span>adlsasdjjaasdasdas</span></p>
                        <div className={'popular-item__line'}></div>
                        <p className={'popular-item__address'}>ул. Федосеевская, 1, Казань, Респ. Татарстан, 420111</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'popular-item'}>
                        <img src={popularVlad} />
                        <div className={'popular-item__text'}>
                            <p>Дворец земледельцев</p>
                        </div>
                        <p className={'popular-item__title'}>Здание в историческом центре Казани</p>
                        <div className={'popular-item__line'}></div>
                        <p className={'popular-item__address'}>Федосеевская ул., 36, Казань</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'popular-item'}>
                        <img src={popularKrem} />
                        <div className={'popular-item__text'}>
                            <p>Казанский Кремль</p>
                        </div>
                        <p className={'popular-item__title'}>Древнейшая часть Казани</p>
                        <div className={'popular-item__line'}></div>
                        <p className={'popular-item__address'}>Республика Татарстан, Казань, проезд Шейнкмана</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'popular-item'}>
                        <img src={popularKazan} />
                        <div className={'popular-item__text'}>
                            <p>Казан</p>
                        </div>
                        <p className={'popular-item__title'}>Дворец бракосочетаний</p>
                        <div className={'popular-item__line'}></div>
                        <p className={'popular-item__address'}>ул. Сибгата Хакима, 4</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'popular-item'}>
                        <img src={popularYri} />
                        <div className={'popular-item__text'}>
                            <p>Парк имени Урицкого</p>
                        </div>
                        <p className={'popular-item__title'}>Один из наиболее крупных парков</p>
                        <div className={'popular-item__line'}></div>
                        <p className={'popular-item__address'}>Академика Королева, 47</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'popular-item'}>
                        <img src={popularBylak} />
                        <div className={'popular-item__text'}>
                            <p>Булак</p>
                        </div>
                        <p className={'popular-item__title'}>Канал в Вахитовском районе Казани</p>
                        <div className={'popular-item__line'}></div>
                        <p className={'popular-item__address'}>ул.Лево-Булачная</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'popular-item'}>
                        <img src={popularAkuat} />
                        <div className={'popular-item__text'}>
                            <p>Экият</p>
                        </div>
                        <p className={'popular-item__title'}>Крупнейший театр кукол в России</p>
                        <div className={'popular-item__line'}></div>
                        <p className={'popular-item__address'}>ул.Лево-Петербургская ул., 57, Казань • этаж 2</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'popular-item'}>
                        <img src={popularSad} />
                        <div className={'popular-item__text'}>
                            <p>Лядской сад</p>
                        </div>
                        <p className={'popular-item__title'}> <span>adlsasdjjaasdasdas</span></p>
                        <div className={'popular-item__line'}></div>
                        <p className={'popular-item__address'}>ул. Максима Горького</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div >
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
        </>
    )
}