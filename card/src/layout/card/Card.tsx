import styled from "styled-components";
import pic from "../../assets/pic/pic.png";
import {Button} from "../../components/button/Button.tsx";

export const Card = () => {
    return (
        <div>
            <StyledCard>
                <StyledPicture src={pic}/>
                <SledCardContent>
                    <StyledTitle>Headline</StyledTitle>
                    <StyledText>
                        Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in
                        venen.
                    </StyledText>
                    <StyledButtonContainer>
                        <Button buttonText="See more" isBlue={true}/>
                        <Button buttonText="Save" isBlue={false}/></StyledButtonContainer>
                    </SledCardContent>
            </StyledCard>
        </div>
    );
};

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
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 16px;
    color: #000;
`

const StyledText = styled.p`
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.6;
    color: #abb3ba;
`
const StyledButtonContainer = styled.div`
    display: flex;
    gap: 20px;
`