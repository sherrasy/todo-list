import { AppMessage, AppRoute } from "@utils/constant";
import { useNavigate } from "react-router-dom";

function ErrorMessage(): JSX.Element {
    const navigate = useNavigate();
    const handleRedirect = () => {
      navigate(AppRoute.Main);
    };

       return (
      <div className="error-message">
        <p className="error-message__info">{AppMessage.Error}</p>
        <p className="error-message__back-link" onClick={handleRedirect}>На главную</p>
        </div>
    );
  }
  export default ErrorMessage;