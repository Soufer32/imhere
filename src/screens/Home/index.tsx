import { useState } from 'react';
import {
    FlatList,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Alert
} from 'react-native';
import { Participant } from '../../components/Participant';
import { styles } from './styles';

export function Home() {
    const [participants, setParticipants] = useState<string[]>([])    
    const [participantName, setParticipantName] = useState('')
    
    function handleParticipantAdd() {
        if(participants.includes(participantName)){
            return Alert.alert('Participante Existe','Já existe um participante na lista com esse nome.')
        }

        setParticipants(prevState => [...prevState, participantName])
        setParticipantName('')
        
    }

    function handleParticipantRemove(name: string) {

        Alert.alert("Remover", `Remover o participante ${name}?`,[
            {
                text: 'sim',
                onPress: () => setParticipants(prevState => prevState.filter(Participant => Participant !== name))
            },
            {
                
                text: 'Não',
                style: 'cancel'
            }
        ])
        
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>Nome do Evento</Text>
            <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor="#6b6b6b"
                    onChangeText={setParticipantName}
                    value={participantName}
                />
                <TouchableOpacity style={styles.btn} onPress={handleParticipantAdd}>
                    <Text style={styles.btnText}>+</Text>
                </TouchableOpacity>

            </View>
            <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participant
                        key={item}
                        name={item}
                        onRemove={() => handleParticipantRemove(item)}
                    />
                )}
                showsHorizontalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
                    </Text>
                )}    
            />
        </View>
    )
}