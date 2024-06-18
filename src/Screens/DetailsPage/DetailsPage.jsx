import React, { useState, useEffect, useContext } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { TextSection } from "../../Components/Quiz/TextSection/TextSection";
import { ImageSection } from "../../Components/Quiz/ImageSection/ImageSection";
import UserContext from "../../core/Context/UserContext";

const DetailsPage = () => {
  const location = useLocation();
  const history = useHistory();
  const { user, setUser } = useContext(UserContext);
  const Datas = location.state.data;

  const [isTextCorrect, setIsTextCorrect] = useState(false);
  const [isImageCorrect, setIsImageCorrect] = useState(false);
  const [hasUpdated, setHasUpdated] = useState(false);

  useEffect(() => {
    if (isTextCorrect && isImageCorrect && !hasUpdated) {
      const updatedUser = {
        ...user,
        level: user.level + 1,
        score: user.score + 10,
      };
      localStorage.setItem("user", JSON.stringify(updatedUser));
      setUser(updatedUser);
      setHasUpdated(true);
      history.push("/Home");
    }
  }, [isTextCorrect, isImageCorrect, hasUpdated, user, setUser, history]);

  const handleTextCorrectAnswer = (isCorrect) => {
    setIsTextCorrect(isCorrect);
  };

  const handleImageCorrectAnswer = (isCorrect) => {
    setIsImageCorrect(isCorrect);
  };

  return (
    <>
      <TextSection
        nameCurrect={Datas.dec}
        nameOstan={Datas.name}
        onCorrectAnswer={handleTextCorrectAnswer}
      />
      {isTextCorrect && (
        <ImageSection
          imageCurrect={Datas.img}
          nameOstan={Datas.name}
          onCorrectAnswer={handleImageCorrectAnswer}
        />
      )}
    </>
  );
};

export default DetailsPage;
