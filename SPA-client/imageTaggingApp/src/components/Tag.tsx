import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface TagProps {
    name: string
};

const tagStyle = StyleSheet.create({
    tag: {
        color: '#444',
        backgroundColor: '#ccc',
        borderRadius: 18,
        marginBottom: '0.5rem',
        padding: '0.1rem',
        paddingLeft: '0.5rem',
        paddingRight: '0.5rem',
        marginRight: '0.5rem'
    }
});

export function Tag(props: TagProps) {
    return (
        <Text style={tagStyle.tag}>
            <i>#{props.name}</i>
        </Text>
    );
}

export function AddTag() {
    return (
        <Text style={tagStyle.tag}>
            +
        </Text>
    )
}
