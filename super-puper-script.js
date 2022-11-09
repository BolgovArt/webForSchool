let declarate = () => {
    const modul = document.createElement('div') // прикол, это такой тег у нас смог создаться и норм работает
    modul.classList.add('modal-everything')
    modul.insertAdjacentHTML('afterbegin', `
    <div class="modal-overlay">  
    <div class="modal-window">
        <div class="modal-head">
            <div class="modal-title">Кто ты?</div>
            <div class="modal-border-close">
                <div class="modal-close">&times;</div>
            </div>
        </div>
        <div class="modal-body">
            <span class="student">Ученик</span>
            <span class="teatcher">Учитель</span>
        </div>
        <div class="modal-footer"></div>
        </div>
    </div>
    `)
    document.body.appendChild(modul) // метод позволяет добавить html к существвующему
    return modul
}

function open () {
    document.querySelector('.emptyForModal').appendChild(declarate())
    const ttt = document.querySelector('.pustoi').appendChild(openBlur())
    setTimeout(ttt, 0)
}

let openBlur = () => {
    const kek2 = document.createElement('style')
    kek2.classList.add('style-blur')
    kek2.insertAdjacentHTML('afterbegin', `
    .blur {
    filter: blur(2px);
    }
    `)
    // document.body.appendChild(kek2)
    return kek2
}

function close () {
    const krestik = document.querySelector('.modal-border-close')
        krestik.onclick = () => {
        document.querySelector('.modal-everything').remove()
        document.querySelector('.style-blur').remove()
        i = 0
        // return i
    }
}


let i = 0
const buttonAutorization = document.querySelector('.autorization').onclick = () => {
    if (i === 0) {
        open()
        console.log(i)
        i ++
        console.log(i)
    }
    if (i === 1) {
        close()
    }
        document.querySelector('.student').onclick = () => methodOne()
        document.querySelector('.teatcher').onclick = () => methodTwo()

        // Идея: окно должно закрываться при нажатии на пустую область
        /*
        const first = document.querySelector('.modal-overlay')
        const second = document.querySelector('.modal-window')
        console.log(Object.keys(first))
        console.log(Object.freeze(second))
        // const third = (first && !second)
        // console.log(third)
        second.onclick = () => {
            document.querySelector('.modal-everything').remove()
        }
        */

}

// Попытка выйти на close через await (ассинхронность, промисы):
/*
function close () {
    const krestik = document.querySelector('.modal-close')
    const promise = new Promise (resolve => {
        // krestik.focus()
        // krestik.addEventListener = ('click',()=>{})
        krestik.onclick = () => {
        document.querySelector('.modal-everything').remove()
        resolve()
        let i = 0
    }
    })
return promise
}
*/
/*
let i = 0
const button = document.querySelector('.button').onclick = () => {
    if (i === 0) {
        open()
        console.log(i)
        i ++
        console.log(i)
    }
    if (i === 1) {
        async function func1 () {
            try {
                await close()
            } catch (e) {
                console.log(e)
            }
        }
        func1()
        console.log("не дождались")
    }
}
*/

const methodOne = () => {
    i = 0
    document.querySelector('.modal-everything').remove()
        const vvod = document.createElement('div')
        vvod.innerHTML = `
        <div class="choose-everything">
        <div class="choose-window">
            <div class="choose-head">
                <div class="choose-title"> Авторизация</div>
                <div class = "choose-border-close"><div class="choose-close">&times;</div></div>
                
                <div class="buttonBack">
                    <div class="imageBack"><img src="../Variant 1/img/Restore-PNG-HD.png" alt="" id="image1"></div>
                    <div class="textBack">НАЗАД</div>
                    <div class = "buttonBackAreaRelative"><div class ="buttonBackAreaAbsolute"></div></div>
                </div>
            </div>
            <div class="choose-body">
                <p class="pInside">Введите ваши данные для авторизации</p>
                <div class="login">
                    <label for="text">Твой логин</label>
                    <input type="text" placeholder="Логин">
                </div>
                <div class="password">
                    <label for="text">Твой пароль</label>
                    <input type="text" placeholder="Пароль">
                </div>
                <div class="klass"> Твой класс:
                <select>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                </select>
                </div>
            </div>
            <div class="choose-footer">
            <div class="send"><button>Отправить</button></div>
        </div>
        </div>
    </div>
        `
        document.body.appendChild(vvod)
        const zakr = document.querySelector('.choose-border-close')
        zakr.onclick = () => funkZakrBack()
        const funkZakrBack = () => {
            document.querySelector('.choose-everything').remove()
            document.querySelector('.style-blur').remove()
        }

        document.querySelector('.buttonBack').onclick = () => {
            document.querySelector('.choose-everything').remove()
            document.querySelector('.style-blur').remove()
            buttonAutorization()
        }
}

const methodTwo = () => {
    i = 0
    document.querySelector('.modal-everything').remove()
        const vvod = document.createElement('div')
        vvod.innerHTML = `
        <div class="choose-everything">
    <div class="choose-window">
        <div class="choose-head">
            <div class="choose-title"> Авторизация</div>
            <div class = "choose-border-close"><div class="choose-close">&times;</div></div>
            
            <div class="buttonBack">
                <div class="imageBack"><img src="../Variant 1/img/Restore-PNG-HD.png" alt="" id="image1"></div>
                <div class="textBack">НАЗАД</div>
                <div class = "buttonBackAreaRelative"><div class ="buttonBackAreaAbsolute"></div></div>
            </div>
        </div>
        <div class="choose-body">
            <p class="pInside">Введите ваши данные для авторизации</p>
            <div class="login">
                <label for="text">Ваш логин</label>
                <input type="text" placeholder="Логин">
            </div>
            <div class="password">
                <label for="text">Ваш пароль</label>
                <input type="text" placeholder="Пароль">
            </div>
        </div>
        <div class="choose-footer">
            <div class="send"><button>Отправить</button></div>
        </div>
    </div>
</div>
        `
        document.body.appendChild(vvod)
        const zakr = document.querySelector('.choose-border-close')
        zakr.onclick = () => funkZakrBack()
        const funkZakrBack = () => {
            document.querySelector('.choose-everything').remove()
            document.querySelector('.style-blur').remove()
        }

        document.querySelector('.buttonBack').onclick = () => {
            document.querySelector('.choose-everything').remove()
            document.querySelector('.style-blur').remove()
            buttonAutorization()
        }
}


