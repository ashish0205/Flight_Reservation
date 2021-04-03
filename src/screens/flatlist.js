import React, { useContext } from "react";
import { Text, StyleSheet, View, TextInput, FlatList } from "react-native";
import BlogContext from "../context/blogContext";

const ListScreen = () => {
  const { data, addBlogPost } = useContext(BlogContext);
  console.log("-------------------------------------");
  const [Array] = data;
  console.log(Array);

  return (
    <FlatList
      data={Array}
      keyExtractor={(blogposts) => blogposts.Aiata}
      renderItem={({ item }) => {
        return <Text>{item.Departure}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({});
export default ListScreen;
