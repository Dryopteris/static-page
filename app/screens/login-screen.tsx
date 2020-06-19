import React, { FunctionComponent as Component } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, TextStyle } from "react-native"
import { Screen, Text, Button } from "../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"
import { color, spacing } from "../theme"
import Auth0 from "react-native-auth0"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
}

const buttonStyle: ViewStyle = {
  backgroundColor: color.palette.lightGrey,
  height: 200,
  paddingVertical: spacing[4],
  marginVertical: spacing[4],
}

const textStyle: TextStyle = {
  fontSize: 40
}

export const LoginScreen: Component = observer(function LoginScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()

  // const config = {
  //   serviceConfiguration: {
  //     authorizationEndpoint:
  //       "https://dev-i9g6ai1l.us.auth0.com/authorize" +
  //       "#originURL=%20https%3A%2F%2Fdryopteris.github.io%2Fstatic-page%2F" +
  //       "&appID=81QjLgrUi9chaETK8yYEfdi3W0i4vjnO",
  //     tokenEndpoint: "https://dev-i9g6ai1l.us.auth0.com/oauth/token",
  //   },
  //   additionalParameters: {
  //     // eslint-disable-next-line @typescript-eslint/camelcase
  //     max_age: "86400",
  //     // eslint-disable-next-line @typescript-eslint/camelcase
  //     login_hint: '{"realm" : "cloudIdentityRealm"}',
  //   },
  //   clientId: "81QjLgrUi9chaETK8yYEfdi3W0i4vjnO",
  //   redirectUrl: "https://dryopteris.github.io/static-page/redirect.html",
  //   scopes: ["openid"],
  // }

  // const handleLogin = async () => {
  //   console.log("starting login!")
  //   const result = await authorize(config)
  //   console.log("login complete!\n" + result)
  // }

  const auth0 = new Auth0({
    domain: "dev-i9g6ai1l.us.auth0.com",
    clientId: "81QjLgrUi9chaETK8yYEfdi3W0i4vjnO",
  })

  const handleLogin = async () => {
    console.log("starting login!")
    auth0.webAuth
      .authorize({ scope: "openid email profile" })
      .then(credentials => console.log(credentials))
      .catch(error => console.log(error))
  }

  const handleLogout = async () => {
    console.log("Signing out!")
    auth0.webAuth.clearSession().then(result => console.log(result)).catch(error => console.log(error))
  }

  return (
    <Screen style={ROOT} preset="scroll">
      <Button text="Log In" textStyle={textStyle} style={buttonStyle} onPress={handleLogin} />
      <Button text="Log Out" textStyle={textStyle} style={buttonStyle} onPress={handleLogout} />
    </Screen>
  )
})
