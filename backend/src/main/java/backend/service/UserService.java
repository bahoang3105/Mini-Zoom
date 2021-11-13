package backend.service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import backend.model.User;
import backend.repositoty.UserRepository;

@Service
public class UserService {

  private final UserRepository userRepository;
  
  @Autowired
  public UserService(UserRepository userRepository) {
    this.userRepository = userRepository;
  }
  
  public List<User> getUsers() {
    return userRepository.findAll();
  }

  public void addNewUser(User user) {
    Optional<User> userByUsername = userRepository.findUserByUsername(user.getUsername());
    if(userByUsername.isPresent()) {
      throw new IllegalAccessError("username taken");
    }
    UUID id = UUID.randomUUID();
    user.setId(id.toString());
    userRepository.save(user);
  }

  public Optional<User> findUserLogin(String username, String password) {
    return userRepository.findUser(username, password);
  }
}
