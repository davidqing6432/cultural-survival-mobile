import { Text, View } from "react-native";
import ViewContainer from "../../components/ViewContainer";
import RectButton from "../../components/RectButton";
import globalStyles from "../../globalStyles";
import styles from "./styles";

import { useTranslation } from "react-i18next";
import { namespaces } from "../../i18n/i18n.constants";
import "../../i18n/i18n";

import React, { useState, useEffect } from "react";


import {
  CREDENTIALS
} from "@env";


// Your credentials
//const CREDENTIALS = JSON.parse(TEST);
//const CREDENTIALS = process.env.CREDENTIALS;
const CRED = JSON.parse(CREDENTIALS);


{
  "compilerOptions"; {
    "allowJs"; true
  }
}
var lang = 'en'
//






const GrantsScreen = ({ navigation }: any) => {
  const { i18n, t } = useTranslation(namespaces.pages.grants);
  const [text, setText] = useState("");



  function handleClick(lang: string) {
    i18n.changeLanguage(lang);

  }
  
  function toggle(lg: string) {
    console.log(lang)
    lang = (lg == 'en' ? 'es' : 'en')
    console.log(lang)
    return lang

  }


  return (
    <ViewContainer>
      <Text style={globalStyles.h2}>{t("grants_feed")}</Text>
      <RectButton 
      text="toggle"
      {...t("buttons.ok", { ns: namespaces.pages.grants })}
      onPress={() => handleClick(toggle(lang))}
      />

      <RectButton
        text="Back"
        buttonStyle={{ marginTop: "5%", backgroundColor: "#253C85" }}
        textStyle={{ color: "#FFF" }}
        onPress={() => navigation.navigate("Home")}
      />
    </ViewContainer>
  );
};

export default GrantsScreen;
