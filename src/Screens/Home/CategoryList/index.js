import React from "react";

import { View, Text, ListView, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/dist/Feather";

const styles = StyleSheet.create({
  categoryListContainer: {
    paddingLeft: 5,
    paddingRight: 5
  },
  categoryRowContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 5,
    paddingBottom: 5
  },
  categoryIcon: {
    marginRight: 5,
    marginLeft: 5
  }
});

const CategoryList = ({ categories }) => {
  let { categoryListContainer, categoryRowContainer, categoryIcon } = styles;
  const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  const dataSource = ds.cloneWithRows(categories);

  const renderRow = category => (
    <View style={categoryRowContainer}>
      <Icon
        name={category.icon}
        style={categoryIcon}
        size={18}
        color={category.color}
      />
      <Text>{category.name}</Text>
    </View>
  );
  return (
    <ListView
      style={categoryListContainer}
      dataSource={dataSource}
      renderRow={renderRow}
    />
  );
};

export default CategoryList;
