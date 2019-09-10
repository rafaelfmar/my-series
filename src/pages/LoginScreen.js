import React, { Component } from 'react';
import { Button, TextInput, View, StyleSheet } from 'react-native';
import firebase from 'firebase';

import FormRow from '../components/FormRow';

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    componentDidMount() {
        var firebaseConfig = {
            apiKey: 'AIzaSyC3hNFUx0qNpCcA3E7Rc6OGS-jHNPRi_Z4',
            authDomain: 'minhasseries-425d6.firebaseapp.com',
            databaseURL: 'https://minhasseries-425d6.firebaseio.com',
            projectId: 'minhasseries-425d6',
            storageBucket: '',
            messagingSenderId: '253926677764',
            appId: '1:253926677764:web:cdae3929a5e9d778288451'
        };

        firebase.initializeApp(firebaseConfig);
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
