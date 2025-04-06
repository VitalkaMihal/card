import styled from "styled-components";
import pic from "../../assets/pic/pic.png";
import {Button, ButtonProps} from "../../components/button/Button.tsx";

type dataType = {
    id: string;
    src: string;
    title: string;
    text: string;
    firstButtonText: ButtonProps;
    secondButtonText: ButtonProps
}

const data: Array<dataType> = [
    {
        id:"1",
        src: pic,
        title: "Headline",
        text: "Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in\n" +
            "                        venen.",
        firstButtonText: {
           buttonText: "See more",
            isBlue: true,
        },
        secondButtonText: {
            buttonText: "Save",
            isBlue: false,
        },
    },
]



export const Cards = () => {
    return (
        <div className="App">
            {data.map((dataItem: dataType) => <Card
                src={dataItem.src}
                title={dataItem.title}
                text={dataItem.text}
                firstButtonText={dataItem.firstButtonText}
                secondButtonText={dataItem.secondButtonText}
                id={dataItem.id}
                key={dataItem.id}
                />
            )}
        </div>
    );
};

const Card = ({id, src, title, text, firstButtonText, secondButtonText}: dataType) => {
    return (
        <StyledCard id={id}>
            <StyledPicture src={src} alt="pic"/>
            <SledCardContent>
                <StyledTitle>{title}</StyledTitle>
                <StyledText>{text}</StyledText>
                <StyledButtonContainer>
                    <Button buttonText={firstButtonText.buttonText} isBlue={firstButtonText.isBlue}/>
                    <Button buttonText={secondButtonText.buttonText}
                            isBlue={secondButtonText.isBlue}/></StyledButtonContainer>
            </SledCardContent>
        </StyledCard>
    )
}

const StyledCard = styled.div`
    width: 300px;
    border-radius: 15px;
    box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
    background: #fff;
    margin: 0 auto;
    padding: 10px;
`

const SledCardContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px;
`

const StyledPicture = styled.img`
    border-radius: 10px;
    height: 170px;
    object-fit: cover;
`

const StyledTitle = styled.h2`
    font-weight: 700;
    font-size: 16px;
    color: #000;
`

const StyledText = styled.p`
    font-weight: 500;
    font-size: 12px;
    line-height: 1.6;
    color: #abb3ba;
`
const StyledButtonContainer = styled.div`
    display: flex;
    gap: 20px;
`