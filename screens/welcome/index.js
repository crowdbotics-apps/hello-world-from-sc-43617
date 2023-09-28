import React, { useState } from "react";
import { View, TextInput, Button, SafeAreaView, FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";

const PostScreen = () => {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  const handleAddPost = () => {
    setPosts([...posts, input]);
    setInput("");
  };

  const handleDeletePost = index => {
    setPosts(posts.filter((_, i) => i !== index));
  };

  return <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} onChangeText={setInput} placeholder="type new post..." />
      <Button title="Add Post" onPress={handleAddPost} />
      <FlatList data={posts} keyExtractor={(item, index) => index.toString()} renderItem={({
      item,
      index
    }) => <View style={styles.postItem}>
            <Text>{item}</Text>
            <TouchableOpacity onPress={() => handleDeletePost(index)}>
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
          </View>} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10
  },
  postItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10
  },
  deleteText: {
    color: "red"
  }
});
export default PostScreen;