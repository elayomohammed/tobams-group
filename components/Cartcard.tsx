import * as React from 'react';
import * as Native from 'react-native';

const deleteBTN = require('../dependecies/delete.png');

const CartCard = ({route}:any) => {
    const {name, price, photo} = route;
    const [count, updateCoun] = React.useState(1);

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
        <Native.View style={styles.container}>
            <Native.Image
                source={photo}
                style={{
                    height: 145,
                    marginTop: 10,
                    marginLeft: -20,
                }}
            />
            <Native.View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between', marginLeft: -60, marginTop: 15, marginBottom: 10,}}>
                <Native.Text style={{fontWeight: 'bold', width: 100,}}>{name.length > 15 ? name.substring(0, 13) + '...' : name}   </Native.Text>
                <Native.Text style={{color: 'red'}}>£{price}</Native.Text>
                <Native.TouchableOpacity><Native.Image source={deleteBTN}/></Native.TouchableOpacity>
            </Native.View>
            <Native.View style={{flex:1, flexDirection:'column', justifyContent: 'space-between', marginRight: -60, marginTop: 15, marginBottom: 10,}}>
                <Native.TouchableOpacity onPress={updateNegativeCount} activeOpacity={0.7}>
                    <Native.Image source={require('../dependecies/remove.png')} style={styles.countControls} />
                </Native.TouchableOpacity>
                <Native.Text style={{fontWeight: 'bold', fontSize: 20, marginLeft: 5,}}>{count}</Native.Text>
                <Native.TouchableOpacity onPress={updatePositiveCount} activeOpacity={0.7}>
                    <Native.Image source={require('../dependecies/plus.jpg')} style={styles.countControls} />
                </Native.TouchableOpacity>
            </Native.View>
        </Native.View>
    )
}

const styles = Native.StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        gap: 50,
        backgroundColor: '#FFFFFF',
        marginBottom: 20,
        maxHeight: 150,
    },
    countControls: {
        height: 25,
        width: 25,
    },
})

export default CartCard;
