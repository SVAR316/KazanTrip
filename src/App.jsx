import './styles/main.scss'

// imgs
import logo from './images/logo.svg'
import vk from './images/vk.svg'
import insta from './images/instagram.svg'
import sherifSlide from './images/kyl-sherif.png'
import cloudSlideFirst from './images/back-cloud.png'
import arrowDown from './images/arrowDown.svg'
import houseYshahova from './images/houseYshahova.png'
import nationLibrary from './images/nationLibrary.png'
import restaurant from './images/restaurant.png'
import kazan from './images/kazan.png'
import arrowRightLong from './images/arrowrightLong.svg'
import location from './images/location.svg'

function App() {

    return (
        <div>
            <div className={'header'}>
                <div className={'container'}>
                    <div className={'header-content'}>
                        <div className={'header-content__left'}>
                            <a>Главная</a>
                            <a href="">О нас</a>
                            <a href="">Места</a>
                            <a href="">Популярное</a>
                        </div>
                        <a className={"header-content__right"}>
                            <img src={logo}/>
                            KazanTrip
                        </a>
                    </div>
                </div>
            </div>

            <div className={'carousel'}>
                <div className={'slide'}>
                    <div className={'container'}>
                        <div className={'slide-first'}>
                            <div className={'slide-first__upper'}>
                                <p className={'slide-first__counter'}>01</p>
                                <p className={'slide-first__slash'}>/</p>
                                <p className={'slide-first__max'}>04</p>
                            </div>
                            <div className={'slide-first__text'}>
                                <p className={'slide-first__address'}>ул. Сибгата Хакима, 4</p>
                                <p className={'slide-first__name'}>МЕЧЕТЬ КУЛ-ШАРИФ</p>
                            </div>
                            <div className={'slide-first__desc'}>
                                <p>Символ столицы Татарстана и ее главный открыточный вид<br/> — мечеть Кул-Шариф</p>
                                <p>Здание мечети облицовано белым мрамором, купол и вершины минаретов имеют окраску
                                    бирюзового цвета. Фасад главного здания украшен бронзовыми металлическими надписями
                                    арабской вязью</p>
                            </div>
                            <img className={'slide-first__image'} src={sherifSlide}/>
                        </div>
                    </div>
                    <img className={'slide-first__cloud'} src={cloudSlideFirst}/>
                </div>
            </div>

            <div className={'container'}>
                <div className={'travel'}>
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

            <div className={'container'}>
                <p>Популярные места</p>
            </div>

            <div className={'container'}>
                <div className={'places'}>
                    <div className={'places-upper'}>
                        <div>
                            <p className={'places-upper__text-upper'}>Интересные кафешки для</p>
                            <p className={'places-upper__text-down'}>вашего настроения <img src={arrowRightLong} alt={'arrow left'}/></p>
                        </div>
                        <div>
                            <div className={'places-card'}>
                                <img  />
                                <div>
                                    <p></p>
                                    <p><img src={location} alt={'location'} />ул. 2-я Юго-Западная д.3А</p>
                                </div>
                            </div>
                            <div className={'places-card'}></div>
                        </div>
                    </div>
                    <div>
                        <div className={'places-card'}></div>
                        <div className={'places-card'}></div>
                        <div className={'places-card'}></div>
                        <div className={'places-card'}></div>
                    </div>
                </div>
            </div>

            <div className={"container"}>
                <p>Чем заняться в Казани</p>
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
