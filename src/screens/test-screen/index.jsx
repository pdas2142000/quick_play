
import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, StyleSheet, ActivityIndicator, StatusBar } from "react-native";

const NotificationScreen = () => {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [isFetchingMore, setIsFetchingMore] = useState(false);

    const getUsers = async () => {
        if (!isLoading) {
            setIsLoading(true);
            try {
                const response = await fetch(`https://randomuser.me/api/?page=${currentPage}&results=5`);
                const data = await response.json();
                setUsers((prevUsers) => [...data.results, ...prevUsers]);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        }
    };

    // const handleScroll = ({ nativeEvent }) => {
    //     const paddingToBottom = 20;
    //     const isCloseToBottom =
    //         nativeEvent.layoutMeasurement.height + nativeEvent.contentOffset.y >=
    //         nativeEvent.contentSize.height - paddingToBottom;

    //     if (isCloseToBottom && !isFetchingMore) {
    //         loadMoreItem();
    //     }
    // };

    const handleScroll = ({ nativeEvent }) => {
        const isCloseToTop = nativeEvent.contentOffset.y <= 50;

        if (isCloseToTop && !isFetchingMore) {
            loadMoreItem();
        }
    };

    const loadMoreItem = () => {
        setIsFetchingMore(true);
        setCurrentPage(prevPage => prevPage + 1);
        setIsFetchingMore(false);
    };

    useEffect(() => {
        getUsers();
    }, [currentPage]);


    return (
        <>
            <StatusBar backgroundColor="#000" />
            <ScrollView
                contentContainerStyle={styles.scrollViewContent}
                onScroll={handleScroll}
                scrollEventThrottle={16}
            >
                {
                    isLoading && (
                        <View>
                            <ActivityIndicator size="small" color="black" />
                        </View>
                    )
                }
                {
                    users.map((item, index) => {
                        return (
                            <View key={index} style={styles.itemWrapperStyle}>
                                <Image style={styles.itemImageStyle} source={{ uri: item.picture.large }} />
                                <View style={styles.contentWrapperStyle}>
                                    <Text style={styles.txtNameStyle}>{`${item.name.title} ${item.name.first} ${item.name.last}`}</Text>
                                    <Text style={styles.txtEmailStyle}>{item.email}</Text>
                                </View>
                            </View>
                        )
                    })
                }

            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    scrollViewContent: {
        paddingVertical: 16,
    },
    itemWrapperStyle: {
        flexDirection: "row",
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderColor: "#ddd",
    },
    itemImageStyle: {
        width: 50,
        height: 50,
        marginRight: 16,
    },
    contentWrapperStyle: {
        justifyContent: "space-around",
    },
    txtNameStyle: {
        fontSize: 16,
    },
    txtEmailStyle: {
        color: "#777",
    },
    loaderStyle: {
        marginVertical: 16,
        alignItems: "center",
    },
});

export default NotificationScreen;

