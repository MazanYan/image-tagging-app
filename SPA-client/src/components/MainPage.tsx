import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { makeStyles, List, ListSubheader, ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction } from '@material-ui/core';
import WifiIcon from '@material-ui/icons/Wifi';
import Switch from '@material-ui/core/Switch';
import SearchByTag from './SearchTag';
import { Tag, AddTag } from './Tag';
import { ImageThumbnail, ThumbnailList } from './ImageThumbnail';

function ComponentBreak() {
    const hrStyle = {
        marginLeft: 0,
        marginRight: 0,
        marginTop: '1rem',
        color: 'rgba(0, 0, 0, 0.5)'
    };

    return (
        <hr style={hrStyle} />
    )
}



const styles = StyleSheet.create({
    root: {
        marginLeft: '1rem',
        marginRight: '1rem',
        paddingBottom: '2rem'
    },
    textHeader: {
        marginTop: '1em',
        fontFamily: 'Arial'
    },
    tags: {
        marginTop: '0.5rem',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    link: {
        color: '#444',
        textDecorationLine: 'underline'
    }
});

export default function MainPage() {

    console.log(ImageThumbnail);

    return (
        <View style={styles.root}>
            <Text style={styles.textHeader}>
                Search by tag:
            </Text>
            <SearchByTag backgroundColor='#fff'/>
            <ComponentBreak />
            <Text style={styles.textHeader}>
                Top tags:
            </Text>
            <View style={{flex: 1}}>
                <ScrollView scrollEnabled={true}>
                    <View style={styles.tags}>
                        <Tag name="Renji" />
                        <Tag name="Abarai" />
                        <Tag name="R" />
                        <Tag name="Ranctor" />
                        <Tag name="R" />
                        <Tag name="Ranctor" />
                        <Tag name="R" />
                        <Tag name="Ranctor" />
                        <Tag name="R" />
                        <Tag name="Ranctor" />
                        <Tag name="Rosham_HHHHHHH" />
                        <Tag name="R" />
                        <Tag name="Ranctor" />
                        <Tag name="R" />
                        <Tag name="Ranctor" />
                        <Tag name="R" />
                        <Tag name="Ranctor" />
                        <Tag name="R" />
                        <Tag name="Ranctor" />
                        <Tag name="R" />
                        <Tag name="Ranctor" />
                        <Tag name="R" />
                        <Tag name="Ranctor" />
                        <Tag name="R" />
                        <Tag name="Ranctor" />
                        <Tag name="R" />
                        <Tag name="Ranctor" />
                        <Tag name="R" />
                        <Tag name="Ranctor" />
                        <Tag name="Rosham_HHHHHHH" />
                        <Tag name="R" />
                        <Tag name="Ranctor" />
                        <Tag name="R" />
                        <Tag name="Ranctor" />
                        <Tag name="R" />
                        <Tag name="Ranctor" />
                        <Tag name="Ranctor" />
                        <AddTag />
                    </View>
                </ScrollView>
            </View>
            <ComponentBreak />
            <View>
                <Text style={styles.textHeader}>
                    Recent images:
                </Text>
                <ThumbnailList />
                <Text style={styles.link}>
                    View all images...
                </Text>
            </View>
            <ComponentBreak />
            <View>
                <Text style={styles.textHeader}>
                    Backups of images:
                </Text>
                <ThumbnailList />
                <Text style={styles.link}>
                    View all images...
                </Text>
            </View>
            <ComponentBreak />
            <View>
                <Text style={styles.textHeader}>
                    Settings:
                </Text>
                <List>
                    <ListItem button>
                        <ListItemText>
                            Dark Mode
                        </ListItemText>
                        <ListItemSecondaryAction>
                        <Switch color="default"/>
                        </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem button>
                        <ListItemText>
                            Clear all backups
                        </ListItemText>
                    </ListItem>
                    <ListItem button>
                        <ListItemText>
                            Switch account/Log out
                        </ListItemText>
                    </ListItem>
                </List>
            </View>
        </View>
    )
}
