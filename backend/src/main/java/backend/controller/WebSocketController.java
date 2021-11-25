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

  @MessageMapping("/all")
  @SendTo("/topic/all")
  public Map<String, String> post(@Payload String message) {
    System.out.println("asss");
    Map<String, String> response = new HashMap<>();
    response.put("hiha", "hahi");
    return response;
  }
}
