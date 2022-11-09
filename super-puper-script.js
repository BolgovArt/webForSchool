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




// TODO: https://qna.habr.com/q/987487   короче попробовать 27 строчку повесить на пустой див в хтмл шоб 58 строчка мб к нему обратилась
// теория: шоб че-то было на подвязке в хтмл



/*

// Выходим на крестик
// const holyButton = document.querySelector('.pustoi')
// holyButton.onclick = () => {
//     console.log('we are in pustoi')
// const delete1 = document.querySelectorAll('.modal-everything')
// console.log('we find overlay!', delete1)
// console.log(delete1[0])
//     console.log(typeof delete1[0])
//     const newdelete =  delete1[0]
//     console.log('newDelete: ', newdelete)
//     const blizko1 = newdelete.querySelector('.modal-head')
//     const krestik = blizko1.querySelector('.modal-close')
//     console.log('УРААААА', krestik)
//     // Удаляем окно
//     krestik.onclick = () => {
//         console.log('Всё работает, теперь попробуем убрать модальное окно')
//         const delete2 = document.querySelector('.modal-everything')
//         delete2.remove()
//         }
// }





// const krestik = () => {
// declarate()
// console.log('ya tut')
// }
// krestik(modul.remove() )


// const krestik = document.querySelector('.modal-close')
// krestik.onclick = () => {
//     console.log('tik')
//     document.close(declarate()) 
// }


// Вопросы: 1) как соотносятся между собой 'afterbegin' (4 строчка) и appendChild (17 строчка). В 1 случае внизу было 2 элемента, позиционирование было для каждого свое
// А тут как бы элемент один, а позиционирования все рано два, так ещё и разные






// function declarate () {
//     const modul = document.createElement('div') // прикол, это такой тег у нас смог создаться и норм работает
//     // modul.classList.add('modal-everything')
//     modul.className = 'modal-overlay'
//     modul.innerHTML = `
//     <div class="modal-window">
//         <div class="modal-head">
//             <span class="modal-title">Text</span>
//             <span class="modal-close">&times;</span>
//         </div>
//         <div class="modal-body"></div>
//         <div class="modal-footer"></div>
//         </div>
//     </div>
//     `
//     document.body.appendChild(modul)
//     console.log(typeof modul)
//     console.log(modul)
//     const kek = Object.keys(modul)
//     console.log(kek)
// }


*/




// раскладываем insertAdjacentHTML по составляющим

//   ✅   1 случай: у нас есть в html пустой div, за который можно зацепиться 
// тут есть createElement, но его вывода нет, тк он подвязывается к qerySelector. Точнее qerySelector его подвязывает
const exUd = document.querySelector('.ya')
// exUd.insertAdjacentHTML('afterend', `<p>HTML</p>`)
exUd.insertAdjacentText('beforeend', `<p>HTML</p>`)
const newElement = document.createElement('div')
newElement.innerHTML = 'Hello World'
newElement.className = 'new'
// newElement.insertAdjacentElement('beforebegin', newElement)
// document.body.append(newElement)
exUd.insertAdjacentElement('beforebegin', newElement) // положение должно совпадать, строчка должнат быть после описания newElement

//   ❌   2 случай [СПЛОШНЫЕ ПРОБЛЕМЫ И КОСЯКИ, ЗАБЕЙ]: у нас нет ничего в html, созданный контейнер надо вернуть обратно через document.body....
const firstEx = document.createElement('div')
// firstEx.insertAdjacentText('beforebegin', '<p>Какой-то текст с тегами</p>')
firstEx.innerText = 'New какой-то 1'

const firstEx2 = document.createElement('div')
// firstEx2.insertAdjacentText('beforebegin', '<p>Какой-то текст с тегами 2</p>')
firstEx2.innerText = 'New какой-то 2'


firstEx2.insertAdjacentElement('beforebegin', firstEx)
document.body.append(firstEx)

//   ✅   3 случай, БАЗОВЫЙ!!!!!!!!111111
const firstEx3 = document.createElement('div')
firstEx3.innerHTML = 'Привет, я самый простой способ'
document.body.prepend(firstEx3) // вывод относительно боди, доступные методы вставки 44:20 https://www.youtube.com/watch?v=DuWyc76lYC4&ab_channel=%D0%A4%D1%80%D1%96%D0%BB%D0%B0%D0%BD%D1%81%D0%B5%D1%80%D0%BF%D0%BE%D0%B6%D0%B8%D1%82%D1%82%D1%8E

// Задание: сделать модальное окно через 1 случай



