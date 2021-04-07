import React, { useContext, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Picker,
  FlatList,
  TouchableOpacity,
} from "react-native";
import BlogContext from "../context/blogContext";

const ListScreen = () => {
  const { data, addBlogPost } = useContext(BlogContext);
  const [selectedValue, setSelectedValue] = useState("");
  console.log("-------------------------------------");
  const [Array] = data;
  console.log(Array);

  return (
    <FlatList
      data={Array}
      keyExtractor={(blogposts) => blogposts.Aiata}
      ItemSeparatorComponent={() => {
        return (
          <View
            style={{
              height: 3,
              backgroundColor: "green",
              margin: 10,
            }}
          />
        );
      }}
      renderItem={({ item }) => {
        return (
          <View
            style={{
              marginLeft: 15,
              marginRight: 15,
              marginBottom: 5,
              marginTop: 5,
            }}
          >
            <View style={{ alignItems: "left", flex: 1, flexDirection: "row" }}>
              <Text style={{ fontWeight: "bold" }}>{item.Departure}</Text>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 15,
                  marginRight: 5,
                  marginLeft: 5,
                }}
              >
                &#8594;
              </Text>
              <Text style={{ fontWeight: "bold" }}>{item.Arrival}</Text>
            </View>
            <View>
              <Text style={{ fontSize: 15 }}>{item.Airline_name}</Text>
            </View>
            <View>
              <Picker
                iosHeader="Select Class"
                style={{ width: undefined }}
                selectedValue={selectedValue}
                style={{ height: 30, width: 100 }}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedValue(itemValue)
                }
              >
                <Picker.Item label="Bussiness" value="Bussiness" />
                <Picker.Item label="economy" value="economy" />
              </Picker>
            </View>
            <TouchableOpacity
              style={{
                height: 50,
                width: 50,
                justifyContent: "right",
                alignItems: "right",
              }}
            >
              <Text style={{ color: "green", textAlign: "right" }}>
                Add to Wishlist
              </Text>
            </TouchableOpacity>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({});
export default ListScreen;
