package backend.repositoty;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import backend.model.Room;

@Repository
public interface RoomRepository extends JpaRepository<Room, Long> {
  
  @Query("SELECT r FROM Room r WHERE r.hostId = ?1")
  Optional<Room> findAllRoomsOfThisUser(String userId);
}
