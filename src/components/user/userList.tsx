import React, { useEffect, useState } from 'react';
import { ScrollView, Pressable, Alert } from 'react-native';
import { Stack, Text } from '@react-native-material/core';
import Search from '../util/search';
import styles from '../../styles/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userAction from '../../actions/user';
import {showError} from '../util/errorMsg';

const PER_PAGE = 10;

const UserList = (props: any) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        props.actions.getUsersByName({ name: 'YOUR_NAME', PER_PAGE });
    }, []);

    useEffect(() => {
        if (props.data) {
            setUsers(props.data.items);
        }
    }, [props.data]);
    
    useEffect(() => {
        if (props.error) {
            showError(props.error);
        }

    }, [props.error]);

    const searchSubmit = (term: string) => {
        if (term.length < 4 || term == 'doublevpartners') {
            Alert.alert(
                'Validador',
                `El texto debe ser mayor a 4 caracteres y no debe realizar la búsqueda por "doublevpartners"`,
                [{ text: 'OK', onPress: () => { } }],
            );
        } else {
            props.actions.getUsersByName({ name: term != '' ? term : 'YOUR_NAME', PER_PAGE });
        }

    }

    return (
        <Stack style={styles.container}>
            <Search
                navigation={props.navigation}
                searchSubmit={searchSubmit}
            />
            <Pressable
                style={styles.list}
                onPress={() => props.navigation.navigate('chartFollower', { users, },)}
            >
                <Text style={styles.link}>Ver gráfico</Text>
            </Pressable>
            <ScrollView style={styles.list}>
                {users && users.map((val: any, id: number) => (
                    <Pressable
                        key={id}
                        style={styles.item}
                        onPress={() => props.navigation.navigate('profile',
                            {
                                login: val.login,
                            },
                        )}
                    >
                        <Text>Nombre de usuario: <Text style={styles.link}>{val.login}</Text></Text>

                        <Text>Id: <Text>{val.id}</Text></Text>

                    </Pressable>

                ))}

            </ScrollView>

        </Stack>

    )
}

const mapStateToProps = (state: any) => ({
    isLoading: state.user.isLoading,
    error: state.user.error,
    data: state.user.data,
})

const mapDispatchToProps = (dispatch: any) => ({
    actions: bindActionCreators(userAction, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserList);