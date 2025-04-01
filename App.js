import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Header from './componentes/Header';
import Card from './componentes/Card';
// Importando os componentes Header e Card
// para serem utilizados na tela inicial

const Home = () => {
return (
<View style={styles.container}>
<Header title="Bem-vindo ao App da Domeneghetti" />
<ScrollView>
<Card title="Título 1" description="Essa é a descrição do primeiro card." />
<Card title="Título 2" description="Aqui vai um segundo card com mais informações." />
<Card title="Título 3" description="Mais um card para testar o layout." />
</ScrollView>
</View>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#189ab4',
},
});

export default Home;

