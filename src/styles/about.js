import { Dimensions, StyleSheet } from "react-native";
import { colors } from './colors';

const { width } = Dimensions.get('window');

export const styles = {
    light: {
        container: {
            backgroundColor: colors.purple,
            flex: 1,
            alignItems: "center",
        },
        h1: {
            fontSize: 40,
            color: colors.white,
            fontWeight: "bold",
            width: width - 40,
        },
        h4: {
            fontSize: 17,
            color: colors.white,
            paddingTop: 20,
            width: width - 40
        },
        hr: {
            width: width - 40,
            height: 1,
            backgroundColor: colors.gray,
            marginTop: 20,
            marginBottom: 20
        },
        socialIcons: {
            width: width - 40,
            flexDirection: "row",
            justifyContent: 'center'
        },
        icon: {
            color: colors.white,
            fontSize: 35,
            marginLeft: 20,
            marginRight: 20,
        },
        button: {
            width: width - 200,
            backgroundColor: colors.red,
            padding: 15,
            borderRadius: 10,
            marginTop: 100
        },
        buttonText: {
            color: colors.white,
            textAlign: "center",
            fontWeight: "bold"
        }
    },
    dark: {
        container: {
            flex: 1,
            backgroundColor: colors.black,
            alignItems: "center",
        },
        h1: {
            fontSize: 40,
            color: colors.gray,
            fontWeight: "bold",
            width: width - 40,
        },
        h4: {
            fontSize: 17,
            color: colors.gray,
            paddingTop: 20,
            width: width - 40
        },
        hr: {
            width: width - 40,
            height: 1,
            backgroundColor: colors.gray,
            marginTop: 20,
            marginBottom: 20
        },
        socialIcons: {
            width: width - 40,
            flexDirection: "row",
            justifyContent: 'center'
        },
        icon: {
            color: colors.gray,
            fontSize: 35,
            marginLeft: 20,
            marginRight: 20,
        },
        button: {
            width: width - 200,
            backgroundColor: colors.darkRed,
            padding: 15,
            borderRadius: 10,
            marginTop: 100
        },
        buttonText: {
            color: colors.gray,
            textAlign: "center",
            fontWeight: "bold"
        }
    }
}