import React, {useState} from 'react';
import { Text, TextInput, Button, View, StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
  textInput: {
    backgroundColor: 'white',
    margin: 8,
    textAlign: 'center',
    width: 300,
    height: 30
  },
  espacamento: {
    height: 10
  },
});

const YourApp = () => {
const [gasolina, setGasolina] = useState('');
const [eficienciaGasolina, setEficienciaGasolina] = useState('');
const [alcool, setAlcool] = useState('');
const [eficienciaAlcool, setEficienciaAlcool] = useState('');
const [resultado, setResultado] = useState('');
const [corGasolina, setCorGasolina] = useState('white');
const [corEficienciaGasolina, setCorEficienciaGasolina] = useState('white');
const [corAlcool, setCorAlcool] = useState('white');
const [corEficienciaAlcool, setCorEficienciaAlcool] = useState('white');

  const calcularComparativo = () =>{
    const precoGas = parseFloat(gasolina);
    const eficienciaGas = parseFloat(eficienciaGasolina);
    const precoAlc = parseFloat(alcool);
    const eficienciaAlc = parseFloat(eficienciaAlcool);

    if (isNaN(precoGas) || isNaN(eficienciaGasolina) || isNaN(precoAlc) || isNaN(eficienciaAlcool))
    {
      setResultado('Insira números válidos');
      return;
    }

    const custoKmGasolina = precoGas / eficienciaGas;
    const custoKmAlcool = precoAlc / eficienciaAlc;

    if (custoKmGasolina < custoKmAlcool)
    {
      setResultado('Vai de gasosa, meu consagrado');
      setCorGasolina('green');
      setCorEficienciaGasolina('green');
      setCorAlcool('red');
      setCorEficienciaAlcool('red');
    }
    else if (custoKmAlcool < custoKmGasolina)
    {
      setResultado('Bora de 51, meu amigo');
      setCorGasolina('red');
      setCorEficienciaGasolina('red');
      setCorAlcool('green');
      setCorEficienciaAlcool('green');
    }
    else
    {
      setResultado('Bota meio a meio que é sucesso');
      setCorGasolina('yellow');
      setCorEficienciaGasolina('yellow');
      setCorAlcool('yellow');
      setCorEficienciaAlcool('yellow');
    }
  };

  const limparCampos = () =>{
    setGasolina('');
    setEficienciaGasolina('');
    setAlcool('');
    setEficienciaAlcool('');
    setCorGasolina('white');
    setCorEficienciaGasolina('white');
    setCorAlcool('white');
    setCorEficienciaAlcool('white');
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'cyan', 
      }}>
      <Text style={{color: 'black'}}> Cálculo de Combustíveis </Text>
      
      <TextInput 
        placeholder = "Digite o preço da gasolina (R$ por litro)" 
        style={[estilo.textInput, {backgroundColor: corGasolina}]}
        keyboardType="numeric"
        value={gasolina}
        onChangeText={setGasolina}
        />

        <TextInput 
        placeholder = "Eficiência do veículo à gasolina (Km por litro)" 
        style={[estilo.textInput, {backgroundColor: corEficienciaGasolina}]}
        keyboardType="numeric"
        value={eficienciaGasolina}
        onChangeText={setEficienciaGasolina}  
        />

        <TextInput 
        placeholder = "Digite o preço do álcool (R$ por litro)" 
        style={[estilo.textInput, {backgroundColor: corAlcool}]}
        keyboardType="numeric"
        value={alcool}
        onChangeText={setAlcool}
        />

        <TextInput 
        placeholder = "Eficiência do veículo à álcool (Km por litro)" 
        style={[estilo.textInput, {backgroundColor: corEficienciaAlcool}]}
        keyboardType="numeric"
        value={eficienciaAlcool}
        onChangeText={setEficienciaAlcool}  
        />
        
        <Button title = "Calcular" onPress={calcularComparativo} />    
        <View style = {estilo.espacamento} />
        <Button title = "Limpar" onPress={limparCampos} />

        {resultado}

    </View>
  );
};

export default YourApp;