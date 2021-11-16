package backend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table
public class User {
  @Id @GeneratedValue(generator = "user_uuid")
  @GenericGenerator(
    name = "user_uuid",
    strategy = "uuid"
  )
  private String userId;
  private String name;
  private String username;
  private String password;

  public User() {
  }

  public User(String userId, String name, String username, String password) {
    this.userId = userId;
    this.name = name;
    this.username = username;
    this.password = password;
  }

  public User(String name, String username, String password) {
    this.name = name;
    this.username = username;
    this.password = password;
  }

  public User(String userId) {
    this.userId = userId;
  }

  public void setId(String userId) {
    this.userId = userId;
  }

  public void setName(String name) {
    this.name = name;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getUserId() {
    return this.userId;
  }

  public String getName() {
    return this.name;
  }

  public String getUsername() {
    return this.username;
  }

  public String getPassword() {
    return this.password;
  }

  @Override
  public String toString() {
    return "User{" + 
           "userId=" + userId +
           ", name=" + name + 
           ", username=" + username +
           "}";
  }
}