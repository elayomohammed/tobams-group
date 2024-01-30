import * as React from 'react';
import * as Native from 'react-native';
import CartCard from './Cartcard';
import { items } from '../dependecies/saleItems';

const CartScreen = ({navigation, route}: any) => {
    const {name, price, photo} = route;
    const [totalCount, updateTotalCount] = React.useState(0);
    const [totalPrice, updateTotalPrice] = React.useState(0);
    return(
        <Native.View style={styles.container}>
            <CartCard route={items[0]} />
            <CartCard route={items[0]} />
            <CartCard route={items[0]} />
            <Native.View style={{flex: 0.2}}>
                <Native.View style={{flex: 0, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 7, marginTop: 70,}}>
                    <Native.Text style={{fontWeight: 'bold',marginLeft: 55,}}>Total <Native.Text>({totalCount} items)</Native.Text></Native.Text>
                    <Native.Text style={{fontWeight: 'bold', marginRight: 65,}}>£{totalPrice}</Native.Text>
                </Native.View>
                <Native.TouchableOpacity style={styles.checkout}>
                    <Native.Text style={{textAlign: 'center', color: '#ffffff'}}>Checkout - <Native.Text>£{totalPrice}</Native.Text></Native.Text>
                </Native.TouchableOpacity>
                </Native.View>
        </Native.View>
    )
}


const styles = Native.StyleSheet.create({
    container: {
        marginLeft: 10,
        marginRight: 10,
        paddingTop: 5,
        backgroundColor: '#ffffff',
        flex: 1,
    },
    checkout: {
        width: 350,
        height: 40,
        backgroundColor: 'red',
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 50,
        flex: 0,
        alignSelf: 'center',
        justifyContent: 'center',
    }
})

export default CartScreen;
