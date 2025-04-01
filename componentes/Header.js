import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => {
return (
<View style={styles.header}>
<Text style={styles.title}>{title}</Text>
</View>
);
};

const styles = StyleSheet.create({
header: {
backgroundColor: '#05445e',
padding: 20,
alignItems: 'center',
},
title: {
color: '#d4f1f4',
fontSize: 20,
fontWeight: 'bold',
},
});

export default Header;