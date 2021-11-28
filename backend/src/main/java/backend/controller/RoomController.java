package backend.controller;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import backend.model.Room;
import backend.model.User;
import backend.service.RoomService;
import backend.service.UserService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/room")
public class RoomController {
  
  private final RoomService roomService;
  private final UserService userService;

  @Autowired
  public RoomController(RoomService roomService, UserService userService) {
    this.roomService = roomService;
    this.userService = userService;
  }

  @GetMapping("/all")
  public Optional<Room> getAllRoomsOfThisUser(@RequestParam User user) {
    return roomService.getAllRoomsOfThisUser(user.getUserId());
  }

  @PostMapping("/create")
  public Map<String, String> createRoom(@RequestBody User user) {
    Boolean checkUser = userService.checkUser(user.getUserId());
    if(!checkUser) {
      throw new IllegalAccessError("This user does not exist");
    }
    String roomId = roomService.addNewRoom(user.getUserId());
    HashMap<String, String> res = new HashMap<>();
    res.put("success", "true");
    res.put("roomId", roomId);
    System.out.println(roomId);
    return res;
  }

  @PostMapping("/participant")
  public String getParticipants(@RequestBody Room room) {
    String participants = roomService.getParticipants(room.getId());
    return participants;
  }
}
