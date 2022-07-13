{/* Imports stuff from React and React Native... also imports PetCard info */}
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { useState } from 'react';
import { PetCard } from './PetCard';

{/* Sets constant 'animals' and a new function 'setAnimals' equal to useState */}
{/* After the constants are set, there is hardcoded information about each of the animals*/}
export default function AnimalList({ navigation }) {
    const [animals, setAnimals] = useState([
        {
            name: 'Hydra',
            time: 36000,
            image: 'https://www.princeton.edu/sites/default/files/styles/half_2x/public/images/2022/02/KOA_Nassau_2697x1517.jpg',
            breed: 'Golden Retriever',
            age: '2 year and 2 months',
            sex: 'Male',
            weight: '65 lbs',
            shelter: 'Domestic Pet Rescue',
            desc: 'A stout and strong dog, he loves to have fun, and he likes playing with squeaky toys, he is an energetic young boy',
            notes: 'N/A',
        },
        {
            name: 'Fenrir',
            time: 46800,
            image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2020%2F10%2F01%2Fblack-dog-489205728-2000.jpg',
            breed: 'Flat-Coated Retriever',
            age: '5 years',
            sex: 'Female',
            weight: '70 lbs',
            shelter: 'Big Dog Rescue Network.',
            desc: 'She may be shy at first, but once she gets to know you more, she becomes very loyal to you, and will sit on your lap, she also likes to go on nice walks and enjoys sweet, tasty treats',
            notes: 'N/A',
        },
        {
            name: 'Lucifer',
            time: 52200,
            image: 'https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            breed: 'Munchkin Cat',
            age: '1 year',
            sex: 'Male',
            weight: '5 lbs',
            shelter: 'Beloved Pet Sanctuary',
            desc: 'This cat is hard of hearing so he might struggle to listen to you, he requires lots of care, he is such a sweetheart and loves laying on laps, and napping',
            notes: 'Lucifer is deaf, are intolerant of light, and have reduced vision in low light conditions',
        },
        {
            name: 'Chronos',
            time: 63000,
            image: 'https://image.petmd.com/files/2022-06/pug-dog-breed.jpg',
            breed: 'Pug',
            age: '3 years and 6 months',
            sex: 'Female',
            weight: '22 lbs',
            shelter: 'Getting Wild Rescue',
            desc: 'It is fun-loving and playful, loves to go on walks and may play rough, but is a sweetheart.',
            notes: 'Chronos has a condition where raw spots appear on her body, use specialized shampoo (such as: KetoChlor Shampoo and Malaseb Shampoo) when washing her',
        },
        {
            name: 'Bob',
            time: 68400,
            image: 'https://www.mercurynews.com/wp-content/uploads/2022/04/EBT-L-CATSHOW-0403-11.jpg',
            breed: 'Persian Cat',
            age: '3 years 10 months',
            sex: 'Male',
            weight: '12 lbs',
            shelter: 'Tiny Paws Foundation.',
            desc: 'Is a cat who loves to chill at home, and will generally love the owner, he may be shy around other people but it takes time for him to get used to other people',
            notes: 'N/A',
        },
        {
            name: 'Quetzalcoatl',
            time: 79200,
            image: 'https://i.ytimg.com/vi/UCBlg9jFaOM/maxresdefault.jpg',
            breed: 'Chihuahua',
            age: '1 year',
            sex: 'Female',
            weight: '4.5 lbs',
            shelter: 'Animal Haven',
            desc: 'A funny chihuahua and a sweet girl, she loves running so much, and may be hyperactive, but she is just so full of life!',
            notes: 'Because she has allergies from certain chemicals in dog food (such as Melamine, MSG, Food dyes, corn syrup) a symptom of this allergy would be new hot spots appearing on her body... to learn more contact your local veterinarian',
        },
        {
            name: 'Chupacabra',
            time: 84600,
            image: 'https://petkeen.com/wp-content/uploads/2021/12/Xoloitzquintle-dog_Vladimirkarp-Shutterstock-760x507.webp',
            breed: 'Xoloitzcuintli',
            age: '4 years 10 months',
            sex: 'Male',
            weight: '32 lbs',
            shelter: 'Happy Dogs Animal Shelter',
            desc: 'A sweet and loyal boy, he loves playing sports, he is very excited to meet his new owner!',
            notes: 'N/A',
        },
        {
            name: 'Leviathan',
            time: 95400,
            image: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/British_blue_2009_%28cropped%29.jpg',
            breed: 'British Shorthair Cat',
            age: '5 years 11 months',
            sex: 'Female',
            weight: '17 lbs',
            shelter: 'Lucky Whiskers',
            desc: 'A chill cat, who loves walking all over the place, and enjoys eating',
            notes: 'N/A',
        },
        {
            name: 'Chimera',
            time: 100800,
            image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F12%2F02%2Fbalinese-sitting-in-a-tree-718322914-2000.jpg',
            breed: 'Siamese/Balinese Cat',
            age: '2 years 7 months',
            sex: 'Male',
            weight: '12 lbs',
            shelter: 'Homeless Kitty Network',
            desc: 'Chimera loves the outdoors and nature, and also loves being carried everywhere it goes, he is so cute',
            notes: 'This cat has a condition commonly referred to as: Addisons disease which requires steroids for treatment, to learn more contact your local veterinarian',
        },
        {
            name: 'Pablo',
            time: 111600,
            image: 'https://cf.ltkcdn.net/dogs/images/orig/245944-2121x1414-Pitbull.jpg',
            breed: 'Pit Bull',
            age: '4 years 1 month',
            sex: 'Female',
            weight: '50 lbs',
            shelter: 'Pittie Love Rescue',
            desc: 'A cute little guy who is excited to meet everyone new he sees, he is very friendly with other dogs and children',
            notes: 'N/A',
        },
    ])
{/* This constant: 'goToDetails' navigates to AnimalDetails*/}
    const goToDetails = (animal) => {
        console.log(animal)
         navigation.navigate('AnimalDetails', animal);
    }
{/* The 'PetCard' outside of the 'Details' button... it displays the animals' names, times, images */}
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    {animals.map((animal) => (
                        <PetCard key={animal.name} goToDetails={() => { goToDetails(animal) }} name={animal.name} time={animal.time} image={animal.image} />
                    ))}


                </ScrollView>
            </SafeAreaView>
        </View>

    );
}

{/* Style of the background behind PetCards */}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});