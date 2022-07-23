{/* Imports React components */ }
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, Button, Pressable, TextInput, Image } from 'react-native';

const UselessTextInput = ({ navigation }) => {
  const [text, onChangeText] = React.useState("");
  const [numbaZero, onChangeNumber, numbaOne, numbaTwo, numbaThree, numbaFour, numbaFive, numbaSix, transText] = React.useState(null);

  // const goToDetails = () => {
  //   navigation.navigate('AnimalDetails')
  // }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>

          <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
            <Image source={require('../assets/Vector.png')} style={{ alignSelf: 'center', marginTop: 15 }} />
          </Pressable>
          <Image source={require('../assets/Safehouse_logo.png')} style={styles.safehouseLogo} />
          <Text style={styles.header}>Extend this animal's life with a donation</Text>
          <Text style={styles.safehouseText}></Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={numbaOne}
            placeholder="$XX.XX"
            keyboardType="default"
          />
          <Text style={styles.xText}>$XX.XX will go to Safehouse</Text>
          <Text style={styles.transactionText}>Transaction Method</Text>
          <View style={styles.transRow}>
            <TextInput
              style={styles.transBoxStyle}
              onChangeText={onChangeText}
              value={transText}
            />
            <TextInput
              style={styles.transBoxStyle}
              onChangeText={onChangeText}
              value={transText}
            />
            <TextInput
              style={styles.transBoxStyle}
              onChangeText={onChangeText}
              value={transText}
            />
          </View>
          <TextInput
            style={styles.inputCardInfo}
            onChangeText={onChangeNumber}
            value={numbaTwo}
            placeholder="Card Number"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.inputCardInfo}
            onChangeText={onChangeNumber}
            value={numbaThree}
            placeholder="Cardholder's Name"
            keyboardType="default"
          />
          <View style={styles.cvvExpiryInfo}>
            <TextInput
              style={styles.columnCard}
              onChangeText={onChangeNumber}
              value={numbaFour}
              placeholder="CVV/CVC"
              keyboardType="numeric"
            />
            <TextInput
              style={styles.columnCard}
              onChangeText={onChangeNumber}
              value={numbaFive}
              placeholder="Expiration Date"
              keyboardType="default"
            />
          </View>
          <TextInput
            style={styles.inputCardInfo}
            onChangeText={onChangeNumber}
            value={numbaSix}
            placeholder="Zip Code"
            keyboardType="numeric"
          />
          <Pressable style={styles.donateButton}>
            <Text onPress={() => navigation.navigate("SupportConfirm")} style={styles.donateText}>Confirm Support</Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  safehouseLogo: {
    alignSelf: 'center',
    marginBottom: 50,
    marginTop: 30,
  },
  backButton: {
    backgroundColor: 'black',
    height: 50,
    width: 50,
    borderRadius: 100,
    position: 'relative',
  },
  header: {
    alignSelf: 'center',
    marginBottom: 10,
    fontSize: 20,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  input: {
    height: 40,
    width: 325,
    alignSelf: 'center',
    margin: 12,
    marginBottom: 10,
    borderWidth: 1,
    padding: 10,
    borderRightColor: 'white',
    borderTopColor: 'white',
    borderLeftColor: 'white',
  },

  xText: {
    marginBottom: 30,
    marginLeft: 10,
  },

  transBoxStyle: {
    backgroundColor: '#D9D9D9',
    height: 30,
    width: 75,
    borderRadius: 5,
  },

  inputCardInfo: {
    height: 40,
    width: 325,
    alignSelf: 'center',
    margin: 12,
    marginBottom: 3,
    borderWidth: 1,
    padding: 10,
    borderRightColor: 'white',
    borderTopColor: 'white',
    borderLeftColor: 'white',
  },
  cvvExpiryInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  transactionText: {
    marginBottom: 20,
    fontSize: 17,
    fontWeight: '200',
  },
  transRow: {
    flex: 1,
    // If there's any errors it may have to do with flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  columnCard: {
    height: 40,
    flex: 1,
    alignSelf: 'center',
    margin: 12,
    marginBottom: 3,
    borderWidth: 1,
    padding: 10,
    borderRightColor: 'white',
    borderTopColor: 'white',
    borderLeftColor: 'white',
  },
  safehouseText: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: '400',
    margin: 0,
  },
  donateButton: {
    backgroundColor: "#62BA75",
    width: 190,
    height: 40,
    alignSelf: 'center',
    borderRadius: 5,
    marginTop: 55,
    marginBottom: 100,
  },
  donateText: {
    color: 'white',
    alignSelf: 'center',
    marginTop: 10,
  },
});

export default UselessTextInput;