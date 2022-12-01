<template>
    <div class="mainBox">
        <div class="titles message">
            <h1>Développeur Freelance</h1>
            <h1>Étudiant 3ème année Epitech Montpellier</h1>
            <span></span>
        </div>
        <div class="right">
            <h1>"Si vous voulez être inventif, vous devez être prêt à échouer."</h1>
            <h1 class="author">Jeff Bezos</h1>
            <div class="dialog"></div>
        </div>
    </div>
</template>

<style scoped>
    .mainBox {
        display: flex;
        /* flex-direction: column; */
        width: 100vw;
    }
    .titles {
        display: flex;
        width: 50vw;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 2vw 2vw 2vw 4vw;
        position: absolute;
        z-index: 1;
        /* background-color: red; */
    }
    .right {
        display: flex;
        width: 50vw;
        height: 10vw;
        flex-direction: column;
        align-items: flex-end;
        position: absolute;
        z-index: 2;
        right: 4vw;
        top: 20vw;
        padding-left: 1.5vw;
        background-color: #a5a5a5;
        border-radius: 20px;
    }

    .dialog {
        display : inline-block;
        height : 0;
        width : 0;
        left: 0vw;
        top: 9vw;
        position: absolute;
        border-top : 4vw solid #a5a5a5;
        border-right : 4vw solid transparent;
    }
    .right h1 {
        font-size: 2vw;
        padding-right: 0.5vw;
        padding: 0.5vw;
    }
    .right h1.author {
        font-size: 1.5vw;
        padding-right: 10.5vw;
        padding: 0.5vw;
        text-align: right;
    }
    .titles h1 {
        font-size: 2vw;
        padding-right: 0.5vw;
        background-color: white;
        padding: 0.5vw;
    }
    a {
        text-decoration: underline;
    }

    .message {
        position: relative;
        float: left;
        margin: 0;
        letter-spacing: 0px;
    }

    .message span {
        position: absolute;
        top: 3.7vh;
        right: 9vw;
        bottom: 0;
        width: 0;
        background: white;
        border-left: 5px solid #1a1a1a;
        height: 7.5vw;

        animation-name: typing, blinking;
        animation-duration: 5s, 0s;
        animation-iteration-count: 1, infinite;
        /* animation-timing-function: steps(21,end), steps(1,end); */
    }

    @keyframes typing {
        0%   { width: 100vw; }
        100% { width: 0; }
    }

    @keyframes blinking {
        0%   { border-color: transparent; }
        50% { border-color: #1a1a1a; }
        100% { border-color: transparent; }
    }
</style>
