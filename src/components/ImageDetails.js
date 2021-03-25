import React from 'react';
import { Text, View, StyleSheet,Image} from 'react-native';

const ImageDetails = (props) => {
    
    return (
        <View style={styles.container}>
            <Image
                style={styles.stretch}
                source={require('../../assets/home.jpeg')}
            />
        </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
        paddingTop:10
    },
    stretch: {
        width: 400,
        height: 200,
        resizeMode: 'stretch',
    },
    
});

export default ImageDetails;