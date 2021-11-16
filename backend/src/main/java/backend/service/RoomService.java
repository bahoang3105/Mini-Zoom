package backend.service;

import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import backend.model.Room;
import backend.repositoty.RoomRepository;

@Service
public class RoomService {
  
  private final RoomRepository roomRepository;

  @Autowired
  public RoomService(RoomRepository roomRepository) {
    this.roomRepository = roomRepository;
  }

  public Optional<Room> getAllRoomsOfThisUser(String userId) {
    return roomRepository.findAllRoomsOfThisUser(userId);
  }

  public String addNewRoom(String userId) {
    UUID id = UUID.randomUUID();
    Room room = new Room(id.toString(), userId);
    roomRepository.save(room);
    return id.toString();
  }
}
