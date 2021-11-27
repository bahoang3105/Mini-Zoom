package backend.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import backend.model.User;
import backend.service.UserService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/user")
public class UserController {
  
  private final UserService userService;

  @Autowired
  public UserController(UserService userService) {
    this.userService = userService;
  }

  @GetMapping("/all")
  public List<User> getUsers() {
    return userService.getUsers();
  }

  @PostMapping("/register")
  public Map<String, String> registerNewUser(@RequestBody User user) {
    userService.addNewUser(user);
    HashMap<String, String> res = new HashMap<>();
    res.put("success", "true");
    return res;
  }

  @GetMapping("/login")
  public Map<String, String> login(@RequestParam String username, @RequestParam String password) {
    Optional<User> checkUser = userService.findUserLogin(username, password);
    HashMap<String, String> res = new HashMap<>();
    if(checkUser.isPresent()) {
      res.put("userId", checkUser.get().getUserId());
      res.put("name", checkUser.get().getName());
      return res;
    }
    throw new ResponseStatusException(
      HttpStatus.NOT_FOUND, "Your username or password is incorrect"
    );
  }
}
