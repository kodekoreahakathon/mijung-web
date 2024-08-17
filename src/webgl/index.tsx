import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import styles from "./index.module.css";

function Mijung() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "build/mijung.loader.js",
    dataUrl: "build/mijung.data.unityweb",
    frameworkUrl: "build/mijung.framework.js.unityweb",
    codeUrl: "build/mijung.wasm.unityweb",
  });

  return <Unity className={styles.container} unityProvider={unityProvider} />;
}

export default Mijung;
