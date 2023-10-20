import React, { lazy } from "react";
import { map } from "lodash";
import { Route } from "react-router-dom";
import PublicRoute from "./PublicRoute";

const usePublicRoutes = () => {
  const routes = [
    {
      exact: true,
      name: "/",
    },
    {
      exact: true,
      name: "/register",
    },
    {
      exact: true,
      name: "/politicas",
    },
    {
      exact: true,
      name: "/instructions",
    },
    {
      exact: true,
      name: "/worlds",
    },
    {
      exact: true,
      name: "/world-1",
      path: "/:id"
    },
    {
      exact: true,
      name: "/world-2",
      path: "/:id"
    },
    {
      exact: true,
      name: "/world-3",
      path: "/:id"
    },
    {
      exact: true,
      name: "/world-4",
      path: "/:id"
    },
    {
      exact: true,
      name: "/sabiasQue",
    },
    {
      exact: true,
      name: "/lograste",
      path: "/:level/:id",
    },
    {
      exact: true,
      name: "/score",
      path: "/:level/:id",
    },
    {
      exact: true,
      name: "/siguientenivel1",
      path: "/:level",
    },
    {
      exact: true,
      name: "/error",
      path: "/:level/:id",
    },
    {
      exact: true,
      name: "/alerta",
      path: "/:level/:id",
    },
    {
      exact: true,
      name: "/activeregister",
    },
    {
      exact: true,
      name: "/login",
    },
    {
      exact: true,
      name: "/menu",
    },
    {
      exact: true,
      name: "/finish",
    },

    {
      exact: true,
      name: "/niveles1",
    },

    {
      exact: true,
      name: "/niveles2",
    },

    {
      exact: true,
      name: "/niveles3",
    }, 

    {
      exact: true,
      name: "/niveles4",
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
            component={lazy(() => import(`../../views/pages${item.name}`))}
          />
        }
      />
    );
  });
};

export default usePublicRoutes;
