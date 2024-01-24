import React, { useEffect, useState } from 'react';
import { TextInput } from 'react-native';

export const NativeInput = (props: any) => {

  const [value, setValue] = useState('');
  

  useEffect(() => {
    if (props.value != undefined) {
      setValue(props.value);
    }

  }, [props.value])


  return (

    <TextInput
      style={{
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#cccccc',
        height: 48,
        padding: 12,
        color: '#111111',
        ...props.class
      }}
      value={value}
      selectTextOnFocus={false}
      keyboardType={props.keyboardType ?? 'default'}
      onChangeText={val => props.changeValue(val)}
      secureTextEntry={props.secureTextEntry}
    />
  );
}

