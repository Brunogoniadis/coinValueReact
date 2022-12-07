import styled ,{css, keyframes} from 'styled-components';


const breatheAnimation = keyframes`
 0% { background-position-x: 25%, }
 20% { background-position-y: 35%}
 40% { background-position-x: 45%}
 60% { background-position-y: 65%}
 80% { background-position-y: 45%}
 90% { background-position-y: 0%}
 100% { background-position-y: 0%}
 `



export const BackgroundStatic =styled.div`
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    display: flex;
`
export const BackgroundScreen = styled.div`
    background-image: url("https://raw.githubusercontent.com/Brunogoniadis/coinValueReact/main/public/background.png");
    background-size: contain ;
    background-size: 280px;

    
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    animation-name: ${breatheAnimation};
    animation-duration: 14s;
    animation-iteration-count: infinite;
    
`

export const MainContainer = styled.div`

z-index: 1001;
        display: flex;
        position: fixed;
        flex-direction: column;
        align-items: center;
        background-color: #F3F3F3;
        height: 115px;
        width: 180px;
        border-radius: 10px;
        box-shadow: 2px  2px #9C9C9C;
        text-align: center;

    .topContainer {
        display: flex;
        height: 35px;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        background-color: #e9e9e9;
        border-radius: 9px 9px 0px 0px;
    img{
        width: 25px;
        height: 25px;
    }

    h3{
        margin-top: 0px;
        margin-bottom: 0px;
    }
    }
    .titleContainer{
        display: flex;
        margin-right: 10px;
        margin-left: 10px;
        gap: 5px;
    }

    .CoinsContainer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;

    }


    .CoinsValue {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 80px;
        height: 90%;
}
    .FooterDescription{
        position: absolute;
        font-size: 10px;
        font-weight: 600;
        color: black;
        text-decoration: none;
        margin-top: 130px;
        cursor: pointer;

        :hover{
            
            transform: scale(1.25);
        }
    }

`