import { MoviesProvider } from "./MoviesContext";

export const AppContextProvider = ({ children }) => {
  return <MoviesProvider>{children}</MoviesProvider>;
};
