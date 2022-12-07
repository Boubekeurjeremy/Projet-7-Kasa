import { useState } from "react";

export function useCarrousel(images) {
    let [displayImg, changeImg] = useState(0);
    let numberImg = images.length;

    const imgPrevious = () => {
        if (displayImg === 0) {
            changeImg(numberImg - 1);
        } else {
            changeImg(displayImg - 1);
        }
        return changeImg;
    };

    const imgNext = () => {
        if (displayImg === numberImg - 1) {
            changeImg((numberImg = 0));
        } else {
            changeImg(displayImg + 1);
        }
        return changeImg;
    };
    return { imgPrevious, imgNext, numberImg, displayImg };
}
