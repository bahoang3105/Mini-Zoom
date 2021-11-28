package backend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table
public class Room {
  @Id @GeneratedValue(generator = "room_uuid")
  @GenericGenerator(
    name = "room_uuid",
    strategy = "uuid"
  )
  private String id;
  private String hostId;
  private String participants;

  public Room() {
  }

  public Room(String id, String hostId) {
    this.id = id;
    this.hostId = hostId;
  }

  public void setId(String id) {
    this.id = id;
  }

  public void setHostId(String hostId) {
    this.hostId = hostId;
  }

  public void setParticipants(String participant) {
    if(participants == "") participants = participant;
    else this.participants = participants + "," + participant;
  }

  public String getId() {
    return this.id;
  }

  public String getHostId() {
    return this.hostId;
  }

  public String getParticipants() {
    return this.getParticipants();
  }

  @Override
  public String toString() {
    return "Room{" +
           "id=" + id +
           ", hostId=" + hostId +
           "}";
  }
}
