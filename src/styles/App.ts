import styled from 'styled-components';

export const MainContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #F3F3F3;
        height: 115px;
        width: 180px;
        border-radius: 10px;
        box-shadow: 2px  2px #9C9C9C;


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


`