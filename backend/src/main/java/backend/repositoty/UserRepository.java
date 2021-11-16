package backend.repositoty;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import backend.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
  
  @Query("SELECT u FROM User u WHERE u.username = ?1")
  Optional<User> findUserByUsername(String username);

  @Query("SELECT u FROM User u WHERE u.username = ?1 AND u.password = ?2")
  Optional<User> findUser(String username, String password);

  @Query("SELECT u FROM User u WHERE u.id = ?1")
  Optional<User> checkUser(String userId);
}
