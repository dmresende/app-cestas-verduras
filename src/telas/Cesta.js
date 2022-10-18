import React from 'react';
import { StyleSheet, Image, Dimensions, Text, View } from 'react-native';
import Texto from '../componentes/Texto';


import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';

const width = Dimensions.get('screen').width;

export default function Cesta() {
    return <>
        <Image source={topo} style={estilos.topo} />
        <Text style={estilos.titulo}>Detalhe da Cesta</Text>

        <View style={estilos.cesta}>
            <Text style={estilos.nome}>Cesta de Verduras</Text>
            <View style={estilos.fazenda}>
                <Image source={logo} style={estilos.logo} />
                <Text style={estilos.FazendaNome}>Jenny Jack Form</Text>
            </View>
            <Text style={estilos.descricao}>Uma cesta  com produtos selecionados cuidadosamente da fazenda para sua cozinha</Text>
            <Text style={estilos.preco}>R$ 40,00</Text>
        </View>
    </>
};

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width
    },
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "#FFFFFF",
        fontWeight: "bold",
        padding: 16

    },
    nome: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontWeight: "bold",
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    FazendaNome: {
        lineHeight: 26,
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 12,

    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 12,
    },
    logo: {
        width: 32,
        height: 32,
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    },
});