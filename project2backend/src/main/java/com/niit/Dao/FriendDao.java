package com.niit.Dao;

import java.util.List;

import com.niit.model.Friend;
import com.niit.model.User;

public interface FriendDao {
List<User> getAllSuggestedUsers(String email);

void friendRequest(Friend friend);
List<Friend> pendingRequests(String email);//email is email id of logged in user
public void acceptFriendRequest(Friend friend);
public void deleteFriendRequest(Friend friend);
public List<User> listOfFriends(String email);

}
