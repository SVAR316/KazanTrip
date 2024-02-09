import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';

import sherifSlide from '../images/kyl-sherif.png'
import cloudSlideFirst from '../images/back-cloud.png'
import nyryllaUp from '../images/nyryllaUp.png'
import cloudSlideSecond from '../images/cloudSlideSecond.png'
import kazanS from '../images/kazanS.png'
import cloudSlideThird from '../images/cloudSlideThird.png'
import galeevS from '../images/galeevS.png'
import cloudSlideFourth from '../images/cloudSlideFourth.png'

export function HeaderCarousel() {
    
    return (
        <div>
            <Swiper >
                <SwiperSlide>
                    <div className={'carousel'}>
                        <div className={'sharif'}>
                            <div className={'container'}>
                                <div className={'sharif-first'}>
                                    <div className={'sharif-first__upper'}>
                                        <p className={'sharif-first__counter'}>01</p>
                                        <p className={'sharif-first__slash'}>/</p>
                                        <p className={'sharif-first__max'}>04</p>
                                    </div>
                                    <div className={'sharif-first__text'}>
                                        <p className={'sharif-first__address'}>ул. Сибгата Хакима, 4</p>
                                        <p className={'sharif-first__name'}>МЕЧЕТЬ КУЛ-ШАРИФ</p>
                                    </div>
                                    <div className={'sharif-first__desc'}>
                                        <p>Символ столицы Татарстана и ее главный открыточный вид<br/> — мечеть Кул-Шариф</p>
                                        <p>Здание мечети облицовано белым мрамором, купол и вершины минаретов имеют окраску
                                            бирюзового цвета. Фасад главного здания украшен бронзовыми металлическими надписями
                                            арабской вязью</p>
                                    </div>
                                    <img className={'sharif-first__image'} src={sherifSlide}/>
                                </div>
                            </div>
                            <img className={'sharif-first__cloud'} src={cloudSlideFirst}/>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'carousel'}>
                        <div className={'nyrylla'}>
                            <div className={'container'}>
                                <div className={'nyrylla-first'}>
                                    <div className={'nyrylla-first__upper'}>
                                        <p className={'nyrylla-first__counter'}>02</p>
                                        <p className={'nyrylla-first__slash'}>/</p>
                                        <p className={'nyrylla-first__max'}>04</p>
                                    </div>
                                    <div className={'nyrylla-first__text'}>
                                        <p className={'nyrylla-first__address'}>улица Московская 74</p>
                                        <p className={'nyrylla-first__name'}>МЕЧЕТЬ НУРУЛЛА</p>
                                    </div>
                                    <div className={'nyrylla-first__desc'}>
                                        <p>Мечеть Нурулла  — первая в своем роде, положившая начало распространению нового типа мечетей с наземным минаретом в торце здания.</p>
                                        <p>Национально-романтический образ правоверной святыни сложился во многом из-за формы минарета, напоминающей булгарские традиции.</p>
                                    </div>
                                    <img className={'nyrylla-first__image'} src={nyryllaUp}/>
                                </div>
                            </div>
                            <img className={'nyrylla-first__cloud'} src={cloudSlideSecond}/>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'carousel'}>
                        <div className={'kazanS'}>
                            <div className={'container'}>
                                <div className={'kazanS-first'}>
                                    <div className={'kazanS-first__upper'}>
                                        <p className={'kazanS-first__counter'}>03</p>
                                        <p className={'kazanS-first__slash'}>/</p>
                                        <p className={'kazanS-first__max'}>04</p>
                                    </div>
                                    <div className={'kazanS-first__text'}>
                                        <p className={'kazanS-first__address'}>улица Московская 74</p>
                                        <p className={'kazanS-first__name'}>ЦЕНТР СЕМЬИ КАЗАН</p>
                                    </div>
                                    <div className={'kazanS-first__desc'}>
                                        <p>Центр семьи «Казан» — главный загс в Казани. Центр семьи чаще называют «Чашей». Именно такую форму имеет традиционный татарский казан, или котел — символ домашнего очага</p>
                                        <p>Одна из красивейших смотровых площадок Казани — именно здесь. Многие стараются попасть сюда вечером, чтобы увидеть с высоты закат</p>
                                    </div>
                                    <img className={'kazanS-first__image'} src={kazanS}/>
                                </div>
                            </div>
                            <img className={'kazanS-first__cloud'} src={cloudSlideThird}/>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'carousel'}>
                        <div className={'galeev'}>
                            <div className={'container'}>
                                <div className={'galeev-first'}>
                                    <div className={'galeev-first__upper'}>
                                        <p className={'galeev-first__counter'}>04</p>
                                        <p className={'galeev-first__slash'}>/</p>
                                        <p className={'galeev-first__max'}>04</p>
                                    </div>
                                    <div className={'galeev-first__text'}>
                                        <p className={'galeev-first__address'}>ул. Г. Тукая, 40</p>
                                        <p className={'galeev-first__name'}>ГАЛЕЕВСКАЯ МЕЧЕТЬ</p>
                                    </div>
                                    <div className={'galeev-first__desc'}>
                                        <p>Мечеть относится к традиционным татарским двухзальным храмам с минаретом на крыше. Выполнена в стиле позднего классицизма</p>
                                        <p>До революции мечеть была интеллектуальным центром татарской общественности — в разное время здесь молились Габдулла Тукай, Каюм Насыри</p>
                                    </div>
                                    <img className={'galeev-first__image'} src={galeevS}/>
                                </div>
                            </div>
                            <img className={'galeev-first__cloud'} src={cloudSlideFourth}/>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}