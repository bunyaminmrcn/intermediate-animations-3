import * as React from "react";
import { StyleSheet, Image, FlatList, Text } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
//import { NavigationStackProp } from "react-navigation-stack";

import { TouchableScale } from "../components";
import { items, Item } from "../data";

type Props = {
  navigation: any;
  routeName: string;
};

export class ListScreen extends React.Component<Props> {
  static defaultProps = {
    routeName: "Detail",
  };

  render() {
    return (
      <FlatList
        style={styles.container}
        data={items}
        renderItem={this.renderItem}
        keyExtractor={(item) => item.id}
      />
    );
  }

  private renderItem = (event: any) => {
    const { navigation, routeName } = this.props;
    const item: Item = event.item;
    // Wrap the component that you want to transition in <SharedElement>
    return (
      <TouchableScale
        style={styles.item}
        onPress={() => {
          navigation.navigate(routeName, {
            item,
          });
        }}
      >
        <SharedElement id={`${item.id}.image`}>
          <Image style={styles.image} source={item.image} />
        </SharedElement>
        <SharedElement id={`${item.id}.title`}>
          <Text style={styles.title}>{item.title}</Text>
        </SharedElement>
      </TouchableScale>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    height: 200,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  title: {
    position: "absolute",
    right: 10,
    bottom: 10,
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "black",
    textShadowColor: "white",
    textShadowRadius: 6,
  },
});
