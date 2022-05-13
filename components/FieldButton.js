import { StyleSheet, Button, TextInput } from 'react-native';

const FieldButton = () => {
    return (
        <>
            <TextInput 
                style={styles.input}
                placeholder="Enter text" />
            <Button 
                title="Ok"
                color="red" />
        </>
    );
}

const styles = StyleSheet.create({
    input: {
        width: '50%',
        margin: 10,
        padding: 5,
        borderWidth: 1
    }
});

export default FieldButton;