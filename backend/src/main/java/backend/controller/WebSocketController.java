package backend.controller;

import backend.service.UserService;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.annotation.SubscribeMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WebSocketController {

  @Autowired
  private UserService userService;

  @MessageMapping("/{roomId}")
  @SendTo("/topic/{roomId}")
  public Map<String, String> post(@Payload Map<String, String> message) {
    message.put("time", Long.toString(System.currentTimeMillis()));
    return message;
  }

  @SubscribeMapping("/{roomId")
  @SendTo("/topic/{roomId}")
  public String p() {
    System.out.println("pipi");
    return "pu";
  }
}
