import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  Pressable,
} from "react-native";
import { colors } from "../utils/variables.js";
import AddToBasketButton from "../components/AddToBasketButton";
import RemoveFavouriteButton from "../components/RemoveFavouriteButton";
import { useTheme } from "../contexts/themeContext";

const FavouritesPage = ({
  navigation,
  basket,
  setBasket,
  favourites,
  setFavourites,
}) => {
  const { theme } = useTheme();

  const handleNavigateToBasketPage = () => {
    navigation.navigate("Basket");
  };

  const renderItem = ({ item }) => {
    return (
      <View style={[styles.item, { backgroundColor: theme.cardBackground, borderColor: theme.border }]}>
        <View style={styles.bottom}>
          <View style={styles.left}>
            <View style={styles.description}>
              <Text numberOfLines={3} ellipsizeMode="tail" style={[styles.title, { color: theme.text }]}>
                {item.title}
              </Text>
              <View style={styles.category}>
                <Text style={[styles.categoryValue, { color: theme.textSecondary }]}>
                  {item.category?.toUpperCase()}
                </Text>
              </View>
            </View>
            <View style={styles.price}>
              <Text style={[styles.priceValue, { color: theme.primary }]}>{item.price}</Text>
            </View>
            <View style={styles.buttonArea}>
              <View style={styles.buttonAddBasket}>
                <AddToBasketButton
                  basket={basket}
                  setBasket={setBasket}
                  clothes={item}
                />
              </View>
              <RemoveFavouriteButton
                style={styles.buttonRemove}
                setFavourites={setFavourites}
                favouriteId={item.favourite_id}
              />
            </View>
          </View>
          <View style={styles.right}>
            <Image
              style={styles.productImage}
              source={{
                uri: `https://${item.item_img_url}`,
              }}
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <FlatList
        data={favourites}
        renderItem={renderItem}
        keyExtractor={(item) => item.clothes_id.toString()}
      />
      <View>
        <Pressable
          style={[styles.viewBasketButton, { backgroundColor: theme.primary }]}
          onPress={handleNavigateToBasketPage}
        >
          <Text style={styles.viewBasketTitle}>View Basket</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    paddingTop: 16,
    justifyContent: "center",
  },
  item: {
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 8,
    borderWidth: 1,
    borderRadius: 20,
  },
  top: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  bottom: {
    flexDirection: "row",
  },
  title: {
    fontSize: 18,
    paddingRight: 5,
    fontWeight: "bold",
  },
  productImage: {
    resizeMode: "cover",
    height: 180,
    marginBottom: 10,
    marginLeft: 10,
    borderRadius: 10,
  },
  viewBasketButton: {
    alignItems: "center",
    borderRadius: 8,
    elevation: 3,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 5,
    marginBottom: 5,
    padding: 12,
  },
  viewBasketTitle: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: colors.white,
  },
  button: {
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderRadius: 8,
    elevation: 6,
    backgroundColor: colors.green,
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: colors.white,
  },
  left: {
    flex: 3,
    justifyContent: "space-around",
  },
  right: {
    flex: 2,
    justifyContent: "space-around",
  },
  price: {
    flexDirection: "row",
  },
  priceTitle: {
    fontSize: 16,
  },
  priceValue: {
    fontSize: 16,
    fontWeight: "bold",
  },
  category: {
    marginTop: 6,
    flexDirection: "row",
  },
  categoryTitle: {
    fontSize: 16,
  },
  categoryValue: {
    fontSize: 16,
  },
  buttonArea: {
    marginTop: 10,
    flexDirection: "row",
  },
  buttonRemove: {
    marginLeft: 20,
  },
});

export default FavouritesPage;