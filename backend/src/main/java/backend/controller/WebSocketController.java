package backend.controller;

import backend.service.UserService;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WebSocketController {

  @Autowired
  private UserService userService;

  @MessageMapping("/{roomId}")
  @SendTo("/topic/{roomId}")
  public Map<String, String> handleMessage(@Payload Map<String, String> message) {
    HashMap<String, String> response = new HashMap<>();
    response.put("time", Long.toString(System.currentTimeMillis()));
    switch (message.get("type")) {
      case "chat": {
        response.put("id", message.get("id"));
        response.put("name", message.get("name"));
        response.put("content", message.get("content"));
        return response;
      }
      case "join": {
        response.put("id", "0");
        response.put("name", "admin");
        response.put("content", "{ \"id\": \"" + message.get("id") + "\", \"name\": \"" + message.get("name") + "\", \"type\": \"" + message.get("type") + "\" }");
        return response;
      }
      case "leave": {
        response.put("id", "0");
        response.put("name", "admin");
        response.put("content", "{ \"id\": \"" + message.get("id") + "\", \"name\": \"" + message.get("name") + "\", \"type\": \"" + message.get("type") + "\" }");
        return response;
      }
      default:
        break;
    }
    return message;
  }
}
