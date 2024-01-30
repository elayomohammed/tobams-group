import * as React from 'react';
import * as Native from 'react-native';
import  SearchBox from './SeacrhBox';
import Item from './Item';
import { items } from '../dependecies/saleItems';
import ItemInfo from './ItemInfo';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const MenuScreen = ({navigation, route}:any) => {
    return(
        <Native.ScrollView>
            <Native.View>
                <SearchBox />
            </Native.View>
            <Native.View style={styles.itemsContainer}>
                <Native.FlatList
                    data={items}
                    renderItem={({item}) => {
                        return <Item route={item} navigation={navigation} />
                    }}
                    keyExtractor={(item) => {
                        return item.price + Math.random() * 13;
                    }}
                    numColumns = {2}
                    style={styles.itemContainer}
                />
            </Native.View>
        </Native.ScrollView>
    )
}

// Details page screen
const DetailsPageScreen = ({route, navigation}:any) => {
    const [count, updateCoun] = React.useState(1);
    const {name, price, photo} = route.params;
    const [itemInfo, setItemInfo] = React.useState({
        name: name,
        price: price,
        photo: photo
    })

    const updateNegativeCount = () => {
        if(count > 1){
            return updateCoun(count - 1);
        }
        return;
    }

    const updatePositiveCount = () => {
        return updateCoun(count + 1);
    }

    return(
        <Native.ScrollView style={styles.container}>
            <Native.View style={styles.setMargin}>
                <Native.View>
                    <Native.Image
                        source={itemInfo.photo}
                        style={{
                            flex: 1,
                            alignSelf: 'center',
                            justifyContent: 'center',
                        }}
                    />
                    <Native.View style={{flex:1, flexDirection:'row', justifyContent: 'space-between', alignSelf: 'center', width: 70,}}>
                        <Native.View style={styles.indicator} />
                        <Native.View style={styles.indicator1} />
                        <Native.View style={styles.indicator1} />
                    </Native.View>
                </Native.View>
                <Native.View style={{marginTop: 20,}}>
                    <Native.View style={{flex:1, flexDirection:'row',}}>
                        <Native.Text style={{fontWeight: 'bold'}}>{itemInfo.name}</Native.Text>
                        <Native.Text style={{color: 'red'}}>   £{itemInfo.price}</Native.Text>
                    </Native.View>
                    <Native.Text>
                        Rare Eat Puff Puff Mix can be made into a 
                        deep-fried dough. They are made from yeast 
                        dough, shaped into balls and deep-fried until 
                        golden brown. It has a doughnut-like texture but 
                        slightly o....<Native.TouchableOpacity><Native.Text style={{color:'red'}}>Read more</Native.Text></Native.TouchableOpacity>
                    </Native.Text>
                </Native.View>
            </Native.View>
            <Native.View style={{marginTop: 20,}}>
                <ItemInfo detail={'Ingredients'} />
                <ItemInfo detail={'Nutritional Information'} />
                <ItemInfo detail={'How to Prepare'} />
                <ItemInfo detail={'Dietary Information'} />
                <ItemInfo detail={'Storage Information'} />
                <ItemInfo detail={'Extra'} />
                <Native.View
                    style={{
                        height: 1,
                        width: '100%',
                        backgroundColor: 'black',
                        marginLeft: 10,
                        marginRight: 10,
                    }}
                />
            </Native.View>
            <Native.View>
                <Native.View style={{flex:1, flexDirection:'row', justifyContent: 'space-between', marginLeft: 20, marginRight: 20, marginTop: 30, marginBottom: 30,}}>
                    <Native.TouchableOpacity onPress={updateNegativeCount} activeOpacity={0.7}>
                        <Native.Image source={require('../dependecies/remove.png')} style={styles.countControls} />
                    </Native.TouchableOpacity>
                    <Native.Text style={{fontWeight: 'bold', fontSize: 20}}>{count}</Native.Text>
                    <Native.TouchableOpacity onPress={updatePositiveCount} activeOpacity={0.7}>
                        <Native.Image source={require('../dependecies/plus.jpg')} style={styles.countControls} />
                    </Native.TouchableOpacity>
                </Native.View>
                <Native.View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginBottom:20,}}>
                    <Native.TouchableOpacity style={styles.addTocartButton}>
                        <Native.Text style={{color: '#ffffff'}}>Add to cart</Native.Text>
                    </Native.TouchableOpacity>
                    <Native.TouchableOpacity style={styles.subscribeButton}>
                        <Native.Text>Subscribe to a Plan</Native.Text>
                    </Native.TouchableOpacity>
                </Native.View>
            </Native.View>
        </Native.ScrollView>
    )
}

const Stack = createNativeStackNavigator();
const Menu = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='menu' component={MenuScreen} />
            <Stack.Screen name='Details' component={DetailsPageScreen} />
        </Stack.Navigator>
    )
}

const styles = Native.StyleSheet.create({
    itemsContainer: {
        flex: 1,
        marginLeft: '4%',
        marginRight: '4%',
        marginBottom: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F1F3F2'
    },
    itemContainer: {
        width: '95%',
        marginTop: 20,
    },
    container: {
        backgroundColor: '#FFFFFF',
    },
    indicator: {
        height: 10,
        width: 10,
        borderRadius: 100,
        backgroundColor: 'red',
    },
    indicator1: {
        height: 10,
        width: 10,
        borderRadius: 100,
        backgroundColor: '#D9D9D9',
    },
    countControls: {
        height: 25,
        width: 25,
    },
    addTocartButton: {
        width: '70%',
        height: 40,
        backgroundColor: 'red',
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 50,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    subscribeButton: {
        width: '70%',
        height: 40,
        marginTop: 10,
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 50,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    setMargin: {
        marginLeft: 10,
        marginRight: 10,
    }
})

export default Menu;
