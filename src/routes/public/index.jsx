import React, { lazy } from "react";
import { map } from "lodash";
import { Route } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import Home from "views/pages";
import Register from "views/pages/register";
import Niveles4 from "views/pages/niveles4";
import Niveles3 from "views/pages/niveles3";
import Niveles2 from "views/pages/niveles2";
import Niveles1 from "views/pages/niveles1";
import Finish from "views/pages/finish";
import Menu from "views/pages/menu";
import Login from "views/pages/login";
import ActiveRegister from "views/pages/activeregister";
import Alerta from "views/pages/alerta";
import Error from "views/pages/error";
import Siguientenivel1 from "views/pages/siguientenivel1";
import Score from "views/pages/score";
import Lograste from "views/pages/lograste";
import World4 from "views/pages/world-4";
import World3 from "views/pages/world-3";
import World2 from "views/pages/world-2";
import World1 from "views/pages/world-1";
import Worlds from "views/pages/worlds";
import Instructions from "views/pages/instructions";
import Politicas from "views/pages/politicas";

const usePublicRoutes = () => {
  const routes = [
    {
      exact: true,
      name: "/",
      component: Home
    },
    {
      exact: true,
      name: "/register",
      component: Register
    },
    {
      exact: true,
      name: "/politicas",
      component: Politicas
    },
    {
      exact: true,
      name: "/instructions",
      component: Instructions
    },
    {
      exact: true,
      name: "/worlds",
      component: Worlds
    },
    {
      exact: true,
      name: "/world-1",
      path: "/:id",
      component: World1
    },
    {
      exact: true,
      name: "/world-2",
      path: "/:id",
      component: World2
    },
    {
      exact: true,
      name: "/world-3",
      path: "/:id",
      component: World3
    },
    {
      exact: true,
      name: "/world-4",
      path: "/:id",
      component: World4
    },
    // {
    //   exact: true,
    //   name: "/sabiasQue",
    //   component: Register
    // },
    {
      exact: true,
      name: "/lograste",
      path: "/:level/:id",
      component: Lograste
    },
    {
      exact: true,
      name: "/score",
      path: "/:level/:id",
      component: Score
    },
    {
      exact: true,
      name: "/siguientenivel1",
      path: "/:level",
      component: Siguientenivel1
    },
    {
      exact: true,
      name: "/error",
      path: "/:level/:id",
      component: Error
    },
    {
      exact: true,
      name: "/alerta",
      path: "/:level/:id",
      component: Alerta
    },
    {
      exact: true,
      name: "/activeregister",
      component: ActiveRegister
    },
    {
      exact: true,
      name: "/login",
      component: Login
    },
    {
      exact: true,
      name: "/menu",
      component: Menu
    },
    {
      exact: true,
      name: "/finish",
      component: Finish
    },

    {
      exact: true,
      name: "/niveles1",
      component: Niveles1
    },

    {
      exact: true,
      name: "/niveles2",
      component: Niveles2
    },

    {
      exact: true,
      name: "/niveles3",
      component: Niveles3
    }, 

    {
      exact: true,
      name: "/niveles4",
      component: Niveles4
    }, 
  ];

  return map(routes, (item, index) => {
    return (
      <Route
        key={index}
        path={`${item.name}${item.path ? item.path : ""}`}
        index={item.exact}
        element={
          <PublicRoute
            component={item.component}
          />
        }
      />
    );
  });
};

export default usePublicRoutes;
