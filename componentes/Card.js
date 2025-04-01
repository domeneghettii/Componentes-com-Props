import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = ({ title, description }) => {
return (
<View style={styles.card}>
<Text style={styles.title}>{title}</Text>
<Text style={styles.description}>{description}</Text>
</View>
);
};

const styles = StyleSheet.create({
card: {
backgroundColor: '#fff',
padding: 15,
margin: 10,
borderRadius: 10,
elevation: 3,
shadowColor: '#000',
shadowOffset: { width: 0, height: 2 },
shadowOpacity: 0.2,
shadowRadius: 4,
},
title: {
fontSize: 18,
fontWeight: 'bold',
},
description: {
fontSize: 14,
color: '#555',
marginTop: 5,
},
});

export default Card;