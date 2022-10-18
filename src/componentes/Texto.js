import React from "react";
import { StyleSheet, Text } from "react-native";

export default function Texto({childen, style}){
    let estilo = estilos.texto;

    if(style.fontWeight ==="bold")
        estilo = estilos.textoNegrito;

    return <Text style={[style, estilos.texto]}>{childen}</Text>
    
}

const estilos = StyleSheet.create({
    texto: {
        fontFamily: "MontserratRegular",
    },
    textoNegrito: {
        fontFamily:"MontserratBold",
        fontWeight: "normal",
    },
})