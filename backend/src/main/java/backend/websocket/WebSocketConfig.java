package backend.websocket;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;

@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

	@Override
	public void registerStompEndpoints(StompEndpointRegistry registry) {
			registry.addEndpoint("/handler").setAllowedOrigins("http://localhost:3000").withSockJS();
	}

	@Override
	public void configureMessageBroker(MessageBrokerRegistry brokerRegistry) {
			brokerRegistry.setApplicationDestinationPrefixes("/app");
			brokerRegistry.enableSimpleBroker("/topic");
	}
}