import { useLayoutEffect } from "react";
import { View, FlatList } from "react-native";
import { VACATION, STATES,  } from "../data/dummy-data";


function VacationOverviewScreen(props) {
    const stateId = props.route.params.stateId;

    useLayoutEffect(() => {
        const state = STATES.find((state) => state.id === stateId);
        props.navigation.setOptions({ title: state ? state.name : null});
    }, [stateId, props.navigation]);
    

    const displayedCampgrounds = VACATION.filter((campgroundItem) => {
        return campgroundItem.stateId === stateId;
    });


    function renderCampgroundItem(itemData){
        const campgroundItemProps = {
            name: itemData.item.name,
            imageUrl: itemData.item.imageUrl,
            numSites: itemData.item.numSites,
            foundedYear: itemData.item.foundedYear,
            rating: itemData.item.rating,
            listIndex: itemData.index

        }
        return <CampgroundItem {...campgroundItemProps} />
    }

    return (
        <View>
            <FlatList
            data={displayedCampgrounds}
            keyExtractor={(item) => item.id}
            renderItem={renderCampgroundItem}
            />
        </View>
    );
}

export default CampgroundsOverviewScreen;