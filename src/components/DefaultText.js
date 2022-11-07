import { Text } from "react-native"

const familyFonts = {
    regular: 'Epilogue',
    medium: 'Epilogue-Medium',
    semiBold: 'Epilogue-SemiBold',
    bold: 'Epilogue-Bold',

}

export default function DefaultText({ family, value, style }) {
    return (
        <Text style={{ fontFamily: familyFonts[family], ...style }}>{value}</Text>
    )
}