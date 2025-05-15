import { useRoutes } from "react-router-dom";
import { appConstants } from '../constants/appConstants'
import Home from "../views/Home/home";
import CallForPaper from "../views/Call_For_Paper/callForPaper"
import Committe from "../views/Committee/committe";
import Program from "../views/Program/program";
import ImportantDates from "../views/Important_Dates/importantDates";
import Registration from "../views/Registration/registration";
import Submission from "../views/Submission/submission";
import Venue from "../views/Venue/venue";
import Access from "../views/Access/access";
import Visa from "../views/Visa/visa";
import SpecialSession from "../views/SpecialSession";

export const Router = () => {
    return useRoutes([
      {
        path: appConstants.HOME,
        element: <Home />,
      },
      {
        path: appConstants.VENUE,
        element: <Venue />,
      },
      {
        path: appConstants.IMPORTANT_DATES,
        element: <ImportantDates />,
      },
      {
        path: appConstants.PROGRAM,
        element: <Program />,
      },
      {
        path: appConstants.CALL_FOR_PAPER,
        element: <CallForPaper />,
      },
      {
        path: appConstants.SUBMISSION,
        element: <Submission />,
      },
      {
        path: appConstants.REGISTRATION,
        element: <Registration />,
      },
      {
        path: appConstants.ORGANIZING_COMMITTEE,
        element: <Committe />,
      },
      {
        path: appConstants.ACCESS,
        element: <Access />,
      },
      {
        path: appConstants.VISA,
        element: <Visa />,
      },
      {
        path: appConstants.CALL_FOR_SPECIAL_SESSION,
        element: <SpecialSession />,
      },
    ]);
}

