import * as React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';


const Item = ({route, navigation}:any) => {
    const {name, price, photo} = route;
    const [itemInfo, setItemInfo] = React.useState({
        name: name,
        price: price,
        photo: photo
    })
    return(
        <View style={styles.container}>
            <Image
                source={require('../dependecies/like-icon.jpg')}
                style={{
                    alignSelf: 'flex-end',
                    height: 20,
                    width: 20,
                    marginRight: 25,
                    marginTop: 5,
                }}
            />
            <Image
                source={itemInfo.photo}
                style={{
                    height: 155,
                    width: 110
                }}
            />
            <View style={{flex: 1, flexDirection: 'row'}}>
                <Text style={{fontWeight: 'bold'}}>{itemInfo.name.length > 15 ? itemInfo.name.substring(0, 13) + '...' : itemInfo.name}   </Text>
                <Text style={{color: 'red'}}>£{itemInfo.price}</Text>
            </View>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', gap: 10, flexDirection: 'row', backgroundColor: 'red', width: 140, height: 34, borderRadius: 50, marginBottom: 10}}>
                <Image
                    source={require('../dependecies/bag.png')}
                    style={{
                        height: 25,
                        width: 25,
                    }}
                />
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => {
                        navigation.navigate('Details', {
                            name: JSON.stringify(itemInfo.name),
                            price: JSON.stringify(itemInfo.price),
                            photo: JSON.stringify(itemInfo.photo)})
                    }}
                >
                    <Text style={{textAlign: 'center', color: '#ffffff',}}>Add to cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        gap: 5,
        marginBottom: 15,
        borderRadius: 10,
        marginLeft: 5,
        position: 'relative',
        left: -2.8,
    }
})

export default Item;
