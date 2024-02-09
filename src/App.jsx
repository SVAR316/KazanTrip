import './styles/main.scss'

// components
import { HeaderCarousel } from './carousels/HeaderCarousel.jsx';
import { PlacesCarousel } from './carousels/PlacesCarousel.jsx'
import { PopularCarousel } from './carousels/PopularCarousel.jsx';

// imgs
import logo from './images/logo.svg'
import vk from './images/vk.svg'
import insta from './images/instagram.svg'
import arrowDown from './images/arrowDown.svg'
import houseYshahova from './images/houseYshahova.png'
import nationLibrary from './images/nationLibrary.png'
import restaurant from './images/restaurant.png'
import kazan from './images/kazan.png'
import arrowRightLong from './images/arrowrightLong.svg'
import location from './images/location.svg'
import locationBlack from './images/locationBlack.png'
import pointC from './images/pointC.png'
import cost from './images/cost.png'
import cartLounge from './images/cartLounge.png'
import meraKitchen from './images/meraKitchen.png'
import azu from './images/azu.png'
import artel from './images/artel.png'
import vanGofh from './images/vanGofh.png'
import cheeseria from './images/cheeseria.png'
import formCloud from './images/cloudForm.png'
import alMardjani from './images/alMardjani.png'
import apanaevDown from './images/apanaevDown.png'
import apanaevLeft from './images/apanaevLeft.png'
import apanaevRight from './images/apanaevRight.png'
import zakabanUpper from './images/zakabanUpper.png'
import zakabanDown from './images/zakabanDown.png'
import artplay from './images/artplay.png'
import whiteFlowers from './images/whiteFlowers.png'
import itPark from './images/itPark.png'
import star from './images/Star.svg'
import linesRight from './images/linesRight.png'
import linesLeft from './images/linesLeft.png'
import kazanText from './images/kazanText.png'
// import kazanBg from './images/kazanBg.png'
import arrowDownWhite from './images/arrowDownWhite.svg'
import arrowRightDown from './images/arrowRightDown.svg'
import {useState} from "react";

function App() {

    const [modal, setModal] = useState(false)

    return (
        <div>
            <div className={modal ? 'modal' : ''} style={!modal ? {display: 'none'} : {display: "flex"}}>
                <div className={'modal-content'}>
                    <div className={'modal-content__close'}>
                        <button onClick={() => setModal(false)}>X</button>
                    </div>
                    <div>
                        <a onClick={() => setModal(false)} href={"#main"}>Главная</a>
                        <a onClick={() => setModal(false)}>О нас</a>
                        <a onClick={() => setModal(false)} href={"#places"}>Места</a>
                        <a onClick={() => setModal(false)} href={"#popular"}>Популярное</a>
                    </div>
                </div>
            </div>
            <div className={'header-mobile'}>
                <a><img src={logo} alt={'logo'}/> KazanTrip</a>
                <button onClick={() => setModal(modal ? false : true)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
            </div>
            <div className={'header'}>
                <div className={'container'}>
                    <div className={'header-content'}>
                        <div className={'header-content__left'}>
                            <a href={"#main"}>Главная</a>
                            <a href="">О нас</a>
                            <a href={"#places"}>Места</a>
                            <a href={"#popular"}>Популярное</a>
                        </div>
                        <a href={'/'} className={"header-content__right"}>
                            <img src={logo} alt={'logo'}/>
                            KazanTrip
                        </a>
                    </div>
                </div>
            </div>

            <div className={'block-mobile'} >
                <img className={'block-mobile__title'} src={kazanText} alt='kazan text'/>
                <div className={'block-mobile__bg'}></div>
                <img className={'block-mobile__arrow'} src={arrowDownWhite} alt='arrow'/>
            </div>
    
                <HeaderCarousel />


            <div className={'container'}>
                <div id={'main'} className={'travel'}>
                    <p className={'travel__title'}>За 1 день можно пройти 4 локации</p>
                    <div className={'travel-first'}>
                        <div>
                            <p className={"travel-first__number"}>01</p>
                            <p className={'travel-first__name'}>Дом Ушаковой</p>
                            <p className={'travel-first__desc'}>Дом находится на пересечении улиц Баумана и Кремлёвской.
                                Купив билет, можно посмотреть на это историческое здание и его убранства, параллельно
                                сделав много фото для ваших соцсетей.</p>
                            <img alt={'arrow'} className={'travel-first__arrow'} src={arrowDown}/>
                        </div>
                        <div>
                            <img alt={'image'} className={'travel-first__image'} src={houseYshahova}/>
                            <p className={'travel-first__address'}>Дом Ушковой Кремлёвская ул., 33, Казань</p>
                        </div>
                    </div>
                    <p className={'travel__desc'}>После прогулки интересно будет посмотреть на Национальную библиотеку,
                        где проводят выставки</p>
                    <div className={'travel-second'}>
                        <div>
                            <img className={'travel-second__image'} alt={'nation library'} src={nationLibrary}/>
                            <p className={'travel-second__address'}>Национальная библиотека ул. Пушкина, 86, Казань</p>
                        </div>
                        <div>
                            <p className={'travel-second__number'}>02</p>
                            <p className={'travel-second__name'}>Национальная библиотека Казани</p>
                            <p className={'travel-second__desc'}>Эстетичное место, где можно не только почитать книги,
                                но и поработать за компьютером, послушать музыку, а также принять участие в различных
                                мероприятиях, таких как лекции, мастер-классы и концерты.</p>
                        </div>
                    </div>
                    <div className={'travel-third'}>
                        <div>
                            <p className={'travel-third__number'}>03</p>
                            <p className={'travel-third__name'}>Ресторан «На крыше»</p>
                            <p className={'travel-third__desc'}>Этот ресторан славиться своей уютной атмосферой и свои
                                красивым видом на центр города, а так же блюдами </p>
                        </div>
                        <div>
                            <img className={'travel-third__image'} alt={'restaurant'} src={restaurant}/>
                            <p className={'travel-third__address'}>Лофт-ресторан на Крыше ул. Баумана, 82, Казань (этаж
                                5)</p>
                        </div>
                    </div>
                    <div className={'travel-fourth'}>
                        <div>
                            <img className={'travel-fourth__image'} src={kazan} alt={'kazan'}/>
                            <p className={'travel-fourth__address'}>Центр семьи Казан ул. Сибгата Хакима, 4, Казань</p>
                        </div>
                        <div>
                            <p className={'travel-fourth__number'}>04</p>
                            <p className={'travel-fourth__name'}>Казан</p>
                            <p className={'travel-fourth__desc'}>Вечером можно прогуляться по центру Казани и
                                полюбовапться главной достопримечательностью «Казан»</p>
                            <p className={'travel-fourth__quote'}>«Центр семьи Казан», также известный как «Чаша Казан»,
                                представляет собой смотровую площадку на крыше здания, которое имеет форму огромного
                                казана. С вершины здания открывается панорамный вид на Казань и ее окрестности.</p>
                        </div>
                    </div>
                </div>
            </div>

            <img className={'line-left'} src={linesLeft} alt={'lines left'}/>
            <div className={'container'}>
                <p id={"places"} className={'popular__title'}>Популярные места</p>
                </div>
                <div className={'popular-content'}>
                                <PopularCarousel />
                </div>
        

            <div className={'places-mobile'}>
                <p className={'places-mobile__title'}>Интересные кафешки для вашего настроения <img src={arrowRightDown} /></p>
            </div>

            <div className='places-mobile-content'>
                                <PlacesCarousel />
            </div>

            <div className={'container'}>
                <div className={'places'}>
                    <div className={'places-upper'}>
                        <div>
                            <p className={'places-upper__text-upper'}>Интересные кафешки для</p>
                            <p className={'places-upper__text-down'}>вашего настроения <img src={arrowRightLong}
                                                                                            alt={'arrow left'}/></p>
                        </div>
                        <div className={'places-upper__cards'}>
                            <div className={'places-card'}>
                                <img src={cartLounge} alt={'cart lounge'}/>
                                <div className={'places-card__down'}>
                                    <p>CART Lounge</p>
                                    <p><img src={location} alt={'location'}/>ул. 2-я Юго-Западная д.3А</p>
                                </div>
                            </div>
                            <div className={'places-card'}>
                                <img src={meraKitchen} alt={'cart lounge'}/>
                                <div className={'places-card__down'}>
                                    <p>Mera kitchen</p>
                                    <p><img src={location} alt={'location'}/>ул. Разведчика Ахмерова, 7</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'places-down'}>
                        <div className={'places-card'}>
                            <img src={azu} alt={'cart lounge'}/>
                            <div className={'places-card__down'}>
                                <p>AZU</p>
                                <p><img src={location} alt={'location'}/>ул. Декабристов, 8</p>
                            </div>
                        </div>
                        <div className={'places-card'}>
                            <img src={artel} alt={'cart lounge'}/>
                            <div className={'places-card__down'}>
                                <p>ARTEL</p>
                                <p><img src={location} alt={'location'}/>ул. Муштари, 18</p>
                            </div>
                        </div>
                        <div className={'places-card'}>
                            <img src={vanGofh} alt={'cart lounge'}/>
                            <div className={'places-card__down'}>
                                <p>Van Gofh</p>
                                <p><img src={location} alt={'location'}/>п. Ибрагимова, 56А, этаж 3</p>
                            </div>
                        </div>
                        <div className={'places-card'}>
                            <img src={cheeseria} alt={'cart lounge'}/>
                            <div className={'places-card__down'}>
                                <p>Cheeseria</p>
                                <p><img src={location} alt={'location'}/>ул. Мусы Джалиля, 8/44</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={'container'}>
                <p className={'slob__title'}>Прогулка по татарским слободам</p>

                <p className={'slob__desc'}>Почему Розовая мечеть на деле голубая, Голубая — почти белая, а Белая и
                    вовсе зеленая</p>
                <div className={'slob__line'}></div>
                <div className={'slob-content'}>
                    <img alt={'arrow'} src={arrowDown}/>
                    <p>Новую и Старую Татарские слободы Казани рекомендуют туристам во всех путеводителях: во-первых,
                        вокруг озера Кабан просто очень красиво, во-вторых, местные мечети — едва ли не единственные
                        сохранившиеся памятники монументальной татарской архитектуры в Казани.</p>
                </div>
            </div>

            <div>
                <div className={'container'}>
                    <p className={'mosque__title'}>Мечеть Аль-Марджани</p>
                    <p className={'mosque__subtitle'}>ее также называют Первая соборная, Старокаменная, Юнусовская</p>
                </div>
                <div className={'mosque'}>
                    <div className={'container'}>
                        <div className={'mosque-content'}>
                            <div className={'mosque-content__left'}>
                                <img alt={'alMardjani'} src={alMardjani}/>
                                <p>ул. К. Насыри, 17</p>
                            </div>
                            <div className={'mosque-content__right'}>
                                <p>Мечеть построена в традициях татарской средневековой архитектуры — с минаретом на
                                    крыше.</p>
                                <p>Фасад и интерьер оформлены в духе русского барокко — кажется, что архитекторы
                                    использовали столько элементов декора, на сколько хватило денег.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className={'container'}>
                    <p className={'apanaev__title'}>Апанаевская мечеть</p>
                    <p className={'apanaev__subtitle'}>ее также называют Вторая соборная, Байская, Пещерная</p>
                </div>
                <div className={'apanaev'}>
                    <div className={'container'}>
                        <div className={'apanaev-content'}>
                            <div className={'apanaev-content__left'}>
                                <p>Апанаевская мечеть строилась параллельно с Аль-Марджани, поэтому они похожи, хотя
                                    здесь архитектор предпочел украсить фасад миниатюрными элементами. Перфекционисты
                                    будут довольны — мечеть можно поделить на две равные половины точно посередине, и
                                    одна часть будет полностью симметрична другой. Из-за усеченных колонн на фронтальной
                                    части здания кажется, будто оно немного изогнуто</p>
                                <p>В советский период мечеть была закрыта: ТатЦИК постановил разрушить минарет и
                                    надстроить один этаж для детского сада. В 1995 году здание снова передали в руки
                                    мусульманской общины, а к Универсиаде полностью отреставрировали.</p>
                            </div>
                            <div className={'apanaev-content__right'}>
                                <div>
                                    <img alt={'apanaevLeft'} src={apanaevLeft}/>
                                    <img alt={'apanaevRight'} src={apanaevRight}/>
                                </div>
                                <img alt={'apanaevDown'} src={apanaevDown}/>
                                <p>ул. К. Насыри, 27</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className={'container'}>
                    <p className={'zakaban__title'}>Закабанная мечеть</p>
                    <p className={'zakaban__subtitle'}>ее также называют мечеть 1000-летия принятия ислама,
                        Юбилейная</p>
                </div>
                <div className={'zakaban'}>
                    <div className={'container'}>
                        <div className={'apanaev-content'}>
                            <div className={'apanaev-content__left'}>
                                <p>Если урезать минарет до основания, то Закабанная мечеть будет похожа на дом в Риге
                                    или Калининграде: прямоугольные формы с угловатыми карнизами и выпуклыми окнами
                                    почти во всю высоту стен.</p>
                                <p>Разрешение на постройку мечети в 1926 году давал лично Иосиф Сталин, который тогда
                                    был наркомом по делам национальностей. В тот год Казань отмечала тысячелетие
                                    принятия ислама. После открытия мечеть проработала одну неделю. Окончательно ее
                                    закрыли в 1930 году.</p>
                            </div>
                            <div className={'zakaban-content__right'}>
                                <img alt={'zakaban image'} src={zakabanUpper}/>
                                <img alt={'zakaban image'} src={zakabanDown}/>
                                <p>ул. Х. Такташа, 26</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className={'container'}>
                    <p className={'artplay__title'}>Необычные места Казани</p>
                </div>
                <div className={'artplay'}>
                    <div className={'container'}>
                        <div className={'artplay-content'}>
                            <div className={'artplay-content__left'}>
                                <p className={'artplay-content__left-title'}>Мультимедийные выставки с «ожившими»
                                    полотнами</p>
                                <p className={'artplay-content__left-desc'}>В «Артплее» проходят мультимедийные
                                    выставки, где демонстрируют произведения художников в формате «оживших» полотен. При
                                    помощи технологии Cinema 360 изображения проецируют на стены и пол, их сопровождает
                                    музыка и голос диктора.</p>
                                <p className={'artplay-content__left-point-first'}><img alt={'location'}
                                                                                        src={locationBlack}/> ул.
                                    Пушкина, 17</p>
                                <p className={'artplay-content__left-point'}><img alt={'point'} src={pointC}/> с 10:00
                                    до 21:00, в пятницу и субботу — до 22:00</p>
                                <p className={'artplay-content__left-point'}><img alt={'cost'} src={cost}/> от 600 ₽</p>
                            </div>
                            <div className={'artplay-content__right'}>
                                <p>Центр цифрового искусства Artplay Media</p>
                                <p className={'artplay-content__left-title-mobile'}>Мультимедийные выставки с «ожившими»
                                    полотнами</p>
                                <img alt={'artplay'} src={artplay}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={'container'}>
                <div className={'flowers'}>
                    <div className={'flowers-mobile'}>
                        <p className={'flowers-right__title'}>Бульвар «Белые цветы»</p>
                        <div className={'flowers-right__subtitle'}>
                            <p>Бульвар с классным стрит-артом и детскими площадками</p>
                        </div>
                        <img className={'flowers-mobile__image'} alt={'white flowers'} src={whiteFlowers}/>
                        <p className={'flowers-right__desc'}>
                            Это место посвящено роману «Ак чәчәкләр» — «Белые цветы». В честь его автора Абдурахмана
                            Абсалямова названа улица, вдоль которой расположен 700-метровый бульвар.
                        </p>
                        <p className={'flowers-right__point'}><img alt={'location'} src={locationBlack}/> ул.
                            Пушкина, 17</p>
                        <p className={'flowers-right__other'}><img alt={'point'} src={pointC}/> круглосуточно</p>
                        <p className={'flowers-right__other'}><img alt={'cost'} src={cost}/> бесплатно</p>

                    </div>
                    <img alt={'white flowers'} src={whiteFlowers}/>
                    <div className={'flowers-right'}>
                        <p className={'flowers-right__title'}>Бульвар «Белые цветы»</p>
                        <div className={'flowers-right__subtitle'}>
                            <p>Бульвар с классным стрит-артом и детскими площадками</p>
                        </div>
                        <p className={'flowers-right__desc'}>
                            Это место посвящено роману «Ак чәчәкләр» — «Белые цветы». В честь его автора Абдурахмана
                            Абсалямова названа улица, вдоль которой расположен 700-метровый бульвар.
                        </p>
                        <p className={'flowers-right__point'}><img alt={'location'} src={locationBlack}/> ул.
                            Пушкина, 17</p>
                        <p className={'flowers-right__other'}><img alt={'point'} src={pointC}/> круглосуточно</p>
                        <p className={'flowers-right__other'}><img alt={'cost'} src={cost}/> бесплатно</p>
                    </div>
                </div>
            </div>

            <div className={'park'}>
                <p className={'park-mobile__title'}>ИТ-парк имени Башира Рамеева</p>
                <p className={'park-mobile__subtitle'}>Огромное здание с киберареной, аналоговой
                    стеной для рисования и роботизированным роялем</p>
                <img className={'park__image'} alt={'it park'} src={itPark}/>
                <div className={'container'}>
                    <div className={'park-content'}>
                        <div className={'park-mobile__image'}>
                            <img alt={'it park'} src={itPark}/>
                        </div>
                        <div className={'park-content__left'}>
                            <p className={'park-content__left-title'}>ИТ-парк имени Башира Рамеева</p>
                            <p className={'park-content__left-subtitle'}>Огромное здание с киберареной, аналоговой
                                стеной для рисования и роботизированным роялем</p>
                        </div>
                        <div className={'park-content__right'}>
                            <p className={'park-content__right-desc'}>Парк напоминает город в городе: внутри есть кафе,
                                барбершоп, фитнес-зал, химчистка и коворкинги. Доступ в здание открыт для всех, а не
                                только для сотрудников компаний-резидентов.</p>
                            <p className={'park-content__right-address'}><img src={locationBlack} alt={'location'}/> ул.
                                Спартаковская, 2</p>
                            <p className={'park-content__right-point'}><img src={pointC} alt={'point'}/> круглосуточно
                            </p>
                            <p className={'park-content__right-point'}><img src={cost} alt={'cost'}/> ИТ-парк —
                                бесплатно, киберарена — от 80 ₽ в час</p>
                            <p className={'park-content__right-info'}>Если хотите попасть во все помещения, нужно
                                записаться на экскурсию <a
                                    href={'https://itpark.tech/uslugi-it-parka/ekskursii-po-it-parku-i-organizatsiya-vizitov-delegatsiy/'}>на
                                    сайте</a> или
                                информационной стойке парка.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={'container'}>
                <div id={"popular"} className={'event'}>
                    <p className={'event__title'}>Чем заняться в Казани</p>
                    <div className={'event-mobile'}>
                        <div className={'event-mobile__item'}>
                            <img src={star} alt={'start'}/>
                            <div>
                                <p className={'event-mobile__item-date'}>С 25 декабря по 25 февраля</p>
                                <p className={'event-mobile__item-desc'}>Мультимедийная выставка — «Леонардо да Винчи.
                                    Тайна Гения»</p>
                                <p className={'event-mobile__item-cost'}>Стоимость билетов: <br/>
                                    600 - 800 рублей</p>
                                <p className={'event-mobile__item-address'}>Адрес: <br/>
                                    улица Пушкина,17</p>
                            </div>
                        </div>
                        <div className={'event-mobile__item'}>
                            <img src={star} alt={'start'}/>
                            <div>
                                <p className={'event-mobile__item-date'}>27 и 28 января в 13:30</p>
                                <p className={'event-mobile__item-desc'}>Мастер-класс: рисуем лавандовое поле маслом</p>
                                <p className={'event-mobile__item-cost'}>Стоимость билетов: <br/>
                                    бесплатно</p>
                                <p className={'event-mobile__item-address'}>Адрес: <br/>
                                    улица Академика Королёва,47</p>
                            </div>
                        </div>
                        <div className={'event-mobile__item'}>
                            <img src={star} alt={'start'}/>
                            <div>
                                <p className={'event-mobile__item-date'}>7 февраля, среда, 19:00</p>
                                <p className={'event-mobile__item-desc'}>Cinema Medley: Hans Zimmer’s Universe
                                    Грандиозное симфоническое шоу саундтреков</p>
                                <p className={'event-mobile__item-cost'}>Стоимость билетов: <br/>
                                    от 1200 руб.</p>
                                <p className={'event-mobile__item-address'}>Адрес: <br/>
                                    Татнефть-Арена</p>
                            </div>
                        </div>
                        <div className={'event-mobile__item'}>
                            <img src={star} alt={'start'}/>
                            <div>
                                <p className={'event-mobile__item-date'}>2 марта, суббота, 18:00</p>
                                <p className={'event-mobile__item-desc'}>Концерт Оркестр CAGMO. K-pop Symphony: BTS</p>
                                <p className={'event-mobile__item-cost'}>Стоимость билетов: <br/>
                                    от 1200 руб.</p>
                                <p className={'event-mobile__item-address'}>Адрес: <br/>
                                    Татнефть-Арена</p>
                            </div>
                        </div>
                        <div className={'event-mobile__item'}>
                            <img src={star} alt={'start'}/>
                            <div>
                                <p className={'event-mobile__item-date'}>9 марта, суббота, 19:00</p>
                                <p className={'event-mobile__item-desc'}>Концерт Аффинаж
                                    Общество с ограниченной ответственностью</p>
                                <p className={'event-mobile__item-cost'}>Стоимость билетов: <br/>
                                    от 1200 руб.</p>
                                <p className={'event-mobile__item-address'}>Адрес: <br/>
                                    улица Академика Королёва,47</p>
                            </div>
                        </div>
                        <div className={'event-mobile__item'}>
                            <img src={star} alt={'start'}/>
                            <div>
                                <p className={'event-mobile__item-date'}>11 марта, понедельник, 19:00</p>
                                <p className={'event-mobile__item-desc'}>Concord Orchestra. Симфонические хиты. Властелин тьм</p>
                                <p className={'event-mobile__item-cost'}>Стоимость билетов: <br/>
                                    от 1200 руб.</p>
                                <p className={'event-mobile__item-address'}>Адрес: <br/>
                                    КРК Пирамида</p>
                            </div>
                        </div>
                    </div>
                    <div className={'event-content'}>
                        <div className={'event-item'}>
                            <div>
                                <img className={'event-item__image'} src={star} alt={'star'}/>
                                <div className={'event-item__info'}>
                                    <p>С 25 декабря по 25 февраля</p>
                                    <div>
                                        <p>Стоимость билетов: 600 - 800 рублей</p>
                                        <p>Адрес:<br/> улица Пушкина,17</p>
                                    </div>
                                </div>
                            </div>
                            <p className={'event-item__desc'}>Мультимедийная выставка — «Леонардо да Винчи. Тайна
                                Гения»</p>
                        </div>
                        <div className={'event-item'}>
                            <div>
                                <img className={'event-item__image'} src={star} alt={'star'}/>
                                <div className={'event-item__info'}>
                                    <p>27 и 28 января в 13:30</p>
                                    <div>
                                        <p>Стоимость билетов:
                                            бесплатно</p>
                                        <p>Адрес: <br/>
                                            улица Академика Королёва,47</p>
                                    </div>
                                </div>
                            </div>
                            <p className={'event-item__desc'}>Мастер-класс: рисуем лавандовое поле маслом</p>
                        </div>
                        <div className={'event-item'}>
                            <div>
                                <img className={'event-item__image'} src={star} alt={'star'}/>
                                <div className={'event-item__info'}>
                                    <p>7 февраля, среда, 19:00</p>
                                    <div>
                                        <p>Стоимость билетов:
                                            от 1200 руб.</p>
                                        <p>Адрес: <br/>
                                            Татнефть-Арена</p>
                                    </div>
                                </div>
                            </div>
                            <p className={'event-item__desc'}>Cinema Medley: Hans Zimmer’s Universe
                                Грандиозное симфоническое шоу саундтреков</p>
                        </div>
                    </div>
                    <img className={'line-right'} src={linesRight} alt={'linesRight'}/>
                    <div className={'event-content-revers'}>
                        <div className={'event-item-revers'}>
                            <div>
                                <img className={'event-item__image'} src={star} alt={'star'}/>
                                <div className={'event-item__info'}>
                                    <p>2 марта, суббота, 18:00</p>
                                    <div>
                                        <p>Стоимость билетов:
                                            от 1200 руб.</p>
                                        <p>Адрес: <br/>
                                            Татнефть-Арена</p>
                                    </div>
                                </div>
                            </div>
                            <p className={'event-item__desc'}>Концерт Оркестр CAGMO. K-pop Symphony: BTS</p>
                        </div>
                        <div className={'event-item-revers'}>
                            <div>
                                <img className={'event-item__image'} src={star} alt={'star'}/>
                                <div className={'event-item__info'}>
                                    <p>9 марта, суббота, 19:00</p>
                                    <div>
                                        <p>Стоимость билетов:
                                            от 1200 руб.</p>
                                        <p>Адрес: <br/>
                                            улица Академика Королёва,47</p>
                                    </div>
                                </div>
                            </div>
                            <p className={'event-item__desc'}>Концерт Аффинаж
                                Общество с ограниченной ответственностью</p>
                        </div>
                        <div className={'event-item-revers'}>
                            <div>
                                <img className={'event-item__image'} src={star} alt={'star'}/>
                                <div className={'event-item__info'}>
                                    <p>11 марта, понедельник, 19:00</p>
                                    <div>
                                        <p>Стоимость билетов:
                                            от 1200 руб.</p>
                                        <p>Адрес:<br/>
                                            КРК Пирамида</p>
                                    </div>
                                </div>
                            </div>
                            <p className={'event-item__desc'}>Concord Orchestra. Симфонические хиты. Властелин тьмы</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={'container'}>
                <div className={'form'}>
                    <div className={'form-left'}>
                        <img src={formCloud} alt={'cloud'}/>
                    </div>
                    <div className={'form-right'}>
                        <p className={'form-right__title'}>Путеводитель по Казани</p>
                        <p className={'form-right__subtitle'}>Заполните форму и мы с вами свяжемся</p>
                        <div className={'form-right__inputs'}>
                            <input placeholder={'Имя'}/>
                            <input placeholder={'E-mail'}/>
                        </div>
                        <div className={'form-right__button'}>
                            <button>Отправить</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"container"}>
                <div className={"footer"}>
                    <div className={"footer-upper"}>
                        <div className={"footer-upper__left"}>
                            <img alt={"logo"} src={logo}/>
                            <a>KazanTrip</a>
                        </div>
                        <div className={"footer-upper__right"}>
                            <a>Вопросы</a>
                            <a>О нас</a>
                        </div>
                    </div>
                    <div className={"footer-line"}></div>
                    <div className={'footer-mobile'}>
                        <div>
                            <a><img alt={"vk.com"} src={vk}/></a>
                            <a><img src={insta} alt={"instagram"}/></a>
                        </div>
                        <a href={"mailto:kazanTrip@gmail.com"}>kazanTrip@gmail.com</a>
                    </div>
                    <p className={'footer-mobile__alright'}>© Все права защищены</p>
                    <div className={"footer-down"}>
                        <div className={"footer-down__left"}>
                            <p>© Все права защищены</p>
                        </div>
                        <div className={"footer-down__right"}>
                            <a><img alt={"vk.com"} src={vk}/></a>
                            <a><img src={insta} alt={"instagram"}/></a>
                            <a href={"mailto:kazanTrip@gmail.com"}>kazanTrip@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
