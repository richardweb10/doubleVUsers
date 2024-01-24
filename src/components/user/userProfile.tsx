import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Stack, Text } from '@react-native-material/core';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userAction from '../../actions/user';
import styles from '../../styles/index';
import { showAvatar } from '../util/showAvatar';
import {showError} from '../util/errorMsg';

const UserProfile = (props: any) => {
    const login = props.route.params.login;

    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        props.actions.getUserProfile({ login });
    }, []);

    useEffect(() => {
        if (props.data) {
            setUser(props.data);
        }
    }, [props.data]);

    useEffect(() => {
        if (props.error) {
            showError(props.error);
        }
    }, [props.error]);

    return (
        user ?
            <Stack style={styles.container}>
                <View style={styles.imageCard}>
                    {showAvatar(user.avatar_url, 75)}
                </View>
                <View style={styles.detailUser}>
                    <Text>Nombre de usuario: <Text style={styles.link}>{user.login}</Text> </Text>
                    <Text>Id: <Text style={styles.textBold}>{user.id}</Text> </Text>
                    <Text>Nombre: <Text style={styles.textBold}>{user.name}</Text> </Text>
                    <Text>Repositorios Públicos: <Text style={styles.textBold}>{user.public_repos}</Text> </Text>
                    <Text>Seguidores: <Text style={styles.textBold}>{user.followers}</Text> </Text>
                    <Text>Seguidos: <Text style={styles.textBold}>{user.following}</Text> </Text>
                </View>



            </Stack> : null


    )
}
const mapStateToProps = (state: any) => ({
    isLoading: state.user.isLoadingProfile,
    error: state.user.errorProfile,
    data: state.user.dataProfile,
})

const mapDispatchToProps = (dispatch: any) => ({
    actions: bindActionCreators(userAction, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);