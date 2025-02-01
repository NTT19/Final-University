import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "./color";

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default StyleSheet.create({
    area: {
        flex: 1,
        backgroundColor: Colors.bg
    },
    main: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: Colors.bg,
    },
    title: {
        fontSize: 48,
        color: Colors.txt,
        fontFamily: 'Nunito-Medium'
    },
    apptitle: {
        fontSize: 40,
        color: Colors.txt,
        fontFamily: 'Nunito-SemiBold'
    },

    subtitle: {
        fontSize: 20,
        fontFamily: 'Nunito-Bold',
        color: Colors.txt,
    },

    s42: {
        fontSize: 42,
        fontFamily: 'Nunito-SemiBold',
        color: Colors.txt,
    },

    r20: {
        fontSize: 20,
        fontFamily: 'Nunito-Regular',
        color: Colors.dis,
    },
    m20: {
        fontSize: 20,
        fontFamily: 'Nunito-Medium',
        color: Colors.dis,
    },

    s20: {
        fontSize: 20,
        fontFamily: 'Nunito-SemiBold',
        color: Colors.txt,
    },

    r12: {
        fontSize: 12,
        fontFamily: 'Nunito-Regular',
        color: Colors.dis,
    },
    m12: {
        fontSize: 12,
        fontFamily: 'Nunito-Medium',
        color: Colors.dis,
    },
    b12: {
        fontSize: 12,
        fontFamily: 'Nunito-Bold',
        color: Colors.txt,
    },
    s12: {
        fontSize: 12,
        fontFamily: 'Nunito-SemiBold',
        color: Colors.txt,
    },

    r14: {
        fontSize: 14,
        fontFamily: 'Nunito-Regular',
        color: Colors.txt,
    },
    m14: {
        fontSize: 14,
        fontFamily: 'Nunito-Medium',
        color: Colors.txt,
    },
    b14: {
        fontSize: 14,
        fontFamily: 'Nunito-Bold',
        color: Colors.txt,
    },
    s14: {
        fontSize: 14,
        fontFamily: 'Nunito-SemiBold',
        color: Colors.txt,
    },

    r16: {
        fontSize: 16,
        fontFamily: 'Nunito-Regular',
        color: Colors.txt,
    },
    m16: {
        fontSize: 16,
        fontFamily: 'Nunito-Medium',
        color: Colors.txt,
    },
    b16: {
        fontSize: 16,
        fontFamily: 'Nunito-Bold',
        color: Colors.txt,
    },
    s16: {
        fontSize: 16,
        fontFamily: 'Nunito-SemiBold',
        color: Colors.txt,
    },

    r18: {
        fontSize: 18,
        fontFamily: 'Nunito-Regular',
        color: Colors.txt,
    },
    m18: {
        fontSize: 18,
        fontFamily: 'Nunito-Medium',
        color: Colors.txt,
    },
    b18: {
        fontSize: 18,
        fontFamily: 'Nunito-Bold',
        color: Colors.txt,
    },
    s18: {
        fontSize: 18,
        fontFamily: 'Nunito-SemiBold',
        color: Colors.txt,
    },

    modalcontainer: {
        flex: 1,
        borderRadius: 20,
        paddingHorizontal: 10,
        // marginVertical: 140,
        paddingTop: 20,
        marginHorizontal: -10,
        alignSelf: 'center',
    },

    btn: {
        backgroundColor: Colors.primary,
        alignItems: 'center',
        height: 40,
        borderRadius: 6,
        justifyContent: 'center'
    },

    btntxt: {
        fontSize: 18,
        color: Colors.secondary,
        fontFamily: 'Nunito-SemiBold',
    },

    btno: {
        borderWidth:1,
        borderColor:Colors.primary,
        alignItems: 'center',
        height: 40,
        borderRadius: 6,
        justifyContent: 'center'
    },

    fb:{
        height:36,
        width:36,
        borderRadius:20,
        borderWidth:1,
        borderColor:'#D6D6D6',
        alignItems:'center',
        justifyContent:'center',
    },

    txtinput: {
        // paddingHorizontal: 12,
        height: 50,
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth:1,
        borderBlockColor:'#D6D6D6'
       
    },
    
    inputcontainer: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 40,
        borderRadius: 12,
        backgroundColor: '#F8F8F8',
        paddingHorizontal: 15,
    },

    list:{
        alignItems: 'center',
        flexDirection: 'row',
    },
    list1:{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent:'space-between'
    },

    box: {
        padding: 15,
        backgroundColor:'#FFFFFF',
        borderRadius:8
    },

    box1: {
        padding: 12,
        backgroundColor:'#FFFFFF',
        borderRadius:8
    },

    box2: {
        padding: 20,
        backgroundColor:'#FFFFFF',
        borderRadius:8
    },

    boxo: {
        padding: 15,
        borderWidth:1,
        borderColor:'#E6E9F6',
        borderRadius:5
    },

    icon: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor:'#FFF2F2',
        alignItems: 'center',
        justifyContent: 'center'
    },

    icon1: {
        height: 20,
        width: 20,
        borderRadius: 4,
        borderWidth:1,
        borderColor:'#BDBCBC',
        alignItems: 'center',
        justifyContent: 'center'
    },

    icon2: {
        height: 44,
        width: 44,
        borderRadius: 22,
        backgroundColor:'#F1F5F9',
        alignItems: 'center',
        justifyContent: 'center'
    },

    chip:{
        height:20,
        justifyContent:'center',
        paddingHorizontal:10,
        backgroundColor:'#FFFFFF',
        borderRadius:12,
    },

    indicator: {
        height: 8,
        width: 8,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        marginHorizontal: 5
    },


    shadow: {
        shadowColor: '#77808D90',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 5,
        backgroundColor: Colors.bg,

    },

    divider: {
        height: 1,
        backgroundColor:'#E6E6E6',
    },

    dividertxt: {
        color: Colors.disable,
        fontFamily: 'Nunito-Regular'
    },

    verticaldivider: {
        height: 56,
        width: 1,
        backgroundColor:'#E6E6E6',
    },

    categoryTextSelected: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 7,
        // borderWidth: 0,
        backgroundColor: Colors.primary,
        borderColor: Colors.primary,
        color: Colors.secondary,
        fontFamily: 'Nunito-medium'
    },
    categoryText: {
        fontSize: 19,
        color: Colors.txt,
        borderWidth: 0,
        backgroundColor: Colors.secondary,
        borderRadius: 7,
        paddingBottom: 5,
        paddingTop: 7,
        paddingHorizontal: 10,
        marginHorizontal: 5,
        fontFamily: 'Nunito-Medium'
    },
    categorycontainer: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 0,
        justifyContent: 'space-between',
    },

}
);