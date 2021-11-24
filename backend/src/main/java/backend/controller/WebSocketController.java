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
  @SendTo("/app/room/{roomId}")
  public Map<String, String> handlerMessage(@Payload Map<String, String> message) {
    Map<String, String> response = new HashMap<>();
    
    return response;
  }
}
