import React from 'react';
import { Image } from 'react-native';
import AvatarUser from '../../assets/img/user.png';


export const showAvatar = (urlAvatar: any, size: number) => {
    return (
        <Image
            source={{
                uri: urlAvatar ? urlAvatar : AvatarUser,
                cache: 'reload'
            }}
            style={{ width: size, height: size, borderRadius: size / 2 }}
        />
    )

}