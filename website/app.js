console.log('Am I even connected?')

const addH1 =()=>{
    let $h1 = $('<h1>').text("Hi I'm Ben")
    $('.welcome').append($h1)

}
const welcome =()=>{
    let $h2 = $('<h2>').text("Welcome to my site!")
    // $("h2").css("background-color", "white")
    $('.welcome').append($h2)
    // $('.welcome').append('#enter')
}

// const addBtn = () =>{
//     let $btn = $('<button>').text('enter')
//     $('.pics').append($btn)
//     $btn.addClass('btn')
// }
const animation = () =>{
    $('.welcome').addClass("load")
   
}

// $('.btn').click(function() {
//     windows.location = 'index.html';
// })



const work = () =>{
    let $img = $('<img>').text("test.jpg")
    $('.picture').append($img)
}



$(()=>{
    addH1()
    welcome()
    animation()
    work()

})