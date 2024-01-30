import * as React from 'react';
import * as Native from 'react-native';

const ItemInfo = ({detail}:any) => {
    return(
        <Native.View>
            <Native.View
                style={{
                    height: 1,
                    backgroundColor: 'black',
                    marginLeft: 10,
                    marginRight: 10,
                }}
            />
            <Native.View style={styles.detail}>
                <Native.Text>{detail}</Native.Text>
                <Native.Image
                    source={require('../dependecies/drop-icon.jpg')}
                    style={{height: 16, width: 15}}
                />
            </Native.View>
        </Native.View>
    )
}

const styles = Native.StyleSheet.create({
    detail: {
        flex:1,
        flexDirection:'row',
        justifyContent: 'space-between',
        marginLeft: 10,
        marginRight: 10,
        height: 35,
        paddingTop: 7,
    }
})

export default ItemInfo;
