import './styles/main.scss'

// imgs
import logo from './images/logo.svg'
import vk from './images/vk.svg'
import insta from './images/instagram.svg'

function App() {

    return (

        <div>
            <div className={"container"}>
                <p>Чем заняться в Казани</p>
            </div>
            <div className={"container"}>
                <div className={"form"}>
                    <div className={"form-content"}>
                        <p className={"form-content__title"}>Заполните форму и мы с вами свяжемся</p>
                        <div style={{marginTop:61}}>
                            <input className={"form-content__input"} placeholder={"Имя"}/>
                        </div>
                        <div style={{marginTop:38}}>
                            <input className={"form-content__input"} placeholder={"E-mail"}/>
                        </div>
                        <div className={"form-content__button"}>
                            <a href={"https://www.youtube.com/watch?v=YAdL4iobqwE"}>Отправить</a>
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
