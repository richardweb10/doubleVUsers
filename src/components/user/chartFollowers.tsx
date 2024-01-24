import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Stack } from '@react-native-material/core';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userAction from '../../actions/user';
import styles from '../../styles/index';
import { BarChart } from 'react-native-charts-wrapper';
import {showError} from '../util/errorMsg';
let indexUser = 0;
const ChartFollowers = (props: any) => {
    let users = props.route.params.users;
    
    const [usersFollowers, setUsersFollowers] = useState<any>([]);

    useEffect(() => {
        cleanFollowers();
        if (users) {
            props.actions.getUserProfile({ login: users[indexUser].login });
            indexUser += 1;
        }
    }, [users]);

    useEffect(() => {
        if (props.data) {
            const followers = [...usersFollowers, { y: props.data.followers, marker: props.data.name }]
            setUsersFollowers(followers);
            if(indexUser < users.length){
                props.actions.getUserProfile({ login: users[indexUser].login });
                indexUser += 1;
            }
           
        }
    }, [props.data]);

    useEffect(() => {
        if (props.error) {
            showError(props.error);
        }
    }, [props.error]);

    const cleanFollowers = () =>{
        indexUser = 0 ;
        setUsersFollowers([]);
    }

    return (
        <Stack style={styles.containerFollower}>

            <View style={styles.containerChart}>
                <BarChart style={styles.chart}
                    data={{ dataSets: [{ label: "Seguidores", values: usersFollowers }] }}
                />
            </View>


        </Stack>


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

export default connect(mapStateToProps, mapDispatchToProps)(ChartFollowers);