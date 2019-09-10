import React, { Component } from 'react';
import { Button, TextInput, View, StyleSheet } from 'react-native';

import FormRow from '../components/FormRow';

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    onChangeHandler(field, value) {
        this.setState({
            [field]: value
        });
    }

    processLogin() {}

    render() {
        return (
            <View>
                <FormRow>
                    <TextInput
                        style={styles.TextInput}
                        placeholder='Email: user@provider.com'
                        value={this.state.email}
                        onChangeText={(value) =>
                            this.onChangeHandler('email', value)
                        }
                    />
                </FormRow>
                <FormRow>
                    <TextInput
                        style={styles.TextInput}
                        placeholder='Senha'
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={(value) =>
                            this.onChangeHandler('password', value)
                        }
                    />
                </FormRow>
                <Button title='Entrar' onPress={() => this.processLogin()} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    TextInput: {
        borderWidth: 1,
        borderColor: 'gray',
        paddingLeft: 10,
        paddingRight: 10
    }
});
