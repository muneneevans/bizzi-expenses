import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

//import redux actions
import { getCategories } from "../../Store/Categories/actions";
import { getCategories as getCategoriesSelector } from "./selectors";

//import screens
import Banner from "./Banner";

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1
  },
  banner: {
    height: 250,
    elevation: 7,
    alignItems: "stretch"
  },
  content: {
    flex: 2,
    backgroundColor: "white"
  }
});

const Home = ({ screenProps, categories }) => {
  let { homeContainer, banner, content } = styles;
  
  return (
    <ScrollView contentContainerStyle={homeContainer}>
      <View style={banner}>
        <Banner theme={screenProps.theme} categories={categories} />
      </View>
      <View style={content}>{/* <Banner theme={screenProps.theme} /> */}</View>
    </ScrollView>
  );
};

const mapStateToProps = state => {
  return {
    categories: getCategoriesSelector(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCategories: bindActionCreators(getCategories, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
