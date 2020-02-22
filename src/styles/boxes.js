import { StyleSheet, Dimensions, Platform } from 'react-native';

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("screen").height;
const PERCENT = WIDTH / 100;

const PLATFORM = Platform.OS;
/*

Colors:
    Red: #cc0044
    Purple: #5639a1
    Black:

*/

export const boxes = StyleSheet.create({
    headerStyle: {
        backgroundColor: "#5639a1",
        // color: "#fff",
        height: 85,
        elevation: 0, // remove shadow on Android
        shadowOpacity: 0,
        borderWidth: 0
    },
    headerTitle: {
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
        width: WIDTH - 150,
        fontSize: 20
    },
    container: {
        flex: 1,
        backgroundColor: "#5639a1"
    },
    menuIcon: {
        color: "#fff",
        fontSize: 37,
        marginLeft: 10
    },
    content: {
        flex: 1,
        paddingRight: 18,
        paddingLeft: 18,
    },
    list: {
        flex: 1,
        marginTop: 20,
        paddingBottom: HEIGHT - 100
    },
    fixedButtonView: {
        position: "absolute",
        bottom: 50,
        right: 0,
        flexDirection: "row",
        alignSelf: "flex-end",
    },
    fixedButton: {
        width: 65,
        height: 65,
        backgroundColor: "#cc0044",
        left: 0,
        marginRight: 20,
        borderRadius: 50,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        flexDirection: "row",
    },

    fixedAddIcon: {
        flex: 1,
        fontSize: 50,
        color: "#fff",
        alignSelf: "center",
        fontWeight: "bold",
        textAlign: "center"
    },

    box: {
        borderRadius: 18,
        backgroundColor: "#fff",
        marginBottom: 15,
        alignSelf: "stretch",
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,


    },
    boxHeader: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#5639a1",

    },
    boxText: {
        fontSize: 12,
        color: "#878484",
    },
    boxIcon: {
        fontSize: 25,
        color: "#5639a1",
        alignSelf: "center",
        flexGrow: 1,
    },
    boxIconButton: {
        width: 40,
        height: 40,
        backgroundColor: "white"
    },
    modalBox: {
        margin: 50,
        padding: 20,
        borderRadius: 20,
        backgroundColor: "#fff",
        width: 100
    },
    themeIcon: {
        fontSize: 29,
        color: "#fff",
        marginRight: 20,
        marginTop: 1
    },
    drawerIcon: {
        fontSize: 6 * PERCENT,
        width: 30,
        height: 30,
        alignSelf: "center",
        flexGrow: 1,
        textAlign: "center",
        color: "#5639a1",
        justifyContent: "center",
        textAlignVertical: "center",
    },
    drawerStyle: {
        backgroundColor: "#878484"
    },
    drawerText: {
        color: "#5639a1"
    },
    sideMenuContainer: {
        height: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 30,
        width: WIDTH - 130,
    },
    sideMenuBox: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
    },
    noTodoBox: {
        borderRadius: 18,
        backgroundColor: "#5639a1",
        padding: 30,
        shadowOpacity: 1,
        alignSelf: "stretch",
        margin: 30,
        alignItems: "center",
        elevation: 0, // remove shadow on Android
        shadowOpacity: 0,
    },
    noTodoTitle: {
        fontSize: 5 * PERCENT,
        color: "#fff",
        marginTop: 10,
        fontWeight: "bold",
        width: WIDTH - 100,
        textAlign: "center",
    },
    noTodoIcon: {
        fontSize: 20 * PERCENT,
        color: "#fff"
    },

    addTodoContainer: {
        flex: 1,
        backgroundColor: "#5639a1",
        padding: 18,
        paddingTop: 5
    },

    addTodoInput: {
        borderRadius: 3 * PERCENT,
        backgroundColor: "#fff",
        color: "#5639a1",
        padding: 10,
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    addDescInput: {
        borderRadius: 3 * PERCENT,
        backgroundColor: "#fff",
        color: "#5639a1",
        padding: 10,
        marginTop: 13,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        height: 24 * PERCENT,
        paddingTop: PLATFORM == "ios" ? 10 * PERCENT : null,
    },

    addDescButton: {
        borderWidth: 0,
        borderRadius: 10,
        width: '40%',
        padding: 2,
        backgroundColor: '#fff'
    },

    addDescText: {
        textAlign: 'center',
        color: '#5639a1',
        padding: 5
    },

    AddTodoButton: {
        width: 65,
        height: 65,
        backgroundColor: "#cc0044",
        borderRadius: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        alignSelf: "center",
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },

    AddTodoAddIcon: {
        fontSize: 50,
        color: "#fff",
        fontWeight: "bold",
    },

    todoItemTrashBox: {
        flex: 1,
        backgroundColor: "#cc0044",
        borderTopEndRadius: 16,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 10,
        paddingTop: 10

    },
    todoItemTrashIcon: {
        color: "#fff",
        fontSize: 20,
    },

    todoItemSettingsBox: {
        flex: 1,
        backgroundColor: "#f1f1f1",
        borderBottomEndRadius: 16,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 10,
        paddingTop: 10
    },

    todoItemSettingsIcon: {
        color: "#5639a1",
        fontSize: 21
    },


    trashBoxRecycleBox: {
        flex: 1,
        backgroundColor: "#08c73b",
        borderTopEndRadius: 16,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 10,
        paddingTop: 10
    },

    trashBoxRecycleIcon: {
        color: "#fff",
        fontSize: 21
    },

    copyrightText: {
        margin: 20,
        padding: 10,
        borderRadius: 8,
        backgroundColor: "#5639a1",
        color: "#fff",
        fontWeight: "bold"
    },


})

export const boxesDark = StyleSheet.create({
    headerStyle: {
        backgroundColor: "#000",
        height: 85,
        elevation: 0, // remove shadow on Android
        shadowOpacity: 0,
        borderWidth: 0
    },
    headerTitle: {
        fontWeight: "bold",
        color: "#8c8b8c",
        textAlign: "center",
        width: WIDTH - 150,
        fontSize: 20
    },
    container: {
        flex: 1,
        backgroundColor: "#000"
    },
    menuIcon: {
        color: "#8c8b8c",
        fontSize: 37,
        marginLeft: 10
    },
    content: {
        flex: 1,
        paddingRight: 18,
        paddingLeft: 18,
    },
    list: {
        flex: 1,
        marginTop: 20,
    },

    drawerText: {
        color: "#000"
    },
    drawerIcon: {
        fontSize: 20,
        width: 30,
        height: 30,
        alignSelf: "center",
        flexGrow: 1,
        textAlignVertical: "center",
        color: "#000"
    },
    fixedButtonView: {
        position: "absolute",
        bottom: 50,
        right: 0,
        flexDirection: "row",
        alignSelf: "flex-end",
    },
    fixedButton: {
        width: 65,
        height: 65,
        backgroundColor: "#523c52",
        left: 0,
        marginRight: 20,
        borderRadius: 50,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        flexDirection: "row",

    },

    fixedAddIcon: {
        flex: 1,
        fontSize: 50,
        color: "#fff",
        alignSelf: "center",
        fontWeight: "bold",
        textAlign: "center"
    },

    box: {
        borderRadius: 18,
        backgroundColor: "#adacad",
        shadowOpacity: 1,
        marginBottom: 15,
        alignSelf: "stretch",
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',

    },
    boxHeader: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000",

    },
    boxText: {
        fontSize: 12,
        color: "#000",
    },
    boxIcon: {
        fontSize: 25,
        color: "#000",
        marginRight: 13
    },
    themeIcon: {
        fontSize: 20,
        color: "#8c8b8c",
        marginRight: 20,
        marginTop: 5
    },
    sideMenuContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#8c8b8c',
        alignItems: 'center',
        paddingTop: 20,
    },
    sideMenuProfileIcon: {
        resizeMode: 'center',
        width: 150,
        height: 150,
        marginTop: 20,
        borderRadius: 150 / 2,
    },
    sideMenuBox: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: "#8c8b8c",

    },
    noTodoBox: {
        borderRadius: 18,
        backgroundColor: "#000",
        padding: 30,
        shadowOpacity: 1,
        marginBottom: 15,
        alignSelf: "stretch",
        margin: 30,
        alignItems: "center",
        elevation: 0, // remove shadow on Android
        shadowOpacity: 0,
    },
    noTodoTitle: {
        fontSize: 5 * PERCENT,
        color: "#8c8b8c",
        marginTop: 10,
        fontWeight: "bold",
        width: WIDTH - 100,
        textAlign: "center",
    },
    noTodoIcon: {
        fontSize: 20 * PERCENT,
        color: "#8c8b8c"
    },

    addTodoContainer: {
        flex: 1,
        backgroundColor: "#000",
        padding: 18,
        paddingTop: 0
    },

    addTodoInput: {
        borderRadius: 2 * PERCENT,
        backgroundColor: "#8c8b8c",
        // padding: 20,
        shadowOpacity: 1,
        color: "#000",
        padding: 10,
        marginTop: 20

    },


    AddTodoButton: {
        width: 65,
        height: 65,
        backgroundColor: "#523c52",
        borderRadius: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        alignSelf: "center",
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },

    addDescInput: {
        borderRadius: 3 * PERCENT,
        backgroundColor: "#8c8b8c",
        color: "#000",
        padding: 10,
        marginTop: 13,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        height: 24 * PERCENT,
        paddingTop: PLATFORM == "ios" ? 10 * PERCENT : null,
    },

    addDescButton: {
        borderWidth: 0,
        borderRadius: 10,
        width: '40%',
        padding: 2,
        backgroundColor: '#8c8b8c'
    },

    addDescText: {
        textAlign: 'center',
        color: '#000',
        padding: 5
    },

    AddTodoAddIcon: {
        fontSize: 50,
        color: "#fff",
        fontWeight: "bold",

    },

    todoItemTrashBox: {
        flex: 1,
        backgroundColor: "#b3adb3",
        borderTopEndRadius: 16,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 10,
        paddingTop: 10
    },


    todoItemTrashIcon: {
        color: "#000",
        fontSize: 20,
    },


    todoItemSettingsBox: {
        flex: 1,
        backgroundColor: "#b3adb3",
        borderBottomEndRadius: 16,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 10,
        paddingTop: 10
    },

    todoItemSettingsIcon: {
        color: "#000",
        fontSize: 20
    },


    trashBoxRecycleBox: {
        flex: 1,
        backgroundColor: "#b3adb3",
        borderTopEndRadius: 16,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 10,
        paddingTop: 10
    },

    trashBoxRecycleIcon: {
        color: "#000",
        fontSize: 21,
        fontWeight: "bold"
    },
    copyrightText: {
        margin: 20,
        padding: 10,
        borderRadius: 8,
        backgroundColor: "#000",
        color: "#fff",
        fontWeight: "bold"
    }



})