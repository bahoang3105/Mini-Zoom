package backend.repositoty;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import backend.model.Room;

@Repository
public interface RoomRepository extends JpaRepository<Room, Long> {
  
  @Query("SELECT r FROM Room r WHERE r.hostId = ?1")
  Optional<Room> findAllRoomsOfThisUser(String userId);

  @Query("SELECT r from Room r WHERE r.id = ?1")
  Optional<Room> getParticipants(String roomId);

  @Transactional
	@Modifying
  @Query(value = "UPDATE Room r SET participants = :participants WHERE r.id = :roomId")
  void updateParticipants(String participants, String roomId);
}
