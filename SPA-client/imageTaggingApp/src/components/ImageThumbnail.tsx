import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const styles = StyleSheet.create({
    thumbsList: {
        marginRight: '1rem'
    },
    image: {
        marginRight: '1rem',
        marginTop: '0.5rem',
        marginBottom: '0.5rem',
        width: 100,
        height: 100,
        borderRadius: 5
    }
});

interface ImageThumbnailProps {
    name: string
}

export function ImageThumbnail(props: ImageThumbnailProps) {
    return (
        <Image 
            style={styles.image}
            source={require(`../assets/images/${props.name}`)}
        />
    );
}

export function ThumbnailList() {
    return (
        <Text style={styles.thumbsList}>
            <ImageThumbnail name='naruto b387d10ca6b7f8cfe51c4c4f872a5369.jpg'/>
            <ImageThumbnail name='naruto b387d10ca6b7f8cfe51c4c4f872a5369.jpg'/>
            <ImageThumbnail name='naruto b387d10ca6b7f8cfe51c4c4f872a5369.jpg'/>
            <ImageThumbnail name='naruto b387d10ca6b7f8cfe51c4c4f872a5369.jpg'/>
            <ImageThumbnail name='naruto b387d10ca6b7f8cfe51c4c4f872a5369.jpg'/>
        </Text>
    )
}
