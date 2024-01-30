import * as React from 'react';
import * as Native from 'react-native';

const SearchBox = () => {
    return(
        <Native.View style={{flex: 1, flexDirection: 'row'}}>
            <Native.Image
                source={require('../dependecies/search-icon.jpg')}
                style={{
                    height: 20,
                    width: 20,
                    zIndex: 100,
                    position: 'relative',
                    top: 16,
                    left: 70,
                }}
            />
            <Native.TextInput
                placeholder='Search'
                style={{
                    borderWidth: 0.5,
                    borderColor: 'black',
                    borderRadius: 5,
                    paddingLeft: 90,
                    width: '90%',
                    height: 35,
                    marginTop: 10,
                    textAlign: 'justify',
                }}
            />
        </Native.View>
    )
}

export default SearchBox;
