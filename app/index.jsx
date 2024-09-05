import { useState } from 'react'
import { View, Text, Stylesheet, Picker } from 'react-native'
import styles from './styles.jsx'

const Pokemon = () => {
    const [pokemon, setPokemon] = useState('')

    const pokemonList = [
        {name: 'Charizard', id: 1},
        {name: 'Blastoise', id: 2},
        {name: 'Venossaur', id: 3}
    ]

    return (
        <View>
            <Text>Selecione</Text>
            <Picker
                selectedValue={pokemon}
                onValueChange={setPokemon}
            >
                {pokemonList.map((item, index) => {
                    <Picker.Item key={index} label={item.name} value={item.url} />
                })}
            </Picker>
        </View>
    )
}

export default Pokemon