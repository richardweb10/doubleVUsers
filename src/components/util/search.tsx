import React from 'react';
import { View } from 'react-native';
import { NativeInput } from '../layout/nativeInput';
import { Button } from '@react-native-material/core';
import styles from '../../styles/search';

export default function Search(props: any) {

    const [searchTerm, setSearchTerm] = React.useState(props.term ?? "");

    const handleChange = async (value: any) => {
        setSearchTerm(value);
    };

    const searchSubmit = () => {
        props.searchSubmit(searchTerm);
    }

    return (

        <View style={styles.container}>

            <NativeInput
                changeValue={handleChange}
                value={searchTerm}
                color="#111111"
                keyboardType='web-search'
                class={{
                    width: '70%'
                }
                }

            />
            <Button
                title="Buscar"
                onPress={searchSubmit}
                loading={props.isLoading}
                uppercase={false} />


        </View>

    )
}

