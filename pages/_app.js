import "../styles/index.css";
import { ModalProvider } from "../components/modalContext";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <ModalProvider>
      <Component {...pageProps} />;
    </ModalProvider>
  );
}
