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
    System.out.println(id.toString());
    Room room = new Room(id.toString(), userId);
    System.out.println(room);
    roomRepository.save(room);
    return id.toString();
  }

  public String getParticipants(String roomId) {
    Optional<Room> part = roomRepository.getParticipants(roomId);
    return part.get().getParticipants();
  }

  public void updateParticipants(String participant, String roomId) {
    System.out.println(roomId);
    Optional<Room> part = roomRepository.getParticipants(roomId);
    System.out.println(part.get().getParticipants() + "111");
    String newPart;
    if(part.get().getParticipants().length() == 0) {
      newPart = participant;
    } else {
      newPart = part.get().getParticipants() + "," + participant;
    }
    roomRepository.updateParticipants(newPart, roomId);
  }
}
