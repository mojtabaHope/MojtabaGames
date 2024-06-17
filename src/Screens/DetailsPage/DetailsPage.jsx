import React from "react";
import { useLocation } from "react-router-dom";
import { TextSection } from "../../Components/Quiz/TextSection/TextSection";
import { ImageSection } from "../../Components/Quiz/ImageSection/ImageSection";
import UserContext from "../../core/Context/UserContext";

const DetailsPage = () => {
  const location = useLocation();
  const Datas = location.state.data;
  const { user, setUser } = React.useContext(UserContext);
  console.log(user);
  return (
    <>
      <div>name is : {user.name}</div>
      {Datas && (
        <>
          <TextSection nameCurrect={Datas.dec} nameOstan={Datas.name} />
          <ImageSection imageCurrect={Datas.img} nameOstan={Datas.name} />
        </>
      )}
    </>
  );
};

export default DetailsPage;
