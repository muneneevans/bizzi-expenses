import React, { Component } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

//import redux actions
import * as processTypes from "../../Store/Shared/processTypes";
import { getCategories } from "../../Store/Categories/actions";
import {
  getCategories as getCategoriesSelector,
  getCategoriesProcess
} from "../../Store/Categories/selectors";

//import screens
import Banner from "./Banner";
import CategoryList from "./CategoryList";
import Header from "./Header";
import { colorOptions } from "../App";

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1
  },
  banner: {
    height: 270,
    elevation: 7,
    alignItems: "stretch"
  },
  content: {
    flex: 2,
    backgroundColor: "white"
  }
});

class Home extends Component {
  componentDidMount() {
    this.props.getCategories();
  }
  render() {
    let { homeContainer, banner, content } = styles;
    let { screenProps, categories, getCatgoriesProcess } = this.props;

    return (
      <ScrollView contentContainerStyle={homeContainer}>
        <View style={banner}>
          {getCatgoriesProcess.status === processTypes.SUCCESS && (
            // <Banner theme={screenProps.theme} categories={categories} />
            <Header
              theme={screenProps.theme}
              colorOptions={screenProps.colorOptions}
            />
          )}
        </View>
        <View style={content}>
          <Banner theme={screenProps.theme} categories={categories} />
          {/* <CategoryList categories={categories} /> */}
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: getCategoriesSelector(state),
    getCatgoriesProcess: getCategoriesProcess(state)
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
