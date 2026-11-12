import React from 'react';
import {View, Text, Image, TouchableOpacity, Alert, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const styles = StyleSheet.create({
    parent: {
        flexDirection: 'column',
        backgroundColor: 'white',
        borderColor: 'purple',
        borderWidth: 2,
        marginTop: 20,
    },

    questionText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'purple',
    },

    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lavender',
    },

    image: {
        width: 200,
        height: 200,
    },

    hintText: {
        fontSize: 14,
        textAlign: 'center',
        color: 'purple',
    },

    labelText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
    },

    picker: {
        backgroundColor: 'whitesmoke',
        color: 'purple',
    },
});

const Questions = ({number, image, options, onValueChange, answer}) => {
    return (
        <View style={styles.parent}>
            <Text style={styles.questionText}>
                Question {number}: Who's that Pokemon?
            </Text>

            <TouchableOpacity
                style={styles.imageContainer}
                onPress={() =>
                    Alert.alert('Answer', 'The answer is ' + answer)
                }
            >
                <Image
                    source={{uri: image}}
                    style={styles.image}
                    resizeMode="contain"
                />

                <Text style={styles.hintText}>
                    Tap the image for the answer
                </Text>
            </TouchableOpacity>

            <Text style={styles.labelText}>
                Select your answer:
            </Text>

            <Picker
                style={styles.picker}
                onValueChange={onValueChange}
            >
                <Picker.Item label={options[0]} value={options[0]} />
                <Picker.Item label={options[1]} value={options[1]} />
                <Picker.Item label={options[2]} value={options[2]} />
                <Picker.Item label={options[3]} value={options[3]} />
            </Picker>
        </View>
    );
};

export default Questions;