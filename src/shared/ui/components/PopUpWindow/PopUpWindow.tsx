import React from "react";
import { styled } from "styled-components";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import CancelFilled from "./CancelFilled";
import garbage from "./garbage.gif";
import MiniGarbage from "./MiniGarbage";

const PopUpWrapper = styled.div`
    width: 1216px;
    height: 632px;
    background-color: #3a55f8;
    align-items: center;
    display: flex;
    flex-direction: column;
    border-radius: 24px;
`;

const HeaderWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;
    padding: 40px 40px 0 0;
`;

const MainWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 592px;
`;

const GifGarbage = styled.div`
    width: 200px;
    height: 200px;
    flex-shrink: 0;
    margin-bottom: 20px;
`;

const MainText = styled.div`
    font-family: Noto Sans;
    font-size: 44px;
    font-style: normal;
    font-weight: 700;
    line-height: 56px;
    text-align: center;
    margin-bottom: 16px;
`;

const Text = styled.div`
    font-family: Noto Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
    margin-bottom: 48px;
`;
const ButtonsRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 592px;
`;
const Button = styled.div`
    display: flex;
    width: 280px;
    height: 60px;
    padding: 16px 20px;
    justify-content: center;
    align-items: center;
    gap: 12px;
    border-radius: 30px;
    font-family: Noto Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    cursor: pointer;
`;

const CancelFilledWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

interface Props {
    handleClosePopUp: () => void;
    tableName: string;
}

const PopUpWindow: React.FC<Props> = ({
    handleClosePopUp,
    tableName,
}) => {
    const {t} = useTranslation('catalog')

    return (
        <PopUpWrapper>
            <HeaderWrapper>
                <CancelFilledWrapper onClick={() => handleClosePopUp()}>
                    <CancelFilled />
                </CancelFilledWrapper>
            </HeaderWrapper>
            <MainWrapper>
                <GifGarbage>
                    <Image
                        src={garbage}
                        alt=""
                        style={{ width: "200px", height: "200px" }}
                    />
                </GifGarbage>
                {tableName === 'goods' ? (
                    <MainText>
                        {t('confirmDeletePart')}
                    </MainText>
                ) : (
                    <MainText>{t("confirmDeleteService")}</MainText>
                )}

                <Text>
                   {t("deleteWarning")}
                </Text>
            </MainWrapper>
            <ButtonsRow>
                <Button
                    style={{ border: "1px solid white" }}
                    onClick={() => handleClosePopUp()}
                >
                    {t("cancel")}
                    <CancelFilled />
                </Button>
                <Button
                    style={{ backgroundColor: "#3DCC3D" }}
                    onClick={async () => {
                        handleClosePopUp();
                    }}
                >
                    {t("delete")} <MiniGarbage />
                </Button>
            </ButtonsRow>
        </PopUpWrapper>
    );
};
export default PopUpWindow;
