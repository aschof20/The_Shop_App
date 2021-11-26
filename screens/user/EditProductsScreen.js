import React from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/UI/HeaderButton';

const EditProductsScreen = props => {
    return (
        <ScrollView>
            <View style={styles.form}>
                <View style={styles.formControl}>
                    <Text style={styles.label}>Title</Text>
                    <TextInput style={styles.input} />
                </View>
                <View style={styles.formControl}>
                    <Text style={styles.label}>Image</Text>
                    <TextInput style={styles.input} />
                </View>
                <View style={styles.formControl}>
                    <Text style={styles.label}>Price</Text>
                    <TextInput style={styles.input} />
                </View>
                <View style={styles.formControl}>
                    <Text style={styles.label}>Description</Text>
                    <TextInput style={styles.input} />
                </View>
            </View>
        </ScrollView>
    );
};

EditProductsScreen.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('productId' ? 'Edit Product' : 'Add Product'),
        headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton} >
            <Item title="Save" iconName={Platform.OS === 'android' ? 'md-checkmark' : 'ios-checkmark'} onPress={() => {
                navData.navigation.toggleDrawer();
            }} />
        </HeaderButtons>,
    };
};


const styles = StyleSheet.create({
    form: {
        margin: 20
    },
    formControl: {
        width: '100%'
    },
    label: {
        fontFamily: 'open-sans-bold',
        marginVertical: 8
    },
    input: {
        paddingHorizontal: 2,
        paddingVertical: 5,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1

    }
});

export default EditProductsScreen;
